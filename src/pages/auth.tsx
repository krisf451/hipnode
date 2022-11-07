import { useState } from 'react';
import { useTheme } from 'next-themes';
import { MdOutlineConnectWithoutContact, MdWebStories } from 'react-icons/md';
import { VscFeedback } from 'react-icons/vsc';
import { signOut, useSession, signIn } from 'next-auth/react';
import { AiOutlineGoogle, AiOutlineTwitter, AiOutlineEye, AiOutlineEyeInvisible } from 'react-icons/ai';
import { FaFacebookF } from 'react-icons/fa';

import { FeatureCard, OAuthButtons } from '@components';

const Auth = () => {
  const { theme, setTheme } = useTheme();
  const [authOpen, setAuthOpen] = useState(false);

  const handleAuth = async (type: string) => {
    setAuthOpen(false);
    signIn(type, { callbackUrl: window.location.href });
  };
  return (
    <div className='h-screen w-full flex relative font-SSPro'>
      <div className='absolute top-0 flex items-center ml-10 mt-12 gap-3'>
        <img src={theme === 'dark' ? '/assets/icons/hipnode-dark.png' : '/assets/icons/hipnode.png'} alt='hipnode' className='h-12 w-12' />
        <h3 className='text-cOrange-8 font-semibold text-[26px]'>Hipnode<span className='text-black dark:text-white'>.</span></h3>
      </div>
      <div className='h-screen w-[50%] bg-cGray-1 dark:bg-dark-2 flex justify-center items-center'>
        <div className='max-w-[55%] mx-auto flex flex-col gap-6'>
          <h3 className='text-white text-[30px] mb-4 font-[700]'>Join a thriving community of entrepreneurs and developers.</h3>
          <FeatureCard Icon={<MdOutlineConnectWithoutContact className='featureCard' />} content='Connect with other indie hackers running online businesses.' />
          <FeatureCard Icon={<VscFeedback className='featureCard' />} content='Get feedback on your business ideas, landing pages, and more.' />
          <FeatureCard Icon={<MdWebStories className='featureCard' />} content='Get the best new stories from founders in your inbox.' />
        </div>
      </div>
      <div className='h-screen w-[50%] bg-cGray-1 dark:bg-dark-3 flex justify-center items-center'>
        {/* Sign In Form */}
        {/* O-auth buttons */}
        <OAuthButtons />
      </div>
    </div>
  );
};

export default Auth;
