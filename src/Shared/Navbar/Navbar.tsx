import React from 'react';
import { Link } from 'react-router-dom';
import fb from '../../Assets/facebook.png'
import ig from '../../Assets/instagram.png'
import tw from '../../Assets/twitter.png'
import yt from '../../Assets/youtube.png'

const Navbar = () => {
    return (
        <div className='flex items-center w-full pt-10 ease-in-out duration-300 fixed'>

            {/* logo and name section on navbar start */}
            <div className='w-full flex justify-center md:w-1/6'>
                <Link to='/' className="flex cursor-pointer items-center "  >
                    <img className="object-cover w-12" src="https://img.freepik.com/premium-vector/abstract-em-initials-monogram-logo-design-line-art-icon-business-template-simple-elegant_619996-206.jpg?w=2000" alt="logo" />
                    {/* <span className="text-lg font-black text-gray-900 z-20">EduManage</span> */}
                </Link>
            </div>
            {/* logo and name section on navbar end */}

            {/* route names start  */}
            <div className='w-full flex justify-start md:w-3/6 text-xs gap-5 font-medium'>
                <div>
                    <Link to='/'>
                        HOME
                    </Link>
                </div>
                <div>
                    <Link to='/'>
                        ABOUT
                    </Link>
                </div>
                <div>
                    <Link to='/'>
                        COURSE
                    </Link>
                </div>
                <div>
                    <Link to='/'>
                        INSTRUCTOR
                    </Link>
                </div>
                <div>
                    <Link to='/'>
                        NEWS
                    </Link>
                </div>
                <div>
                    <Link to='/'>
                        CONTRACT
                    </Link>
                </div>
            </div>
            {/* route names end  */}

            {/* auth section start */}
            <div className='text-xs w-1/6 flex justify-end items-center gap-2 font-medium'>
                <button>LOGIN</button>
                <button className='px-5 py-2 shadow-lg rounded-2xl bg-white hover:shadow-xl ease-in-out duration-300'>SIGN UP</button>
            </div>
            {/* auth section end */}

            {/* social icon start  */}
            <div className='w-1/6 flex justify-center items-center gap-2 font-medium'>
                <img className='w-4' src={fb} alt="" />
                <img className='w-4' src={ig} alt="" />
                <img className='w-4' src={tw} alt="" />
                <img className='w-4' src={yt} alt="" />
                
                
            </div>
            {/* social icon end  */}

        </div>
    );
};

export default Navbar;