import { ImageResponse } from 'next/og'

export const size = { width: 128, height: 128 }
export const contentType = 'image/png'

export default function Icon() {
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
          borderRadius: '50%',
        }}
      >
        <div
          style={{
            width: 120,
            height: 120,
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
              fontSize: 62,
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
