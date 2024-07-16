import React from 'react';
import Bannercard from '../home/BannerCard';

const Banner = () => {
  return (
    <div className='px-4 lg:px-24 bg-sky-100 flex items-center'>
      <div className='flex w-full flex-col md:flex-row justify-between items-center gap-12 py-40'>
       
        {/* left */}
        <div className="w-full md:w-1/2">
          <h2 className='text-5xl font-bold leading-snug text-black mb-5'>Discover,Buy and Sell Your Books <span className='text-blue-700'>for the Best Prices</span></h2>
          <p className='mb-5 text-lg'>At Bookly, we are passionate about books and committed to fostering a 
          love for reading in our community. Whether you’re looking to buy new or used books, 
          sell your old favorites, or simply explore our extensive collection, 
          we have something for everyone. 
          </p>
          <div>
            <input type='search' name='search' id='search' placeholder='Search a book' className='py-2 px-2 rounded-s-sm outline-none text-lg'/>
            <button className='bg-blue-400 px-6 py-2 text-white font-medium hover:bg-black transition-all ease-in duration-200 text-lg'>Search</button>
          </div>
        </div>

        {/* right */}
        <div className="w-full md:w-1/2">
          <Bannercard></Bannercard>
        </div>
      </div>
    </div>
  )
}

export default Banner;
