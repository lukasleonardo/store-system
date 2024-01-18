import React from 'react'

const SignUp = () => {
  return (
    <main className='flex justify-center h-lvh'>
      <div className='flex flex-col w-2/3 h-full align-center justify-center bg-white p-4 rounded-lg shadow-lg '>
        <form method="post">
          <fieldset className='flex flex-col'>
            <label htmlFor="">Username:</label>
            <input type="text" />
            <label htmlFor="">Password:</label>
            <input type="text" />
            <label htmlFor="">Email:</label>
            <input type="text" />
          </fieldset>
          <fieldset>
            <label htmlFor="image">Image</label>
            <input type="file" name="image" id="image" />
          </fieldset>
          <div>
            <button type="submit">Criar</button>
            <button type="reset">Limpar</button>
          </div>
        </form>


      </div>
    </main>
  )
}

export default SignUp