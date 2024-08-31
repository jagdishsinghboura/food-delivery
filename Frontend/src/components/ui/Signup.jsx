import React, { useState } from 'react';

import { Link, redirect } from 'react-router-dom'
import axios from "axios"
import { useNavigate } from 'react-router-dom';

export default function Signup() {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [address, setAdress] = useState("")
  const [phoneNumber, setPhoneNumber] = useState("")

  const navigate = useNavigate();

  return (
    <div className='bg-[url("https://plus.unsplash.com/premium_photo-1681826395340-d34408303d6d?q=80&w=1472&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D")] w-full h-screen flex justify-center items-center bg-scroll bg-center bg-cover'>
      <div className=' backdrop-brightness-50  rounded-md  shadow-lg flex flex-col'>
        <h1 className='w-4/5 text-3xl text-center font-medium mt-2 text-white border-b-2 mx-2 self-center'>SignUp</h1>
        <div className='m-2 p-1 flex flex-col'>
          <label htmlFor="email" className='text-xl  text-white'>   Email :</label>
          <input className='w-96 rounded-sm   ' value={email} onChange={(e)=>setEmail(e.target.value)} type="text" placeholder='Enter your email' />
        </div>
        <div className='m-2 p-1 flex flex-col'>
          <label htmlFor="address" className='text-xl  text-white'>password :</label>
          <input className='w-96 rounded-sm   ' value={password} onChange={(e)=>setPassword(e.target.value)} type="text" placeholder='Enter your address' />
        </div>
        <div className='m-2 p-1 flex flex-col'>
          <label htmlFor="address" className='text-xl  text-white'>current address :</label>
          <input className='w-96 rounded-sm   ' value={address} onChange={(e)=>setAdress(e.target.value)} type="text" placeholder='Enter your address' />
        </div>
        <div className='m-2 p-1 flex flex-col'>
          <label htmlFor="address" className='text-xl  text-white'>Phone Number</label>
          <input className='w-96 rounded-sm   ' value={phoneNumber} onChange={(e)=>setPhoneNumber(e.target.value)} type="text" placeholder='Enter your address' />
        </div>
        <div className='flex justify-center items-center'>
          <button onClick={async()=>{
          const res =   await axios.post("http://localhost:8000/register",{
              email, password, address, phoneNumber
            })

            if(res.status==200){
              navigate("/")
            }
          }} className='w-4/5 bg-myBlue  p-2 text-2xl text-white rounded-md'>Signup</button>

        </div>
        <Link to={"/signin"} className=' p-2 w-full text-center hover:underline hover:cursor-pointer text-white rounded-md'>
          <p>Already have account?Signin</p>
        </Link>

      </div>

    </div>
  )
}

