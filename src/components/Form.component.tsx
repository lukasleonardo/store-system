import React from 'react'
import Button from './Button.component'



const Form = (props:any) => {
  return (
    <div className="w-96 h-2/3 min-w-64 bg-white p-4 rounded-lg shadow-lg flex flex-col place-items-center ">
          <form className='flex flex-col mt-14 place-items-center gap-1' onSubmit={props.onSubmit}  method="post">
            <h1 className=' text-2xl font-bold'>Sign In</h1>
            <label htmlFor="username" className='py-3 self-start mt-4 font-semibold'> Username: </label>
            <input id='username' placeholder='Username' type="text" name='Username' className='bg-gray-200 p-1 rounded-md w-64 ' />
            <label htmlFor="password" className='py-3 self-start mt-4 font-semibold'> Password </label>
            <input id='password' placeholder='Password' type="password" name='password' className='bg-gray-200 p-1 rounded-md w-64' />
            <Button className={'bg-gradient-to-r from-sky-500 via-sky-700 to-indigo-500 p-1 mt-10 rounded-md w-4/5 '} name={'Entrar'} type={'submit'}/>
          </form>
            <span className='pt-3 mb-3'>Crie sua conta <a className='font-semibold underline hover:font-bold' href="/signup">aqui</a></span>
        </div> 
  )
}

export default Form