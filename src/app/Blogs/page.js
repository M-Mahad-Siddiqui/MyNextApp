import nextjsTopics from "@/nextjsTopics";
import Link from "next/link";

function Page() {
  return (
    <div>
      <h1 className="text-3xl font-bold mx-auto text-center my-5 bg-gray-300 p-3 mx-5 rounded sticky top-0 z-10">
        Welcome to Blogs Page
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-4 space-y-1 mx-6  ">
        {nextjsTopics.map((topic) => (
          <Link key={topic.id} href={`/Blogs/${topic.id}`}>
            <div key={topic.id} className=" max-h-[20vh] p-5 size-90 bg-neutral-400 m-3 rounded hover:scale-105 cursor-pointer hover:bg-neutral-600 hover:text-white transition duration-300 ease-in-out " >
              <h2 className="text-xl font-bold text-center">{topic.title}</h2>
              <p className="text-center mt-1">{topic.description}</p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}

export default Page;
