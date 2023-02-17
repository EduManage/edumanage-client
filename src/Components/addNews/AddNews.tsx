import { useState } from "react";
import { FileUploader } from "react-drag-drop-files";
import { toast } from "react-hot-toast";
import add from '../../Assets/add.jpg'
const fileTypes = ["JPG", "PNG", "GIF"];

const AddNews = () => {
  const [loading, setLoading] = useState(false)
  const [file, setFile] = useState("");
  const handleChange = (file: any) => {
    setFile(file);
  };

  const handleFormSubmit = (e: any) => {
    setLoading(true)
    e.preventDefault()
    const form = e.target
    const author = form.name.value
    const title = form.title.value
    const description = form.description.value
    const category = form.category.value
    const coverPhoto = file[0]


    // upload image 
    const picform = new FormData()
    picform.append('image', coverPhoto)
    fetch("https://api.imgbb.com/1/upload?key=e0f610ef6061d376338a241ce664db2f", {
      method: 'POST',
      body: picform
    })
      .then(res => res.json())
      .then(result => {
        // console.log(result.data.url)
        const addNewsData = {
          category,
          title,
          description,
          author,
          image: result.data.url
        }
        fetch('https://edu-manage-server.vercel.app/addNews', {
          method: 'POST',
          headers: {
            "content-type": "application/json"
          },
          body: JSON.stringify(addNewsData)
        })
          .then(res => res.json())
          .then(data => {
            console.log(data)
            form.reset()
            toast.success('news successfully added')
          })
        setLoading(false)
      })
      .catch(error => {
        console.log(error)
        setLoading(false)
      })
  }
  return (
    <div className='pb-20 font-poppins-em'>
      <div
        style={{ background: `linear-gradient(to right, rgba(0, 128, 128, 0.7), rgba(0, 128, 250, 0.7)), url(${add})`, }}
        className="bg-no-repeat pt-10 pb-10  bg-teal-400 text-center h-48 img-gradient flex justify-center items-center"
      >
        <h1 className="text-4xl text-white ">Add News</h1>
      </div>
      <form className="w-4/6 mx-auto mt-4" onSubmit={handleFormSubmit}>
        <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="title">
          Author
        </label>
        <input required name='name' className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" type="text" placeholder="name" />
        <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="title">
          Title
        </label>
        <input required name='title' className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" type="text" placeholder="title" />
        <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="title">
          Description
        </label>
        <input required name='description' className="appearance-none block w-full h-28 bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" type="text" placeholder="description" />
        <select required className="mb-6 border border-gray-200  appearance-none w-full py-1 px-2 bg-white" name="category" id="frm-whatever">
          <option value="">Chosse Category</option>
          <option value="Programming">programming</option>
          <option value="Developement">developement</option>
          <option value="Design">design</option>
          <option value="Music">music</option>
          <option value="Gaming">gaming</option>
          <option value="Photography">photography</option>
        </select>
        <FileUploader
          hoverTitle={"drop here"}
          multiple={true}
          handleChange={handleChange}
          name="file"
          types={fileTypes}
        />
        <button className="bg-gradient-to-r  from-teal-300 to-blue-300 mt-2 px-8 py-2 shadow-teal-300/30 hover:shadow-teal-300/30 shadow-lg rounded-2xl text-xs text-white  font-medium hover:shadow-xl ease-in-out duration-300">
          {
            loading ? "Loading" : "Submit"
          }
        </button>
      </form>
    </div>
  )
}

export default AddNews
