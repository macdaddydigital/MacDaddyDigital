import { NextRequest, NextResponse } from 'next/server';

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();

    const { url, name, email, company, phone, vibe, basicResult } = body;

    // For the free tier, the "detailed report" for the owner is the full Lighthouse data + lead info.
    // AI analysis is only run after the consultation call is booked (as per requirements).
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
      lighthouseScores: basicResult.categories.reduce((acc: any, cat: any) => {
        acc[cat.name.toLowerCase().replace(' ', '')] = cat.score;
        return acc;
      }, {}),
      overallScore: basicResult.overallScore,
      lighthouseSummary: basicResult.summary,
      note: "This is the free Lighthouse tier only. Full AI analysis (design, UX strategy, conversion, custom recommendations) will be prepared after the consultation call is booked.",
    };

    // Log for now (in production, send via Resend / email service to studio@macdaddydigital.ca)
    console.log("\n=== NEW FREE LIGHTHOUSE LEAD ===");
    console.log("Send this full report to the owner (studio@macdaddydigital.ca):");
    console.log(JSON.stringify(fullReportForOwner, null, 2));
    console.log("================================\n");

    // Example for when you add Resend:
    // const resend = new Resend(process.env.RESEND_API_KEY);
    // await resend.emails.send({
    //   from: 'score@macdaddydigital.ca',
    //   to: 'studio@macdaddydigital.ca',
    //   subject: `New Lighthouse Score Lead: ${url}`,
    //   text: JSON.stringify(fullReportForOwner, null, 2),
    // });

    return NextResponse.json({ success: true });
  } catch (err) {
    console.error("submit-score error", err);
    return NextResponse.json({ success: false }, { status: 500 });
  }
}
