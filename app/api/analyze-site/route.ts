import { NextRequest, NextResponse } from 'next/server';

export async function GET(request: NextRequest) {
  const url = request.nextUrl.searchParams.get('url');

  if (!url) {
    return NextResponse.json({ error: 'URL is required' }, { status: 400 });
  }

  try {
    const psiUrl = `https://www.googleapis.com/pagespeedonline/v5/runPagespeed?url=${encodeURIComponent(url)}&strategy=mobile`;

    const psiResponse = await fetch(psiUrl, {
      next: { revalidate: 3600 },
    });

    if (psiResponse.ok) {
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
    }
  } catch (e) {
    console.error('Lighthouse fetch failed', e);
  }

  return NextResponse.json({ error: 'Analysis unavailable' }, { status: 503 });
}