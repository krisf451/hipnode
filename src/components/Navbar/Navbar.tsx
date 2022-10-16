import Link from 'next/link';

const Navbar = () => {
  console.log('nav');
  return (
    <div className='h-16 w-full bg-gray-100 justify-between items-center text-black flex'>
      <div>
        <Link href='/'>
          <h1>HOME</h1>
        </Link>
      </div>
      <div>
        {/* Links */}
        <Link href='/podcasts'>
          <p>Podcasts</p>
        </Link>
        <Link href='/meetups'>
          <p>Meetups</p>
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
