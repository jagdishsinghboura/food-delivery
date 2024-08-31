import React from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'

export default function NavBar() {
    const cart = useSelector((state) => state.cart)
    return (
        <nav className='w-full bg-skyBlue pb-2  sticky  z-50 top-0 '>
            <div className='w-full px-4 flex flex-row  justify-between '>
                <div className='flex flex-row  w-3/12 justify-between items-center'>
                    <div className='p-2'>
                        <span className='text-4xl font-semibold font-sans text-white italic cursor-pointer'> Foody</span>
                    </div>
                    <div className='text-xl flex gap-4 mx-3  text-white'>
                        <Link to={"/"} className='hover:text-myBlue'>Home</Link>
                        <Link to={"/order"} className=''>MyOrder</Link>
                    </div>
                </div>
                <div className='flex flex-row justify-center items-center gap-4'>
                    <button className='text-white text-xl p-0 '> <Link to={"/cart"}>

                        <div className='flex flex-row'>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-10">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 0 0-16.536-1.84M7.5 14.25 5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z" />
                            </svg>
                            <h2 className=' text-black   -ml-5 text-start backdrop -mt-2 px-2 '>
                                <p className='rounded-full bg-red-500 px-1 h-7 w-7 text-center'>{cart.length}</p>
                            </h2>
                        </div>

                    </Link></button>
                    <Link to={"/signin"} className='text-white text-2xl  p-2'><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="size-9 hover:scale-110">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M8.25 9V5.25A2.25 2.25 0 0 1 10.5 3h6a2.25 2.25 0 0 1 2.25 2.25v13.5A2.25 2.25 0 0 1 16.5 21h-6a2.25 2.25 0 0 1-2.25-2.25V15M12 9l3 3m0 0-3 3m3-3H2.25" />
                    </svg>
                    </Link>
                    <button className='text-white'>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-9 hover:scale-110">
                            <path stroke-linecap="round" strokeLinejoin="round" d="M17.982 18.725A7.488 7.488 0 0 0 12 15.75a7.488 7.488 0 0 0-5.982 2.975m11.963 0a9 9 0 1 0-11.963 0m11.963 0A8.966 8.966 0 0 1 12 21a8.966 8.966 0 0 1-5.982-2.275M15 9.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                        </svg>

                    </button>
                </div>
            </div>
            
        </nav>
    )
}
