import React from 'react';
import './InstructorDashboard.css'
import { AiFillFolderAdd, AiOutlineStar } from "react-icons/ai";
import { MdOndemandVideo } from 'react-icons/md';
import { RxDashboard } from 'react-icons/rx';
import { Link } from 'react-router-dom';
const InstructorDashboard = () => {
    return (
        <div className='mx-5'>
            <div className='flex flex-row items-center gap-5 justify-center w-full'>
                <div className='bg-rose-100 p-16 rounded-xl text-center'>
                    <h1 className='p-10 rounded-full bg-rose-400 text-2xl'>3</h1>
                    <h1 className='text-lg font-semibold'>Courses</h1>

                </div>
                <div className='bg-rose-100'>
                    <h1 className='p-10 rounded-full bg-rose-400'>3</h1>
                    <h1 className='text-lg font-semibold'>Courses</h1>

                </div>
                <div className='bg-rose-100'>
                    <h1 className='p-10 rounded-full bg-rose-400'>3</h1>
                    <h1 className='text-lg font-semibold'>Courses</h1>

                </div>

            </div>

        </div>
    );
};

export default InstructorDashboard;