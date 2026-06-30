import { Bebas_Neue, DM_Sans } from 'next/font/google';
import './globals.css';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const bebas = Bebas_Neue({
  weight: '400',
  subsets: ['latin'],
  variable: '--font-bebas',
  display: 'swap',
});

const dmSans = DM_Sans({
  subsets: ['latin'],
  variable: '--font-dm-sans',
  display: 'swap',
});

export const metadata = {
  metadataBase: new URL('https://foodzbyRG.vercel.app'),
  title: 'Foodz by RG | Real Food. Real Fast.',
  description: 'Authentic Indian cuisine and Fuzzion street food on Royal Road, Rivière du Rempart, Mauritius. 100% Halal.',
  openGraph: {
    title: 'Foodz by RG',
    description: 'Authentic Indian cuisine and Fuzzion street food. Royal Road, Rivière du Rempart, Mauritius.',
    siteName: 'Foodz by RG',
    locale: 'en_MU',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Foodz by RG — Indian & Fusion Food | Mauritius',
    description: 'Authentic Royal Indian Cuisine and Fuzzion street food on Royal Road, Rivière du Rempart. 100% Halal.',
  },
};

export const viewport = {
  themeColor: '#0D0D0D',
};

const jsonLd = [
  {
    '@context': 'https://schema.org',
    '@type': 'Restaurant',
    name: 'Foodz by RG',
    url: 'https://foodzbyRG.vercel.app',
    image: 'https://foodzbyRG.vercel.app/opengraph-image',
    telephone: '+23057591140',
    address: {
      '@type': 'PostalAddress',
      streetAddress: 'Royal Road',
      addressLocality: 'Rivière du Rempart',
      postalCode: '31113',
      addressCountry: 'MU',
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: -20.1096296,
      longitude: 57.6902339,
    },
    openingHoursSpecification: [
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
        opens: '11:00',
        closes: '21:00',
      },
    ],
    menu: 'https://foodzbyRG.vercel.app/menu.pdf',
    servesCuisine: ['Indian', 'Mauritian', 'Fusion'],
    priceRange: 'Rs 65 - Rs 925',
    hasMap: 'https://www.google.com/maps/place/Foodz+by+RG/@-20.109655,57.6902143,21z',
    sameAs: ['https://www.instagram.com/_foodzbyrg'],
  },
  {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: 'Foodz by RG',
    url: 'https://foodzbyRG.vercel.app',
  },
  {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      {
        '@type': 'ListItem',
        position: 1,
        name: 'Home',
        item: 'https://foodzbyRG.vercel.app',
      },
    ],
  },
];

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://images.unsplash.com" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className={`${bebas.variable} ${dmSans.variable} font-body bg-deep-black text-white antialiased`}>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
