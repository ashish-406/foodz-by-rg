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
  title: 'Foodz by RG | Real Food. Real Fast.',
  description: 'Fresh, fast, and full of flavour. Best burgers, sides & combos at Riverside Shopping Centre, Rivière du Rempart, Mauritius.',
  openGraph: {
    title: 'Foodz by RG',
    description: 'Real Food. Real Fast. Best fast food in Rivière du Rempart, Mauritius.',
    siteName: 'Foodz by RG',
    locale: 'en_MU',
    type: 'website',
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${bebas.variable} ${dmSans.variable} font-body bg-deep-black text-white antialiased`}>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
