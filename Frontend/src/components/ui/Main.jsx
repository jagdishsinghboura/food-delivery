import React, { useState } from 'react'
import Food from './Food';


export default function Main() {
    const [selectedDishes, setSelectedDishes] = useState("")
  
    return (
        <div className='relative'>
           
            <div className=' w-full '>
               <div className="bg-[url('https://plus.unsplash.com/premium_photo-1678897742200-85f052d33a71?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')] w-full h-screen bg-scroll bg-center bg-cover backdrop-brightness-50">
                 <div className='h-96 w-full   bg-transparent flex flex-row justify-center items-end p-2  z-10'>
                    <div className='w-full flex flex-col'>
                        <div className='w-full flex justify-center '>
                            <div className='w-3/5 text-white flex justify-between'>
                                <button className=''><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="size-10">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5 8.25 12l7.5-7.5" />
                                </svg>
                                </button>
                                <button className=''><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-10">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
                                </svg>
                                </button>
                            </div>
                        </div>
                        <div className='w-full flex justify-center items-center  m-4'>
                            <div className='w-3/5 '>
                                <input type="text" placeholder='enter your dishes ' value={selectedDishes} onChange={(e)=>setSelectedDishes(e.target.value)}  className='w-full m-1 p-2 text-xl rounded-md shadow-lg ' />
                            </div>
                        </div>
                    </div>
                </div>
               </div>
                <div className='relative z-20 w-full bg-slate-800  -top-56 ' >
                    <Food  selectedDishes={selectedDishes}/>
                </div>
            </div>
            
        </div>
    )
}
