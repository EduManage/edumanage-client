import React, { useEffect, useState } from 'react'
import { useQuery } from "@tanstack/react-query";
import { MdEdit } from 'react-icons/md';
import { RiDeleteBin5Fill } from 'react-icons/ri';
import UpdateNewsModal2 from './UpdateNewsModal2';
import { toast } from 'react-hot-toast';
import setting from '../../Assets/setiing.jpg'
import Loader from '../../Shared/Loader/Loader';

const AllNews = () => {
    const [selectedNews, setSelectedNews] = useState({})
    const { data: news = [], refetch, isLoading } = useQuery({
        queryKey: ['news'],
        queryFn: () => fetch('https://edumanage-server.vercel.app/news')
            .then(res => res.json())
    })
    // delete news fuction
    const handleDelete = (id: any) => {
        fetch(`https://edu-manage-server.vercel.app/news/${id}`, {
            method: 'DELETE',
            headers: {
                "content-type": "application/json"
            },
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                toast.success("delete successfull")
                refetch()
            })
            .catch(err => {
                console.log(err)
            })
    }
    return (
        <div className=' font-poppins-em'>
            <div
                style={{ background: `linear-gradient(to right, rgba(0, 128, 128, 0.7), rgba(0, 128, 250, 0.7)), url(${setting})`, }}
                className="bg-no-repeat pt-20 pb-10  bg-teal-400 text-center h-72 img-gradient flex justify-center items-center"
            >
                <h1 className="text-4xl text-white ">Manage News</h1>
            </div>
            <table className="table table-zebra p-1 w-4/6 mx-auto my-4">
                {isLoading ? <Loader /> :
                <>
                <thead>
                    <tr>
                        <th></th>
                        <th>Category</th>
                        <th>Title</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                    <tbody>
                        {
                            news.map((newsData: any, i: any) => (
                                <tr>
                                    <th>{i + 1}</th>
                                    <td>{newsData.category}</td>
                                    <td>{newsData.title}</td>
                                    <td>
                                        <div className="flex gap-3">
                                            <label htmlFor="my-modal-4" className="cursor-pointer  hover:text-black/60">
                                                <MdEdit
                                                    onClick={() => setSelectedNews(newsData)}
                                                    size={20} />
                                            </label>
                                            <RiDeleteBin5Fill
                                                className="cursor-pointer hover:text-black/60"
                                                onClick={() => handleDelete(newsData._id)}
                                            />
                                        </div>
                                    </td>
                                </tr>
                            ))
                        }
                    </tbody>
                </>}
            </table>
            {selectedNews && <UpdateNewsModal2
                setSelectedNews={setSelectedNews}
                selectedNews={selectedNews}
                refetch={refetch}
            />}
        </div>
    )
}

export default AllNews
