import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <section className='relative overflow-hidden  py-8 bg-slate-300  dark:bg-slate-600'>
      <div className='container relative z-10 mx-auto px-4'>
        <div className='-m-8 flex flex-wrap items-center justify-between'>
          <div className='w-auto p-8'>
            <Link to='#'>
              <div className='inline-flex items-center'>
                <span className='ml-4 text-lg font-bold'>Developed By </span>
              </div>
            </Link>
          </div>
          <div className='w-auto p-8'>
            <ul className='-m-5 flex flex-wrap items-center'>
              <li className='p-5'>
                <Link
                  to='https://www.linkedin.com/in/mrkuntalojha/'
                  target='_blank'
                >
                  KUNTAL OJHA
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Footer;
