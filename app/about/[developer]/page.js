import React from "react";

const details = [
  { id: 1, name: "Yash", role: "Senior Developer" },
  { id: 2, name: "Vaibhav", role: "Backend Developer" },
  { id: 3, name: "Suresh", role: "Frontend Developer" },
];
const ProfilePage = ({ params }) => {
  const id = params.developer;
  const user = details.find((user) => user.id === parseInt(id));
  if (!user) {
    return (
      <div className='container mx-auto py-12 px-4'>
        <div className='max-w-4xl mx-auto bg-white rounded-lg shadow-2xl border border-black overflow-hidden'>
          <div className='flex flex-col md:flex-row items-center justify-center md:justify-start bg-green-500 text-white py-6 px-6'>
            <img
              src=''
              alt=''
              className='w-24 h-24 rounded-full border-4 border-white object-cover mr-4'
            />
            <div className='text-center md:text-left'>
              <h1 className='text-3xl font-bold'>Not a Such Developer</h1>
              <p className='text-sm'></p>
              <p className='text-sm'></p>
              <p className='text-sm'></p>
            </div>
          </div>
          <div className='p-6'>
            <h2 className='text-2xl font-bold mb-4'>About Me</h2>
            <p className='text-gray-600'>-</p>

            <h2 className='text-2xl font-bold mt-8 mb-4'>Skills</h2>
            <div className='flex flex-wrap'></div>
          </div>
        </div>
      </div>
    );
  }
  return (
    <div className='container mx-auto py-12 px-4'>
      <div className='max-w-4xl mx-auto bg-white rounded-lg shadow-2xl border border-black overflow-hidden'>
        <div className='flex flex-col md:flex-row items-center justify-center md:justify-start bg-green-500 text-white py-6 px-6'>
          <img
            src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRkNJ9pvkWW6hP8-bJg1-HdbmyKjPBnf77_MQ&usqp=CAU'
            alt='Profile'
            className='w-24 h-24 rounded-full border-4 border-white object-cover mr-4'
          />
          <div className='text-center md:text-left'>
            <h1 className='text-3xl font-bold'>{user.name}</h1>
            <p className='text-sm'>{user.role}</p>
            <p className='text-sm'>Location: New York, USA</p>
            <p className='text-sm'>Email: john@example.com</p>
          </div>
        </div>
        <div className='p-6'>
          <h2 className='text-2xl font-bold mb-4'>About Me</h2>
          <p className='text-gray-600'>
            I am a passionate Full Stack Developer with expertise in React,
            Node.js, and MongoDB. I love creating innovative solutions to
            complex problems and enjoy working in collaborative environments.
          </p>

          <h2 className='text-2xl font-bold mt-8 mb-4'>Skills</h2>
          <div className='flex flex-wrap'>
            <span className='bg-blue-200 text-blue-800 px-3 py-1 rounded-full text-sm font-semibold mr-2 mb-2'>
              JavaScript
            </span>
            <span className='bg-blue-200 text-blue-800 px-3 py-1 rounded-full text-sm font-semibold mr-2 mb-2'>
              React.js
            </span>
            <span className='bg-blue-200 text-blue-800 px-3 py-1 rounded-full text-sm font-semibold mr-2 mb-2'>
              Node.js
            </span>
            <span className='bg-blue-200 text-blue-800 px-3 py-1 rounded-full text-sm font-semibold mr-2 mb-2'>
              MongoDB
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;
