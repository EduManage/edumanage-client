import React from 'react';
import blob from '../../Assets/blobHeaderShape.png';
import headerImg from '../../Assets/homepagePicture.png';
import book from '../../Assets/book1.png';
import teacher from '../../Assets/Teacher1.png';
import cap from '../../Assets/cap1.png';
import './Home.css'
import JoinWithUs from '../../Components/JoinWithUsBanner/JoinWithUs';
import JoinToday from '../../Components/joinToday/joinToday';
import HeroSec1 from '../../Components/HeroSec1/HeroSec1';
import HeroSec2 from '../../Components/HeroSec2/HeroSec2';
import wave1 from "../../Assets/waveOpacity-8.svg";
import wave2 from "../../Assets/wave-2.svg";
import "./Home.css";
import AOS from "aos";
import "aos/dist/aos.css"; // You can also use <link> for styles



const Home = () => {
    return (
        <div className="">
            {/* Header section start  */}

            <div
                className="bg-no-repeat bg-right-top pt-20 pb-10 flex"
                style={{ backgroundImage: `url(${blob})` }}
            >
                <div className=" md:w-1/6"></div>
                <div className="w-full md:w-5/6 flex flex-col md:flex-row items-center  p-10 md:px-0 md:py-20 ">
                    <div className="w-full md:w-2/5 pb-10 md:pb-0">
                        <h3 className="text-lg text-rose-500/80 font-semibold font-poppins-em">
                            LEARN WITH EM
                        </h3>
                        <div className="font-semibold text-4xl text-black/80 py-3 font-poppins-em">
                            <h1>Start Learning</h1>
                            <h1>Your Dream Course</h1>
                            <h1>in EduManage Today</h1>
                        </div>
                        <div className="text-xs text-black/70 font-medium ">
                            <p>Being a student is easy. Learning requires actual work.</p>
                            <p>The great aim of education is not knowledge but action.</p>
                        </div>
                        <button className="bg-gradient-to-r  from-teal-300 to-blue-300 mt-5 px-8 py-2 shadow-teal-300/30 hover:shadow-teal-300/30 shadow-lg rounded-2xl text-xs text-white  font-medium hover:shadow-xl ease-in-out duration-300">
                            EXPLORE
                        </button>
                    </div>
                    <div className="w-full md:w-3/5">
                        <img className="px-5" src={headerImg} alt="" />
                    </div>
                </div>
                
            </div>
            {/* Header section end  */}

            <div className="text-center font-poppins-em py-16">
                <h3 className="text-md text-rose-500/80 font-semibold  pb-5">
                    WE ARE AWESOME
                </h3>
                <h1 className="text-3xl font-bold  pb-8">
                    15 Years of Experience <br /> in Education and Teaching
                </h1>
                <p className="text-xs text-black/90">
                    “The more that you read, the more things you will know.
                    <br /> The more that you learn, the more places you’ll go.”
                </p>
            </div>

            {/* 3 column cards start */}

            <div className="flex flex-col items-center bg-no-repeat bg-bottom" style={{ backgroundImage: `url(${wave1})` }}>


                <div className="w-full md:w-4/6 flex flex-col md:flex-row gap-5 text-center mb-10 font-poppins-em p-10 md:px-0">

                    <div className='p-5 shadow-lg rounded-2xl bg-white'
                        data-aos="fade-up"
                        data-aos-duration="500"
                    >
                        <img className='p-5' src={book} alt="" />
                        <h1 className='pb-5 font-semibold'>Learn Everything</h1>
                        <p className='text-xs text-black/90'>Obtaining an official recognition of one's knowledge, skills, and abilities through a certification program.</p>
                        <button className='text-teal-500 text-sm pt-8'>READ MORE</button>
                    </div>
                    <div
                        className="p-5 shadow-lg rounded-2xl bg-white"
                        data-aos="fade-up"
                        data-aos-duration="500"
                    >
                        <img className="p-5" src={teacher} alt="" />
                        <h1 className="pb-5  font-semibold">Top Quality Education</h1>
                        <p className="text-xs text-black/90">
                            Providing students with personalized, learning experiences in a
                            challenging and supportive environment.
                        </p>
                        <button className="text-teal-500 text-sm pt-8">READ MORE</button>
                    </div>
                    <div
                        className="p-5 shadow-lg rounded-2xl bg-white"
                        data-aos="fade-up"
                        data-aos-duration="500"
                    >
                        <img className="p-5" src={cap} alt="" />
                        <h1 className="pb-5 font-semibold">Get Certified</h1>
                        <p className="text-xs text-black/90">
                            Obtaining an official recognition of one's knowledge, skills, and
                            abilities through a certification program.
                        </p>
                        <button className="text-teal-500 text-sm pt-8">READ MORE</button>

                    </div>



                </div>

            </div>

            {/* 3 column cards end */}


            {/* className=" bg-no-repeat bg-top" style={{ backgroundImage: `url(${wave2})` }} */}
            <div >
                <div className="text-center font-poppins-em py-16 px-5 md:px-0">
                    <h3 className="text-md text-rose-500/80 font-semibold  pb-5">
                        START LEARNING TODAY
                    </h3>
                    <h1 className="text-3xl font-bold  pb-8">
                        Pick A Course From Category
                    </h1>
                    <p className="text-xs text-black/90">
                        “The more that you read, the more things you will know.
                        <br /> The more that you learn, the more places you'll go.”
                    </p>
                </div>


                <div className='w-1/6'></div>

                {/* pic a course card section start  */}

                <div className="flex justify-center text-white font-poppins-em mb-16 px-3 md:px-0">
                    <div className="w-full md:w-4/6 flex flex-col lg:flex-row  justify-center lg:gap-5">


                        <div className="flex lg:w-1/2 justify-center gap-5 mb-5 lg:mb-0 ">
                            {/* card col 1 */}
                            <div className="w-1/2">
                                <div className="mb-5 w-full h-48 border bg-gradient-to-br hover:to-indigo-800 from-indigo-400 to-indigo-700 rounded-lg ">
                                    <div className="p-5">
                                        <h1 className="text-lg">Programming</h1>
                                        <h2 className="text-sm">22 Courses</h2>
                                    </div>
                                </div>
                                <div className="w-full h-36 border bg-gradient-to-br hover:to-orange-800 from-orange-400 to-orange-700 rounded-lg">
                                    <div className="p-5">
                                        <h1 className="text-lg">Music</h1>
                                        <h2 className="text-sm">9 Courses</h2>
                                    </div>
                                </div>
                            </div>

                            {/* card col 2 */}
                            <div className="w-1/2">
                                <div className="mb-5 w-full h-36 border bg-gradient-to-br hover:to-emerald-800 from-emerald-400 to-emerald-700 rounded-lg">
                                    <div className="p-5">
                                        <h1 className="text-lg">Development</h1>
                                        <h2 className="text-sm">29 Courses</h2>
                                    </div>
                                </div>
                                <div className=" w-full h-48 border bg-gradient-to-br hover:to-blue-800 from-blue-400 to-blue-700 rounded-lg">
                                    <div className="p-5">
                                        <h1 className="text-lg">Gaming</h1>
                                        <h2 className="text-sm">15 Courses</h2>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="flex lg:w-1/2 justify-center gap-5">
                            {/* card col 3 */}
                            <div className="w-1/2">
                                <div className="mb-5 w-full h-48 border bg-gradient-to-br hover:to-blue-800 from-violet-400 to-blue-700 rounded-lg">
                                    <div className="p-5">
                                        <h1 className="text-lg">Photography</h1>
                                        <h2 className="text-sm">25 Courses</h2>
                                    </div>
                                </div>
                                <div className=" h-36 border w-full bg-gradient-to-br hover:to-rose-800 from-rose-400 to-rose-700 rounded-lg">
                                    <div className="p-5">
                                        <h1 className="text-lg">Business</h1>
                                        <h2 className="text-sm">29 Courses</h2>
                                    </div>
                                </div>
                            </div>

                            {/* card col 4 */}
                            <div className="w-1/2">
                                <div className="mb-5 w-full h-36 border bg-gradient-to-br hover:to-green-800 from-green-400 to-green-700 rounded-lg">
                                    <div className="p-5">
                                        <h1 className="text-lg">Design</h1>
                                        <h2 className="text-sm">22 Courses</h2>
                                    </div>
                                </div>
                                <div className=" h-48 border w-full bg-gradient-to-br hover:to-pink-800 from-purple-400 to-pink-700 rounded-lg">
                                    <div className="p-5">
                                        <h1 className="text-lg">Health</h1>
                                        <h2 className="text-sm">22 Courses</h2>
                                    </div>
                                </div>
                            </div>
                        </div>



                    </div>

                </div>

                {/* pic a course card section end  */}
            </div>
            <JoinToday />
            <div className='px-10 md:px-0'>
                <JoinWithUs />

                <HeroSec1 />
                <HeroSec2 />
            </div>
        </div >
    );
};

export default Home;