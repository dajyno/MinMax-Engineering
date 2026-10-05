import type { Metadata } from 'next';
import { Plus_Jakarta_Sans, JetBrains_Mono } from 'next/font/google';
import './globals.css';
import { RfqProvider } from '@/context/rfq-context';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { RfqModal } from '@/components/RfqModal';
import { ContactModal } from '@/components/ContactModal';
import { FloatingWhatsApp } from '@/components/FloatingWhatsApp';

const plusJakarta = Plus_Jakarta_Sans({
  subsets: ['latin'],
  variable: '--font-sans',
  weight: ['400', '500', '600', '700', '800'],
  display: 'swap',
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ['latin'],
  variable: '--font-mono',
  weight: ['400', '500', '600', '700'],
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'Min-Max Engineering Services Ltd | Integrated Engineering, Maintenance & Procurement',
  description:
    'Integrated Engineering, Maintenance, Procurement, Technical Consulting & Training for the Oil & Gas, Energy, and Infrastructure Sectors (RC1459932).',
  openGraph: {
    title: 'Min-Max Engineering Services Ltd | Integrated Engineering & Procurement',
    description:
      'Integrated Engineering, Maintenance, Procurement, Technical Consulting & Training for the Oil & Gas, Energy, and Infrastructure Sectors (RC1459932).',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Min-Max Engineering Services Ltd',
    description:
      'Integrated Engineering, Maintenance, Procurement, Technical Consulting & Training for the Oil & Gas, Energy, and Infrastructure Sectors.',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`scroll-smooth ${plusJakarta.variable} ${jetbrainsMono.variable}`}>
      <body className="bg-slate-50 text-slate-900 antialiased min-h-screen flex flex-col font-sans selection:bg-teal-600 selection:text-white" suppressHydrationWarning>
        <RfqProvider>
          <Navbar />
          <main className="flex-1">{children}</main>
          <Footer />
          <RfqModal />
          <ContactModal />
          <FloatingWhatsApp />
        </RfqProvider>
      </body>
    </html>
  );
}
