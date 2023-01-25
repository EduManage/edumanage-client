import Lottie from "lottie-react";
import lottie1 from './lottie assets/80356-online-learning.json'
import place from './lottie assets/place.json'
import certificate from './lottie assets/certificate.json'
import coursePic from './lottie assets/course.png'
import locationPic from './lottie assets/location.png'
import certificatePic from './lottie assets/certificate-flat.png'

const HeroSec2 = () => {
    return (
        <div className='w-full flex flex-col items-center justify-center font-poppins-em'>
            <div className='md:w-[66.7%]'>
                <div data-aos="fade-up" className='w-full  flex flex-col justify-center items-center font-poppins-em mt-36'>

                    <h3 className="text-lg text-rose-500/80 font-semibold font-poppins-em">
                        LEARN WITH EM
                    </h3>
                    <div className="font-semibold text-4xl text-black/80 py-3 font-poppins-em">
                        <span className='font-bold'>World class</span> education for <span className='font-bold'>Everyone</span>
                    </div>
                    <div className="text-sm text-black/70 font-medium ">
                        <p>Being a student is easy. Learning requires actual work.</p>
                        <p>The great aim of education is not knowledge but action.</p>
                    </div>
                </div>
                <div className='flex w-full flex-col-reverse justify-center items-center md:flex-row gap-6 mt-24'>
                    <div data-aos="fade-left" className="flex-1">
                        <img src={coursePic} alt="" />
                        <h1 className="text-3xl my-3 font-semibold">Award winning course management</h1>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam nostrum, labore laborum tempore commodi possimus dolorum harum molestiae sit voluptas aliquam esse quo maiores ut quia numquam doloribus cum iste.</p>
                    </div>
                    <div data-aos="fade-right" className="flex-1">
                        <Lottie animationData={lottie1} loop={true} />
                    </div>
                </div>
                <div className='flex flex-col md:flex-row justify-center items-center  gap-6 mt-12'>
                    <div data-aos="fade-left" className="flex-1">
                        <Lottie animationData={place} loop={true} />
                    </div>
                    <div data-aos="fade-right" className="flex-1">
                        <img src={locationPic} alt="" />
                        <h1 className="text-3xl my-3 font-semibold">Learn anything from anywhere</h1>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam nostrum, labore laborum tempore commodi possimus dolorum harum molestiae sit voluptas aliquam esse quo maiores ut quia numquam doloribus cum iste.</p>
                    </div>
                </div>
                <div className='flex flex-col-reverse justify-center items-center md:flex-row gap-6 mt-12'>
                    <div data-aos="fade-left" className="flex-1">
                        <img src={certificatePic} alt="" />
                        <h1 className="text-3xl my-3 font-semibold">Certificate for solid developement of your career</h1>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam nostrum, labore laborum tempore commodi possimus dolorum harum molestiae sit voluptas aliquam esse quo maiores ut quia numquam doloribus cum iste.</p>
                    </div>
                    <div data-aos="fade-right" className="flex-1">
                        <Lottie animationData={certificate} loop={true} />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HeroSec2;