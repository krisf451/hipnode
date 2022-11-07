import { useState, useEffect } from 'react';
import { FiMoon } from 'react-icons/fi';
import { BsFillSunFill } from 'react-icons/bs';
import { useTheme } from 'next-themes';

const DarkModeToggle = () => {
  const { theme, setTheme } = useTheme();
  const [isDarkmode, setIsDarkmode] = useState(false);

  useEffect(() => {
    if (theme === 'light') {
      setIsDarkmode(false);
    } else {
      setIsDarkmode(true);
    }
  }, [theme]);

  return (
    <div className='w-[160px] h-12 bg-white dark:bg-[#3b3e44] flex text-2xl rounded-xl justify-between items-center px-2'>
      <div className={`rounded-xl h-10 flex justify-center ${!isDarkmode ? 'dark:bg-cBlack-600 ' : ''}`}>
        <div
          onClick={() => setTheme('light')}
          className={`${
            !isDarkmode ? 'shadow-md' : 'text-gray-300'
          } h-full w-[60px] flex justify-center rounded-xl items-center cursor-pointer dark:text-white`}
        >
          <BsFillSunFill />
        </div>
      </div>
      <div className={`rounded-xl h-10 flex justify-center items-center ${isDarkmode ? 'bg-[#474a51]' : ''}`}>
        <div
          onClick={() => setTheme('dark')}
          className={`${
            isDarkmode ? 'shadow-md' : 'text-gray-400'
          } h-full w-[60px] flex justify-center rounded-xl p-1 items-center cursor-pointer dark:text-white`}
        >
          <FiMoon />
        </div>
      </div>
    </div>
  );
};

export default DarkModeToggle;
