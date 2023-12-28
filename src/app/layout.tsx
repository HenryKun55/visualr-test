import Favicon from '/public/favicon.ico';
import { Sidebar } from '@/components/Sidebar';
import type { Metadata } from 'next';
import { Barlow } from 'next/font/google';
import './globals.css';

const barlow = Barlow({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
});

export const metadata: Metadata = {
  title: 'Delicious Dishes',
  description:
    'Explore a world of culinary delights with Delicious Dishes, a Next.js app dedicated to bringing you mouthwatering recipes and cooking inspiration. Discover a diverse range of dishes, from appetizers to desserts, with step-by-step instructions and stunning visuals.',
  icons: [{ rel: 'icon', url: Favicon.src }],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={barlow.className}>
      <body>
        <main className="w-full flex h-dvh bg-background-primary">
          <Sidebar />
          {children}
        </main>
      </body>
    </html>
  );
}
