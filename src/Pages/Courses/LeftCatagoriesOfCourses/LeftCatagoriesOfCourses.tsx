import React from 'react';

const LeftCatagoriesOfCourses = () => {
    return (
        <div>
            <h1>Search in Courses</h1>
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


            <h1>Category</h1>
            <div className='flex flex-col justify-start items-start py-5 text-sm'>
                <button>Design & Illustration</button>
                <button>Web Development</button>
                <button>Management</button>
                <button>Music</button>
                <button>Photography</button>
                <button>Sports</button>     
            </div>
            <h1>Price Range</h1>

        </div>
    );
};

export default LeftCatagoriesOfCourses;