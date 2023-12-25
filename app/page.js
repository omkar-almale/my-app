import React from "react";

const HomePage = () => {
  // Mock data for featured articles
  const featuredArticles = [
    {
      id: 1,
      title: "Breaking News: Major Event Occurred",
      imageUrl: "https://npg.news/h-upload/2023/12/11/1213093-top.jpg",
      description: "A major event took place today, impacting...",
    },
    {
      id: 2,
      title: "Tech Update: New Advancements Revealed",
      imageUrl: "https://npg.news/h-upload/2023/12/11/1213093-top.jpg",
      description: "The latest technology advancements were unveiled...",
    },
    {
      id: 3,
      title: "Tech Update: New Advancements Revealed",
      imageUrl: "https://npg.news/h-upload/2023/12/11/1213093-top.jpg",
      description: "The latest technology advancements were unveiled...",
    },
    // Add more featured articles here
    // ...
  ];

  // Mock data for latest news
  const latestNews = [
    {
      id: 1,
      title: "Economy Report: Growth Predictions for the Next Quarter",
      imageUrl: "https://npg.news/h-upload/2023/12/11/1213093-top.jpg",
      description: "Experts anticipate significant economic growth...",
    },
    {
      id: 2,
      title: "Sports Update: Results of the Recent Championship",
      imageUrl: "https://npg.news/h-upload/2023/12/11/1213093-top.jpg",
      description: "Reviewing the highlights of the recent championship...",
    },
    {
      id: 3,
      title: "Sports Update: Results of the Recent Championship",
      imageUrl: "https://npg.news/h-upload/2023/12/11/1213093-top.jpg",
      description: "Reviewing the highlights of the recent championship...",
    },
    // Add more latest news here
    // ...
  ];

  return (
    <>
      {/* Navigation */}
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
        {/* Welcome Section */}
        <section className='mb-12'>
          <h1 className='text-4xl font-bold mb-4'>
            Welcome to Our News Portal
          </h1>
          <p className='text-lg'>
            Get the latest updates and breaking news from around the world.
          </p>
        </section>

        {/* Featured Articles Section */}
        <section className='mb-12'>
          <h2 className='text-3xl font-bold mb-6'>Featured Articles</h2>
          <div className='grid grid-cols-1 md:grid-cols-3 gap-6'>
            {/* Featured article cards */}
            {featuredArticles.map((article) => (
              <div
                key={article.id}
                className='bg-white rounded-lg shadow-md overflow-hidden'>
                <img
                  src={article.imageUrl}
                  alt={article.title}
                  className='w-full h-40 object-cover'
                />
                <div className='p-4'>
                  <h3 className='text-xl font-bold mb-2'>{article.title}</h3>
                  <p className='text-sm text-gray-600'>{article.description}</p>
                  <a href='#' className='text-blue-600 mt-4 inline-block'>
                    Read more
                  </a>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Latest News Section */}
        <section className='mb-12'>
          <h2 className='text-3xl font-bold mb-6'>Latest News</h2>
          <div className='grid grid-cols-1 md:grid-cols-3 gap-6'>
            {/* Latest news article cards */}
            {latestNews.map((article) => (
              <div
                key={article.id}
                className='bg-white rounded-lg shadow-md overflow-hidden'>
                <img
                  src={article.imageUrl}
                  alt={article.title}
                  className='w-full h-40 object-cover'
                />
                <div className='p-4'>
                  <h3 className='text-xl font-bold mb-2'>{article.title}</h3>
                  <p className='text-sm text-gray-600'>{article.description}</p>
                  <a href='#' className='text-blue-600 mt-4 inline-block'>
                    Read more
                  </a>
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>
    </>
  );
};

export default HomePage;
