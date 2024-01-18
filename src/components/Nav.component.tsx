'use client'
import Link from 'next/link'
import Image from 'next/image'
import React, { useEffect, useState } from 'react'
import { signOut, useSession } from 'next-auth/react'

const Nav = () => {
  const isUserLoggedIn=true;
  const {data:session} = useSession()
  const [toggle, setToggle] = useState(false)

  return (
    <nav className='navbar'>
      <div className='gap-5 flex rounded-b-md'>
        <Link className='flex gap-2 items-center' href={'/'}>
          <Image
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
          session?.user ? (
            <div className='flex col items-center'>
              
              <div className='flex border-solid border-2 rounded-full border-black'>
                <Image
                src='/assets/images/user.svg'
                alt='logo img'
                width={60}
                height={60}
                onClick={()=>setToggle(!toggle)}
                />
              </div>
              {toggle &&
                (
                  <div className='dropdown border-b-2 border-x-2 border-outline '>
                    <Link href={'/'} onClick={()=>setToggle(false)} >my profile</Link>
                    <Link href={'/'} onClick={()=>setToggle(false)}>Cart</Link>
                    <Link href={'/'} onClick={()=>setToggle(false)}>Settigns</Link>
                    <button className='flex p-2 gap-2 font-extrabold text-xl items-center border-solid border-2 border-black rounded-full' type="button" onClick={()=>{setToggle(false); signOut()}}>Sign Out<Image src='/assets/images/logout.svg'alt='logo img'
                    width={20}
                    height={20}/></button> 
                  </div>
                )
              }
              
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