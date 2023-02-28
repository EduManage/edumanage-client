import React, { useState } from 'react';
import LeftCatagoriesOfCourses from './LeftCatagoriesOfCourses/LeftCatagoriesOfCourses';
import { BsFillGrid3X3GapFill, BsChevronDown } from "react-icons/bs";
import MainCourses from './MainCourses/MainCourses';
const Courses = () => {
    // const [courses, setCoursess] = useFormState([])
    // useEffect(() => {
    //     fetch(`https://recyclelib-server.vercel.app/courses`)
    //         .then(res => res.json())
    //         .then(data => setCoursess(data))
    // }, [])

    // style={{ backgroundImage: `url('https://rainbowit.net/html/histudy/assets/images/bg/bg-image-10.jpg')` }}
    const [search, setSearch] = useState('')
    const handleSearch = (e:any)=>{
        e.preventDefault();
        const searchValue = e.target.value;
        setSearch(searchValue)

    }
    return (
        <div className='w-full'>
            <div className='h-screen bg-gradient-to-b from-white via-indigo-200 to-indigo-400 justify-center items-start flex w-full '>
                <div className='w-4/6 flex flex-col gap-3 pt-36 text-start text-black font-poppins-em '
                >
                    <p className='font-semibold text-black/40'>Home - All Courses</p>

                    <h1 className='text-4xl font-bold'>All Courses</h1>
                    <p className='font-medium text-sm'>Courses that help beginner to become the true unicorns.</p>


                    {/* search here  */}
                    <div className="relative flex items-center border-2 w-2/6 h-8 rounded-lg focus-within:shadow-lg mt-3 text-black bg-none overflow-hidden">
                        <input
                            onChange={handleSearch}
                            className="peer h-full w-full outline-none text-sm text-gray-700 pr-2 bg-none pl-3"
                            type="text"
                            id="search"
                            placeholder="Search something.." />


                        <div className="grid place-items-center h-full w-12 text-black">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                            </svg>
                        </div>


                    </div>

                    {/* search here  */}


                    <div className='flex items-start gap-5 '>
                        <div>
                            <label className="label"> <span className="label-text">Sort By</span></label>
                            <select
                                className=" select select-bordered select-sm w-48 outline-none max-w-xs">
                                <option defaultValue={'Default'} >Default</option>
                                <option>By Name</option>

                            </select>
                        </div>
                        <div>
                            <label className="label"> <span className="label-text">Sort By Author</span></label>
                            <select
                                className=" select select-bordered select-sm w-48 outline-none max-w-xs">
                                <option defaultValue={'Default'} >Default</option>
                                <option>By Name</option>

                            </select>
                        </div>
                        <div>
                            <label className="label"> <span className="label-text">Sort By Offer</span></label>
                            <select
                                className=" select select-bordered select-sm w-48 outline-none max-w-xs">
                                <option defaultValue={'Paid'} >Paid</option>
                                <option>Free</option>

                            </select>
                        </div>
                        <div>
                            <label className="label"> <span className="label-text">Sort By Category</span></label>
                            <select
                                className=" select select-bordered select-sm w-48 outline-none max-w-xs">
                                <option defaultValue={'Everything'} >Everything</option>
                                <option>Web Development</option>
                                <option>ChatGPT</option>

                            </select>
                        </div>

                    </div>

                </div>
            </div>

            <div className='w-full flex justify-center items-center mt-[-200px] font-poppins-em'>
                <div className='w-4/6'>
                    {/* content section start  */}

                    <MainCourses />

                    {/* content section end  */}

                </div>
            </div>


        </div >
    );
};

export default Courses;