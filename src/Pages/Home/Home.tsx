import React from 'react';
import blob from '../../Assets/blobHeaderShape.png';
import headerImg from '../../Assets/homepagePicture.png';
import book from '../../Assets/book1.png';
import teacher from '../../Assets/Teacher1.png';
import cap from '../../Assets/cap1.png';
import './Home.css'
import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles
// ..
AOS.init();

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
            {/* Header section end  */}

            <div className='text-center font-poppins-em py-16'>
                <h3 className='text-md text-rose-500/80 font-semibold  pb-5'>WE ARE AWESOME</h3>
                <h1 className='text-3xl font-bold  pb-8'>15 Years of Experience <br /> in  Education and Teaching</h1>
                <p className='text-xs text-black/90'>“The more that you read, the more things you will know.<br /> The more that you learn, the more places you’ll go.”</p>
            </div>

            <div className='flex'>
                <div className='w-1/6'>

                </div>

                <div className='w-4/6 flex gap-5 text-center mb-10 font-poppins-em '>
                    <div className='p-5 shadow-lg rounded-2xl ' data-aos="fade-right">
                        <img className='p-5' src={book} alt="" />
                        <h1 className='pb-5 font-semibold'>Learn Everything</h1>
                        <p className='text-xs text-black/90'>Collection of educational materials designed to help individuals acquire new knowledge, skills or abilities.</p>
                        <button className='text-teal-500 text-sm pt-8'>READ MORE</button>
                    </div>
                    <div className='p-5 shadow-lg rounded-2xl' data-aos="fade-up" data-aos-duration="500">
                        <img  className='p-5'  src={teacher} alt="" />
                        <h1 className='pb-5  font-semibold'>Learn Everything</h1>
                        <p className='text-xs text-black/90'>Providing students with personalized, learning experiences in a challenging and supportive environment.</p>
                        <button className='text-teal-500 text-sm pt-8'>READ MORE</button>
                    </div>
                    <div className='p-5 shadow-lg rounded-2xl' data-aos="fade-left">
                        <img  className='p-5'  src={cap} alt="" />
                        <h1 className='pb-5 font-semibold'>Learn Everything</h1>
                        <p className='text-xs text-black/90'>Obtaining an official recognition of one's knowledge, skills, and abilities through a certification program.</p>
                        <button className='text-teal-500 text-sm pt-8'>READ MORE</button>
                    </div>

                </div>

                <div className='w-1/6'>

                </div>
            </div>

        </div>
    );
};

export default Home;