import Link from 'next/link';

import { DarkModeToggle } from '@components';
import { useSession } from 'next-auth/react';

const Navbar = () => {
  const { data: session } = useSession();
  console.log(session);
  return (
    <div className='h-16 w-full bg-gray-100 justify-between items-center text-black flex'>
      <div className='flex items-center gap-4'>
        <Link href='/'>
          <h1 className=''>HOME</h1>
        </Link>
        <Link href='/auth'>
          <h1 className=''>AUTH</h1>
        </Link>
        <DarkModeToggle />
      </div>
      <div>
        {/* Links */}
        <Link href='/podcasts'>
          <p className=''>Podcasts</p>
        </Link>
        <Link href='/meetups'>
          <p className=''>Meetups</p>
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
