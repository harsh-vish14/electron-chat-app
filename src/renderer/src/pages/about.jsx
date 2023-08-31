import React from 'react'
import { useNavigate } from 'react-router-dom'

function ABOUT() {
  const navigate = useNavigate()
  return (
    <>
      <div className="font-bold text-9xl text-primary-white">ABOUT PAGE</div>
      <div
        className="mt-10 cursor-pointer text-5xl"
        onClick={() => {
          localStorage.clear()
          navigate('/')
        }}
      >
        Log-out
      </div>
    </>
  )
}

export default ABOUT
