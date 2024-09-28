// Home.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';

const Home = () => {
  return (
    <div className='min-h-screen h-min  '>
      <div className='flex flex-col items-center justify-center'>
        <div>
          <h1 className='scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl m-10 mt-20 pt-20'>
            Hi!, Welcome to my Assignment Portal
          </h1>
        </div>
        <div>
          <Link to='/task'>
            <Button variant='default' className='align-text-bottom'>
              GO TO TASK
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Home;
