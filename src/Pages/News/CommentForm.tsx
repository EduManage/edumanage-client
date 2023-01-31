import React from 'react';

const CommentForm = () => {
  return (
    <>
      <div>
        <p className="text-2xl mt-8 font-semibold">Leave a comment on this article</p>
      </div>
      <form className='mt-4'>
        <div className="mb-5">
          <label htmlFor="name" className="block mb-2 font-bold text-gray-600">Your Name</label>
          <input type="text" id="name" name="name" placeholder="Put in your fullname." className="border border-gray-300 shadow p-3 w-full rounded mb-" />
        </div>

        <div className="mb-5">
          <label htmlFor="twitter" className="block mb-2 font-bold text-gray-600">Comment</label>
          <input type="text" id="twitter" name="twitter" placeholder="Put in your comment." className="border shadow p-3 w-full rounded h-24" />
        </div>

        <button className="bg-gradient-to-r  from-teal-300 to-blue-300 mt-2 px-8 py-2 shadow-teal-300/30 hover:shadow-teal-300/30 shadow-lg rounded-2xl text-xs text-white  font-medium hover:shadow-xl ease-in-out duration-300">
                   Submit
                </button>
      </form>
    </>
  );
};

export default CommentForm;