// import { useState } from 'react'
import './App.css'
import './assets/all.js'
import './assets/tailLogo.png'

function App() {


  return (
    <div className='bg-gray-200 font-sans flex flex-col items-center'>
      <header className='border-b-4 border-pink-500 bg-indigo-500 w-full flex justify-center'>
        <div className=' w-full '>
          <div className='px-4 py-3 text-lg flex items-center justify-between'>
            <div className='text-pink-800 font-bold font-mono flex gap-1'>
              <span><i className='fas fa-snowflake'></i></span> 
              <span>Scrimba</span>
            </div>
            <button type='button' className='hover:text-gray-600 text-xl sm:hidden'>
              <i className='fas fa-bars'></i>
            </button>
          </div>

          <div className='my-4 mx-4'>
            <h1 className='text-xl text-indigo-100'>Want to learn Tailwind CSS?</h1>
            <p className='text-sm text-indigo-200'>Tailwind is the fastest growing utility framework. Let's learn it step by step.</p>
             <div className='relative mt-4 flex justify-between'>
              <div>
                <a href="#" className='bg-pink-500 text-indigo-100 font-bold px-4 py-2 rounded-full text-xs uppercase'>Enroll Now</a>
              </div>
              <div className='absolute right-0 bg-white rounded-full flex justify-center items-center p-4 border-4 border-pink-500'>
                <img className="w-16 h-16 " src="src/assets/tailLogo.png" alt="Tailwind Logo" />
              </div>
             </div>
             
          </div>
        </div>
      </header>
      <main className='mt-16 w-full flex flex-col items-center'>
        <div className='max-w-full mx-4'>
          <h2 className='font-bold text-xl text-indigo-700 border-b border-indigo-600 pb-1'>How it works</h2>
          <p className='text-sm mt-4 text-gray-600'>Tailwind is designed for rapid development of modern application.
            At its core, it is a robust mobile-first system built with developer
            experience in mind. After using Tailwind CSS, you will find it difficult
            to go back to use anything else. Learn all about it in this all-inclusive
            course.
          </p>
          <h2 className='font-bold text-xl text-indigo-700 border-b border-indigo-600 pb-1 mt-8'>Advantages</h2>

          <div className='flex flex-col sm:flex-row  sm:-mx-2'>
            <div className='mt-4 sm:w-1/3'>
              <div className='h-full bg-white p-8 border-b-4 border-pink-500 rounded flex flex-col items-center sm:mx-2 sm:p-3 md:p-8'>
                <div className='text-9xl bg-gray-100 text-indigo-600 rounded-xl px-2 flex items-center justify-between'><i className='fab fa-css3-alt'></i></div>
                <div className='mt-4 font-bold'>No Custom CSS</div>
                <div className='text-center mt-2 text-gray-600 text-xs'>Tailwind's advanced class extraction will leave your project
                  free of custom CSS.
                </div>
              </div>
            </div>
            <div className='mt-4 sm:w-1/3'>
              <div className='h-full bg-white p-8 border-b-4 border-pink-500 rounded flex flex-col items-center sm:mx-2 sm:p-3 md:p-8'>
                <div className='text-9xl bg-gray-100 text-indigo-600 rounded-xl px-2 flex items-center justify-between'><i className='fas fa-file-code'></i></div>
                <div className='mt-4 font-bold'>Developer Experience</div>
                <div className='text-center mt-2 text-gray-600 text-xs'>Tailwind is designed with your happiness in mind. The ease of
                  performing changes is refreshing.
                </div>
              </div>
            </div>
            <div className='mt-4 sm:w-1/3'>
              <div className='h-full bg-white p-8 border-b-4 border-pink-500 rounded flex flex-col items-center sm:mx-2 sm:p-3 md:p-8'>
                <div className='text-9xl bg-gray-100 text-indigo-600 rounded-xl px-2 flex items-center justify-between'><i className='fas fa-mobile-alt'></i></div>
                <div className='mt-4 font-bold'>Mobile Friendly</div>
                <div className='text-center mt-2 text-gray-600 text-xs'>Modern applications demand mobile-friendly & Tailwind's responsive modifiers make it easy.
                </div>
              </div>
            </div>

          </div>
        </div>

        <div className='bg-gray-800 py-12 mt-12 w-full flex flex-col items-center border-t-2 border-black'>
          <h3 className='font-bold text-xs text-gray-400'>Sign up to download the free PDF</h3>
          <form action="#" method='post' className="max-w-xl w-full text-gray-200 mt-4 px-8 md:px-0 ">
            <div className='flex flex-col md:flex-row md:-mx-2'>
              <label htmlFor="first_name" className='sr-only'>First Name</label>
              <input type="text" placeholder='First Name' id='first_name' className="bg-gray-700 mt-4 border border-gra rounded-lg py-2 px-4 w-full md:mx-2" />
              
              <label htmlFor="last_name" className='sr-only'>Last Name</label>
              <input type="text" placeholder='Last Name' id='last_name' className="bg-gray-700 mt-4 border border-gra rounded-lg py-2 px-4 w-full md:mx-2" />
            </div>
            <div className='flex flex-col md:flex-row md:-mx-2'>
            <label htmlFor="email" className='sr-only'>Email</label>
              <input type="email" placeholder='janedoe@persons.com' id='email' className="bg-gray-700 mt-4 border border-gra rounded-lg py-2 px-4 w-full md:mx-2" />
              
              <label htmlFor="title" className='sr-only'>Title</label>
              <input type="text" placeholder='Your title' id='title' className="bg-gray-700 mt-4 border border-gra rounded-lg py-2 px-4 w-full md:mx-2" />
            </div>
            <div className='flex flex-col md:flex-row md:-mx-2'>
              <button className='bg-blue-600 text-sm mt-4 rounded-lg w-full py-2 px-4 md:mx-2'>Create Account</button>
            </div>
          </form>
        </div>
      </main>
      <footer className='bg-gray-800 w-full text-center pb-8'>
        <p className='text-xs text-blue-800 font-light'>Copyright &copy; 2024 Scrimba</p>
      </footer>
    </div>
  )
}

export default App
