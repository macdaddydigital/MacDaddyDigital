import { NextRequest, NextResponse } from 'next/server';

export const maxDuration = 60;

export async function GET(request: NextRequest) {
  const url = request.nextUrl.searchParams.get('url');

  if (!url) {
    return NextResponse.json({ error: 'URL is required' }, { status: 400 });
  }

  const apiKey = process.env.GOOGLE_PAGESPEED_API_KEY;
  const params = new URLSearchParams({
    url,
    strategy: 'mobile',
    category: 'performance',
  });
  params.append('category', 'accessibility');
  params.append('category', 'best-practices');
  params.append('category', 'seo');

  if (apiKey) {
    params.set('key', apiKey);
  }

  const psiUrl = `https://www.googleapis.com/pagespeedonline/v5/runPagespeed?${params.toString()}`;

  try {
    const psiResponse = await fetch(psiUrl, {
      cache: 'no-store',
    });

    if (!psiResponse.ok) {
      const errorBody = await psiResponse.json().catch(() => null);
      const googleMessage = errorBody?.error?.message as string | undefined;

      if (psiResponse.status === 429) {
        return NextResponse.json(
          {
            error: apiKey
              ? 'PageSpeed API quota exceeded. Try again later or check your Google Cloud billing/quota.'
              : 'PageSpeed API quota exceeded. Add a GOOGLE_PAGESPEED_API_KEY in Vercel to use your own quota.',
            code: 'quota_exceeded',
          },
          { status: 429 },
        );
      }

      return NextResponse.json(
        {
          error: googleMessage || 'Lighthouse analysis failed',
          code: 'psi_error',
        },
        { status: psiResponse.status },
      );
    }

    const psiData = await psiResponse.json();
    const categories = psiData.lighthouseResult?.categories || {};

    const performance = Math.round((categories.performance?.score || 0) * 100);
    const accessibility = Math.round((categories.accessibility?.score || 0) * 100);
    const bestPractices = Math.round((categories['best-practices']?.score || 0) * 100);
    const seo = Math.round((categories.seo?.score || 0) * 100);

    const overall = Math.round((performance + accessibility + bestPractices + seo) / 4);

    return NextResponse.json({
      url,
      scores: {
        performance,
        accessibility,
        bestPractices,
        seo,
      },
      overall,
    });
  } catch (e) {
    console.error('Lighthouse fetch failed', e);
    return NextResponse.json(
      { error: 'Could not reach Lighthouse. Please try again.', code: 'network_error' },
      { status: 503 },
    );
  }
}