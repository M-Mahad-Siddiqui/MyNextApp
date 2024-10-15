import React from 'react'
import Home from '../../../components/Home';


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
      <div style={divStyle}>
        <div className="text-white w-1/2 my-auto mx-10">
          <h1 className="text-6xl font-bold">Welcome to Our Website</h1>
          <p className="mt-4">
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
      <Home />
    </div>
  )
}

export default page
