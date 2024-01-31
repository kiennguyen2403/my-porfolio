import { AppRouterCacheProvider } from '@mui/material-nextjs/v13-appRouter';
import { Inter } from 'next/font/google';
import DrawerAppBar from './components/app-bar/app-bar';
import { Box } from '@mui/material';
import Footer from './components/footer/footer';
import ThemeProviderWrapper from '@/styles/theme-provider-wrapper';


const inter = Inter({ subsets: ['latin'] });
export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className} style={{
        backgroundColor: 'linear-gradient(to right, #434343 0%, black 100%)'
      }}>
        <ThemeProviderWrapper options={{ key: 'mui-theme' }}>
          <AppRouterCacheProvider>
            <DrawerAppBar />
            <Box>
              {children}
            </Box>
            <Footer />
          </AppRouterCacheProvider>
        </ThemeProviderWrapper>
      </body>
    </html>
  );
}
