import { ImageResponse } from 'next/og'

export const runtime = 'edge'
export const alt = 'Neblina — Digital Product Studio'
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
          backgroundColor: '#0f0f12',
          backgroundImage: 'radial-gradient(circle at 50% 50%, #1a1a1e 0%, #0f0f12 70%)',
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
              color: '#e6e2da',
              letterSpacing: '-0.02em',
              margin: 0,
            }}
          >
            Neblina
          </h1>
          <p
            style={{
              fontSize: '24px',
              color: '#8a8780',
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
              backgroundColor: '#c9956b',
              marginTop: '16px',
            }}
          />
          <p
            style={{
              fontSize: '16px',
              color: '#6a6760',
              margin: 0,
            }}
          >
            Clarity through craft
          </p>
        </div>
      </div>
    ),
    { ...size }
  )
}
