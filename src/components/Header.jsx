import React from 'react';
import { NavLink } from 'react-router-dom';

function Header() {
  return (
    <div className='text-white'>
      <header className='sticky z-20 mt-5 '>
        <nav className='px-4 lg:px-6 py-4 mx-auto max-w-screen-xl'>
          <div className='items-center w-full lg:flex lg:w-auto lg:order-1 flex justify-center'>
            <ul className='flex gap-10 space-x-1  border-solid shadow-xl rounded-full p-3 bg-gray-500/30 backdrop-blur-xl'>
              <li>
                <NavLink
                to={'/'}
                  className={({isActive}) => 
                    `block py-1 pr-4 pl-4 duration-200 ${isActive ? "text-white " : "text-gray-500 "} border-none rounded-full hover:bg-white lg:border-0 hover:text-black`
                  }
                >
                  Counter
                </NavLink>
              </li>
              <li>
                <NavLink  
                to={'github'}
                  className={({isActive}) => 
                    `block py-1 pr-4 pl-4 duration-200 ${isActive ? "text-white" : "text-gray-500"} border-none rounded-full hover:bg-white   lg:border-0 hover:text-black`
                  }
                >
                  Github
                </NavLink>
              </li>
              <li>
                <NavLink
                to={'passwordgenerator'}
                  className={({isActive}) => 
                    `block py-1 pr-4 pl-4 duration-200 ${isActive ? "text-white" : "text-gray-500"} border-none rounded-full hover:bg-white   lg:border-0 hover:text-black`
                  }
                >
                  Password Generator
                </NavLink>
              </li>
            </ul>
            </div>
        </nav>
      </header>
    </div>
  );
}

export default Header;
