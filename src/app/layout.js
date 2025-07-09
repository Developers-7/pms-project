import './globals.css';
import Navbar from '@/components/Navbar';
import { ThemeProvider } from '@/context/ThemeContext';
import I18nProvider from '@/components/I18nProvider';
import Content1 from "@/components/Content1";

export const metadata = {
  title: 'pms-project',
  description: 'A modern pms-project with Tailwind CSS 4',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <I18nProvider>
          <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
            <Navbar />
            {/*<Content1/>*/}
            <main className="">{children}</main>
          </ThemeProvider>
        </I18nProvider>
      </body>
    </html>
  );
}

