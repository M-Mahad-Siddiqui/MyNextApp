//                // src/components/Navbar.js
// "use client";  // Add this line to mark the component as a Client Component

// import React, { useState } from 'react';

// function Navbar() {
//     const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

//     const toggleMobileMenu = () => {
//         setIsMobileMenuOpen(!isMobileMenuOpen);
//     };

//     return (
//         <nav   className = "navbar bg-cyan-700 p-4 sticky top-1 m-1 rounded text-white">
//         <div   className = "container mx-auto flex justify-between items-center">
//         <a     className = "text-2xl font-bold text-white">MyBrand</a>
//         <div   className = "hidden md:flex justify-around w-1/3">
//         <ul    className = "flex     justify-around w-full  items-center  text-xl">
//         <li><a className = "hover:text-yellow-700 transition">Home</a></li>
//         <li><a className = "hover:text-yellow-700 transition">Shop</a></li>
//         <li><a className = "hover:text-yellow-700 transition">Blogs</a></li>
//         <li><a className = "hover:text-yellow-700 transition">Contact</a></li>
//                     </ul>
//                     <button className="bg-blue-600 p-2 rounded hover:bg-blue-500 transition">
//                         Login
//                     </button>
//                 </div>
//                 {/* Hamburger icon for mobile view */}
//                 <div className="md:hidden">
//                     <button className="focus:outline-none" onClick={toggleMobileMenu}>
//                         <svg
//                             xmlns="http://www.w3.org/2000/svg"
//                             className="h-6 w-6"
//                             fill="none"
//                             viewBox="0 0 24 24"
//                             stroke="currentColor"
//                         >
//                             <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
//                         </svg>
//                     </button>
//                 </div>
//             </div>
//             {/* Mobile Menu */}
//             {isMobileMenuOpen && (
//                 <div className="md:hidden mt-4">
//                     <ul className="flex flex-col space-y-2">
//                         <li><a className="block text-lg hover:text-yellow-700 transition">Home</a></li>
//                         <li><a className="block text-lg hover:text-yellow-700 transition">Shop</a></li>
//                         <li><a className="block text-lg hover:text-yellow-700 transition">Blogs</a></li>
//                         <li><a className="block text-lg hover:text-yellow-700 transition">Contact</a></li>
//                         <li>
//                             <button className="bg-blue-600 p-2 rounded hover:bg-blue-500 transition w-full">
//                                 Login
//                             </button>
//                         </li>
//                     </ul>
//                 </div>
//             )}
//         </nav>
//     );
// }

// export default Navbar;
//-----------------------------------------------------------
// "use client";
// import { useState } from 'react';

// const Navbar = () => {
//   const [isMenuOpen, setIsMenuOpen] = useState(false);

//   const handleMenuToggle = () => {
//     setIsMenuOpen(!isMenuOpen);
//   };

//   const navLinks = [
//     { href: '#home', label: 'Home' },
//     { href: '#about', label: 'About' },
//     { href: '#services', label: 'Services' },
//     { href: '#contact', label: 'Contact' },
//   ];

//   return (
//     <nav className="bg-gray-800 p-4">
//       <div className="container mx-auto flex justify-between items-center">
//         {/* Logo */}
//         <div className="text-white text-lg font-bold">MyLogo</div>

//         {/* Desktop Menu */}
//         <div className="hidden md:flex space-x-4">
//           {navLinks.map(({ href, label }) => (
//             <a key={href} href={href} className="text-gray-300 hover:text-white">
//               {label}
//             </a>
//           ))}
//         </div>

//         {/* Mobile Menu Button */}
//         <div className="md:hidden flex items-center">
//           <button
//             id="menu-button"
//             onClick={handleMenuToggle}
//             className="text-gray-300 hover:text-white focus:outline-none"
//           >
//             ☰
//           </button>
//         </div>

//         {/* Auth Buttons (Visible on all screen sizes) */}
//         <div className="flex items-center space-x-4">
//           <button className="text-gray-300 hover:text-white border border-gray-300 rounded px-4 py-2">
//             Login
//           </button>
//           <img
//             src       = "https://via.placeholder.com/50x50"
//             alt       = "User Avatar"
//             className = "rounded-full"
//           />

//         </div>
//       </div>

//       {/* Mobile Menu */}
//       {isMenuOpen && (
//         <div className="md:hidden mt-2">
//           <div className="flex flex-col space-y-2">
//             {navLinks.map(({ href, label }) => (
//               <a key={href} href={href} className="block text-gray-300 hover:text-white">
//                 {label}
//               </a>
//             ))}
//           </div>
//         </div>
//       )}
//     </nav>
//   );
// };

// export default Navbar;

"use client";
import Link from 'next/link';
import { useState } from 'react';

function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const [isActive, setIsActive] = useState("");

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    const handleLinkClick = (page) => {
        setIsActive(page);
        if (isOpen) toggleMenu(); // Close the menu if it's open
    };

    return (
        <nav  className = "bg-gray-800 p-4">
        <div  className = "container mx-auto flex justify-between items-center">
        <Link href      = "/" className = "text-white font-bold text-2xl" onClick = {() => setIsActive("")}>
                    MAHAD
                </Link>
                <div className="hidden md:flex space-x-9">
                    <Link onClick={() => handleLinkClick("Home")} href="Home" className={isActive === "Home" ? "text-white font-bold border-b-2" : "text-gray-300 hover:text-white"}>Home</Link>
                    <Link onClick={() => handleLinkClick("About")} href="About" className={isActive === "About" ? "text-white font-bold border-b-2" : "text-gray-300 hover:text-white"}>About</Link>
                    <Link onClick={() => handleLinkClick("Services")} href="Services" className={isActive === "Services" ? "text-white font-bold border-b-2" : "text-gray-300 hover:text-white"}>Services</Link>
                    <Link onClick={() => handleLinkClick("Contact")} href="Contact" className={isActive === "Contact" ? "text-white font-bold border-b-2" : "text-gray-300 hover:text-white"}>Contact</Link>
                </div>
                <div className="md:hidden">
                    <button onClick={toggleMenu} className="text-white focus:outline-none">
                        {isOpen ? 'X' : '☰'}
                    </button>
                </div>
            </div>

            {isOpen && (
                <div  className = "md:hidden">
                <div  className = "flex flex-col space-y-1 p-4 bg-gray-700">
                <Link onClick   = {() => handleLinkClick("Home")} href     = "Home" className     = "text-gray-300 hover:text-white">Home</Link>
                <Link onClick   = {() => handleLinkClick("About")} href    = "About" className    = "text-gray-300 hover:text-white">About</Link>
                <Link onClick   = {() => handleLinkClick("Services")} href = "Services" className = "text-gray-300 hover:text-white">Services</Link>
                <Link onClick   = {() => handleLinkClick("Contact")} href  = "Contact" className  = "text-gray-300 hover:text-white">Contact</Link>
                    </div>
                </div>
            )}
        </nav>
    );
}

export default Navbar;
