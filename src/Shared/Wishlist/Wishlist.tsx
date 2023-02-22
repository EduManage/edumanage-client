import React, { useEffect, useState, useContext } from 'react';
import { AuthContext } from '../../UserContext/UserContext';
import Loader from '../Loader/Loader';

const Wishlist = () => {
    const { loading } = useContext(AuthContext);
    const [wishlist, setWishlist] = useState([]);
    // const { data: Wishlist = [], refetch } = useQuery({
    //     queryKey: ['Wishlist'],
    //     queryFn: () => fetch(`https://recyclelib-server.vercel.app/Wishlist`)
    //         .then(res => res.json())
    // })
    interface w {
        title: string;
        price: number;
        categories: string;
        _id: number;
        picture: string;

    }
    useEffect(() => {
        fetch(`https://edumanage-server-ivory.vercel.app/wishlist`)
            .then(res => res.json())
            .then(data => setWishlist(data))
    }, [])
    if (wishlist.length === 0) {
        return <Loader></Loader>
    }
    return (
        <div className='pt-24 flex justify-center font-poppins-em'>
            <div className='w-3/4'>
                {
                    wishlist.map((w: w, i) => <div key={i}>
                        <div className='border p-3 grid grid-cols-6 gap-5  items-center font-semibold mb-2'>
                            <img src={w.picture} className='w-20' alt="" />
                            <h1>{w.title}</h1>
                            <h1>{w.categories}</h1>
                            <h1 className='text-lg text-rose-600'>{w.price}</h1>
                            <button className='bg-teal-600 rounded-2xl text-white p-2 font-semibold hover:bg-teal-700 ease-in-out duration-300'>Pay</button>
                            <button className='bg-rose-600 rounded-2xl text-white p-2 font-semibold hover:bg-rose-700 ease-in-out duration-300'>Remove</button>
                            


                        </div>

                    </div>)
                }
            </div>
        </div>
    );
};

export default Wishlist;