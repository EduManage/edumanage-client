import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from '../../Shared/Navbar/Navbar';
import './InstructorDashboard.css'
import { AiFillFolderAdd, AiOutlineStar } from "react-icons/ai";
import { MdOndemandVideo } from 'react-icons/md';
import { FiSettings } from 'react-icons/fi';
import { RxDashboard } from 'react-icons/rx';
import { Link } from 'react-router-dom';


const InstructorDashboardLayout = () => {
    return (
        <div>
            <Navbar />
            <div className='pt-20 font-poppins-em'>
                <div className='h-72 bg-gradient-to-b from-white via-indigo-200 to-indigo-400 '>

                </div>
                <div className='mx-28 h-72 rounded-xl bg-cover bg-no-repeat mt-[-200px] z-20' style={{ backgroundImage: `url('https://rainbowit.net/html/histudy/assets/images/bg/bg-image-22.jpg')` }}>
                    <div className='flex items-end justify-start ml-14 pb-7 h-full w-full'>
                        <div className='flex justify-center items-center gap-7'>
                            <img className='w-28 rounded-full border-4 border-white ' src="https://rainbowit.net/html/histudy/assets/images/team/avatar.jpg" alt="" />
                            <h1 className='text-xl font-bold text-white '>John Dae</h1>
                        </div>
                    </div>
                </div>
                <div className='mx-28 flex mt-7 mb-20'>
                    <div className='w-1/5 border-4 rounded-xl h-fit'>
                        <div className='p-5 flex flex-col gap-3 items-start'>
                            <Link to='/instructordashboard'><button className='flex justify-center items-center gap-2 font-bold text-black/50 hover:text-blue-500'><RxDashboard /><h1>Dashboard</h1></button></Link>
                            <hr className='h-[1px] w-full bg-black/50' />
                            <Link to='/instructordashboard/mycourses'><button className='flex justify-center items-center gap-2 font-bold text-black/50 hover:text-blue-500'><MdOndemandVideo /><h1>My Courses</h1></button></Link>
                            <hr className='h-[1px] w-full bg-black/50' />
                            <Link to='/instructordashboard/addcourses'> <button className='flex justify-center items-center gap-2 font-bold text-black/50 hover:text-blue-500'><AiFillFolderAdd /><h1>Add Courses</h1></button></Link>
                            <hr className='h-[1px] w-full bg-black/50' />
                            <Link to='/instructordashboard/reviews'><button className='flex justify-center items-center gap-2 font-bold text-black/50 hover:text-blue-500'><AiOutlineStar /><h1>Reviews</h1></button></Link>
                            <hr className='h-[1px] w-full bg-black/50' />
                            <Link to='/instructordashboard/reviews'><button className='flex justify-center items-center gap-2 font-bold text-black/50 hover:text-blue-500'><FiSettings /><h1>Settings</h1></button></Link>
                        </div>
                    </div>
                    <div className='w-4/5'>
                        <Outlet />
                    </div>
                </div>

            </div>

        </div>
    );
};

export default InstructorDashboardLayout;