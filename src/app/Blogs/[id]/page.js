import nextjsTopics from '@/nextjsTopics';
import Link from "next/link";

export async function generateMetadata(
    { params }) {
    const topic = nextjsTopics.find((topic) => topic.id === Number(params.id));
    return {
        title: topic.title
    };
}

function BlogDetail({ params }) {
    const topic = nextjsTopics.find((topic) => topic.id === Number(params.id));

    if (!topic) {
        return <p>Topic not found</p>; // Handle case where topic is not found
    }

    return (
        <>
            <div className = "border border-purple-300 p-5 m-5 w-3/5 rounded mx-auto mt-[8rem] shadow shadow-slate-400">
            <h1  className = "text-5xl font-bold text-center my-3">{topic.title}</h1>
            <p   className = "text-center text-lg mx-auto my-3 bg-gray-700 rounded-full p-2 w-[300px] text-white">{topic.slug}</p>
            <p   className = "text-center text-4xl mx-auto my-3">{topic.description}</p>
            </div>

           <Link href      = "/Blogs"
                 className = "mx-auto w-[65px] flex justify-center p-2 px-3 border border-2 border-gray-500 rounded font-bold hover:bg-gray-700 hover:text-white transition duration-300 ease-in-out">
                Back
            </Link>
        </>
    );
}

export default BlogDetail;









// import React from 'react';
// import { useRouter } from 'next/router';
// import nextjsTopics from '@/nextjsTopics';

// function BlogDetail({ params }) {
//     const router = useRouter();
//     const topic = nextjsTopics.find((topic) => topic.id === Number(params.id));

//     if (!topic) {
//         return <p>Topic not found</p>; // Handle case where topic is not found
//     }

//     return (
//         <>
//             <div className="border border-purple-300 p-5 m-5 w-3/5 rounded mx-auto mt-[8rem] shadow shadow-slate-400">
//                 <h1 className="text-5xl font-bold text-center my-3">{topic.title}</h1>
//                 <p className="text-center text-lg mx-auto my-3 bg-gray-700 rounded-full p-2 w-[300px] text-white">{topic.slug}</p>
//                 <p className="text-center text-4xl mx-auto my-3">{topic.description}</p>
//             </div>

//             <button 
//                 onClick={() => router.back()} // Ensure this is callable
//                 className="mx-auto flex justify-center p-2 px-3 border border-gray-300 rounded hover:bg-gray-700 hover:text-white transition duration-300 ease-in-out">
//                 Back
//             </button>
//         </>
//     );
// }

// export default BlogDetail;
