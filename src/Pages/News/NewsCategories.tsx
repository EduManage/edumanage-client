import React from 'react';


const NewsCategories = ({cata, handleCataLoad}: any) => {
    return (
        <div onClick={()=>handleCataLoad(cata)} className='flex flex-col cursor-pointer text-center'>
            <div className="border border-teal-500 hover:bg-teal-500 hover:text-white rounded-md p-1 m-0.5">
            <p className='rounded-md'>{cata}</p>
            </div>
        </div>
    );
};

export default NewsCategories;