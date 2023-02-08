import { useState } from 'react'
import { toast } from 'react-hot-toast'

const UpdateNewsModal2 = ({ setSelectedNews, selectedNews ,refetch}: any) => {
    const [loading, setLoading] = useState(false)
    const { category, title, description, author, image, _id } = selectedNews

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
                refetch()
                console.log(data)
                setLoading(false)
                toast.success('update successfull')
                setSelectedNews(null)
            })
            .catch(err => {
                console.log(err)
            })
    }
    return (
        <div>
            <input type="checkbox" id="my-modal-4" className="modal-toggle" />
            <div className="modal">
                <form onSubmit={handleNewsUpdate} className="modal-box relative">
                    <label htmlFor="my-modal-4" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                    <div className="flex items-center gap-3 mb-2">
                        <label className='text-teal-600 text-xs'>Title</label>
                        <div className="badge badge-outline">{category}</div>
                    </div>
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
        </div>
    )
}

export default UpdateNewsModal2
