'use client';
import { useEffect, useState } from 'react';
import Cart from './Cart';
import ExploreMenu from './ExploreMenu';

async function fetchProducts() {
    const res = await fetch(`http://fakestoreapi.com/products`);
    const data = await res.json();
    return data;
}

function Home() {
    const [data, setData] = useState([]);
    const [selectCategory, setSelectCategory] = useState('All');


    useEffect(() => {
        const getData = async () => {
            const productData = await fetchProducts();
            setData(productData);
        };

        getData();
    }, []);

    return (
        <div className="mx-9">
    

            {/* ExploreMenu components */}
            <ExploreMenu selectCategory = {selectCategory} setSelectCategory = {setSelectCategory} />
            

            <h1 className="text-4xl my-[3rem] font-bold">Top Design near you</h1>
            <div className="my-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 space-y-1 mx-6">
                {data.filter(item => selectCategory === 'All' || item.category === selectCategory).map((items) => (
                    <Cart key={items.id} data={items} />
                ))}
            </div>
        </div>
    );
}

export default Home;
