import React from 'react'
import images from '../assets/images';

const ProductCard = ({product}) => {
  return (
    <div>

     <div className='product'>

      <img src={product.imageUrl}/>
      <div className='test'>
      <h3  className='font-style'>{product.name} <span>12%</span></h3>
      <h3 className='font-style'>{product.price}</h3>
      </div>

     </div>

    </div>
  )
}

export default ProductCard
