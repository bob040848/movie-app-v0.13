import { ThemeProvider } from '@/providers/ThemeProvider';
import '@/styles/globals.css';

export const metadata = {
  title: 'Movie App',
  description: 'A movie streaming platform',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
}