import React, { useState, useContext } from 'react'
import { toast } from 'react-hot-toast'
import { AuthContext } from '../../UserContext/UserContext'

const UpdateNewsModal = ({ news }: any) => {
    const {user} = useContext(AuthContext)

    const [loading, setLoading] = useState(false)
    const { category, title, description, author, image, _id } = news

    const handleNewsUpdate = (e: any) => {
        setLoading(true)
        e.preventDefault()
        const title = e.target.title.value
        const description = e.target.description.value

        const updateNewsData = {
            title,
            description
        }
        fetch(`http://localhost:5000/updateNews/${_id}`, {
            method: "PUT",
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify(updateNewsData)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                setLoading(false)
                toast.success('update successfull')
                fetch('https://edumanage-server.vercel.app/news')
                    .then(res => res.json())
                    .then(data => {
                        console.log(data)
                    })
                    .catch(err => {
                        console.log(err)
                    })
            })
            .catch(err => {
                console.log(err)
            })
    }
    return (
        <>
            <input type="checkbox" id="my-modal-3" className="modal-toggle" />
            <div className="modal">
                <form onSubmit={handleNewsUpdate} className="modal-box relative">
                    <label htmlFor="my-modal-3" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                    <label className='text-teal-600 text-xs'>Title</label>
                    <input type="text" name="title" defaultValue={title} className="border shadow p-3 w-full rounded" />
                    <label className='text-teal-600 text-xs mt-3'>Description</label>
                    <textarea name='description' defaultValue={description} className="border p-3 shadow w-full rounded h-48 " />
                    <button className="bg-gradient-to-r  from-teal-300 to-blue-300 mt-2 px-8 py-2 shadow-teal-300/30 hover:shadow-teal-300/30 shadow-lg rounded-2xl text-xs text-white  font-medium hover:shadow-xl ease-in-out duration-300">
                        {
                            loading ? "loading" : "Update"
                        }
                    </button>
                </form>
            </div>
        </>
    )
}

export default UpdateNewsModal
