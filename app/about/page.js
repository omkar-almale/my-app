import Link from "next/link";
import React from "react";

const details = [
  { id: 1, name: "Yash", role: "Senior Developer" },
  { id: 2, name: "Vaibhav", role: "Backend Developer" },
  { id: 3, name: "Suresh", role: "Frontend Developer" },
];
const NewsAboutUs = () => {
  return (
    <div className='bg-gray-100 py-12'>
      <div className='container mx-auto px-4'>
        <h1 className='text-4xl font-bold text-center mb-8'>
          About Our News Platform
        </h1>

        <div className='flex flex-col md:flex-row items-center justify-center space-y-6 md:space-y-0 md:space-x-12'>
          <div className='md:w-1/2'>
            <img
              src='https://img.freepik.com/free-vector/red-yellow-news-business-company-logo_23-2148462311.jpg?w=1060&t=st=1703485447~exp=1703486047~hmac=b4d5406cd93f85864aaae91b7cfc131038b51a020e3487b0edb1066ed3048cab' // Replace with your logo image URL
              alt='News Logo'
              className='w-full h-auto rounded-lg shadow-md'
            />
          </div>
          <div className='md:w-1/2'>
            <p className='text-lg'>
              Welcome to our news platform! We are a dedicated team committed to
              providing up-to-date and reliable news coverage across various
              domains, ensuring that our audience stays informed and engaged.
            </p>
            <p className='mt-4'>
              Our goal is to deliver factual and unbiased news articles on
              topics ranging from global news, business, technology, sports,
              entertainment, and more. Our experienced team of journalists works
              tirelessly to bring you credible stories and insights.
            </p>
            <p className='mt-4'>
              At our news platform, we value accuracy, integrity, and the trust
              of our readers. We are passionate about delivering high-quality
              journalism and aim to keep you informed about the latest
              happenings around the world.
            </p>
          </div>
        </div>

        <div className='mt-12 text-center'>
          <h2 className='text-3xl font-bold mb-4'>Our Mission</h2>
          <p className='text-lg'>
            Our mission is to provide comprehensive and diverse news coverage
            while upholding journalistic ethics. We strive to empower our
            audience by delivering accurate, thought-provoking, and impactful
            news stories.
          </p>
        </div>

        <div className='mt-12'>
          <h2 className='text-3xl font-bold mb-4'>Meet Our Team</h2>
          <div className='flex flex-col md:flex-row items-center justify-center space-y-6 md:space-y-0 md:space-x-8'>
            {/* Generate team member profiles */}
            {details.map((member) => (
              <Link href={`/about/${member.id}`} key={member.id}>
                <div className='flex flex-col items-center' key={member.id}>
                  <img
                    src={`https://t3.ftcdn.net/jpg/05/00/15/70/360_F_500157093_zuMAlp0UUZD49ojQKBL6U9vIpCUMiaLt.jpg`} // Placeholder image URL
                    alt={`Team Member ${member.id}`}
                    className='w-40 h-40 object-cover rounded-full shadow-md'
                  />
                  <h3 className='text-xl font-bold mt-4'>{member.name}</h3>
                  <p className='text-gray-600'>{member.role}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewsAboutUs;
