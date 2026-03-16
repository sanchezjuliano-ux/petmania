import type {Metadata} from 'next';
import { Inter, Public_Sans } from 'next/font/google';
import './globals.css';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
});

const publicSans = Public_Sans({
  subsets: ['latin'],
  variable: '--font-public-sans',
});

export const metadata: Metadata = {
  title: 'PetManager - Gestão Veterinária',
  description: 'Sistema completo de gestão para clínicas veterinárias e pet shops.',
};

import { Shell } from '@/components/shell';
import { ThemeProvider } from '@/components/theme-provider';

export default function RootLayout({children}: {children: React.ReactNode}) {
  return (
    <html lang="pt-br" suppressHydrationWarning className={`${inter.variable} ${publicSans.variable}`}>
      <body suppressHydrationWarning className="bg-[#F5F7FA] dark:bg-slate-950 font-sans text-slate-900 dark:text-slate-100">
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <Shell>
            {children}
          </Shell>
        </ThemeProvider>
      </body>
    </html>
  );
}
