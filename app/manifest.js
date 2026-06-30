export default function manifest() {
  return {
    name: 'Foodz by RG',
    short_name: 'Foodz by RG',
    description: 'Authentic Indian cuisine and Fuzzion street food on Royal Road, Rivière du Rempart, Mauritius. 100% Halal.',
    start_url: '/',
    display: 'standalone',
    background_color: '#0D0D0D',
    theme_color: '#FF5C00',
    icons: [
      {
        src: '/logo.png',
        sizes: 'any',
        type: 'image/png',
      },
    ],
  };
}
