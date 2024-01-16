import React from 'react'

const Button = (props:any) => {
  const {name,className,type} = props
  return (
    <button className={className} name={name} type={type}> {name} </button>
  )
}
export default Button