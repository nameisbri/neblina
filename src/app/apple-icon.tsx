import { ImageResponse } from 'next/og'

export const size = { width: 180, height: 180 }
export const contentType = 'image/png'

export default function AppleIcon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          background: '#0f0f12',
        }}
      >
        <div
          style={{
            width: 160,
            height: 160,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            borderRadius: '50%',
            border: '3px solid #e6e2da',
          }}
        >
          <span
            style={{
              fontFamily: 'Georgia, serif',
              fontSize: 82,
              color: '#e6e2da',
              lineHeight: 1,
              marginTop: -2,
            }}
          >
            N
          </span>
        </div>
      </div>
    ),
    { ...size }
  )
}
