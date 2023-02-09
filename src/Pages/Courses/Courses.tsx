import React from 'react';
import LeftCatagoriesOfCourses from './LeftCatagoriesOfCourses/LeftCatagoriesOfCourses';
import { BsFillGrid3X3GapFill, BsChevronDown } from "react-icons/bs";
import MainCourses from './MainCourses/MainCourses';

import homeBg from '../../Assets/homebg.png'
const Courses = () => {
    // const [courses, setCoursess] = useFormState([])
    // useEffect(() => {
    //     fetch(`https://recyclelib-server.vercel.app/courses`)
    //         .then(res => res.json())
    //         .then(data => setCoursess(data))
    // }, [])
    return (
        <div>
            {/* <div className=' pb-24 pt-36 text-center shadow-lg bg-no-repeat bg-top text-white font-poppins-em'
                style={{ backgroundImage: `url(${homeBg})` }}>
                <h1 className='text-4xl font-bold'>Our Courses</h1>
                <p className='font-semibold'>Home - Courses</p>
            </div> */}
            <div className='w-full flex justify-center items-center pt-20 font-poppins-em'>
                <div className='w-3/4 flex '>
                    {/* left catagories bar start  */}
                    <div className='w-1/3'>
                        <LeftCatagoriesOfCourses />
                    </div>
                    {/* left catagories bar end  */}

                    {/* content section start  */}
                    <div className='w-2/3'>
                        <div className='flex justify-between items-center'>
                            <div className='flex items-center gap-5'>
                                <BsFillGrid3X3GapFill />

                                <h1 className=' text-sm'>Found results</h1>
                            </div>
                            <div className='flex items-center gap-2'>
                                <h1 className=' text-sm'>Sort by </h1>
                                <BsChevronDown />
                            </div>
                        </div>
                        <MainCourses />
                    </div>
                    {/* content section end  */}

                </div>
            </div>


        </div >
    );
};

export default Courses;