'use client';
import { useEffect, useState } from 'react';

async function fetchProducts() {
    const res = await fetch(`http://fakestoreapi.com/products`);
    const data = await res.json();
    return data;
}

function ExploreMenu({selectCategory,setSelectCategory}) {
    const [categories, setCategories] = useState([]);
    const [products, setProducts] = useState([]);

    useEffect(() => {
        const getData = async () => {
            const productData = await fetchProducts();
            setProducts(productData);

            const categoryList = productData.map(item => item.category);
            const uniqueCategory = ['All', ...new Set(categoryList)]; // Include 'All' option
            setCategories(uniqueCategory);
        };
        getData();
    }, []);

    return (
        <div>
            <h1 className="text-4xl font-bold my-[3rem]">Explore Menu</h1>
            <div className='flex flex-wrap justify-around'>
                {categories.map((category) => {
                    // Find an example product to get the image
                    const exampleProduct = products.find(product => product.category === category);

                    return (
                        <div 
                            key={category} 
                            onClick={() => setSelectCategory(category)} 
                            className={`flex flex-col items-center p-4 border rounded-lg cursor-pointer ${selectCategory === category ? "border-blue-600 border-2" : "border-gray-200"}`}
                        >
                            {exampleProduct && (
                                <img src={exampleProduct.image} alt={category} className="h-[140px] object-cover mb-2" />
                            )}
                            <span className="text-lg font-semibold">{category}</span>
                        </div>
                    );
                })}
            </div>
            <hr className='text-gray-500 w-full my-[2rem] font-bolder' />
        </div>
    );
}

export default ExploreMenu;
