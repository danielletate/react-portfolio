import React, {useState} from 'react'


const Contact = () => {
  
  

    return (
      <section name='contact' className='w-full h-screen bg-gray-800 flex justify-center items-center'>

        {/* Container */}
        <div className='w-full max-w-[1000px] mx-auto px-6'>    
              <div className='pb-6'>
                  <p className='text-4xl text-gray-300 font-bold inline border-b-4 border-violet-500'>Contact</p>
                  <p className='text-gray-300 py-4'>Want to collaborate on a project or have a question?</p>
              </div>
              
        {/* Form Container */}
      <div className="w-full md:max-w-2xl">

        {/* Contact Form */}
        <form method='POST' action="https://getform.io/f/4230372c-5718-4c42-a179-e0da9e3cd436"  className="mt-4">
          <div className="mb-2">
            <label>
              <span className="text-gray-500">Name</span>
              <input
                type="text"
                name="name"
                id="name"
                className="
                w-full
                block px-4 py-2 mt-2
                border-gray-300
                rounded-sm
                focus:outline-0
                bg-indigo-100
                "
                placeholder="First and Last Name"
              />

            </label>
          </div>
          <div className="mb-2">
            <label>
              <span className="text-gray-500">Email address</span>
              <input
                type="text"
                name="email"
                id="email"
                className="
                focus:outline-0
                w-full
                block px-4 py-2 mt-2
                border-gray-300
                rounded-sm
                bg-indigo-100
          "
                placeholder="name@example.com"
                required
              />
            </label>
          </div>
          <div className="mb-2">
            <label>
              <span class="text-gray-500">Message</span>
              <textarea
               name="message"
               id="message"
                className="
                focus:outline-0
                w-full
                block px-4 py-2 mt-2
                border-gray-300
                rounded-sm
                bg-indigo-100
                "
                rows="5"
              ></textarea>
            </label>
          </div>

             <button type="submit" className='text-white group border-2 px-6 py-3 my-2 flex items-center hover:bg-violet-600 hover:border-violet-600 mt-6'>Contact Me</button>
    
        </form>
      </div>
    </div>
</section>


    )
  }
  
export default Contact