"use client";

import React, { useState, useEffect, Suspense } from 'react';
import { useSearchParams } from 'next/navigation';

type Vibe = "macdaddy" | "neon" | "marble";

interface LighthouseCategory {
  name: string;
  score: number; // 0-100
}

interface BasicResult {
  url: string;
  overallScore: number; // 0-100
  categories: LighthouseCategory[];
  summary: string;
}

interface LeadData {
  url: string;
  name: string;
  email: string;
  company?: string;
  phone?: string;
  vibe: Vibe;
  basicResult: BasicResult;
}

function ScoreTool() {
  const searchParams = useSearchParams();
  const [currentVibe, setCurrentVibe] = useState<Vibe>("macdaddy");

  const [url, setUrl] = useState('');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [company, setCompany] = useState('');
  const [phone, setPhone] = useState('');

  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [result, setResult] = useState<BasicResult | null>(null);
  const [error, setError] = useState('');

  useEffect(() => {
    const vibeParam = (searchParams.get("vibe") as Vibe) || "macdaddy";
    const validVibe = ["macdaddy", "neon", "marble"].includes(vibeParam) ? vibeParam : "macdaddy";
    setCurrentVibe(validVibe);
    document.documentElement.setAttribute("data-vibe", validVibe);
  }, [searchParams]);

  const analyzeAndSubmit = async () => {
    if (!url || !name || !email) {
      setError('Please enter your website URL, name, and email');
      return;
    }

    let processedUrl = url.trim();
    if (!processedUrl.startsWith('http')) {
      processedUrl = `https://${processedUrl}`;
    }

    setIsAnalyzing(true);
    setError('');
    setResult(null);

    try {
      // AI-free: only Google Lighthouse
      const response = await fetch(`/api/analyze-site?url=${encodeURIComponent(processedUrl)}`);

      if (!response.ok) {
        throw new Error('Lighthouse analysis failed');
      }

      const data = await response.json();

      if (data.error || !data.scores) {
        throw new Error(data.error || 'Bad Lighthouse response');
      }

      const { scores, overall } = data;

      const categories: LighthouseCategory[] = [
        { name: 'Performance', score: scores.performance },
        { name: 'Accessibility', score: scores.accessibility },
        { name: 'Best Practices', score: scores.bestPractices },
        { name: 'SEO', score: scores.seo },
      ];

      const basic: BasicResult = {
        url: processedUrl,
        overallScore: overall,
        categories,
        summary: 'This is your free technical score from Google Lighthouse (completely AI-free). These are objective performance and quality metrics. The full AI-powered strategic analysis is only performed after a consultation call is booked.',
      };

      setResult(basic);

      const lead: LeadData = {
        url: processedUrl,
        name,
        email,
        company: company || undefined,
        phone: phone || undefined,
        vibe: currentVibe,
        basicResult: basic,
      };

      fetch('/api/submit-score', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(lead),
      }).catch(() => {});

    } catch (err) {
      console.error(err);
      setError('Could not analyze the site. Please check the URL and try again.');
    } finally {
      setIsAnalyzing(false);
    }
  };

  const reset = () => {
    setResult(null);
    setUrl('');
    setName('');
    setEmail('');
    setCompany('');
    setPhone('');
    setError('');
  };

  return (
    <div className="min-h-screen bg-[var(--bg)] text-[var(--text-primary)]">
      <div className="max-w-5xl mx-auto px-6 py-16">
        <div className="text-center mb-12">
          <div className="inline-block px-4 py-1 rounded-full bg-white/5 text-sm tracking-widest mb-4">
            FREE INSTANT ANALYSIS
          </div>
          <h1 className="text-5xl md:text-6xl font-semibold tracking-tight mb-4">
            Get Your Website Score
          </h1>
          <p className="text-xl text-[var(--text-secondary)] max-w-2xl mx-auto">
            Pure Google Lighthouse technical score (AI-free). Full AI analysis after you book a call.
          </p>
        </div>

        {!result ? (
          <div className="max-w-2xl mx-auto">
            <div className="vibe-card rounded-3xl">
              <div className="space-y-5">
                <div>
                  <label className="block text-sm tracking-widest text-[var(--text-muted)] mb-2">YOUR WEBSITE URL *</label>
                  <input type="text" value={url} onChange={(e) => setUrl(e.target.value)} placeholder="https://yourwebsite.com" className="form-input" />
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-sm tracking-widest text-[var(--text-muted)] mb-2">YOUR NAME *</label>
                    <input type="text" value={name} onChange={(e) => setName(e.target.value)} placeholder="Alex Rivera" className="form-input" />
                  </div>
                  <div>
                    <label className="block text-sm tracking-widest text-[var(--text-muted)] mb-2">EMAIL ADDRESS *</label>
                    <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="you@company.com" className="form-input" />
                  </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-sm tracking-widest text-[var(--text-muted)] mb-2">COMPANY</label>
                    <input type="text" value={company} onChange={(e) => setCompany(e.target.value)} placeholder="Optional" className="form-input" />
                  </div>
                  <div>
                    <label className="block text-sm tracking-widest text-[var(--text-muted)] mb-2">PHONE</label>
                    <input type="tel" value={phone} onChange={(e) => setPhone(e.target.value)} placeholder="Optional" className="form-input" />
                  </div>
                </div>
              </div>

              <button onClick={analyzeAndSubmit} disabled={isAnalyzing || !url || !name || !email} className="vibe-btn-primary w-full mt-6 py-4 text-sm tracking-[2.5px] uppercase disabled:opacity-60">
                {isAnalyzing ? "ANALYZING WITH LIGHTHOUSE..." : "GET MY FREE LIGHTHOUSE SCORE"}
              </button>

              {error && <p className="text-red-400 text-sm mt-4 text-center">{error}</p>}

              <p className="text-center text-[var(--text-muted)] text-xs mt-5">
                Uses real Google Lighthouse data. No AI. The detailed AI report is sent to us after you book a call.
              </p>
            </div>
          </div>
        ) : (
          <div className="max-w-4xl mx-auto">
            <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-8 gap-4">
              <div>
                <div className="text-sm tracking-[3px] text-[var(--accent)] mb-1">FREE LIGHTHOUSE SCORE (AI-FREE)</div>
                <div className="text-3xl font-semibold tracking-tight">{result.url}</div>
              </div>
              <div className="text-right">
                <div className="text-sm text-[var(--text-muted)]">OVERALL AVERAGE</div>
                <div className="text-6xl font-semibold tabular-nums text-[var(--accent)]">
                  {result.overallScore}<span className="text-3xl">/100</span>
                </div>
              </div>
            </div>

            <div className="vibe-card mb-8">
              <p className="text-lg leading-relaxed">{result.summary}</p>
            </div>

            <div className="mb-8">
              <div className="text-sm tracking-widest text-[var(--text-muted)] mb-4 px-1">LIGHTHOUSE SCORES</div>
              <div className="space-y-4">
                {result.categories.map((cat, i) => (
                  <div key={i} className="vibe-card">
                    <div className="flex justify-between items-baseline mb-2">
                      <div className="font-medium text-xl">{cat.name}</div>
                      <div className="font-semibold text-2xl text-[var(--accent)] tabular-nums">{cat.score}/100</div>
                    </div>
                    <div className="h-1 bg-white/10 rounded mb-4">
                      <div className="h-1 bg-[var(--accent)] rounded" style={{ width: `${cat.score}%` }} />
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="vibe-card bg-[var(--bg-elevated)] border-[var(--accent)] text-center p-10">
              <h3 className="text-3xl font-semibold mb-3">This is the free Lighthouse score.</h3>
              <p className="text-[var(--text-secondary)] max-w-lg mx-auto mb-6">
                The full AI-powered strategic analysis (design, messaging, conversion, custom recommendations) is only performed after a consultation call is booked.
              </p>

              <a href="/#contact" className="vibe-btn-primary inline-flex px-10 py-3.5 text-sm tracking-[2px] uppercase">
                BOOK A CONSULTATION CALL
              </a>

              <p className="text-xs text-[var(--text-muted)] mt-5">
                The complete Lighthouse report + your details have been sent to us.
              </p>
            </div>

            <div className="text-center mt-8">
              <button onClick={reset} className="text-sm underline text-[var(--text-muted)] hover:text-[var(--text-primary)]">
                Analyze another site
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default function ScorePage() {
  return (
    <Suspense fallback={<div className="min-h-screen bg-[var(--bg)]" />}>
      <ScoreTool />
    </Suspense>
  );
}
