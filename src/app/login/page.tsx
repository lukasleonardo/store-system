"use client"
import { getProviders, signIn, useSession } from "next-auth/react"
import { redirect } from "next/navigation"
import { useEffect, useState } from "react"




const Login = () => {

  const {data:session}=useSession()
  const [providers, setProviders] = useState(null)

  useEffect(() => {
    const setUpProviders = async ()=>{
      const response:any = await getProviders()
      setProviders(response)
    }
    setUpProviders()
  }, [])

  const handleSubmit = ()=>{
    
  } 

  
  return (
    <>
    {
      !session?.user ? (       
        <main className='flex justify-center items-center h-lvh'>
           {providers &&
              Object.values(providers).map((provider:any) => (
                <div className="w-96 h-2/3 min-w-64 bg-white p-4 rounded-lg shadow-lg flex flex-col place-items-center ">
                <form className='flex flex-col mt-14 place-items-center gap-1' onSubmit={()=>handleSubmit()}  method="post">
                  <h1 className=' text-2xl font-bold'>Sign In</h1>
                  <label htmlFor="username" className='py-3 self-start mt-4 font-semibold'> Username: </label>
                  <input id='username' placeholder='Username' type="text" name='Username' className='bg-gray-200 p-1 rounded-md w-64 ' />
                  <label htmlFor="password" className='py-3 self-start mt-4 font-semibold'> Password </label>
                  <input id='password' placeholder='Password' type="password" name='password' className='bg-gray-200 p-1 rounded-md w-64' />
                  <button className='bg-gradient-to-r from-sky-500 via-sky-700 to-indigo-500 p-1 mt-10 rounded-md w-4/5 ' type='submit'>Entrar</button>
                </form>
                  <span className='pt-3 mb-3'>Crie sua conta <a className='font-semibold underline hover:font-bold' href="/signup">aqui</a></span>
                  <button className='mt-200 bg-white p-1 border-solid border-2 hover:shadow-lg rounded-md w-4/5' key={provider.name} onClick={()=>{signIn(provider.id)}} type="button" >Login with Google</button>
              </div> 
              ))}
        </main>
        
      ):redirect('/about')
    }
    </>
  )
}

export default Login
