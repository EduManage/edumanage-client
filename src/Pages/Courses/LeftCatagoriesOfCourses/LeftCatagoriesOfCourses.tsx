import React from 'react';
import { BiCheckbox, BiCheckboxSquare } from "react-icons/bi";

const LeftCatagoriesOfCourses = () => {
    return (
        <div>
            <h1 className='text-lg font-semibold'>Search in Courses</h1>
            {/* search section  */}
            <div className='w-3/4 mb-5 mt-2 '>
                <div className="relative flex items-center border-2 w-full h-8 rounded-lg focus-within:shadow-lg bg-white overflow-hidden">
                    <div className="grid place-items-center h-full w-12 text-gray-300">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                        </svg>
                    </div>

                    <input
                        className="peer h-full w-full outline-none text-sm text-gray-700 pr-2"
                        type="text"
                        id="search"
                        placeholder="Search something.." />
                </div>
            </div>


            <h1 className='text-lg font-semibold'>Category</h1>
            <div className='flex flex-col justify-start items-start py-5 text-sm'>
                
                <div className='flex items-center gap-2'>
                    <BiCheckboxSquare className='text-lg text-teal-600'/>
                    <button>All</button>
                </div>
                <div className='flex items-center gap-2'>
                    <BiCheckbox className='text-lg text-teal-600' />
                    <button>Design & Illustration</button>
                </div>
                <div className='flex items-center gap-2'>
                    <BiCheckbox className='text-lg text-teal-600' />
                    <button>Web Development</button>
                </div>
                <div className='flex items-center gap-2'>
                    <BiCheckbox className='text-lg text-teal-600' />
                    <button>Management</button>
                </div>
                <div className='flex items-center gap-2'>
                    <BiCheckbox className='text-lg text-teal-600' />
                    <button>Photography</button>
                </div>
                <div className='flex items-center gap-2'>
                    <BiCheckbox className='text-lg text-teal-600' />
                    <button>Sports</button>
                </div>
                <div className='flex items-center gap-2'>
                    <BiCheckbox className='text-lg text-teal-600' />
                    <button>Music</button>
                </div>
               
            </div>
            <h1 className='text-lg font-semibold'>Price Range</h1>
            <input type="range" min="0" max="100" value="40" className="range range-xs w-1/2" />

        </div>
    );
};

export default LeftCatagoriesOfCourses;