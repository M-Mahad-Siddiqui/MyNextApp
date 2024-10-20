
// function page() {
//   return (
//     <div className = "bg-blue-200 min-h-[90vh]">
//       <h1>i am page </h1>
//     </div>
//   )
// }

// export default page

import ExploreMenu from '@/components/ExploreMenu';
import React from 'react'

function page() {

  const divStyle = {
    backgroundImage: `url(https://imagekit.io/blog/content/images/2019/12/image-optimization.jpg)`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    height: '80vh',
    width: '85vw',
    margin: 'auto',
    display: 'flex',
    borderRadius: '20px',
    marginTop: '20px'
  };

  return (
    <div >
      <div style     = {divStyle}>
      <div className = "text-white w-1/2 my-auto mx-10">
      <h1  className = "text-6xl font-bold">Welcome to Our Website</h1>
      <p   className = "my-5 tracking-wider text-2xl ">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vel
            nunc sit amet odio finibus accumsan. Sed euismod, nunc id aliquam
            ultricies, nisl nunc tincidunt nisi, sed aliquam lorem nunc sed
            tellus.
          </p>
          <button className="bg-blue-600 text-2xl hover:bg-blue-700 text-white font-bold py-4 px-6 rounded-full mt-4">
            View Cart
          </button>
        </div>
      </div>
      <ExploreMenu/>
    </div>
  )
}

export default page
