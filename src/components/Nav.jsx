import { useState } from "react";
import { hamburger } from "../assets/icons";
import { headerLogo } from "../assets/images";
import { navLinks } from "../constants";

const Nav = () => {

  const [mobileNav, setMobileNav] = useState(false)

  return (
    <header className='padding-x py-8 fixed z-50 w-full bg-gray-100 shadow-xl '>
      <nav className='flex justify-between items-center max-container'>
        <a href='/'>
          <img
            src={headerLogo}
            alt='logo'
            width={129}
            height={29}
            className='m-0 w-[129px] h-[29px]'
          />
        </a>
        <ul className={`flex-1 flex justify-center items-center gap-16 mobilenav 
        ${mobileNav ? 'showmobilenav' : ''}`}>
          {navLinks.map((item) => (
            <li key={item.label}>
              <a
                href={item.href}
                className='font-montserrat leading-normal text-lg text-slate-gray'
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>
        <div className='flex gap-2 text-lg leading-normal font-medium font-montserrat max-lg:hidden wide:mr-24'>
          <a href='/'>Sign in</a>
          <span>/</span>
          <a href='/'>Explore now</a>
        </div>
        <div className='hidden max-lg:block z-50 cursor-pointer' onClick={() => setMobileNav(prev => !prev)}>
          <img src={hamburger} alt='hamburger icon' width={25} height={25} />
        </div>
      </nav>
    </header>
  );
};

export default Nav;
