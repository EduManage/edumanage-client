import { type } from '@testing-library/user-event/dist/type';
import { useState } from 'react';
import writingBg from '../../Assets/writingBG.jpg'
import './news.css'
import NewsCard from './NewsCard';
import NewsCategories from './NewsCategories';
import { newsData } from './newsData';

type newsType = {
    id: number;
    category: string;
    title: string;
    description: string;
    author: string;
    image: string;
}[]




const News = () => {
    let UniqueCategories = newsData.map(item => item.category).filter((item, index, self) => self.indexOf(item) === index);
    const [news, setNews] = useState<newsType>(newsData)

    const handleCataLoad = (cata: any) => {
        const filterCata = newsData.filter(c => c.category === cata)
        setNews(filterCata)
    }

    return (
        <div className='font-poppins-em'>
            <div
                style={{ backgroundImage: `url(${writingBg})`, }}
                className="bg-no-repeat pt-20 pb-10  bg-teal-400 text-center h-48 img-gradient"
            >
                <h1 className="text-4xl ">News today</h1>
            </div>
            {/* <div className="md:w-4/6 grid gird-cols-2 mt-8"> */}
            <div className="md:w-9/12 flex justify-center items-start gap-8 mt-8 mx-auto">
                <div className='w-4/6'>
                    {
                        news.map((news, i) => <NewsCard
                            key={i} news={news} />)
                    }
                </div>
                <div className='w-3/12 text-center'>
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

        </div>
    );
};

export default News;