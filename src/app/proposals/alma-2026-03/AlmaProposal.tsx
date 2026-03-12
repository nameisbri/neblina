'use client'

import { useState, useEffect } from 'react'

const C = {
  darkBrown: '#33140c',
  cream: '#FFFDF5',
  green: '#3C5627',
  lime: '#AADF49',
  warmGray: '#8A7E72',
  lightCream: '#F5F0E8',
  softGreen: '#EFF5E8',
  medBrown: '#5C3D2E',
  white: '#FFFFFF',
}

const sections = [
  'The Idea',
  'Why These Segments',
  'Ad Strategy',
  'How It Works',
  'Deliverables',
  'Metrics',
  'Roadmap',
  'Questions',
]

function Tag({ children, color = C.green }: { children: React.ReactNode; color?: string }) {
  return (
    <span
      className="body-font"
      style={{
        display: 'inline-block',
        padding: '3px 10px',
        borderRadius: 4,
        background: color + '15',
        color,
        fontSize: 11,
        fontWeight: 600,
        letterSpacing: 0.3,
        marginRight: 6,
        marginBottom: 4,
      }}
    >
      {children}
    </span>
  )
}

function Stat({ num, label, sub }: { num: string; label: string; sub?: string }) {
  return (
    <div className="stat-card">
      <div
        style={{
          color: C.green,
          fontSize: 28,
          fontWeight: 700,
          fontFamily: 'Georgia, serif',
          lineHeight: 1,
        }}
      >
        {num}
      </div>
      <div
        className="body-font"
        style={{ color: C.darkBrown, fontSize: 12, fontWeight: 600, marginTop: 6 }}
      >
        {label}
      </div>
      {sub && (
        <div className="body-font" style={{ color: C.warmGray, fontSize: 11, marginTop: 2 }}>
          {sub}
        </div>
      )}
    </div>
  )
}

export default function AlmaProposal() {
  const [active, setActive] = useState(0)

  useEffect(() => {
    document.body.classList.remove('custom-cursor-active')
    return () => {
      document.body.classList.add('custom-cursor-active')
    }
  }, [])

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const idx = parseInt(entry.target.id.replace('s-', ''))
            if (!isNaN(idx)) setActive(idx)
          }
        })
      },
      { rootMargin: '-40% 0px -55% 0px' }
    )
    sections.forEach((_, i) => {
      const el = document.getElementById(`s-${i}`)
      if (el) observer.observe(el)
    })
    return () => observer.disconnect()
  }, [])

  return (
    <div
      style={{
        minHeight: '100vh',
        background: C.cream,
        fontFamily: "'Georgia', 'Times New Roman', serif",
        cursor: 'default',
        zoom: 1.1,
      }}
    >
      <style dangerouslySetInnerHTML={{ __html: `
        @import url('https://fonts.googleapis.com/css2?family=DM+Sans:ital,wght@0,400;0,500;0,600;0,700;1,400&display=swap');
        * { box-sizing: border-box; margin: 0; padding: 0; cursor: default !important; }
        button, a, [role="button"] { cursor: pointer !important; }
        .body-font { font-family: 'DM Sans', sans-serif; }
        .nav-pill {
          padding: 6px 12px; border-radius: 20px; font-size: 11px; font-weight: 500;
          cursor: pointer; transition: all 0.2s; border: none; white-space: nowrap;
          font-family: 'DM Sans', sans-serif;
        }
        .nav-pill:hover { transform: translateY(-1px); }
        .card {
          background: white; border-radius: 12px; padding: 28px;
          box-shadow: 0 1px 3px rgba(51,20,12,0.06), 0 4px 12px rgba(51,20,12,0.04);
        }
        .accent-card {
          background: ${C.softGreen}; border-radius: 12px; padding: 24px;
          border-left: 4px solid ${C.green};
        }
        .dark-card {
          background: ${C.darkBrown}; border-radius: 12px; padding: 24px;
        }
        .stat-card {
          background: white; border-radius: 10px; padding: 18px; text-align: center;
          box-shadow: 0 1px 3px rgba(51,20,12,0.06);
        }
        .segment-card {
          background: white; border-radius: 12px; overflow: hidden;
          box-shadow: 0 1px 3px rgba(51,20,12,0.06), 0 4px 12px rgba(51,20,12,0.04);
        }
        .flow-step { display: flex; flex-direction: column; align-items: center; text-align: center; flex: 1; }
        .flow-icon {
          width: 52px; height: 52px; border-radius: 50%; display: flex; align-items: center;
          justify-content: center; font-size: 20px; margin-bottom: 8px;
        }
        .metric-row {
          display: grid; grid-template-columns: 1.5fr 0.7fr 1fr 2fr; gap: 8px;
          padding: 12px 16px; font-family: 'DM Sans', sans-serif; align-items: center;
        }
        .timeline-row {
          display: grid; grid-template-columns: 120px 1fr; gap: 16px; padding: 12px 0;
          border-bottom: 1px solid ${C.lightCream}; font-family: 'DM Sans', sans-serif;
        }
        .timeline-row:last-child { border-bottom: none; }
        .q-item {
          display: flex; gap: 12px; align-items: flex-start; padding: 10px 0;
          border-bottom: 1px solid ${C.lightCream}; font-family: 'DM Sans', sans-serif;
        }
        .q-item:last-child { border-bottom: none; }
        .q-dot { width: 8px; height: 8px; border-radius: 50%; background: ${C.lime}; flex-shrink: 0; margin-top: 6px; }
        .section { max-width: 760px; margin: 0 auto; padding: 0 24px; }
        .insight-row { display: flex; gap: 8px; align-items: flex-start; padding: 8px 0; }
        .insight-dot { width: 6px; height: 6px; border-radius: 50%; background: ${C.lime}; flex-shrink: 0; margin-top: 7px; }
        .arrow-sep { color: ${C.lime}; font-size: 18px; display: flex; align-items: center; padding: 0 4px; }

        .stats-grid { display: grid; grid-template-columns: 1fr 1fr 1fr 1fr; gap: 10px; }
        .segment-stats-grid { display: grid; grid-template-columns: 1fr 1fr 1fr; gap: 10px; }
        .segment-stats-grid-2 { display: grid; grid-template-columns: 1fr 1fr; gap: 10px; }
        .campaign-grid { display: grid; grid-template-columns: 1fr 1fr 1fr; gap: 14px; }
        .how-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 14px; }
        .flow-container { display: flex; align-items: center; }

        @media (max-width: 640px) {
          .stats-grid { grid-template-columns: 1fr 1fr; }
          .segment-stats-grid { grid-template-columns: 1fr; }
          .segment-stats-grid-2 { grid-template-columns: 1fr; }
          .campaign-grid { grid-template-columns: 1fr; }
          .how-grid { grid-template-columns: 1fr; }
          .metric-row { grid-template-columns: 1fr; gap: 4px; padding: 12px 16px; }
          .metric-row > div { text-align: left !important; }
          .metric-row > div:nth-child(2) { color: ${C.green}; font-weight: 700; }
          .flow-container { flex-direction: column; gap: 12px; }
          .flow-container > div { width: 100%; }
          .flow-step { flex-direction: row; text-align: left; gap: 12px; }
          .flow-icon { margin-bottom: 0; flex-shrink: 0; }
          .arrow-sep { display: none; }
          h1 { font-size: 28px !important; }
          h2 { font-size: 24px !important; }
        }
      ` }} />

      {/* Confidentiality bar */}
      <div
        className="body-font"
        style={{
          background: '#2a100a',
          padding: '8px 24px',
          textAlign: 'center',
          fontSize: 10,
          fontWeight: 500,
          color: C.warmGray,
          letterSpacing: 0.5,
          textTransform: 'uppercase',
        }}
      >
        Confidential — Prepared for Alma Nutrition Inc.
      </div>

      {/* Header */}
      <div style={{ background: C.darkBrown, padding: '48px 24px 40px' }}>
        <div style={{ maxWidth: 760, margin: '0 auto' }}>
          <div
            style={{
              color: C.lime,
              fontSize: 20,
              fontStyle: 'italic',
              marginBottom: 24,
              letterSpacing: 0.5,
            }}
          >
            alma
          </div>
          <h1
            style={{
              color: C.cream,
              fontSize: 36,
              fontWeight: 700,
              lineHeight: 1.15,
              marginBottom: 12,
            }}
          >
            Contractor Project Proposal
          </h1>
          <div className="body-font" style={{ color: C.lime, fontSize: 15, fontWeight: 500 }}>
            Gabriela Barreira
          </div>
          <div className="body-font" style={{ color: C.warmGray, fontSize: 13, marginTop: 4 }}>
            March 2026
          </div>
        </div>
      </div>

      {/* Nav */}
      <div
        style={{
          position: 'sticky',
          top: 0,
          zIndex: 10,
          background: C.cream,
          borderBottom: `1px solid ${C.lightCream}`,
          padding: '12px 24px',
        }}
      >
        <div
          style={{
            maxWidth: 760,
            margin: '0 auto',
            display: 'flex',
            gap: 5,
            overflowX: 'auto',
            paddingBottom: 2,
          }}
        >
          {sections.map((s, i) => (
            <button
              key={s}
              className="nav-pill"
              onClick={() =>
                document.getElementById(`s-${i}`)?.scrollIntoView({ behavior: 'smooth', block: 'start' })
              }
              style={{
                background: active === i ? C.green : 'transparent',
                color: active === i ? C.cream : C.warmGray,
              }}
            >
              {s}
            </button>
          ))}
        </div>
      </div>

      <div style={{ padding: '40px 0 80px' }}>
        {/* THE IDEA */}
        <div id="s-0" className="section" style={{ marginBottom: 56 }}>
          <h2 style={{ color: C.darkBrown, fontSize: 28, marginBottom: 20 }}>The Idea</h2>
          <div className="accent-card" style={{ marginBottom: 20 }}>
            <p style={{ color: C.green, fontSize: 17, fontWeight: 700, marginBottom: 10 }}>
              Build an AI-powered nutrition calculator as a paid traffic landing page.
            </p>
            <p
              className="body-font"
              style={{ color: C.darkBrown, fontSize: 14, lineHeight: 1.6 }}
            >
              One interactive tool with three audience entry points, each aimed at a different
              health moment. The persona targeting lives in the ad copy and a dynamic hero
              that swaps via UTM parameters. One codebase, three testable segments, no extra maintenance.
            </p>
          </div>

          <div className="dark-card" style={{ marginBottom: 20 }}>
            <p
              className="body-font"
              style={{ color: C.lime, fontSize: 13, fontWeight: 600, marginBottom: 6 }}
            >
              Why a calculator, and why now?
            </p>
            <p className="body-font" style={{ color: C.cream, fontSize: 13, lineHeight: 1.6 }}>
              All three audiences are asking the same thing: &quot;What should I actually
              be eating now?&quot; They&apos;re dealing with metabolic shifts that made their old
              habits obsolete, and generic diet content doesn&apos;t address their biology. A calculator
              that gives them concrete daily targets — protein, fiber, calories — solves the
              immediate problem and creates a natural path to Alma.
            </p>
          </div>

          <p
            className="body-font"
            style={{ color: C.warmGray, fontSize: 12, lineHeight: 1.6, marginBottom: 20 }}
          >
            Nutrition quizzes convert at 40-57% start-to-lead rates with ~65% completion.
            The calculator promises a real answer to a personal problem, delivers it via
            the Claude API, and moves users straight from search to download.
          </p>

          <div className="stats-grid">
            <Stat num="6M+" label="Americans on GLP-1s" sub="12% of all US adults" />
            <Stat num="$17.7B" label="Menopause market" sub="Growing to $24B by 2029" />
            <Stat num="42%" label="US adults with obesity" sub="Doctor-referred cohort" />
            <Stat num="95%" label="Nutrition app churn" sub="Median use: 6 months" />
          </div>
        </div>

        {/* WHY THESE SEGMENTS */}
        <div id="s-1" className="section" style={{ marginBottom: 56 }}>
          <h2 style={{ color: C.darkBrown, fontSize: 28, marginBottom: 8 }}>
            Why These Three Segments
          </h2>
          <p
            className="body-font"
            style={{ color: C.warmGray, fontSize: 13, marginBottom: 24, lineHeight: 1.5 }}
          >
            All three groups need to figure out what to eat during a biological shift — but
            they search for it differently. Big demand, bad existing content, clear targeting paths.
          </p>

          {/* GLP-1 */}
          <div className="segment-card" style={{ marginBottom: 14 }}>
            <div style={{ height: 4, background: C.green }} />
            <div style={{ padding: '22px 24px' }}>
              <div
                style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'flex-start',
                  marginBottom: 12,
                }}
              >
                <h3 style={{ color: C.green, fontSize: 17 }}>GLP-1 Users</h3>
                <Tag>Highest urgency</Tag>
              </div>
              <p
                className="body-font"
                style={{ fontSize: 13, color: C.darkBrown, lineHeight: 1.6, marginBottom: 12 }}
              >
                GLP-1s suppress appetite so aggressively that without intentional nutrition,
                rapid weight loss strips muscle alongside fat. Every calorie matters, and most
                users have no idea how to eat in this new reality.
              </p>
              <div className="segment-stats-grid" style={{ marginBottom: 14 }}>
                <div className="body-font" style={{ fontSize: 11, color: C.warmGray }}>
                  <span style={{ fontWeight: 700, color: C.darkBrown, fontSize: 16 }}>3M+</span>
                  <br />
                  monthly searches for &quot;GLP-1&quot; class terms
                </div>
                <div className="body-font" style={{ fontSize: 11, color: C.warmGray }}>
                  <span style={{ fontWeight: 700, color: C.darkBrown, fontSize: 16 }}>5-11%</span>
                  <br />
                  grocery spending drop on GLP-1s
                </div>
                <div className="body-font" style={{ fontSize: 11, color: C.warmGray }}>
                  <span style={{ fontWeight: 700, color: C.darkBrown, fontSize: 16 }}>$200B</span>
                  <br />
                  projected GLP-1 market by 2030
                </div>
              </div>
              <div style={{ background: C.softGreen, borderRadius: 8, padding: '12px 16px' }}>
                <p className="body-font" style={{ fontSize: 12, color: C.warmGray, marginBottom: 4 }}>
                  Ad angle
                </p>
                <p style={{ fontSize: 13, color: C.green, fontStyle: 'italic' }}>
                  &quot;On a GLP-1? Find out what your body actually needs now.&quot;
                </p>
              </div>
            </div>
          </div>

          {/* Menopause */}
          <div className="segment-card" style={{ marginBottom: 14 }}>
            <div style={{ height: 4, background: C.medBrown }} />
            <div style={{ padding: '22px 24px' }}>
              <div
                style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'flex-start',
                  marginBottom: 12,
                }}
              >
                <h3 style={{ color: C.medBrown, fontSize: 17 }}>Menopause</h3>
                <Tag color={C.medBrown}>Underserved market</Tag>
              </div>
              <p
                className="body-font"
                style={{ fontSize: 13, color: C.darkBrown, lineHeight: 1.6, marginBottom: 12 }}
              >
                Estrogen drops, fat redistributes to the abdomen, metabolism slows, muscle
                loss accelerates. Diets that worked before stop working. 70% of women report
                weight gain during this transition, and the content they find online is mostly outdated.
              </p>
              <div className="segment-stats-grid" style={{ marginBottom: 14 }}>
                <div className="body-font" style={{ fontSize: 11, color: C.warmGray }}>
                  <span style={{ fontWeight: 700, color: C.darkBrown, fontSize: 16 }}>1.3M</span>
                  <br />
                  women enter menopause/year in the US
                </div>
                <div className="body-font" style={{ fontSize: 11, color: C.warmGray }}>
                  <span style={{ fontWeight: 700, color: C.darkBrown, fontSize: 16 }}>70%</span>
                  <br />
                  report noticeable weight gain
                </div>
                <div className="body-font" style={{ fontSize: 11, color: C.warmGray }}>
                  <span style={{ fontWeight: 700, color: C.darkBrown, fontSize: 16 }}>6,000</span>
                  <br />
                  women enter menopause daily in US
                </div>
              </div>
              <div style={{ background: C.softGreen, borderRadius: 8, padding: '12px 16px' }}>
                <p className="body-font" style={{ fontSize: 12, color: C.warmGray, marginBottom: 4 }}>
                  Ad angle
                </p>
                <p style={{ fontSize: 13, color: C.medBrown, fontStyle: 'italic' }}>
                  &quot;Over 40 and everything changed? See what your nutrition is actually
                  missing.&quot;
                </p>
              </div>
            </div>
          </div>

          {/* Doctor-Referred */}
          <div className="segment-card">
            <div style={{ height: 4, background: C.darkBrown }} />
            <div style={{ padding: '22px 24px' }}>
              <div
                style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'flex-start',
                  marginBottom: 12,
                }}
              >
                <h3 style={{ color: C.darkBrown, fontSize: 17 }}>Doctor-Referred</h3>
                <Tag color={C.darkBrown}>Largest pool, lowest CPM</Tag>
              </div>
              <p
                className="body-font"
                style={{ fontSize: 13, color: C.darkBrown, lineHeight: 1.6, marginBottom: 12 }}
              >
                When doctors say &quot;lose weight,&quot; follow-through is 10-29%.
                Patients leave overwhelmed with no practical translation into daily decisions.
                They need a starting point, not a hospital program.
              </p>
              <div className="segment-stats-grid-2" style={{ marginBottom: 14 }}>
                <div className="body-font" style={{ fontSize: 11, color: C.warmGray }}>
                  <span style={{ fontWeight: 700, color: C.darkBrown, fontSize: 16 }}>10-29%</span>
                  <br />
                  patient follow-through rate on doctor weight-loss referrals
                </div>
                <div className="body-font" style={{ fontSize: 11, color: C.warmGray }}>
                  <span style={{ fontWeight: 700, color: C.darkBrown, fontSize: 16 }}>42%</span>
                  <br />
                  of US adults live with obesity (CDC)
                </div>
              </div>
              <div style={{ background: C.softGreen, borderRadius: 8, padding: '12px 16px' }}>
                <p className="body-font" style={{ fontSize: 12, color: C.warmGray, marginBottom: 4 }}>
                  Ad angle
                </p>
                <p style={{ fontSize: 13, color: C.darkBrown, fontStyle: 'italic' }}>
                  &quot;Your doctor said make changes. Here&apos;s where to actually start.&quot;
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* AD STRATEGY */}
        <div id="s-2" className="section" style={{ marginBottom: 56 }}>
          <h2 style={{ color: C.darkBrown, fontSize: 28, marginBottom: 8 }}>Ad Strategy</h2>
          <p
            className="body-font"
            style={{ color: C.warmGray, fontSize: 13, marginBottom: 24, lineHeight: 1.5 }}
          >
            Health advertising in 2026 is a compliance minefield. This strategy is designed to
            perform within it.
          </p>

          <div className="dark-card" style={{ marginBottom: 16 }}>
            <p
              className="body-font"
              style={{ color: C.lime, fontSize: 13, fontWeight: 600, marginBottom: 10 }}
            >
              The regulatory reality
            </p>
            <p
              className="body-font"
              style={{ color: C.cream, fontSize: 13, lineHeight: 1.7, marginBottom: 12 }}
            >
              Meta classifies health and wellness as a &quot;sensitive category&quot; — restricted
              conversion tracking, no retargeting, no health-condition interest targeting.
              The FDA has sent dozens of warning letters for deceptive GLP-1 marketing.
              State AGs are cracking down on weight-loss claims and fake before-and-afters.
            </p>
            <p className="body-font" style={{ color: C.cream, fontSize: 13, lineHeight: 1.7 }}>
              Our copy avoids weight-loss promises, timelines, triggering imagery, and drug
              efficacy claims entirely. Framing it as nutritional education (&quot;Find out what your
              body actually needs&quot;) keeps us compliant and captures high-intent clicks.
              It&apos;s the only approach that won&apos;t get flagged.
            </p>
          </div>

          <div className="accent-card" style={{ marginBottom: 16 }}>
            <p style={{ color: C.green, fontSize: 15, fontWeight: 700, marginBottom: 8 }}>
              Zero-party data capture: the real play
            </p>
            <p
              className="body-font"
              style={{ color: C.darkBrown, fontSize: 13, lineHeight: 1.7 }}
            >
              Meta&apos;s pixel restrictions have crippled algorithmic optimization for health
              brands. The calculator solves this: when a user answers 6-8 questions, we capture
              their demographics, health context, and goals on our server. That powers compliant
              downstream marketing (email, SMS, push) without depending on Meta&apos;s algorithms.
              It&apos;s a conversion tool and a first-party data engine.
            </p>
          </div>

          <div className="card" style={{ marginBottom: 16 }}>
            <p
              className="body-font"
              style={{ fontSize: 14, fontWeight: 700, color: C.darkBrown, marginBottom: 14 }}
            >
              Campaign structure
            </p>
            <div className="campaign-grid">
              {[
                {
                  seg: 'GLP-1',
                  targeting:
                    'Interest: weight management, health & wellness. Lookalike: existing Alma users. Age 30-65.',
                  copy: '2-3 variants testing curiosity vs. urgency framing',
                  cpc: 'Higher CPC, highest conversion rate',
                },
                {
                  seg: 'Menopause',
                  targeting:
                    "Women 40-60. Interest: women's health, wellness, fitness over 40. Lookalike from segment.",
                  copy: '2-3 variants testing empathy vs. empowerment framing',
                  cpc: 'Moderate CPC, underserved = less competition',
                },
                {
                  seg: 'Doctor-Referred',
                  targeting:
                    'Broadest demo. Interest: healthy eating, weight management, medical wellness. Age 30-65.',
                  copy: '2-3 variants testing authority vs. accessibility framing',
                  cpc: 'Lowest CPC, largest impression pool',
                },
              ].map((s) => (
                <div key={s.seg} style={{ fontSize: 12 }} className="body-font">
                  <div
                    style={{ fontWeight: 700, color: C.green, fontSize: 13, marginBottom: 8 }}
                  >
                    {s.seg}
                  </div>
                  <div style={{ color: C.warmGray, marginBottom: 4 }}>
                    <span style={{ fontWeight: 600, color: C.darkBrown }}>Targeting:</span>{' '}
                    {s.targeting}
                  </div>
                  <div style={{ color: C.warmGray, marginBottom: 4 }}>
                    <span style={{ fontWeight: 600, color: C.darkBrown }}>Creative:</span>{' '}
                    {s.copy}
                  </div>
                  <div style={{ color: C.warmGray }}>
                    <span style={{ fontWeight: 600, color: C.darkBrown }}>Economics:</span>{' '}
                    {s.cpc}
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="card">
            <p
              className="body-font"
              style={{ fontSize: 14, fontWeight: 700, color: C.darkBrown, marginBottom: 10 }}
            >
              Why this creative works in a restricted environment
            </p>
            {[
              'Dynamic hero matches ad copy exactly — maintains "ad scent," lowers bounce, and algorithms reward it with cheaper CPCs',
              'Educational framing ("what does your body need") avoids FDA/FTC red flags: no weight-loss promises, no timelines, no before-and-afters',
              'Menopause and doctor-referred segments bypass the expensive GLP-1 auction — cheaper reach through demographic targeting',
              'Apple Search Ads as secondary channel for high-intent keywords ("nutrition app," "macro calculator") if budget allows',
            ].map((point, i) => (
              <div key={i} className="insight-row">
                <div className="insight-dot" />
                <p
                  className="body-font"
                  style={{ fontSize: 12, color: C.warmGray, lineHeight: 1.5 }}
                >
                  {point}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* HOW IT WORKS */}
        <div id="s-3" className="section" style={{ marginBottom: 56 }}>
          <h2 style={{ color: C.darkBrown, fontSize: 28, marginBottom: 24 }}>How It Works</h2>
          <div className="card" style={{ marginBottom: 16 }}>
            <div className="flow-container">
              {[
                { icon: '\uD83D\uDDB1', label: 'Ad Click', desc: 'Persona-targeted Meta ad' },
                {
                  icon: '\u2699',
                  label: 'Calculator',
                  desc: '6-8 questions: goals, context, body',
                },
                {
                  icon: '\uD83E\uDDE0',
                  label: 'AI Results',
                  desc: 'Claude API: personalized plan',
                },
                { icon: '\uD83D\uDCF2', label: 'Download', desc: 'CTA + credibility markers' },
              ].map((step, i, arr) => (
                <div key={step.label} style={{ display: 'flex', alignItems: 'center', flex: 1 }}>
                  <div className="flow-step">
                    <div className="flow-icon" style={{ background: C.softGreen }}>
                      {step.icon}
                    </div>
                    <div
                      style={{
                        fontSize: 12,
                        fontWeight: 700,
                        color: C.darkBrown,
                        marginBottom: 3,
                      }}
                    >
                      {step.label}
                    </div>
                    <div
                      className="body-font"
                      style={{ fontSize: 11, color: C.warmGray, lineHeight: 1.4 }}
                    >
                      {step.desc}
                    </div>
                  </div>
                  {i < arr.length - 1 && <div className="arrow-sep">{'\u25B8'}</div>}
                </div>
              ))}
            </div>
          </div>

          <div className="how-grid">
            <div className="accent-card">
              <p
                className="body-font"
                style={{ fontSize: 13, fontWeight: 600, color: C.green, marginBottom: 8 }}
              >
                The results page delivers:
              </p>
              <p
                className="body-font"
                style={{ fontSize: 12, color: C.darkBrown, lineHeight: 1.6 }}
              >
                Daily calorie + protein targets tailored to their situation (GLP-1 protein
                needs differ from menopausal needs). Fiber recommendation. Top 3 nutrition
                priorities. Useful enough on its own that the Alma CTA feels like a next step,
                not a hard sell.
              </p>
            </div>
            <div className="accent-card">
              <p
                className="body-font"
                style={{ fontSize: 13, fontWeight: 600, color: C.green, marginBottom: 8 }}
              >
                Trust architecture:
              </p>
              <p
                className="body-font"
                style={{ fontSize: 12, color: C.darkBrown, lineHeight: 1.6 }}
              >
                Harvard nutrition database. Dr. Eric Rimm on the advisory board. 4.9 App Store
                rating. These show up on the results page to counter the biggest barrier in AI
                health tools: skepticism. Plus a secondary CTA for people who want to learn more first.
              </p>
            </div>
          </div>
        </div>

        {/* DELIVERABLES */}
        <div id="s-4" className="section" style={{ marginBottom: 56 }}>
          <h2 style={{ color: C.darkBrown, fontSize: 28, marginBottom: 24 }}>Deliverables</h2>
          {[
            {
              title: 'Calculator Landing Page',
              desc: 'React + TypeScript, mobile-first. Claude API for personalized results. Dynamic hero via UTM. Brand-matched. Event tracking on each step (starts, completions, CTA clicks). Deployed on Vercel.',
            },
            {
              title: 'Ad Strategy Brief',
              desc: '2-3 Meta ad variants per segment (headline, primary text, CTA). Targeting parameters and budget recs for the test window. One creative direction per segment. Apple Search Ads rec if budget allows.',
            },
            {
              title: 'Measurement Framework',
              desc: 'KPIs and targets defined before launch. Segment comparison methodology. Integrated with your existing analytics. The key output: which audience converts cheapest and completes at the highest rate.',
            },
          ].map((d) => (
            <div
              key={d.title}
              style={{
                background: 'white',
                borderRadius: 12,
                overflow: 'hidden',
                display: 'flex',
                boxShadow: '0 1px 3px rgba(51,20,12,0.06)',
                marginBottom: 12,
              }}
            >
              <div style={{ width: 4, background: C.green, flexShrink: 0 }} />
              <div style={{ padding: '18px 22px' }}>
                <h3 style={{ color: C.green, fontSize: 15, marginBottom: 6 }}>{d.title}</h3>
                <p
                  className="body-font"
                  style={{ color: C.darkBrown, fontSize: 13, lineHeight: 1.6 }}
                >
                  {d.desc}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* METRICS */}
        <div id="s-5" className="section" style={{ marginBottom: 56 }}>
          <h2 style={{ color: C.darkBrown, fontSize: 28, marginBottom: 8 }}>
            Measurement Framework
          </h2>
          <p
            className="body-font"
            style={{ color: C.warmGray, fontSize: 13, fontStyle: 'italic', marginBottom: 20 }}
          >
            Targets benchmarked against 2025-2026 health and wellness paid media data.
          </p>

          <div className="card" style={{ padding: 0, overflow: 'hidden', marginBottom: 16 }}>
            <div
              className="metric-row"
              style={{ background: C.green, color: C.cream, fontWeight: 600, fontSize: 11 }}
            >
              <div>Metric</div>
              <div style={{ textAlign: 'center' }}>Target</div>
              <div style={{ textAlign: 'center' }}>Benchmark</div>
              <div>Why This Target</div>
            </div>
            {[
              [
                'Cost Per Click',
                '< $2.00',
                '$0.50-$2.00',
                'Health/wellness Meta average. Educational framing keeps us in range.',
              ],
              [
                'Calculator Start Rate',
                '60%+',
                'Variable',
                'Hero matching ad copy = high ad scent, lower bounce.',
              ],
              [
                'Completion Rate',
                '70%+',
                '40-65%',
                'Above avg — 6-8 questions prevents fatigue; each feels personally relevant.',
              ],
              [
                'CTA Click Rate',
                '15%+',
                'Variable',
                'Personalized results create reciprocity. Free value primes action.',
              ],
              [
                'Cost Per Acquisition',
                'Track',
                '$30-$75',
                'Meta health CPL benchmarks. Segment comparison shows where to concentrate spend.',
              ],
            ].map((row, i) => (
              <div
                key={row[0]}
                className="metric-row"
                style={{
                  background: i % 2 === 0 ? 'white' : C.softGreen,
                  fontSize: 12,
                }}
              >
                <div style={{ fontWeight: 600, color: C.darkBrown }}>{row[0]}</div>
                <div style={{ textAlign: 'center', color: C.green, fontWeight: 700 }}>{row[1]}</div>
                <div style={{ textAlign: 'center', color: C.warmGray, fontSize: 11 }}>{row[2]}</div>
                <div style={{ color: C.warmGray, fontSize: 11 }}>{row[3]}</div>
              </div>
            ))}
          </div>

          <div className="dark-card">
            <p className="body-font" style={{ fontSize: 13, lineHeight: 1.6 }}>
              <span style={{ color: C.lime, fontWeight: 600 }}>
                The segment comparison is the most valuable output.{' '}
              </span>
              <span style={{ color: C.cream }}>
                GLP-1 users will probably convert at higher rates, but the doctor-referred
                pool is much larger and cheaper. Blending CPAs across segments is how we find
                where to scale.
              </span>
            </p>
          </div>
        </div>

        {/* ROADMAP */}
        <div id="s-6" className="section" style={{ marginBottom: 56 }}>
          <h2 style={{ color: C.darkBrown, fontSize: 28, marginBottom: 8 }}>
            From Test to Ecosystem
          </h2>
          <p
            className="body-font"
            style={{ color: C.warmGray, fontSize: 13, marginBottom: 8, lineHeight: 1.5 }}
          >
            This is a proof of concept for a repeatable acquisition channel.
            Target: live within 10 days of kickoff.
          </p>
          <p
            className="body-font"
            style={{ color: C.warmGray, fontSize: 13, marginBottom: 24, lineHeight: 1.5 }}
          >
            If the test works, here&apos;s where it goes.
          </p>

          {/* Month 1 */}
          <div className="card" style={{ marginBottom: 14 }}>
            <div style={{ display: 'flex', gap: 12, alignItems: 'flex-start' }}>
              <div
                style={{
                  background: C.green,
                  color: C.cream,
                  borderRadius: 8,
                  padding: '6px 12px',
                  fontSize: 12,
                  fontWeight: 700,
                  fontFamily: "'DM Sans', sans-serif",
                  whiteSpace: 'nowrap',
                }}
              >
                Month 1
              </div>
              <div>
                <div
                  style={{ fontSize: 15, fontWeight: 700, color: C.darkBrown, marginBottom: 6 }}
                >
                  Prove the model
                </div>
                <p
                  className="body-font"
                  style={{ fontSize: 13, color: C.warmGray, lineHeight: 1.6 }}
                >
                  Launch calculator, run paid traffic across three segments. Measure which audience
                  converts cheapest and downloads Alma. The data tells us where to double down.
                </p>
              </div>
            </div>
          </div>

          {/* Month 2 */}
          <div className="card" style={{ marginBottom: 14 }}>
            <div style={{ display: 'flex', gap: 12, alignItems: 'flex-start' }}>
              <div
                style={{
                  background: C.green,
                  color: C.cream,
                  borderRadius: 8,
                  padding: '6px 12px',
                  fontSize: 12,
                  fontWeight: 700,
                  fontFamily: "'DM Sans', sans-serif",
                  whiteSpace: 'nowrap',
                }}
              >
                Month 2
              </div>
              <div>
                <div
                  style={{ fontSize: 15, fontWeight: 700, color: C.darkBrown, marginBottom: 6 }}
                >
                  Second tool + organic
                </div>
                <p
                  className="body-font"
                  style={{ fontSize: 13, color: C.warmGray, lineHeight: 1.6 }}
                >
                  Second calculator type (nutrient gap finder or ingredient swapper) targeting
                  different search intent. Start building SEO versions of the best-performing
                  pages for organic traffic.
                </p>
              </div>
            </div>
          </div>

          {/* Month 3 */}
          <div className="card" style={{ marginBottom: 14 }}>
            <div style={{ display: 'flex', gap: 12, alignItems: 'flex-start' }}>
              <div
                style={{
                  background: C.green,
                  color: C.cream,
                  borderRadius: 8,
                  padding: '6px 12px',
                  fontSize: 12,
                  fontWeight: 700,
                  fontFamily: "'DM Sans', sans-serif",
                  whiteSpace: 'nowrap',
                }}
              >
                Month 3
              </div>
              <div>
                <div
                  style={{ fontSize: 15, fontWeight: 700, color: C.darkBrown, marginBottom: 6 }}
                >
                  Content engine
                </div>
                <p
                  className="body-font"
                  style={{ fontSize: 13, color: C.warmGray, lineHeight: 1.6 }}
                >
                  Turn paid learnings into content. Topics and angles that worked in ads become
                  blog posts, social assets, and email sequences. Paid data de-risks the organic strategy.
                </p>
              </div>
            </div>
          </div>

          {/* Scalable framework */}
          <div className="dark-card">
            <p
              className="body-font"
              style={{ color: C.lime, fontSize: 13, fontWeight: 600, marginBottom: 10 }}
            >
              The repeatable framework
            </p>
            <p className="body-font" style={{ color: C.cream, fontSize: 13, lineHeight: 1.7 }}>
              Same architecture every time: high-intent topic, AI-powered interactive tool,
              persona-targeted ads, app download funnel. New audiences, new tools, new channels.
              Each test makes the next one smarter.
            </p>
          </div>
        </div>

        {/* QUESTIONS */}
        <div id="s-7" className="section">
          <h2 style={{ color: C.darkBrown, fontSize: 28, marginBottom: 20 }}>
            Questions Before Kickoff
          </h2>
          <div className="card">
            {[
              'Brand assets: I\'ve matched the visual style from the live site. Any design system or guidelines I should cross-reference?',
              'Brand voice: Any tone or messaging documentation, or should I pull voice direction from existing content?',
              'Deployment: Subdomain of alma.food or standalone?',
              'Analytics: Existing Meta Pixel, GA, or attribution tools I should integrate with?',
              "Claude API: Can you provide an API key for the calculator's AI integration? Usage would be minimal ($20-50 for the full test run).",
              'Ad management: Do I set up and manage campaigns, or hand off the strategy brief?',
            ].map((q, i) => (
              <div key={i} className="q-item">
                <div className="q-dot" />
                <div
                  className="body-font"
                  style={{ fontSize: 13, color: C.darkBrown, lineHeight: 1.5 }}
                >
                  {q}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Footer */}
      <div
        style={{
          borderTop: `1px solid ${C.lightCream}`,
          padding: '32px 24px',
          background: C.cream,
        }}
      >
        <div style={{ maxWidth: 760, margin: '0 auto' }}>
          <p
            className="body-font"
            style={{ fontSize: 11, color: C.warmGray, lineHeight: 1.6, marginBottom: 8 }}
          >
            Confidential. Prepared by Gabriela Barreira for Alma Nutrition Inc.
            Do not distribute or share without written permission.
          </p>
          <p className="body-font" style={{ fontSize: 11, color: C.warmGray, lineHeight: 1.6 }}>
            Market data cited from publicly available industry reports.
            All projections are estimates, not guarantees.
          </p>
          <p
            className="body-font"
            style={{ fontSize: 10, color: C.lightCream, marginTop: 16 }}
          >
            &copy; 2026 Gabriela Barreira. All rights reserved.
          </p>
        </div>
      </div>
    </div>
  )
}
