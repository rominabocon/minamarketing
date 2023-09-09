import  { useState } from 'react';
import { Bars3BottomRightIcon, XMarkIcon } from '@heroicons/react/24/solid'
import { Link, Outlet } from 'react-router-dom';

const NavBar = () => {
    let Links =[
        {name:"Inicio",link:"/"},
        {name:"Quienes Somos",link:"/about-us"},
        {name:"Servicios",link:"/servicios"},
        
      ];
      let [open, setOpen] =useState(false);

    return (
      <>
        <div className=' w-full fixed top-0 left-0'>
          <div className='md:flex items-center justify-between bg-mina-green-200 py-4 md:px-10 px-7'>
            {/* logo section */}
            <div className='font-bold text-2xl cursor-pointer flex items-center gap-1'>
            <img src='/assets/MINA-LOGO.png' width={150} alt='Logo Mina Agencia de Marketing'/>
            </div>
            {/* Menu icon */}
            <div onClick={()=>setOpen(!open)} className='absolute right-8 top-6 cursor-pointer md:hidden w-7 h-7'>
                {
                    open ? <XMarkIcon/> : <Bars3BottomRightIcon />
                }
            </div>
            {/* linke items */}
            <ul className={`md:flex md:items-center md:pb-0 pb-12 absolute md:static  md:z-auto z-[-1] left-0 sm:bg-mina-green-200 w-full md:w-auto md:pl-0 pl-9 transition-all duration-500 ease-in ${open ? 'top-20' : 'top-[-490px]'}`}>
                {
                    Links.map((link) => (
                    <li key={link.name} className='md:ml-8 md:my-0 my-7 font-semibold'>
                        <Link to={link.link} className='text-mina-gris hover:text-mina-azul duration-500'>{link.name}</Link>
                    </li>))
                }
                <Link to='/contacto' className='btn bg-mina-azul text-white md:ml-8 font-semibold px-3 py-1 rounded duration-500 md:static'>Contacto</Link>
            </ul>
            {/* button */}
           </div>
           <Outlet/>
        </div>
        </>
    );
};

export default NavBar;