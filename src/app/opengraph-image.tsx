import { ImageResponse } from 'next/og'

export const runtime = 'edge'
export const alt = 'Neblina — Digital Product Studio in Ontario, Canada'
export const size = { width: 1200, height: 630 }
export const contentType = 'image/png'

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          height: '100%',
          width: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          backgroundColor: '#0f0f1e',
          backgroundImage: 'radial-gradient(circle at 50% 50%, #1a1a2e 0%, #0f0f1e 70%)',
        }}
      >
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            gap: '24px',
          }}
        >
          <h1
            style={{
              fontSize: '72px',
              fontFamily: 'serif',
              color: '#f1f5f9',
              letterSpacing: '-0.02em',
              margin: 0,
            }}
          >
            Neblina
          </h1>
          <p
            style={{
              fontSize: '24px',
              color: '#94a3b8',
              margin: 0,
              maxWidth: '600px',
              textAlign: 'center',
              lineHeight: 1.5,
            }}
          >
            Digital Product Studio — Strategy, Design & Development
          </p>
          <div
            style={{
              width: '60px',
              height: '2px',
              backgroundColor: '#a5b4fc',
              marginTop: '16px',
            }}
          />
          <p
            style={{
              fontSize: '16px',
              color: '#64748b',
              margin: 0,
            }}
          >
            Ontario, Canada
          </p>
        </div>
      </div>
    ),
    { ...size }
  )
}
