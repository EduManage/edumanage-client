import { useLoaderData } from "react-router-dom";
import { newsData } from "./newsData"

const NewsDetails = () => {
    const news = useLoaderData()
    console.log(news);
    return (
        <div className="w-full md:w-4/6 p-4">
            
        </div>
    );
};

export default NewsDetails;