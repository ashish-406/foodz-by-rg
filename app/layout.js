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
  description: 'Authentic Indian cuisine and Fuzzion street food on Royal Road, Rivière du Rempart, Mauritius. 100% Halal.',
  openGraph: {
    title: 'Foodz by RG',
    description: 'Authentic Indian cuisine and Fuzzion street food. Royal Road, Rivière du Rempart, Mauritius.',
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
