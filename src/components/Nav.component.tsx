'use client'
import Link from 'next/link'
import Image from 'next/image'
import React from 'react'

const Nav = () => {
  const isUserLoggedIn=false;
  return (
    <nav className='bg-white gap-5 w-full flex justify-between mb-16 p-3 rounded-b-md'>
      <div className='gap-5 flex rounded-b-md'>
        <Link className='flex gap-2 items-center' href={'/'}>
          <Image
          className='bg-white'
          src='/assets/images/icon.svg'
          alt='logo img'
          width={60}
          height={60}
          />
          <p className='font-bold text-2xl'>Store System</p>
          </Link>
          <Link className='flex font-bold hover:font-extrabold text-xl items-center'  href={'/'}>Home</Link>
          <Link className='flex font-bold hover:font-extrabold text-xl items-center'  href={'/'}>Options</Link>
          <Link className='flex font-bold hover:font-extrabold text-xl items-center'  href={'/about'}>About</Link>
      </div>
        {
          isUserLoggedIn?(
            <div className='flex items-center'>
              <button className='flex gap-2 font-extrabold text-xl items-center content-center' type="button">Sign Out<Image src='/assets/images/logout.svg'alt='logo img'
        width={40}
        height={40}/></button>
            </div>
          ):(
            <div className='flex gap-3 items-center'>
              <Link href={'/login'} className='p-4 border-solid border-2 font-extrabold text-xl hover:shadow-lg hover:opacity-85 rounded-full' >Sign In</Link>

              <button className='p-3 border-solid border-3 font-extrabold text-xl hover:shadow-lg rounded-full text-white bg-black hover:opacity-90' type="button">Sign Up</button>
            </div>
          )
        }
    </nav>
  )
}

export default Nav