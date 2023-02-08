import { type } from '@testing-library/user-event/dist/type';
import { useEffect, useState } from 'react';
import writingBg from '../../Assets/writingBG.jpg'
import NewsCard from './NewsCard';
import NewsCategories from './NewsCategories';


type newsType = {
    _id: number;
    category: string;
    title: string;
    description: string;
    author: string;
    image: string;
}[]

const News = () => {
    const [newsData, setNewsData] = useState<newsType>([])
    console.log(newsData)
    const [filteredData, setFilteredData] = useState<newsType>(newsData)
    const [loading, setLoading] = useState(false)

    useEffect(() => {
        setLoading(true)
        fetch('https://edumanage-server.vercel.app/news')
            .then(res => res.json())
            .then(data => {
                setNewsData(data)
                setLoading(false)
            })
    }, [])
    // finding uniqe category
    let UniqueCategories = newsData.map(item => item.category).filter((item, index, self) => self.indexOf(item) === index);

    // function for load data on specific category
    const handleCataLoad = (cata: any) => {
        const filterCata = newsData.filter(c => c.category === cata)
        setFilteredData(filterCata)
    }

    return (
        <div className='font-poppins-em'>
            <div
                style={{ background: `linear-gradient(to right, rgba(0, 128, 128, 0.7), rgba(0, 128, 128, 0.7)), url(${writingBg})`, }}
                className="bg-no-repeat pt-20 pb-10  bg-teal-400 text-center h-72 img-gradient flex justify-center items-center"
            >
                <h1 className="text-4xl text-white">Today's News</h1>
            </div>
            {
                loading ? <div className="w-12 h-12 rounded-full animate-spin
                border-4 border-solid border-green-500 border-t-transparent my-5 mx-auto"></div> : (
                    <div className="md:w-9/12 flex flex-col-reverse md:flex-row justify-center items-start gap-8 mt-8 mx-auto">
                        <div className='md:w-4/6'>
                            {
                                filteredData.length === 0 ?
                                    newsData.map(news => <NewsCard
                                        key={news._id}
                                        news={news} />) :
                                    filteredData.map(news => <NewsCard
                                        key={news._id}
                                        news={news} />)
                            }
                        </div>
                        <div className='w-full md:w-3/12 text-center'>
                            <h1 className="text-2xl bg-teal-500 rounded text-white w-full mb-4 px-4 py-2">Category</h1>

                            {
                                UniqueCategories.map((cata, i) => <NewsCategories
                                    key={i}
                                    cata={cata}
                                    handleCataLoad={handleCataLoad}
                                />)
                            }
                        </div>
                    </div>
                )
            }
        </div>
    );
};

export default News;