import { ImageResponse } from 'next/og';

export const runtime = 'edge';
export const alt = 'Foodz by RG — Indian & Fusion Food, Mauritius';
export const size = { width: 1200, height: 630 };
export const contentType = 'image/png';

export default function OGImage() {
  return new ImageResponse(
    (
      <div
        style={{
          background: '#0D0D0D',
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          position: 'relative',
          overflow: 'hidden',
        }}
      >
        {/* Top-right glow */}
        <div
          style={{
            position: 'absolute',
            top: -120,
            right: -120,
            width: 480,
            height: 480,
            borderRadius: '50%',
            background: 'rgba(255, 92, 0, 0.18)',
            display: 'flex',
          }}
        />

        {/* Bottom-left glow */}
        <div
          style={{
            position: 'absolute',
            bottom: -100,
            left: -100,
            width: 380,
            height: 380,
            borderRadius: '50%',
            background: 'rgba(255, 92, 0, 0.10)',
            display: 'flex',
          }}
        />

        {/* Location eyebrow */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: 14,
            marginBottom: 28,
          }}
        >
          <div style={{ width: 48, height: 1, background: 'rgba(255,92,0,0.4)', display: 'flex' }} />
          <span
            style={{
              color: 'rgba(255,255,255,0.30)',
              fontSize: 15,
              letterSpacing: '0.3em',
              textTransform: 'uppercase',
              fontFamily: 'sans-serif',
            }}
          >
            Royal Road · Rivière du Rempart · Mauritius
          </span>
          <div style={{ width: 48, height: 1, background: 'rgba(255,92,0,0.4)', display: 'flex' }} />
        </div>

        {/* FOODZ headline */}
        <div
          style={{
            fontSize: 200,
            fontWeight: 900,
            color: '#FFFFFF',
            lineHeight: 0.85,
            letterSpacing: '-0.02em',
            textTransform: 'uppercase',
            fontFamily: 'sans-serif',
            display: 'flex',
          }}
        >
          FOODZ
        </div>

        {/* BY RG row */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: 24,
            marginTop: 14,
          }}
        >
          <div
            style={{
              height: 1,
              width: 140,
              background: 'linear-gradient(to right, transparent, rgba(255,92,0,0.55))',
              display: 'flex',
            }}
          />
          <span
            style={{
              fontSize: 30,
              color: '#FF5C00',
              letterSpacing: '0.38em',
              textTransform: 'uppercase',
              fontWeight: 700,
              fontFamily: 'sans-serif',
            }}
          >
            BY RG
          </span>
          <div
            style={{
              height: 1,
              width: 140,
              background: 'linear-gradient(to left, transparent, rgba(255,92,0,0.55))',
              display: 'flex',
            }}
          />
        </div>

        {/* Tagline */}
        <div
          style={{
            fontSize: 17,
            color: 'rgba(255,255,255,0.30)',
            letterSpacing: '0.28em',
            textTransform: 'uppercase',
            marginTop: 28,
            fontFamily: 'sans-serif',
            display: 'flex',
          }}
        >
          Real Food · Bold Flavours · Fast Service
        </div>

        {/* Halal badge */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: 10,
            marginTop: 36,
            background: 'rgba(22,163,74,0.10)',
            border: '1px solid rgba(22,163,74,0.25)',
            borderRadius: 100,
            padding: '10px 24px',
          }}
        >
          <div
            style={{
              width: 8,
              height: 8,
              borderRadius: '50%',
              background: '#16a34a',
              display: 'flex',
            }}
          />
          <span
            style={{
              color: '#4ade80',
              fontSize: 14,
              fontWeight: 600,
              letterSpacing: '0.05em',
              fontFamily: 'sans-serif',
            }}
          >
            100% Halal — No Pork, No Beef
          </span>
        </div>
      </div>
    ),
    { width: 1200, height: 630 },
  );
}
