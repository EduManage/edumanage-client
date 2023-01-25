


const JoinToday = () => {
    return (
        <div className='flex flex-col justify-center items-center p-8 bg-gradient-to-l from-[#7be7d5] to- bg-[#226358bd] py-24 my-16 font-poppins-em'>
            <div className="md:w-4/6 flex flex-col justify-center">
                <p className='text-2xl mb-5 text-white text-center'>
                    With a focus on hands-on experience, personalized support, and a diverse range of opportunities. Join our community of learners and unlock your full potential!
                </p>
                <div className="flex justify-center">
                    <button className="bg-gradient-to-r  from-rose-400 to-rose-500 mt-5 px-8 py-2 shadow-rose-300/30 hover:shadow-rose-300/30 shadow-lg rounded-2xl text-xs text-white  font-medium hover:shadow-xl ease-in-out duration-300">Join Today</button>
                </div>
            </div>
        </div>
    );
};

export default JoinToday;