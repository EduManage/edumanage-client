import { useQueries, useQuery } from "@tanstack/react-query";
import { FacebookIcon, FacebookShareButton, TwitterIcon, TwitterShareButton } from "next-share";
import { useContext, useEffect, useState } from "react";
import { AiFillTwitterCircle, AiTwotoneDislike, AiTwotoneLike } from "react-icons/ai";
import { BsFacebook } from "react-icons/bs";
import { FaFolderPlus, FaUser, FaWarehouse } from "react-icons/fa";
import { MdEdit, MdModeEdit } from "react-icons/md";
import { Link, useLoaderData } from "react-router-dom";
import UpdateNewsModal from "../../Components/updateNewsModal/UpdateNewsModal";
import { AuthContext } from "../../UserContext/UserContext";
import CommentBox from "./CommentBox";
import CommentForm from "./CommentForm";
// import { newsData } from "./newsData"

const NewsDetails = () => {

    const { user } = useContext(AuthContext)
    let shareUrl = window.location.href
    const postDate = new Date().toLocaleString().toString();
    const news: any = useLoaderData()

    const { category, title, description, author, image, _id, likes } = news
console.log(likes)
    // fetch comment
    const { refetch, data: comments = [] } = useQuery({
        queryKey: ['comment'],
        queryFn: () =>
            fetch(`https://edumanage-server.vercel.app/comment?id=${_id}`)
                .then((res) => res.json(),
                ),
    })

    // post comment 
    const handleCommentForm = (e: any) => {
        e.preventDefault()
        const comment = e.target.comment.value

        const commentData = {
            name: user?.displayName,
            userComment: comment,
            commmentId: _id,
            postDate,
            userPhoto: user?.photoURL
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

    const [likesCount, setLikes] = useState(0);
    const [isLiked, setIsLiked] = useState(false);

    // useEffect(() => {
    //     fetch("https://edu-manage-server.vercel.app/likes")
    //         .then(res => res.json())
    //         .then(data => setLikes(data.likes));
    // }, []);

    const handleClick = () => {
        setIsLiked(!isLiked);
        if (isLiked) {
            const data = { likesCount: 1, postId : _id }
            setLikes(likesCount + 1);
            fetch(`https://edu-manage-server.vercel.app/likes/${_id}`, {
                method: "PUT",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(data)
            })
            .then(res => res.json())
            .then(data =>{
                console.log(data)
                refetch()
            })
            .catch(err =>{
                console.log(err)
            })
        }
            
        // } else {
        //     const data = { likesCount: 0, postId : _id }
        //     setLikes(likesCount - 1);
        //     fetch(`https://edu-manage-server.vercel.app/likes/${_id}`, {
        //         method: "PUT",
        //         headers: { "Content-Type": "application/json" },
        //         body: JSON.stringify(data)
        //     })
        //     .then(res => res.json())
        //     .then(data =>{
        //         console.log(data)
        //     })
        //     .catch(err =>{
        //         console.log(err)
        //     })
        // }
    };
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
                    <span> {comments?.length} comments </span>
                </div>
            </div>
            <div className="flex justify-between items-center">
                <h1 className=" text-3xl font-semibold mt-5">{title}</h1>
                <label htmlFor="my-modal-3" className="cursor-pointer">  <MdEdit size={20} /></label>

            </div>
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
            <UpdateNewsModal news={news} />
            <div className="flex justify-center items-center gap-5 font-semibold mt-2">
            <p>Was this article helpful?</p>
            <div 
            onClick={handleClick}
            className="flex justify-center items-center gap-1 cursor-pointer">
                <p>{isLiked ? 'Unlilke' : 'Like'}</p>
                <AiTwotoneLike />
            </div>
            <div className="flex justify-center items-center gap-1 cursor-pointer">
                <p>Unlike</p>
                <AiTwotoneDislike />
            </div>
        </div>
        </div>
    );
};

export default NewsDetails;

