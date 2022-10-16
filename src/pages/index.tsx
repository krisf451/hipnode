import type { NextPage } from 'next';
import { signIn } from 'next-auth/react';

const Home: NextPage = () => {
  console.log('test');
  const handleAuth = async (type: string) => {
    signIn(type, { callbackUrl: '/' });
  };
  return (
    <div>
      <main>
        <button type='button' onClick={() => signIn()}>TEST</button>
      </main>
    </div>
  );
};

export default Home;
