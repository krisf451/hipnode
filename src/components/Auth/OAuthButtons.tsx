import { AiOutlineGoogle, AiOutlineTwitter } from 'react-icons/ai';
import { FaFacebookF } from 'react-icons/fa';
import { signIn } from 'next-auth/react';

import { Button } from '@components';

const OAuthButtons = () => {
  console.log('hi');

  const handleAuth = (provider: string) => {
    signIn(provider, { callbackUrl: window.location.href });
  };

  return (
    <div className='max-w-[55%] w-[55%] mx-auto flex flex-col gap-6'>
      <div className='flex flex-col gap-4'>
        <div className='relative'>
          <div className='absolute inset-0 flex items-center' aria-hidden='true'>
            <div className='w-full border-t border-[#3F4354]' />
          </div>
          <div className='relative flex justify-center'>
            <span className='dark:bg-dark-3 px-4 my-6 text-sm text-cGray-1 text-[16px]'>or</span>
          </div>
        </div>
        <Button styles='w-full bg-dark-4 p-3 flex items-center justify-center gap-3 rounded-md' handleClick={() => handleAuth('google')}>
          <AiOutlineGoogle className='text-white text-xl' />
          Sign Up With Google
        </Button>
        <Button styles='w-full bg-dark-4 p-3 flex items-center justify-center gap-3 rounded-md' handleClick={() => handleAuth('facebook')}>
          <FaFacebookF className='text-white text-xl' />
          Sign Up With Facebook
        </Button>
        <Button styles='w-full bg-dark-4 p-3 flex items-center justify-center gap-3 rounded-md' handleClick={() => handleAuth('twitter')}>
          <AiOutlineTwitter className='text-white text-xl' />
          Sign Up With Twitter
        </Button>
      </div>
    </div>
  );
};

export default OAuthButtons;
