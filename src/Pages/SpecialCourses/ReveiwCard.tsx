import React from 'react'
import { AiFillStar } from 'react-icons/ai'

const ReveiwCard = ({ data }: any) => {
    const { image, name, comment } = data
    return (
        <div className='w-80 border-2 rounded-lg text-gray-600 p-3 overflow-hidden'>
            <div className="flex justify-start items-center mb-5">
                <img src={image} alt="" className='w-8 h-8 rounded-full' />
                <p>{name}</p>
            </div>
            <div>
                <p className='font-semibold'>{comment}</p>
            </div>
            <div className="mt-5 flex justify-start items-center gap-1">
                <AiFillStar className='text-yellow-300'/>
                <AiFillStar className='text-yellow-300'/>
                <AiFillStar className='text-yellow-300'/>
                <AiFillStar className='text-yellow-300'/>
                <AiFillStar className='text-yellow-300'/>
            </div>
        </div>
    )
}

export default ReveiwCard
