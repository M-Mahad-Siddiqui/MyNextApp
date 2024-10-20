import Link from 'next/link';

export default async function Page() {
  const res = await fetch('http://localhost:3000/api/nextjsTopics');
  const nextjsTopics = await res.json();
  console.log(nextjsTopics);  // Ensure this logs the correct object

  return (
    <div>
      <h1 className="relative text-3xl font-bold mx-auto text-center my-5 bg-gray-300 p-3 mx-5 rounded sticky top-0 z-10">
        Welcome to Blogs Page
        <Link href='/' className='absolute top-3 left-5 p-2 text-sm border border-gray-500 rounded bg-gray-700 text-white ' >
          back
        </Link>
      </h1>


      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mx-6">
        {nextjsTopics.data && nextjsTopics.data.length > 0 ? (  // Accessing topics correctly
          nextjsTopics.data.map((topic) => (  // Use nextjsTopics.data directly
            <Link key={topic.id} href={`/Blogs/${topic.id}`}>
              <div
                className="p-5 bg-neutral-400 m-3 rounded hover:scale-105 cursor-pointer hover:bg-neutral-600 hover:text-white transition duration-300 ease-in-out overflow-y-auto"
              >
                <h2 className="text-lg font-bold text-center">{topic.title}</h2>
                <p className="text-center mt-1">{topic.description}</p>
              </div>
            </Link>
          ))
        ) : (
          <p>No topics available</p>
        )}
      </div>
    </div>
  );
}
