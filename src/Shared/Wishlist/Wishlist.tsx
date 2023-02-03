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
    interface wishlist {
        title: string;
        price: number;
        rating: number;
        Author: string;
        Authorimg: string;
        reviews: number;
        persons: number;
        details: string;
        category: string;
        _id: number;
        picture: string;

    }
    useEffect(() => {
        fetch(`https://recyclelib-server.vercel.app/wishlist`)
            .then(res => res.json())
            .then(data => setWishlist(data))
    }, [])
    if (loading) {
        return <Loader></Loader>
    }
    return (
        <div className='pt-24'>
                {
                    wishlist.length
                }
        </div>
    );
};

export default Wishlist;