import { AppRouterCacheProvider } from '@mui/material-nextjs/v13-appRouter';
import { Inter } from 'next/font/google';
import DrawerAppBar from './components/app-bar/app-bar';
import Footer from './components/footer/footer';
import ThemeProviderWrapper from '@/styles/theme-provider-wrapper';

const inter = Inter({ subsets: ['latin'] });
export const metadata = {
  title: "My Porfolio",
  description: "A project portfolio website built with Next.js and Material-UI.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">

      <ThemeProviderWrapper options={{ key: 'mui-theme' }}>
        <AppRouterCacheProvider>
          <body className={inter.className} style={{
            overflowX: 'hidden',
            overflowY: 'auto',
          }}>
            <DrawerAppBar />
            <div style={{
              width: '100vw',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
            }}>
              {children}
            </div>
            <div style={{
              bottom: 0,
              width: '100%',
            }}>
              <Footer />
            </div>
          </body>
        </AppRouterCacheProvider>
      </ThemeProviderWrapper>

    </html>
  );
}
