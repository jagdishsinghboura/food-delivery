import React from 'react'
import { useDispatch } from 'react-redux'
import { addCart } from '../../redux/Feature/Cart';

export default function FoodCard({ products }) {


    const dispatch = useDispatch();

    function handleCart(id) {
        dispatch(addCart({ id }));
        alert("item is added in cart")
    }

    return (
        <div className="flex flex-row gap-x-10  overflow-x-scroll rounded-sm  no-scrollbar  ">
            {products.map((e) => (
                <div className="flex flex-row justify-between gap-x-16 ">
                    <div className='flex-col rounded-md border shadow-lg w-64 my-4 p-2 bg-white hover:scale-105 hover:w-64 transition-all  cursor-pointer'>
                        <div className='w-full  '>
                            <img src={e.picture} alt="" className='object-cover h-40 w-full' />
                        </div>
                        <h2 className='w-ful text-start text-xl p-2'>{e.name}</h2>
                        <div className='flex felx-row  w-full justify-around items-center p-2 '>
                            <div className='bg-skyBlue'>
                                <select name="quantity" id="quantity">
                                    <option value="1">1</option>
                                    <option value="2">2</option>
                                    <option value="3">3</option>
                                    <option value="4">4</option>
                                    <option value="5">5</option>
                                    <option value="6">6</option>
                                </select>
                            </div>
                            <div className='bg-skyBlue'>
                                <select name="type" id="type">
                                    <option value="full" defaultValue={"full"}>Full</option>
                                    <option value="half">Half</option>

                                </select>
                            </div>
                            <span> ${e.price}</span>
                        </div>
                        <button onClick={() => handleCart(e._id)} className='w-full bg-skyBlue p-2 rounded-md m-1 text-white text-xl hover:scale-100'> Add to Cart  </button>
                        <button  className='w-full bg-red-500 p-2 rounded-md m-1 text-white text-xl hover:scale-100'> Order  </button>
                    </div>



                </div>
            ))}



        </div>
    )
}
