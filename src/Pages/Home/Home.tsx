import React from 'react';
import blob from '../../Assets/blobHeaderShape.png';
import headerImg from '../../Assets/homepagePicture.png';

import './Home.css'
const Home = () => {
    return (
        <div className=''>

            {/* Header section start  */}

            <div className="bg-no-repeat bg-right-top pt-20 pb-10 h-screen flex" style={{ backgroundImage: `url(${blob})` }}>
                <div className='w-1/6'>

                </div>
                <div className='w-5/6  flex items-center'>
                    <div className='w-2/5'>
                        <h3 className='text-lg text-rose-500/80 font-semibold font-poppins-em'>LEARN WITH EM</h3>
                        <div className='font-semibold text-4xl text-black/80 py-3 font-poppins-em'>
                            <h1>Start Learning</h1>
                            <h1>Your Dream Course</h1>
                            <h1>in EduManage Today</h1>
                        </div>
                        <div className='text-xs text-black/70 font-medium '>
                            <p>Being a student is easy. Learning requires actual work.</p>
                            <p>The great aim of education is not knowledge but action.</p>
                        </div>
                        <button className='bg-gradient-to-r  from-teal-300 to-blue-300 mt-5 px-8 py-2 shadow-teal-300/30 hover:shadow-teal-300/30 shadow-lg rounded-2xl text-xs text-white  font-medium hover:shadow-xl ease-in-out duration-300'>
                            EXPLORE
                        </button>
                    </div>
                    <div className='w-3/5'>
                        <img className='px-5' src={headerImg} alt="" />
                    </div>

                </div>

            </div>
            <div className='text-center font-poppins-em py-10'>
                <h3 className='text-md text-rose-500/80 font-semibold  pb-5'>WE ARE AWESOME</h3>
                <h1 className='text-3xl font-bold  pb-8'>15 Years of Experience <br /> in  Education and Teaching</h1>
                <p className='text-xs text-black/90'>“The more that you read, the more things you will know.<br /> The more that you learn, the more places you’ll go.”</p>
            </div>

        </div>
    );
};

export default Home;