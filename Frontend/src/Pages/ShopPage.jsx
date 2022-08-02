import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {getData} from "../Redux/Products/action"
import { Text } from '@chakra-ui/react'
import { Filter } from "../Components/Filter";
import {Products} from "../Components/Product";
import { Grid, GridItem } from '@chakra-ui/react'

const Shoppage = () => {

  const loading=useSelector((state)=>state.product.loading) 
  const products=useSelector((state)=>state.product.products) ;
  const error=useSelector((state)=>state.product.error)
  //console.log(products)

  const dispatch=useDispatch()
  useEffect(() => {
    if(products?.length===0){
    dispatch(getData())

  }
  }, [dispatch,products.length]);
  return (
    <div>
    <Text>Shop all</Text>
    <Filter/>
    {
      loading ?
      <h1>Entities Loading...</h1>
      :error ? 
      <h2>Something went wrong please try again later</h2>
      :<Grid templateColumns='repeat(3, 1fr)' gap={6}>
        {products.length>0 && products.map((product)=>{
          return <Products key={product._id} product={product}/>
        })}
     </Grid>
    }
    </div>
  );
};

export default Shoppage;