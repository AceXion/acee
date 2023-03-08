import React from 'react';
import conimg from './images/pickle.jpg'


const Contact = () => {

    

    return (
        <div id='contact' className='bg-[#2C3333]'>
      <div
        className="max-w-screen-xl px-8 grid gap-8 grid-cols-1 lg:grid-cols-2 md:px-12 lg:px-16 xl:px-32 py-16 mx-auto bg-[#2C3333] text-white rounded-lg shadow-lg">
        <div className="flex flex-col justify-between">
          <div >
            <h2 className="text-4xl lg:text-5xl font-bold leading-tight">Lets talk about everything!</h2>
            <div className="text-white mt-8">
              Hate forms? Send me an email instead. "acemalicay19@gmail.com"
            </div>
          </div>
          <div className="mt-8 text-center">
           
          <img className='hidden lg:block max-h-[30rem] overflow-hidden max-w-[30rem] object-scale-down w-full rounded-3xl border-2 border-[green]' src={conimg} alt="" />

          </div>
        </div>
        <form action='https://getform.io/f/ff28279d-ebf3-4daa-975b-cbf4c3705447' method='POST' encType='multipart/form-data'>
          <div>
            <span className="uppercase text-sm text-white font-bold">Full Name</span>
            <input 
            className="w-full bg-gray-300 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"
              type="text"
               name='fullname'
               ></input>
          </div>
          <div className="mt-8">
            <span className="uppercase text-sm text-white font-bold">Email</span>
            <input 
            className="w-full bg-gray-300 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"
              type="email"
              name='email'
              ></input>
          </div>
          <div className="mt-8">
            <span className="uppercase text-sm text-white font-bold">Message</span>
            <textarea
              name='message'
              className="w-full h-32 bg-gray-300 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"></textarea>
          </div>
          <div className="mt-8">
            <button
              className="uppercase text-sm font-bold tracking-wide bg-indigo-500 text-gray-100 p-3 rounded-lg w-full focus:outline-none focus:shadow-outline"
              
              >
              Send Message
            </button>
          </div>
        </form>
      </div>
        </div>
    );
}

export default Contact;
