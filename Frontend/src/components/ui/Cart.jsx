import React, { useEffect, useState } from 'react'
import NavBar from './NavBar'
import axios from 'axios';
import { useDispatch, useSelector } from "react-redux"
import { addCart, removeCart } from '../../redux/Feature/Cart';

function Cart() {

  const cart = useSelector((state) => state.cart);
  const cartId = cart.map((e) => e.id)
  const [cartDetails, setCartDetails] = useState([]);

  const [total, setTotal] = useState(0);

  const dispatch = useDispatch();

  useEffect(() => {
    async function getCart() {
      const response = await axios.post("http://localhost:8000/carts", {
        cartId
      }).then((res) => res.data)
      setCartDetails(response);



    }
    getCart();

  }, [cart])

  useEffect(() => {

    function getTotal() {

      let ptotal = 0;
      cart.map((c) => {
        let data = cartDetails.find((p) => p._id == c.id)
        let price = data?.price || 0;

        ptotal += c.quantity * price;


      })
      console.log(ptotal);
      setTotal(ptotal);


    }
    getTotal();

  }, [cartDetails, cart,total])

  function handleAddCart(id) {
    dispatch(addCart({ id }));
  }
  function handleRemoveCart(id) {
    dispatch(removeCart({ id }));
  }
  return (
    <div>
      <NavBar />
      <div>
        {cartDetails.map((e) => (
          <div className="flex flex-row justify-between  border-b-2 " key={e._id}>
            <div className='flex-row flex rounded-md border shadow-lg my-4 p-2 bg-white hover:scale-105 transition-all  cursor-pointer ml-10'>
              <div className='  '>
                <img src={e.picture} alt="" className='object-cover h-36 w-56' />
              </div>
              <div className='flex flex-col justify-around '>
                <h2 className='text-start text-xl px-6 w-11/12 '>{e.name} </h2>
                <p className='text-center'>${e.price}</p>

                <button className=' bg-skyBlue p-2 rounded-md m-1 text-white text-xl w-56 '> Order </button>
              </div>
            </div>
            <div className='w-3/12  flex justify-center items-center'>
              <div className='flex flex-row '>
                <button onClick={() => handleRemoveCart(e._id)} className="border-2 border-skyBlue text-white px-1 font-bold text-xl shadow-md rounded-md"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-6">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 12h14" />
                </svg>
                </button>
                <h1 className='text-2xl text-white px-3'>{cart.find((p) => p.id === e._id)?.quantity}</h1>
                <button onClick={() => handleAddCart(e._id)} className='border-2 border-skyBlue text-white px-2 bg-skyBlue font-bold shadow-md rounded-md'>
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className='bg-myBlue text-white text-2xl mt-4 '>
        <div className='flex justify-around text-start p-2'>
          <h1 className='text-start '>Total</h1>
          <p className='text-start '>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; ${total}</p>
        </div>
        <div className='flex justify-around  p-2'>
          <h1 className='text-start '>delivery charge</h1>
          <p className='text-start '>+$5</p>
        </div>
        <div className='flex justify-around border-t-2 '>
          <h1 className='text-start  font-semibold'>Grant Total</h1>
          <p className='text-start '> =${total + 5}</p>
        </div>
        <div className='w-full  flex justify-center items-center'>
          <button className=' bg-red-600 w-3/12 p-3 m-3 rounded-lg shadow-lg shadow-red-500 drop-shadow-md' > Check-Out</button>
        </div>
      </div>

    </div>
  )
}

export default Cart

