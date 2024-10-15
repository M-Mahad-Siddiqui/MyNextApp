'use client';
import Link from 'next/link';
import React from 'react';

function Layout({ children }) {
    const [isSelected, setIsSelected] = React.useState("profile");

    return (
        <div className="min-h-[91.7vh]">
            <div className="bg-gray-200 p-5 text-center text-4xl font-bold">
                Welcome to Dashboard
            </div>

            <div className = "flex">
            <div className = "bg-gray-600 w-1/5 min-h-[79vh] rounded m-1 p-2 text-center text-white flex flex-col space-y-12 text-2xl">
                    <Link 
                        onClick   = {() => setIsSelected("profile")}
                        className = {`${isSelected === "profile" ? "bg-gray-300 text-black" : "text-white"} m-2 mt-[3rem] rounded-full p-1`}
                        href      = "/Dashboard/profile"> {/* Adjusted path */}
                        Profile
                    </Link>
                    <Link 
                        onClick={() => setIsSelected("menu")}
                        className={`${isSelected === "menu" ? "bg-gray-300 text-black" : "text-white"} m-2 rounded-full p-1`} 
                        href="/Dashboard/menu"> {/* Adjusted path */}
                        Menu
                    </Link>
                    <Link 
                        onClick={() => setIsSelected("blogs")}
                        className={`${isSelected === "blogs" ? "bg-gray-300 text-black" : "text-white"} m-2 rounded-full p-1`} 
                        href="/Dashboard/blogs"> {/* Adjusted path */}
                        Blogs
                    </Link>
                    <Link 
                        onClick={() => setIsSelected("settings")}
                        className={`${isSelected === "settings" ? "bg-gray-300 text-black" : "text-white"} m-2 rounded-full p-1`} 
                        href="/Dashboard/settings"> {/* Adjusted path */}
                        Settings
                    </Link>
                </div>
                <div className="bg-gray-300 w-full m-1 p-2 rounded text-lg">
                    {children}
                </div>
            </div>
        </div>
    );
}

export default Layout;
