import React, { useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import { AiFillStar } from "react-icons/ai";
import { FaHeart } from "react-icons/fa";
import { MdOutlinePersonOutline, MdOutlineClass, MdArticle, MdDownload, MdOutlineAssignment } from "react-icons/md";
import { BiBookContent } from "react-icons/bi";
import { TbLanguage } from "react-icons/tb";
import sharing from '../../../Assets/sharing.png'
import { useFormState } from 'react-hook-form';

const SingleCourse = () => {
    const courseDetails: any = useLoaderData();
    const { price, category, title, rating, reviews, Authorimg, Author, persons, picture, details, totallecture, duiration, articles, downloadbleitem, asssignment, language } = courseDetails;
    // console.log(SingleCourse)

    const [isClicked, setIsClicked] = useState(false);

    const handleClick = () => {
        setIsClicked(!isClicked);


        // fetch(`https://eoc-server.vercel.app/status/${postInfo._id}`, {
        //     method: 'PUT',
        //     headers: {
        //         'content-type': 'application/json'
        //     },
        //     body: JSON.stringify(currentLike)
        // })
        //     .then(res => res.json())
        //     .then(data => {
        //         console.log(data);

        //         // refetch();
        //         // form.reset();

        //     })

    };
    return (
        <div>

            <div className='w-full flex justify-center items-center pt-20 font-poppins-em'>
                <div className='w-3/4 flex gap-10'>


                    {/* content section start  */}
                    <div className='w-2/3 '>
                        <div className=''>
                            <div className='w-1/3'>
                                <h1 className='bg-rose-500 py-1 text-center px-2 text-white text-xs font-medium rounded-lg'>{category}</h1>
                            </div>
                            <h1 className='font-semibold pt-2 text-3xl'>{title}</h1>
                            <div className='flex items-center justify-between'>
                                <div className='flex items-center text-xs gap-2 py-5'>
                                    <img
                                        className="w-8 rounded-full "
                                        src={Authorimg}
                                        alt=""
                                    />
                                    <h1 className='text-sm '>by </h1>
                                    <h1 className="font-semibold text-sm text-rose-500">{Author} </h1>
                                    <div className='flex items-center'>
                                        <h1>{rating}</h1>
                                        <AiFillStar className='text-orange-500 ml-1 ' />
                                    </div>
                                    <h1>({reviews} Review)</h1>
                                    <MdOutlinePersonOutline />
                                    <h1 className='text-xs '>{persons}</h1>
                                </div>
                                <div>
                                    <button onClick={handleClick} className={`flex items-center gap-2 text-sm`}>
                                        <FaHeart className={` ${isClicked ? 'text-teal-600' : 'text-black'} `} />
                                        {
                                            isClicked ? <h1>Added to wishlist</h1> : <h1>Add to wishlist</h1>
                                        }

                                    </button>
                                </div>
                            </div>
                        </div>
                        <div className='w-full'>
                            <img className='w-full' src={picture} alt="" />
                            <p className='mt-5 border p-5 text-sm'>{details}</p>
                            <img src={sharing} className='my-10 w-1/2' alt="" />
                        </div>
                    </div>
                    {/* content section end  */}

                    {/* Right catagories bar start  */}
                    <div className='w-1/3'>
                        <div className='flex items-center justify-center pt-20 gap-5'>
                            <h1 className='text-sm'>Price : </h1>
                            <h1 className='text-teal-600 text-2xl font-semibold'>{price}</h1>
                        </div>
                        <div className='flex flex-col text-sm p-8 text-black/80 font-medium'>

                            <div className='flex items-center justify-between mb-2'>
                                <div className='flex items-center'>
                                    <BiBookContent className='w-8 text-teal-600' />
                                    <h1>Total lecture</h1>
                                </div>

                                <h1>{totallecture}</h1>
                            </div>
                            <div className='flex items-center justify-between mb-2 '>
                                <div className='flex items-center'>
                                    <MdOutlineClass className='w-8 text-teal-600' />
                                    <h1>Duration</h1>
                                </div>

                                <h1>{duiration}</h1>
                            </div>
                            <div className='flex items-center justify-between mb-2'>
                                <div className='flex items-center'>
                                    <MdArticle className='w-8 text-teal-600' />
                                    <h1>Articles</h1>
                                </div>

                                <h1>{articles}</h1>
                            </div>
                            <div className='flex items-center justify-between mb-2'>
                                <div className='flex items-center'>
                                    <MdDownload className='w-8 text-teal-600' />
                                    <h1>Downloadable item</h1>
                                </div>

                                <h1>{downloadbleitem}</h1>
                            </div>
                            <div className='flex items-center justify-between mb-2'>
                                <div className='flex items-center'>
                                    <MdOutlineAssignment className='w-8 text-teal-600' />
                                    <h1>Assignment</h1>
                                </div>

                                <h1>{asssignment}</h1>
                            </div>
                            <div className='flex items-center justify-between mb-2'>
                                <div className='flex items-center'>
                                    <TbLanguage className='w-8 text-teal-600' />
                                    <h1>Language</h1>
                                </div>

                                <h1>{language}</h1>
                            </div>

                            <div className='flex justify-center my-3'>
                                <button className='bg-rose-500 py-3  text-center px-5 text-white text-lg  w-full hover:bg-rose-600 ease-in-out duration-300'>Buy Now</button>
                            </div>

                        </div>

                    </div>
                    {/* Right catagories bar end  */}

                </div>
            </div>
        </div>
    );
};

export default SingleCourse;