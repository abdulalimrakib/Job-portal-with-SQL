import React from 'react'

const Banner = () => {
    return (
        <div className='px-[1rem] sm:px-[2rem] lg:px-[4rem] xl:px-[5rem] 2xl:px-[6rem] w-[100%] mx-auto'>
            <h1>Find your new job today</h1>
            <p>To be successful, the first thing to do is fall in love with your work.</p>
            <form className='flex items-center'>
                <input type="text" name='title' className='bg-transparent py-2 text-gray-800 placeholder:text-gray-400 leading-3 text-[16px] indent-5 w-1/2 border-2 border-gray-500 rounded-xl rounded-r focus:outline-blue-500' placeholder='What position are you looking for' />
                <input type="text" name='title' className='bg-transparent py-2 text-gray-800 placeholder:text-gray-400 leading-3 text-[16px] indent-5 w-1/3 border-2 border-gray-500 rounded-xl rounded-l rounded-r focus:outline-blue-500' placeholder='Location' />
                <button className='bg-blue-500 py-[.30rem] px-8 font-bold rounded-xl rounded-l text-[20px] w-1/6 hover:bg-opacity-90 duration-150'>search</button>
            </form>
        </div>
    )
}

export default Banner