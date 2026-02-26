import React, { useEffect, useState } from 'react'
import axios from 'axios'
import Product from './Product';
const Shop = () => {
  const [products, setProducts] = useState([]);

  let getProducts = async ()=>
  {
    let res = await axios.get("https://fakestoreapi.com/products");
    setProducts(res.data);
  }

  useEffect(()=>{
    let call = ()=> getProducts();
    call();
  },[]);

  return (
    <div className='row justify-content-center mx-auto g-4 container col-10 my-4'>
      {products.map((product)=> <Product item={product} key={product.id} />)}
    </div>
  )
}

export default Shop