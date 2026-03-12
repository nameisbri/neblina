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
        .nav-scroll { -ms-overflow-style: none; scrollbar-width: none; }
        .nav-scroll::-webkit-scrollbar { display: none; }
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
        .segment-card {
          background: white; border-radius: 12px; overflow: hidden;
          box-shadow: 0 1px 3px rgba(51,20,12,0.06), 0 4px 12px rgba(51,20,12,0.04);
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
        .segment-stats-grid { display: grid; grid-template-columns: 1fr 1fr 1fr; gap: 10px; }
        .segment-stats-grid-2 { display: grid; grid-template-columns: 1fr 1fr; gap: 10px; }
        .campaign-grid { display: grid; grid-template-columns: 1fr 1fr 1fr; gap: 14px; }
        .how-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 14px; }

        .pointer-events-none.fixed.mix-blend-screen,
        .pointer-events-none.fixed.inset-0 { display: none !important; }

        @media (max-width: 640px) {
          .segment-stats-grid { grid-template-columns: 1fr; }
          .segment-stats-grid-2 { grid-template-columns: 1fr; }
          .campaign-grid { grid-template-columns: 1fr; }
          .how-grid { grid-template-columns: 1fr; }
          .metric-row { grid-template-columns: 1fr; gap: 4px; padding: 12px 16px; }
          .metric-row > div { text-align: left !important; }
          .metric-row > div:nth-child(2) { color: ${C.green}; font-weight: 700; }
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
          <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 24 }}>
            <svg width="36" height="36" viewBox="0 0 54 54" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M26.6898 53.3856C14.3315 53.3675 9.81175 51.0963 5.36445 46.6324C1.8042 43.0565 0 36.3455 0 26.6928C0 17.0402 1.8042 10.3292 5.36445 6.75324C9.81778 2.28329 14.3375 0.0120809 26.6898 0C39.0481 0.0181214 43.5738 2.28933 48.0211 6.75324C51.5814 10.3292 53.3856 17.0402 53.3856 26.6928C53.3856 36.3455 51.5814 43.0565 48.0211 46.6324C43.5738 51.1024 39.0481 53.3736 26.6958 53.3856H26.6898Z" fill={C.lime} />
              <g transform="translate(8, 10)">
                <path d="M18.666 10.2929C21.4961 10.2929 23.7952 7.98547 23.7952 5.14645C23.7952 2.30743 21.5021 0 18.666 0C15.8299 0 13.5368 2.30743 13.5368 5.14645C13.5368 7.98547 15.8299 10.2929 18.666 10.2929Z" fill={C.green} />
                <path d="M18.6648 13.0295C13.421 13.0295 10.3495 13.4764 8.79869 13.9838C8.0444 14.2315 7.67628 15.0893 8.02024 15.8081C9.89691 19.7465 13.958 22.4767 18.6648 22.4767C23.3716 22.4767 27.4266 19.7525 29.3033 15.8202C29.6473 15.1013 29.2731 14.2436 28.5188 13.9959C26.9439 13.4825 23.8543 13.0295 18.6648 13.0295Z" fill={C.green} />
                <path d="M35.0551 23.4752C34.9344 23.2578 34.6689 23.1611 34.4395 23.2578C33.3172 23.7108 31.8388 23.7169 30.1492 23.7289C27.8199 23.735 25.1708 23.7471 22.564 24.9914C21.164 25.6559 19.9331 26.6042 18.8529 27.8546C18.7503 27.9694 18.5814 27.9694 18.4788 27.8546C17.3987 26.6042 16.1676 25.6559 14.7677 24.9914C12.1608 23.7471 9.51777 23.741 7.18249 23.7289C5.49891 23.7229 4.01448 23.7169 2.89209 23.2578C2.66279 23.1611 2.39727 23.2578 2.27658 23.4752L0.06203 27.4922C-0.0767595 27.7459 0.0258211 28.0539 0.285297 28.1808C2.5542 29.2741 4.99208 29.2801 7.1584 29.2922C9.08335 29.2983 10.8996 29.3043 12.3901 30.0171C12.8729 30.2466 14.128 30.8507 15.4254 33.1521C15.5581 33.3877 15.8055 33.5326 16.071 33.5326H21.2606C21.5261 33.5326 21.7735 33.3877 21.9062 33.1521C23.1976 30.8507 24.4588 30.2466 24.9415 30.0171C26.432 29.3043 28.2483 29.2983 30.1732 29.2922C32.3396 29.2862 34.7774 29.2741 37.0463 28.1808C37.3058 28.0599 37.4084 27.7459 37.2696 27.4922L35.0551 23.4752Z" fill={C.green} />
              </g>
            </svg>
            <svg width="64" height="24" viewBox="0 0 96 35" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M25.3656 27.3353C26.6144 31.0831 27.0474 31.7067 28.1529 32.0437V34.157H15.8543V32.0437C17.9676 31.8988 18.7849 31.3225 18.7849 30.0265C18.7849 29.4013 18.5928 28.6329 18.2558 27.6723L17.1503 24.3575H7.30198L6.14929 27.7684C5.81227 28.7778 5.66901 29.4974 5.66901 30.1226C5.66901 31.4674 6.58236 31.9004 8.64841 32.0437V34.157H0V32.0437C1.15269 31.7555 1.63297 31.0831 2.88334 27.4313L10.6184 4.80255L9.36965 1.05469H16.4795L25.3672 27.3337L25.3656 27.3353ZM8.30976 21.2821H16.1409L12.2497 9.60704L8.30976 21.2821Z" fill={C.cream} />
              <path d="M39.8292 32.3322V34.1573H29.5479V32.3322C31.2769 32.044 31.5178 31.707 31.5178 28.7292V6.00439C31.5178 4.46747 31.1336 4.08325 29.74 4.08325V2.25816L35.842 0H37.7632V28.7292C37.7632 31.7086 38.6277 32.044 39.8292 32.3322Z" fill={C.cream} />
              <path d="M71.9168 30.2654C71.9168 31.7063 72.2538 32.2354 73.3576 32.3314V34.1565H64.229V32.3314C65.3816 32.2354 65.6698 31.8023 65.6698 30.2654V19.1195C65.6698 17.0535 64.5643 16.1401 63.0274 16.1401C61.9708 16.1401 61.0574 16.4283 60.3362 17.0535C60.3834 17.4865 60.3834 17.9668 60.3834 18.4471V30.2654C60.3834 31.7063 60.7676 32.2354 61.9203 32.3314V34.1565H52.3602V32.3314C53.7538 32.2354 54.1381 31.7551 54.1381 30.2654V19.2628C54.1381 17.2456 53.1775 16.1401 51.4468 16.1401C50.4374 16.1401 49.5729 16.4283 48.8533 17.0046V30.4575C48.8533 31.7551 49.2375 32.1393 50.6312 32.3314V34.1565H40.8301V32.3314C42.367 32.1865 42.6079 31.9472 42.6079 30.4575V17.1007C42.6079 15.5638 42.2237 15.1795 40.8301 15.1795V13.3544L46.9321 11.0963H48.8533V15.4205C50.0548 12.3939 52.2641 10.8081 54.7144 10.8081C57.5489 10.8081 59.3268 12.2978 60.0464 15.1323C61.44 12.3939 63.41 10.8081 66.1957 10.8081C69.9908 10.8081 71.9135 13.2095 71.9135 18.4471V30.2654H71.9168Z" fill={C.cream} />
              <path d="M95.2185 29.256C94.7854 33.0999 93.3934 34.6368 90.414 34.6368C88.0597 34.6368 86.6189 33.5313 85.9465 31.1299C84.8899 33.5313 83.112 34.8289 80.8538 34.8289C77.539 34.8289 75.5691 32.955 75.5691 29.8812C75.5691 26.8073 77.443 24.9334 81.383 23.6358L85.5623 22.2422V18.4943C85.5623 15.8047 84.0726 14.4583 81.9593 14.4583C80.7578 14.4583 79.846 14.6504 78.5957 15.2267C78.9327 16.9558 80.9499 17.2928 80.9499 19.3588C80.9499 21.1367 79.5562 22.4343 77.443 22.4343C75.5218 22.4343 74.3203 20.8974 74.3203 18.7353C74.3203 14.4111 79.172 10.8081 84.4568 10.8081C89.2613 10.8081 91.8076 13.4033 91.8076 18.7825V28.6308C91.8076 29.5914 92.0958 30.0244 92.6721 30.0244C93.1524 30.0244 93.4406 29.6874 93.6327 28.8717L95.2185 29.256ZM85.6095 29.1127C85.5623 28.5836 85.5623 28.0561 85.5623 27.4309V24.8846L84.1214 25.4137C82.3924 26.0861 81.5279 27.0467 81.5279 28.3442C81.5279 29.6418 82.2963 30.3614 83.449 30.3614C84.2663 30.3614 84.9387 29.9772 85.6111 29.1127H85.6095Z" fill={C.cream} />
            </svg>
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
          className="nav-scroll"
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
                color: active === i ? C.cream : C.medBrown,
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

          <p
            className="body-font"
            style={{ color: C.darkBrown, fontSize: 13, lineHeight: 1.7 }}
          >
            The market is there: <strong>6M+ Americans</strong> are on GLP-1s (12% of all US adults),
            the menopause wellness market is <strong>$17.7B</strong> and heading to $24B by 2029,
            and <strong>42% of US adults</strong> live with obesity. Meanwhile, <strong>95% of nutrition
            apps churn</strong> within six months. The window for a better acquisition channel is wide open.
          </p>
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
          <div style={{ marginBottom: 16 }}>
            {[
              { num: '1', label: 'Ad Click', desc: 'Persona-targeted Meta ad drives traffic to the calculator.' },
              { num: '2', label: 'Calculator', desc: '6-8 questions capture goals, health context, and body data.' },
              { num: '3', label: 'AI Results', desc: 'Claude API generates a personalized nutrition plan.' },
              { num: '4', label: 'Download CTA', desc: 'Credibility markers + app store link convert to install.' },
            ].map((step, i, arr) => (
              <div
                key={step.label}
                className="body-font"
                style={{
                  display: 'flex',
                  gap: 14,
                  alignItems: 'baseline',
                  padding: '12px 0',
                  borderBottom: i < arr.length - 1 ? `1px solid ${C.lightCream}` : 'none',
                }}
              >
                <span
                  style={{
                    color: C.green,
                    fontSize: 18,
                    fontWeight: 700,
                    fontFamily: 'Georgia, serif',
                    flexShrink: 0,
                    width: 24,
                  }}
                >
                  {step.num}
                </span>
                <span>
                  <span style={{ fontWeight: 600, color: C.darkBrown, fontSize: 13 }}>
                    {step.label}
                  </span>
                  <span style={{ color: C.warmGray, fontSize: 13, marginLeft: 6 }}>
                    {step.desc}
                  </span>
                </span>
              </div>
            ))}
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
          ].map((d, i, arr) => (
            <div
              key={d.title}
              style={{
                padding: '18px 0',
                borderBottom: i < arr.length - 1 ? `1px solid ${C.lightCream}` : 'none',
              }}
            >
              <h3 style={{ color: C.green, fontSize: 15, marginBottom: 6 }}>{d.title}</h3>
              <p
                className="body-font"
                style={{ color: C.darkBrown, fontSize: 13, lineHeight: 1.6 }}
              >
                {d.desc}
              </p>
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

          <div style={{ borderLeft: `2px solid ${C.green}`, paddingLeft: 24, marginLeft: 8 }}>
            {[
              {
                month: 'Month 1',
                title: 'Prove the model',
                desc: 'Launch calculator, run paid traffic across three segments. Measure which audience converts cheapest and downloads Alma. The data tells us where to double down.',
              },
              {
                month: 'Month 2',
                title: 'Second tool + organic',
                desc: 'Second calculator type (nutrient gap finder or ingredient swapper) targeting different search intent. Start building SEO versions of the best-performing pages for organic traffic.',
              },
              {
                month: 'Month 3',
                title: 'Content engine',
                desc: 'Turn paid learnings into content. Topics and angles that worked in ads become blog posts, social assets, and email sequences. Paid data de-risks the organic strategy.',
              },
            ].map((item, i, arr) => (
              <div
                key={item.month}
                style={{
                  position: 'relative',
                  paddingBottom: i < arr.length - 1 ? 28 : 0,
                }}
              >
                <div
                  style={{
                    position: 'absolute',
                    left: -31,
                    top: 2,
                    width: 12,
                    height: 12,
                    borderRadius: '50%',
                    background: C.green,
                  }}
                />
                <div
                  className="body-font"
                  style={{ fontSize: 11, fontWeight: 600, color: C.green, letterSpacing: 0.3, textTransform: 'uppercase', marginBottom: 4 }}
                >
                  {item.month}
                </div>
                <div style={{ fontSize: 15, fontWeight: 700, color: C.darkBrown, marginBottom: 4 }}>
                  {item.title}
                </div>
                <p className="body-font" style={{ fontSize: 13, color: C.warmGray, lineHeight: 1.6 }}>
                  {item.desc}
                </p>
              </div>
            ))}
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
          <p className="body-font" style={{ fontSize: 11, color: C.warmGray, lineHeight: 1.6 }}>
            Market data cited from publicly available industry reports.
            All projections are estimates, not guarantees.
          </p>
          <p
            className="body-font"
            style={{ fontSize: 10, color: C.warmGray, marginTop: 12, opacity: 0.5 }}
          >
            &copy; 2026 Gabriela Barreira
          </p>
        </div>
      </div>
    </div>
  )
}
