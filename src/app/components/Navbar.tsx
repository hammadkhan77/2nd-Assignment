import Link from 'next/link'
import React from 'react'

const Navbar = () => {
  return (
    <div  className='bg-red-700 h-12'>
        <div className='text-white flex justify-between items-center mr-4'>
      <h1 className='text-xl m-2 cursor-pointer ml-3 cu'>Navbar</h1>
      <ul className='flex gap-3 cursor-pointer'>
        <Link className='hover:text-blue-600' href= "/">Home</Link>
        <Link className='hover:text-green-600' href= "/">About</Link>
        <Link className='hover:text-black' href= "/">Skill</Link>
        <Link className='hover:text-red-600' href= "/">Contact</Link>
      </ul>
    </div>
    </div>
  )
}

export default Navbar
