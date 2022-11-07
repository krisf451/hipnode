/* eslint-disable @typescript-eslint/ban-ts-comment */
// @ts-nocheck
import { useState } from 'react';
import { AppProps } from 'next/app';
import { motion, AnimatePresence } from 'framer-motion';
import { useRouter } from 'next/router';
import { ThemeProvider } from 'next-themes';
import { SessionProvider } from 'next-auth/react';
import { Provider } from 'react-redux';
import { Toaster } from 'react-hot-toast';

import '@styles/globals.css';
import { GlobalProvider } from '@context/GlobalContext';
import { Navbar } from '@components';
import { pageVariants } from '@utils/variants';
import { store } from '@redux/store';

const MyApp = ({ Component, pageProps: { session, ...pageProps } }: AppProps<{initialSession: Session}>): JSX.Element => {
  const router = useRouter();
  return (
    <SessionProvider session={session}>
      <Provider store={store}>
        <GlobalProvider>
          <ThemeProvider attribute='class'>
            <div className='relative min-h-screen overflow-x-hidden bg-white dark:bg-dark-2 dark:text-white'>
              <Navbar />
              <AnimatePresence mode='wait'>
                <motion.main key={router.route} variants={pageVariants} initial='initial' animate='animate' exit='exit'>
                  <Toaster />
                  <Component {...pageProps} />
                </motion.main>
              </AnimatePresence>
            </div>
          </ThemeProvider>
        </GlobalProvider>
      </Provider>
    </SessionProvider>
  );
};

export default MyApp;
