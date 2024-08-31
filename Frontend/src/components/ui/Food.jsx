import React, { useEffect, useState } from 'react'
import FoodCard from '../subComponents/FoodCard'
import axios from "axios"
import { useMemo } from 'react';

function Food({selectedDishes}) {
    const [productsDetails, setproductDetails] = useState([]);
    const [starter , setStarter] = useState([])
    const [pizza , setPizza] = useState([])
    const [biryani , setBiryani] = useState([])

    useEffect(() => {
        async function init() {
            await axios.get("http://localhost:8000/products/details").then((res) => res.data).then((res) => setproductDetails(res));
        }
        init()

    }, [])
    useEffect(() => {
        const starters = [];
        const pizzas = [];
        const biryanis = [];
        if (selectedDishes) {
            const data = productsDetails.filter((obj) => {
                if (obj.name) {
                    let name = obj.name.toLowerCase();
                    return name.includes(selectedDishes.toLowerCase());
                }
                return false;
            });
            setproductDetails(data)
        }
        
    
        productsDetails.forEach((e) => {
          if (e.category === 'starter') starters.push(e);
          if (e.category === 'pizza') pizzas.push(e);
          if (e.category === 'biryani') biryanis.push(e);
        });
    
        setStarter(starters);
        setPizza(pizzas);
        setBiryani(biryanis);
      }, [productsDetails,selectedDishes]);
    

    return (
        <div className='bg-slate-700  p-2 mx-6'>
           
           {starter&&(
             <div className='mb-2'>
             <h1 className='w-full text-3xl text-white   font-semibold p-4  border-b-2'>Starter</h1>
             <div className='p-2'>
                 <FoodCard products={starter}/>
             </div>
         </div>
           )}
          {pizza&&(
            <div className='mb-2'>
                <h1 className='w-full text-3xl text-white   font-semibold p-4  border-b-2'>Pizza</h1>
                <div className='p-2'>
                    <FoodCard  products={pizza}/>
                </div>
            </div>
          )}
           {biryani&&(
             <div className='mb-2'>
             <h1 className='w-full text-3xl text-white   font-semibold p-4  border-b-2'>biryani</h1>
             <div className='p-2'>
                 <FoodCard products={biryani}/>
             </div>
         </div>
           )}
            
        </div>
    )
}

export default Food