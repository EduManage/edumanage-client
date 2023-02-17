import React, { useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import { AiFillStar } from "react-icons/ai";
import { FaHeart } from "react-icons/fa";
import { MdOutlinePersonOutline, MdOutlineClass, MdArticle, MdDownload, MdOutlineAssignment } from "react-icons/md";
import { BiBookContent } from "react-icons/bi";
import { TbLanguage } from "react-icons/tb";
import sharing from '../../../Assets/sharing.png'
import { toast } from 'react-hot-toast';
import { BsCheckLg } from 'react-icons/bs';

const SingleCourse = () => {
    const courseDetails: any = useLoaderData();
    const { price,
        lectures,
        time,
        skillLevel,
        language,
        previewLink,
        title,
        titleDetails,
        categories,
        w1,
        w2,
        w3,
        w4,
        w5,
        w6,
        w7,
        w8,
        r1,
        r2,
        r3,
        r4,
        picture,
        authorName,
        authorImage,
        _id,
        rating } = courseDetails;
    console.log(courseDetails)

    const [isClicked, setIsClicked] = useState(false);

    const handleClick = () => {
        setIsClicked(!isClicked);
        // const id = _id;
        // const ct = category;
        // const pr = price;
        // const ttl = title;
        const info = {
            _id,
            categories,
            price,
            title,
            picture
        }


        fetch(`http://localhost:5000/wishlist`, {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(info)
        })
            .then(res => res.json())
            .then(data => {
                if (data.acknowledged === true) {
                    toast.success("Course successfully added to wishlist");
                }


                // refetch();
                // form.reset();

            })

    };
    return (
        <div>

            <div className='w-full flex justify-center items-center pt-20 font-poppins-em'>
                <div className='w-3/4 flex gap-10'>


                    {/* content section start  */}
                    <div className='w-2/3 '>
                        <div className=''>
                            <p className='font-semibold text-sm text-black/40 mb-5 mt-16'>Home - {categories}</p>
                            
                            <h1 className='font-semibold pt-2 text-3xl mb-5'>{title}</h1>
                            <p className='mt-1  text-sm mb-5'>{titleDetails}</p>
                            <div className='flex items-start justify-between'>
                                <div className='flex items-center text-xs gap-2 pb-10'>
                                    <img
                                        className="w-8 rounded-full "
                                        src={authorImage}
                                        alt=""
                                    />
                                    <h1 className='text-sm '>by </h1>
                                    <h1 className="font-semibold text-sm text-rose-500">{authorName} </h1>
                                    <div className='flex items-center'>
                                        <h1>{rating}</h1>
                                        <AiFillStar className='text-orange-500 ml-1 ' />
                                    </div>
                                    {/* <h1>({reviews} Review)</h1> */}
                                    <MdOutlinePersonOutline />
                                    {/* <h1 className='text-xs '>{persons}</h1> */}
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

                            {/* what you wil learn section */}
                            <h1 className='text-2xl font-semibold p-5'>What you will learn in</h1>
                            <div className='flex gap-2 items-start mb-2'>
                                <BsCheckLg className='text-green-500' />
                                <p className=''>{w1}</p>
                            </div>
                            <div className='flex gap-2 items-start mb-2'>
                                <BsCheckLg className='text-green-500' />
                                <p className=''>{w2}</p>
                            </div>
                            <div className='flex gap-2 items-start mb-2'>
                                <BsCheckLg className='text-green-500' />
                                <p className=''>{w3}</p>
                            </div>
                            <div className='flex gap-2 items-start mb-2'>
                                <BsCheckLg className='text-green-500' />
                                <p className=''>{w4}</p>
                            </div>
                            <div className='flex gap-2 items-start mb-2'>
                                <BsCheckLg className='text-green-500' />
                                <p className=''>{w5}</p>
                            </div>
                            <div className='flex gap-2 items-start mb-2'>
                                <BsCheckLg className='text-green-500' />
                                <p className=''>{w6}</p>
                            </div>
                            <div className='flex gap-2 items-start mb-2'>
                                <BsCheckLg className='text-green-500' />
                                <p className=''>{w7}</p>
                            </div>
                            <div className='flex gap-2 items-start mb-2'>
                                <BsCheckLg className='text-green-500' />
                                <p className=''>{w8}</p>
                            </div>






                            <h1 className='text-2xl font-semibold p-5'>Requirements</h1>
                            <div className='flex gap-2 items-start mb-2'>
                                <BsCheckLg className='text-green-500' />
                                <p className=''>{r1}</p>
                            </div>
                            <div className='flex gap-2 items-start mb-2'>
                                <BsCheckLg className='text-green-500' />
                                <p className=''>{r2}</p>
                            </div>
                            <div className='flex gap-2 items-start mb-2'>
                                <BsCheckLg className='text-green-500' />
                                <p className=''>{r3}</p>
                            </div>
                            <div className='flex gap-2 items-start mb-2'>
                                <BsCheckLg className='text-green-500' />
                                <p className=''>{r4}</p>
                            </div>



                            <img src={sharing} className='my-10 w-1/2' alt="" />

                        </div>
                    </div>
                    {/* content section end  */}

                    {/* Right catagories bar start  */}
                    <div className='w-1/3 fixed right-5 bg-white p-3 rounded-lg'>
                        <div className='flex items-center justify-center pt-20 gap-5'>
                            <h1 className='text-sm'>Price :</h1>
                            <h1 className='text-teal-600 text-2xl font-semibold'>${price}</h1>
                        </div>
                        <div className='flex flex-col text-sm p-8 text-black/80 font-medium'>

                            <div className='flex items-center justify-between mb-2'>
                                <div className='flex items-center'>
                                    <BiBookContent className='w-8 text-teal-600' />
                                    <h1>Total lecture</h1>
                                </div>

                                <h1>{lectures}</h1>
                            </div>
                            <div className='flex items-center justify-between mb-2 '>
                                <div className='flex items-center'>
                                    <MdOutlineClass className='w-8 text-teal-600' />
                                    <h1>Duration</h1>
                                </div>

                                <h1>10h 30m</h1>
                            </div>

                            {/* <div className='flex items-center justify-between mb-2'>
                                <div className='flex items-center'>
                                    <MdDownload className='w-8 text-teal-600' />
                                    <h1>Downloadable item</h1>
                                </div>

                                <h1>{downloadbleitem}</h1>
                            </div> */}
                            <div className='flex items-center justify-between mb-2'>
                                <div className='flex items-center'>
                                    <MdOutlineAssignment className='w-8 text-teal-600' />
                                    <h1>Assignment</h1>
                                </div>

                                <h1>15</h1>
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