import { useQueries, useQuery } from "@tanstack/react-query";
import { FacebookIcon, FacebookShareButton, TwitterIcon, TwitterShareButton } from "next-share";
import { useContext } from "react";
import { AiFillTwitterCircle } from "react-icons/ai";
import { BsFacebook } from "react-icons/bs";
import { FaFolderPlus, FaUser, FaWarehouse } from "react-icons/fa";
import { Link, useLoaderData } from "react-router-dom";
import { AuthContext } from "../../UserContext/UserContext";
import CommentBox from "./CommentBox";
import CommentForm from "./CommentForm";
// import { newsData } from "./newsData"

const NewsDetails = () => {

    const {user} = useContext(AuthContext)
    let shareUrl = window.location.href
    const postDate= new Date().toLocaleString().toString();
    const news: any = useLoaderData()

    const { category, title, description, author, image, _id } = news
    const {  refetch, data : comments=[] } = useQuery({
        queryKey: ['comment'],
        queryFn: () =>
          fetch(`https://edumanage-server.vercel.app/comment?id=${_id}`)
          .then((res) => res.json(),
          ),
      })

    // comment functionality
    const handleCommentForm = (e: any) => {
        e.preventDefault()
        const comment = e.target.comment.value

        const commentData = {
            name: user?.displayName,
            userComment: comment,
            commmentId: _id,
            postDate ,
            userPhoto : user?.photoURL
        }

        fetch(`https://edumanage-server.vercel.app/comment`, {
            method: "POST",
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(commentData)
        })
            .then(res => res.json())
            .then(data => {
                e.target.reset()
                refetch()
            })
            .catch(err => {
                console.log(err);
            })
    }

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
            <CommentForm handleCommentForm={handleCommentForm} />
            {
               comments.map((cmnt: any) => <CommentBox 
                    comment={cmnt}
                />)
            }
        </div>
    );
};

export default NewsDetails;