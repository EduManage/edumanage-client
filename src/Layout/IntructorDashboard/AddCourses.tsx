import React , {useContext} from 'react';
import { AuthContext } from '../../UserContext/UserContext';

const AddCourses = () => {
    const {user} = useContext(AuthContext);
    const handleSubmit = (e: any) => {
        e.preventDefault()
        const form = e.target;
        const title = form.title.value;
        const titleDetails = form.titleDetails.value;
        const categories = form.categories.value;
        const w1 = form.w1.value;
        const w2 = form.w2.value;
        const w3 = form.w3.value;
        const w4 = form.w4.value;
        const w5 = form.w5.value;
        const w6 = form.w6.value;
        const w7 = form.w7.value;
        const w8 = form.w8.value;
        const r1 = form.r1.value;
        const r2 = form.r2.value;
        const r3 = form.r3.value;
        const r4 = form.r4.value;
        const price = form.price.value;
        const lectures = form.lectures.value;
        const time = form.time.value;
        const skillLevel = form.skillLevel.value;
        const language = form.language.value;
        const previewLink = form.previewLink.value;
        const picture = form.picture.value;
        const authorName = user?.displayName;
        const authorImage = user?.photoURL;
        
        const info = {
            price,
            lectures,
            time,
            skillLevel,
            language,
            previewLink,
            title,
            titleDetails,
            categories,
            w1,
            w2,
            w3,
            w4,
            w5,
            w6,
            w7,
            w8,
            r1,
            r2,
            r3,
            r4,
            picture,
            authorName,
            authorImage


        }
        console.log(info)
    }
    return (
        <div>
            <h1 className='text-2xl font-bold text-black text-center w-full'>ADD COURSES</h1>
            <form className="mx-20 mt-10 flex flex-col gap-2 items-start" onSubmit={handleSubmit}>
                <div className='w-full'>
                    <label className=" mb-2 text-sm font-medium text-black ">Title</label>
                    <input type="text" name="title" className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5  " required />
                </div>

                <div className='w-full'>
                    <label className=" mb-2 text-sm font-medium text-black ">Title Details</label>
                    <input type="text" name="titleDetails" className="block p-3 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 shadow-sm focus:ring-primary-500 focus:border-primary-500  " placeholder="Let us know how we can help you"  />
                </div>


                <div className='w-full'>
                    <label className=" mb-2 text-sm font-medium text-black ">Course Categories</label>
                    <input type="text" name="categories" className="block p-3 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 shadow-sm focus:ring-primary-500 focus:border-primary-500  " placeholder=""  />
                </div>

                {/* what you will learn  */}
                <div className='w-full'>
                    <label className=" mb-2 text-sm font-medium text-black ">What you will learn 1</label>
                    <input type="text" name="w1" className="block p-3 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 shadow-sm focus:ring-primary-500 focus:border-primary-500  " placeholder=""  />
                </div>
                <div className='w-full'>
                    <label className=" mb-2 text-sm font-medium text-black ">What you will learn 2</label>
                    <input type="text" name="w2" className="block p-3 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 shadow-sm focus:ring-primary-500 focus:border-primary-500  " placeholder=""  />
                </div>
                <div className='w-full'>
                    <label className=" mb-2 text-sm font-medium text-black ">What you will learn 3</label>
                    <input type="text" name="w3" className="block p-3 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 shadow-sm focus:ring-primary-500 focus:border-primary-500  " placeholder=""  />
                </div>
                <div className='w-full'>
                    <label className=" mb-2 text-sm font-medium text-black ">What you will learn 4</label>
                    <input type="text" name="w4" className="block p-3 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 shadow-sm focus:ring-primary-500 focus:border-primary-500  " placeholder=""  />
                </div>
                <div className='w-full'>
                    <label className=" mb-2 text-sm font-medium text-black ">What you will learn 5</label>
                    <input type="text" name="w5" className="block p-3 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 shadow-sm focus:ring-primary-500 focus:border-primary-500  " placeholder=""  />
                </div>
                <div className='w-full'>
                    <label className=" mb-2 text-sm font-medium text-black ">What you will learn 6</label>
                    <input type="text" name="w6" className="block p-3 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 shadow-sm focus:ring-primary-500 focus:border-primary-500  " placeholder=""  />
                </div>
                <div className='w-full'>
                    <label className=" mb-2 text-sm font-medium text-black ">What you will learn 7</label>
                    <input type="text" name="w7" className="block p-3 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 shadow-sm focus:ring-primary-500 focus:border-primary-500  " placeholder=""  />
                </div>
                <div className='w-full'>
                    <label className=" mb-2 text-sm font-medium text-black ">What you will learn 8</label>
                    <input type="text" name="w8" className="block p-3 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 shadow-sm focus:ring-primary-500 focus:border-primary-500  " placeholder=""  />
                </div>

                <div className='w-full'>
                    <label className=" mb-2 text-sm font-medium text-black ">Course Thumbnail link</label>
                    <input type="text" name="picture" className="block p-3 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 shadow-sm focus:ring-primary-500 focus:border-primary-500  " placeholder=""  />
                </div>


                {/* requierments  */}
                <div className='w-full'>
                    <label className=" mb-2 text-sm font-medium text-black ">Requirements 1</label>
                    <input type="text" name="r1" className="block p-3 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 shadow-sm focus:ring-primary-500 focus:border-primary-500  " placeholder=""  />
                </div>
                <div className='w-full'>
                    <label className=" mb-2 text-sm font-medium text-black ">Requirements 2</label>
                    <input type="text" name="r2" className="block p-3 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 shadow-sm focus:ring-primary-500 focus:border-primary-500  " placeholder=""  />
                </div>
                <div className='w-full'>
                    <label className=" mb-2 text-sm font-medium text-black ">Requirements 3</label>
                    <input type="text" name="r3" className="block p-3 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 shadow-sm focus:ring-primary-500 focus:border-primary-500  " placeholder=""  />
                </div>
                <div className='w-full'>
                    <label className=" mb-2 text-sm font-medium text-black ">Requirements 4</label>
                    <input type="text" name="r4" className="block p-3 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 shadow-sm focus:ring-primary-500 focus:border-primary-500  " placeholder=""  />
                </div>
                {/* requierments  */}

                <div className='w-full'>
                    <label className=" mb-2 text-sm font-medium text-black ">Price</label>
                    <input type="text" name="price" className="block p-3 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 shadow-sm focus:ring-primary-500 focus:border-primary-500  " placeholder=""  />
                </div>
                <div className='w-full'>
                    <label className=" mb-2 text-sm font-medium text-black ">Lectures</label>
                    <input type="text" name="lectures" className="block p-3 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 shadow-sm focus:ring-primary-500 focus:border-primary-500  " placeholder=""  />
                </div>
                <div className='w-full'>
                    <label className=" mb-2 text-sm font-medium text-black ">Duiration</label>
                    <input type="text" name="time" className="block p-3 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 shadow-sm focus:ring-primary-500 focus:border-primary-500  " placeholder=""  />
                </div>
                <div className='w-full'>
                    <label className=" mb-2 text-sm font-medium text-black ">Skill Level</label>
                    <input type="text" name="skillLevel" className="block p-3 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 shadow-sm focus:ring-primary-500 focus:border-primary-500  " placeholder=""  />
                </div>
                <div className='w-full'>
                    <label className=" mb-2 text-sm font-medium text-black ">Language</label>
                    <input type="text" name="language" className="block p-3 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 shadow-sm focus:ring-primary-500 focus:border-primary-500  " placeholder=""  />
                </div>
                <div className='w-full'>
                    <label className=" mb-2 text-sm font-medium text-black ">Preview Link</label>
                    <input type="text" name="previewLink" className="block p-3 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 shadow-sm focus:ring-primary-500 focus:border-primary-500  " placeholder=""  />
                </div>
                


                <button type="submit" className="py-3 px-5 text-sm font-medium text-center text-black rounded-lg bg-white">Send message</button>
            </form>
        </div>
    );
};

export default AddCourses;