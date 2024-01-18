'use client'

import Nav from "@/components/Nav.component"
import { signOut } from "next-auth/react"

export default function Home() {
  return (
    <>
    <Nav/>
    <h1 className="bg-sky-500">this is the home Page</h1>
    <button className='bg-gradient-to-r from-sky-500 via-sky-700 to-indigo-500 p-1 mt-10 rounded-md w-4/5 ' type="button" /*onClick={signOut}*/>Sign Out!</button>
    </>  
  )
}
