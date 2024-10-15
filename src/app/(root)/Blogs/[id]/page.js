import Link from "next/link";

export async function generateMetadata({ params }) {
    const res = await fetch('http://localhost:3000/api/nextjsTopics');
    const nextjsTopics = await res.json();
    const topic = nextjsTopics.data.find((topic) => topic.id === Number(params.id));
    
    return {
        title: topic ? topic.title : "Topic Not Found" // Handle case where topic is not found
    };
}

async function BlogDetail({ params }) {
    const res = await fetch('http://localhost:3000/api/nextjsTopics');
    const nextjsTopics = await res.json();
    const topic = nextjsTopics.data.find((topic) => topic.id === Number(params.id));

    if (!topic) {
        return <p>Topic not found</p>;  // Handle case where topic is not found
    }

    return (
        <>
            <div className="border border-purple-300 p-5 m-5 w-3/5 rounded mx-auto mt-[8rem] shadow shadow-slate-400">
                <h1 className="text-5xl font-bold text-center my-3">{topic.title}</h1>
                <p className="text-center text-lg mx-auto my-3 bg-gray-700 rounded-full p-2 w-[300px] text-white">{topic.slug}</p>
                <p className="text-center text-4xl mx-auto my-3">{topic.description}</p>
            </div>

            <Link href="/Blogs"
                className="mx-auto w-[65px] flex justify-center p-2 px-3 border border-2 border-gray-500 rounded font-bold hover:bg-gray-700 hover:text-white transition duration-300 ease-in-out">
                Back
            </Link>
        </>
    );
}

export default BlogDetail;
