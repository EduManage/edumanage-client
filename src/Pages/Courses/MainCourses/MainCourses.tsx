import React, { useEffect, useState, useContext } from 'react';
import { AiFillStar } from "react-icons/ai";
import { MdOutlinePersonOutline } from "react-icons/md";

import { Link } from 'react-router-dom';
import Loader from '../../../Shared/Loader/Loader';
import { AuthContext } from '../../../UserContext/UserContext';


const MainCourses = () => {
    const { loading } = useContext(AuthContext);
    const [courses, setCourses] = useState([]);
    // const { data: courses = [], refetch } = useQuery({
    //     queryKey: ['courses'],
    //     queryFn: () => fetch(`https://recyclelib-server.vercel.app/courses`)
    //         .then(res => res.json())
    // })
    interface course {
        title: string;
        price: number;
        rating: number;
        Author: string;
        Authorimg: string;
        reviews: number;
        persons: number;
        details: string;
        category: string;
        _id: number;
        picture: string;

    }
    useEffect(() => {
        fetch(`https://recyclelib-server.vercel.app/courses`)
            .then(res => res.json())
            .then(data => setCourses(data))
    }, [])
    if (courses.length === 0) {
        return <Loader></Loader>
    }

    return (
        <div>

            {
                courses?.map((course: course, i) => <div key={i}>


                    <div className='flex w-full my-5 gap-5 shadow-md hover:shadow-lg ease-in-out duration-300 font-poppins-em mx-5  hover:mx-0'>
                        <div className='w-2/5'>
                            <img src={course.picture} alt="" />
                        </div>
                        <div className='w-3/5 '>

                            <div className=''>
                                <div className='flex justify-between'>
                                    <h1 className='bg-rose-500 py-1 px-2 text-white text-xs font-medium rounded-lg'>{course.category}</h1>

                                    <div className='flex items-center text-xs'>
                                        <h1>{course.rating}</h1>
                                        <AiFillStar className='text-orange-500 ml-1 mr-3' />
                                        <h1>{course.reviews} Review</h1>
                                    </div>
                                </div>
                                <Link to={`/courses/${course._id}`}>
                                    <h1 className='font-semibold py-2 hover:text-blue-700'>{course.title}</h1>
                                    <p className='text-xs'>{course?.details.length > 150 ? course?.details.slice(0, 90) + '...' : course?.details}</p>
                                    {/* {details.length } */}
                                </Link>
                                <div className="flex mt-2 items-center justify-between">
                                    <div className='flex items-center'>
                                        <img
                                            className="w-8 rounded-full mr-2"
                                            src={course.Authorimg}
                                            alt=""
                                        />
                                        <h1 className='text-sm mr-2'>by </h1>
                                        <h1 className="font-semibold text-sm text-rose-500">{course.Author} </h1>
                                    </div>
                                    <div className='flex gap-2 items-center '>
                                        <MdOutlinePersonOutline />
                                        <h1 className='text-xs mr-2'>{course.persons}</h1>
                                        <h1 className='text-teal-600 font-semibold'>{course.price}</h1>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>

                </div>)





            }
        </div>
    );
};

export default MainCourses;