import { useQuery } from '@tanstack/react-query';
import React from 'react';
import { FaFolderPlus, FaUser, FaWarehouse } from "react-icons/fa";
import { Link } from 'react-router-dom';
import UpdateNewsModal from '../../Components/updateNewsModal/UpdateNewsModal';

const NewsCard = ({ news }: any) => {
    const { category, title, description, author, image, _id } = news
    const { refetch, data: comments = [] } = useQuery({
        queryKey: ['comment'],
        queryFn: () =>
            fetch(`https://edumanage-server.vercel.app/comment?id=${_id}`)
                .then((res) => res.json(),
                ),
    })
    return (
        <div className='w-full mx-auto shadow-md border p-4 mb-8'>
            <img src={image} className=' w-full' alt="" />
            <div className="flex justify-between items-center mt-4">
                <div className="flex justify-between items-center gap-2">
                    <FaFolderPlus className='text-teal-500' />
                    <span>{category}</span>
                </div>
                <div className="flex justify-between items-center gap-2">
                    <FaUser className='text-teal-500' />
                    <span>{author}</span>
                </div>
                <div className="flex justify-between items-center gap-2">
                    <FaWarehouse className='text-teal-500' />
                    <span>{comments?.length} comments </span>
                </div>
            </div>
            <h1 className=" text-3xl font-semibold mt-5">{title}</h1>
            <p className='text-base mt-2'>{description.length > 200 ? description.substring(0, 200) + '...' : description}</p>
            <Link to={`/news/${_id}`}>
                <button className="bg-gradient-to-r  from-teal-300 to-blue-300 mt-2 px-8 py-2 shadow-teal-300/30 hover:shadow-teal-300/30 shadow-lg rounded-2xl text-xs text-white  font-medium hover:shadow-xl ease-in-out duration-300">
                    Continue Reading
                </button>
            </Link>
            {/* <UpdateNewsModal/> */}
        </div>
    );
};

export default NewsCard;