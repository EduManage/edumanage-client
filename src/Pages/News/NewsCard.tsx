import React from 'react';
import { FaFolderPlus, FaUser, FaWarehouse } from "react-icons/fa";

type news = {
    id: number;
    category: string;
    title: string;
    description: string;
    author: string;
    image: string;
}
const NewsCard = ({ news }: any) => {
    const { category, title, description, author, image, } = news

    return (
        <div className='w-full mx-auto shadow-md border p-4 mb-8'>
            <img src={image} className=' w-full' alt="" />
            <div className="flex justify-between items-center mt-4">
                <div className="flex justify-between items-center gap-2">
                    <FaFolderPlus />
                    <span>{category}</span>
                </div>
                <div className="flex justify-between items-center gap-2">
                    <FaUser />
                    <span>{author}</span>
                </div>
                <div className="flex justify-between items-center gap-2">
                    <FaWarehouse />
                    <span> comments </span>
                </div>
            </div>
            <h1 className=" text-3xl font-semibold mt-5">{title}</h1>
            <p className='text-base mt-2'>{description}</p>
        </div>
    );
};

export default NewsCard;