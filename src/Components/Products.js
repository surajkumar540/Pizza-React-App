import React, { useEffect, useState} from 'react'
import Product from './Product'
import { CartContext } from '../pages/CartContext';
import { useContext } from 'react';


const Products = () => {


  const { searhProduct, data } = useContext(CartContext);;

   


  // const { name } = useContext(CartContext);

  return (
    <div className='bg-white'>
      <div className='container mx-auto pb-24'>
        <h1 className='text-lg font-bold py-4'>Products</h1>
        <div className='grid grid-cols-5 my-8 gap-24 '>
          {
            data.map(product => <Product key={product.id} product={product} />)  
          }
        </div>
      </div>
    </div>
  )
}

export default Products