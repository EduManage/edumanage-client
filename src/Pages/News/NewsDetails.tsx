import { FacebookIcon, FacebookShareButton, TwitterIcon, TwitterShareButton } from "next-share";
import { AiFillTwitterCircle } from "react-icons/ai";
import { BsFacebook } from "react-icons/bs";
import { FaFolderPlus, FaUser, FaWarehouse } from "react-icons/fa";
import { Link, useLoaderData } from "react-router-dom";
import CommentForm from "./CommentForm";
// import { newsData } from "./newsData"

const NewsDetails = () => {
    let shareUrl = window.location.href
    const news: any = useLoaderData()
    console.log(news);
    const { category, title, description, author, image, _id } = news
    return (
        <div className='w-full md:w-4/6 mx-auto shadow-md border p-4 mb-8'>
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
                    <span> comments </span>
                </div>
            </div>
            <h1 className=" text-3xl font-semibold mt-5">{title}</h1>
            <p className='text-base mt-2'>{description}</p>
            <div className="flex justify-start items-center mt-6 gap-8">
                <p className="text-xl font-semibold">Share this post with your friends</p>
                <div className="flex justify-between items-center gap-2">

                    <FacebookShareButton
                        url={shareUrl}
                    >
                        <FacebookIcon size={32} round />
                    </FacebookShareButton>
                    <TwitterShareButton
                        url={shareUrl}
                    >
                        <TwitterIcon size={32} round />
                    </TwitterShareButton>

                </div>
            </div>
            <CommentForm />
        </div>
    );
};

export default NewsDetails;