import React from "react";

const NewsPage = () => {
  const newsArticles = [
    {
      id: 1,
      title: "Breaking News: Major Event Occurred",
      imageUrl:
        "https://img.freepik.com/free-vector/fake-news-background-concept_23-2148514224.jpg?w=1060&t=st=1703485647~exp=1703486247~hmac=50dc08fe3767675e6c7611b4cdbb6fd49e5232ce726b3a3dbb2f526c3d61a218",
      description: "A major event took place today, impacting...",
      category: "Breaking News",
    },
    {
      id: 2,
      title: "Tech Update: New Advancements Revealed",
      imageUrl:
        "https://img.freepik.com/free-vector/fake-news-background-concept_23-2148514224.jpg?w=1060&t=st=1703485647~exp=1703486247~hmac=50dc08fe3767675e6c7611b4cdbb6fd49e5232ce726b3a3dbb2f526c3d61a218",
      description: "The latest technology advancements were unveiled...",
      category: "Technology",
    },
    {
      id: 3,
      title: "Economy Report: Growth Predictions for the Next Quarter",
      imageUrl:
        "https://img.freepik.com/free-vector/fake-news-background-concept_23-2148514224.jpg?w=1060&t=st=1703485647~exp=1703486247~hmac=50dc08fe3767675e6c7611b4cdbb6fd49e5232ce726b3a3dbb2f526c3d61a218",
      description: "Experts anticipate significant economic growth...",
      category: "Economy",
    },
    {
      id: 4,
      title: "Healthcare Update: New Breakthrough in Medical Science",
      imageUrl:
        "https://img.freepik.com/free-vector/fake-news-background-concept_23-2148514224.jpg?w=1060&t=st=1703485647~exp=1703486247~hmac=50dc08fe3767675e6c7611b4cdbb6fd49e5232ce726b3a3dbb2f526c3d61a218",
      description: "Recent discovery revolutionizes the healthcare industry...",
      category: "Health",
    },
    {
      id: 5,
      title: "Science News: Groundbreaking Discoveries Unveiled",
      imageUrl:
        "https://img.freepik.com/free-vector/fake-news-background-concept_23-2148514224.jpg?w=1060&t=st=1703485647~exp=1703486247~hmac=50dc08fe3767675e6c7611b4cdbb6fd49e5232ce726b3a3dbb2f526c3d61a218",
      description:
        "Scientists make remarkable breakthroughs in various fields...",
      category: "Science",
    },
    // Add more news articles as needed
    // ...
  ];

  return (
    <>
      <nav className='bg-gray-800 text-white py-4'>
        <div className='container mx-auto flex items-center justify-between'>
          <div className='text-2xl font-bold'>News Portal</div>
          <ul className='flex space-x-4'>
            <li>
              <a href='#' className='hover:text-red-600'>
                Home
              </a>
            </li>
            <li>
              <a href='#' className='hover:text-red-600'>
                World
              </a>
            </li>
            <li>
              <a href='#' className='hover:text-red-600'>
                Business
              </a>
            </li>
            <li>
              <a href='#' className='hover:text-red-600'>
                Technology
              </a>
            </li>
            <li>
              <a href='#' className='hover:text-red-600'>
                Sports
              </a>
            </li>
          </ul>
        </div>
      </nav>
      <div className='container mx-auto py-12 px-4'>
        <h1 className='text-4xl font-bold mb-8'>Latest News</h1>

        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
          {newsArticles.map((article) => (
            <div
              key={article.id}
              className='bg-white rounded-lg shadow-md overflow-hidden'>
              <img
                src={article.imageUrl}
                alt={article.title}
                className='w-full h-40 object-cover'
              />
              <div className='p-4'>
                <span className='text-sm font-semibold text-blue-600'>
                  {article.category}
                </span>
                <h2 className='text-lg font-bold mt-2'>{article.title}</h2>
                <p className='text-sm text-gray-600 mt-2'>
                  {article.description}
                </p>
                <a
                  href={`#/${article.id}`}
                  className='text-blue-600 mt-4 inline-block'>
                  Read more
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default NewsPage;
