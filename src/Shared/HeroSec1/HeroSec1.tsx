import girl1 from '../../Assets/girl1.jpg'
import girl2 from '../../Assets/girl2.jpg'
import ButtonOne from '../../component/ButtonOne';

const HeroSec1 = () => {
    return (
        <div className='w-[90%] mx-auto grid grid-cols-1 md:grid-cols-2 gap-3  mt-36 font-poppins-em '>
            <div data-aos="fade-left" className='flex  md:flex-row justify-center items-center relative mb-[22rem]'>
                <img src={girl1} className='w-64  absolute left-4 top-0 
                 border-[#999999] border-4 rounded' alt="" />
                <img src={girl2} className='w-64  absolute top-24 right-40  border-[#999999] border-4 rounded' alt="" />
            </div>
            <div data-aos="fade-right" className='mt-12'>
                <div>
                    <h3 className='text-green-700'>Grow up your skill</h3>
                    <h1 className="text-4xl">Learn anything you want today</h1>
                </div>
                <div className='mt-8'>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolorum reiciendis laboriosam quia consequatur eius? Maiores totam, nulla nostrum, eligendi perspiciatis culpa voluptatum exercitationem in deleniti illum hic. Laborum, hic quibusdam!
                </div>
                <div className='mt-8'>
                    <ButtonOne>Join Today</ButtonOne>
                </div>
            </div>
        </div>
    );
};

export default HeroSec1;
// top-20 right-40
//  left-4 top-0