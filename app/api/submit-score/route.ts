import { NextRequest, NextResponse } from 'next/server';

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();

    const { url, name, email, company, phone, vibe, basicResult } = body;

    const fullReportForOwner = {
      lead: {
        name,
        email,
        company: company || 'N/A',
        phone: phone || 'N/A',
        url,
        vibe,
        submittedAt: new Date().toISOString(),
      },
      lighthouseScores: basicResult.categories.reduce((acc: Record<string, number>, cat: { name: string; score: number }) => {
        acc[cat.name.toLowerCase().replace(' ', '')] = cat.score;
        return acc;
      }, {}),
      overallScore: basicResult.overallScore,
      lighthouseSummary: basicResult.summary,
      note: 'This is the free Lighthouse tier only. Full AI analysis will be prepared after the consultation call is booked.',
    };

    console.log('\n=== NEW FREE LIGHTHOUSE LEAD ===');
    console.log('Send this full report to the owner (studio@macdaddydigital.ca):');
    console.log(JSON.stringify(fullReportForOwner, null, 2));
    console.log('================================\n');

    return NextResponse.json({ success: true });
  } catch (err) {
    console.error('submit-score error', err);
    return NextResponse.json({ success: false }, { status: 500 });
  }
}