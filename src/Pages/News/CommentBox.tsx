import React from 'react';

const CommentBox = ({ comment }: any) => {
    const { name, userComment, postDate, userPhoto } = comment
    console.log(userComment);
    return (
        <div className='w-4/6 mx-auto bg-black/5 mt-3 rounded p-4'>
            <div className="flex justify-between items-center">
                <div className="flex justify-center items-center gap-2">
                    <img src={userPhoto} className='h-6 w-6 rounded-full' alt="" />
                    <p className='font-semibold text-teal-400'>{name}</p>
                </div>
                <p className='font-semibold text-teal-400'>{postDate}</p>
            </div>
            <div>
                <p>{userComment}</p>
            </div>
        </div>
    );
};

export default CommentBox;