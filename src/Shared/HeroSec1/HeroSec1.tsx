import girl1 from '../../Assets/girl1.jpg'
import girl2 from '../../Assets/girl2.jpg'

const HeroSec1 = () => {
    return (
        <div className='md:w-[66.6%] mx-auto grid grid-cols-1 md:grid-cols-2 gap-3  mt-36 font-poppins-em '>
            <div data-aos="fade-left" className='flex  md:flex-row justify-center items-center relative mb-[22rem]'>
                <img src={girl1} className='w-64  absolute left-4 top-0 
                 border-[#999999] border-4 rounded' alt="" />
                <img src={girl2} className='w-64  absolute top-24 right-40  border-[#999999] border-4 rounded' alt="" />
            </div>
            <div data-aos="fade-right" className='mt-12'>
                
                <h3 className="text-lg text-rose-500/80 font-semibold font-poppins-em">
                    Grow up your skill
                </h3>
                <div className="font-semibold text-4xl text-black/80 py-3 font-poppins-em">
                    <h1>Start Learning</h1>
                    <h1>Your Dream Course</h1>
                    <h1>in EduManage Today</h1>
                </div>
                <div className="text-sm text-black/70 font-medium ">
                    <p>Being a student is easy. Learning requires actual work.</p>
                    <p>The great aim of education is not knowledge but action.</p>
                </div>
                <div className="flex justify-start mt-8">
                    <button className="bg-gradient-to-r  from-teal-300 to-blue-300 mt-5 px-8 py-2 shadow-teal-300/30 hover:shadow-teal-300/30 shadow-lg rounded-2xl text-xs text-white  font-medium hover:shadow-xl ease-in-out duration-300">Join Today</button>
                </div>
            </div>
        </div>
    );
};

export default HeroSec1;
// top-20 right-40
//  left-4 top-0