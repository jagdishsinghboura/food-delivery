import axios from 'axios'
import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'

export default function SignIn() {

    const [email, setEmail] = useState("");
    const [password, setPassword] =useState("");
    const navigate = useNavigate()

    return (
        <div className="w-full h-screen flex justify-center items-center bg-[url('https://images.unsplash.com/photo-1540420773420-3366772f4999?q=80&w=1368&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')] bg-scroll bg-center bg-cover">
            <div className=' backdrop-brightness-50  rounded-md  shadow-lg flex flex-col'>
                <h1 className='w-full text-4xl text-center  mt-2  text-white font-semibold'>Login</h1>
                <div className='m-4 p-1 flex flex-col'>
                    <label htmlFor="email" className='text-xl p-2 text-white'>   Email :</label>
                    <input className='w-96 rounded-smv  ' value={email} onChange={(e)=>setEmail(e.target.value)} type="text" placeholder='Enter your email' />
                </div>
                <div className='m-4 p-1 flex flex-col'>
                    <label htmlFor="email" className='text-xl p-2 text-white'>password :</label>
                    <input className='w-96 rounded-sm   ' type="text" placeholder='Enter your pasword' value={password} onChange={(e)=>setPassword(e.target.value)} />
                </div>
                <div className='flex flex-row justify-around text-slate-50 p-2'>
                    <div>
                        <input type="checkbox" id="rememberme"  />
                        <label htmlFor="rememberme"> Remember me </label>
                    </div>
                    <div>
                        <h1>forget password</h1>
                    </div>
                </div>
                <div className='flex justify-center items-center'>
                    <button onClick={async ()=>{
                      const res = await   axios.post("http://localhost:8000/login",{
                        email,
                         password
                      })
                      const token = res.data.token;
                      if(res.status==200){
                        navigate 
                      ("/")
                      }
                    }} className='w-4/5 bg-myBlue  p-2 text-2xl text-white rounded-md'>Log in</button>

                </div>
                
                <Link to={"/signup"} className=' p-2 w-full text-center hover:underline hover:cursor-pointer text-white rounded-md'>
                    <p>you don't have account?Signup</p>
                </Link>

            </div>

        </div>
    )
}
