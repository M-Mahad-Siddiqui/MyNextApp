import React from 'react';

function Cart({ data }) {
    const { id, title, price, description, category, image } = data;

    // Define the max length for the description
    const maxDescriptionLength = 100; // Set your desired length here

    // Function to format the description
    const formatDescription = (desc) => {
        if (desc.length > maxDescriptionLength) {
            return `${desc.slice(0, maxDescriptionLength - 3)}...`;  // Truncate and add ellipsis
        }
        return desc.padEnd(maxDescriptionLength, '.'); // Pad with dots

    };

    return (
        <div key       = {id} className = "border border-1 p-2 rounded shadow shadow-slate-400 relative">
        <div className = "w-1/2 mx-auto my-2">
        <img src       = {image} alt    = {title} className = "h-[200px] object-cover" />
            </div>
            <p   className = "text-center text-blue-800 font-bold">{title}</p>
            <p   className = "text-center text-sm my-2 mb-[4rem]">{formatDescription(description)}</p>
            <div className = "flex justify-between mt-2 shadow shadow-slate-400 p-2 bg-indigo-200 absolute w-[310px] bottom-2">
            <h2  className = "text-lg font-bold">{category}</h2>
            <p   className = "bg-gray-700 rounded p-2 text-white text-sm font-bold">{price}</p>
            </div>
        </div>
    );
}

export default Cart;
