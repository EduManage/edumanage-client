import avif from '../../Assets/avif.png'
const JoinWithUs = () => {
    return (
        <div className='text-center p-6 w-full mx-auto font-poppins-em flex flex-col justify-center items-center'>
            <img className='w-full' src={avif} alt="socialNetwork" />
            <div className=' md:w-4/6'>
                
                <div className='pt-16'>
                    <h1 className="text-2xl mb-4">Join Over <span className='font-semibold'>1 million</span> student</h1>
                    <p className=' mb-20 md:max-w-3xl mx-auto text-sm'>Join our community of learners and unlock your full potential. With expert guidance, cutting-edge resources, and a diverse group of peers, you'll gain the skills, knowledge, and confidence to excel in your studies.</p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
                    <div className='flex flex-col justify-center items-center'>
                        <h1 className='text-5xl font-semibold text-pink-700 mb-1'>1000+</h1>
                        <p>Online courses.</p>
                    </div>
                    <div className='flex flex-col justify-center items-center'>
                        <h1 className='text-5xl font-semibold text-green-700 mb-1'>100+</h1>
                        <p>Best Teachers</p>
                    </div>
                    <div className='flex flex-col justify-center items-center'>
                        <h1 className='text-5xl font-semibold text-blue-700 mb-1'>100k</h1>
                        <p>Students worldwide</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default JoinWithUs;