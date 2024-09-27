import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import { ModeToggle } from '@/theme/mode-toggle';

const ChefHeader = () => {
  return (
    <div className='text-bold text-xl sticky top-0 z-50'>
      <div className='flex items-center justify-between text-center h-20 px-4  bg-slate-300 dark:bg-slate-600 '>
        {/* Left section (Logo) */}
        <div className='flex items-center'>
          <Link to='/'>
            <img src='logo.png' alt='Logo' width={70} height={70} />
          </Link>
        </div>

        {/* Center section (Nav Links) */}
        <div className='flex items-center space-x-4 flex-grow justify-center '>
          <NavLink
            to='/'
            // className={({ isActive }) =>
            //   isActive ? 'text-yellow-500' : 'text-white'
            // }
          >
            Home
          </NavLink>
        </div>

        {/* Dark Mode and Light Mode */}
        <div className='flex items-center px-4'>
          <ModeToggle />
        </div>
      </div>
    </div>
  );
};

export default ChefHeader;
