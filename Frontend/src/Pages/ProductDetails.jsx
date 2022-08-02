import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {getCurrentProductData} from "../Redux/Products/action"
import { Button, Text } from '@chakra-ui/react'
import { Filter } from "../Components/Filter";
import {Products} from "../Components/Product";
import { Grid, GridItem,Flex,Box } from '@chakra-ui/react'
import {useParams} from "react-router-dom"
import { addToCart } from "../Redux/Cart/action";

const ProductDetails = () => {

  const loading=useSelector((state)=>state.product.loading) 
  const currentProduct=useSelector((state)=>state.product.currentproducts) ;
  const error=useSelector((state)=>state.product.error)
  //console.log(products)
  
  const {_id}=useParams();
  //console.log(_id)
  
  const dispatch=useDispatch()
  useEffect(() => {
      if(_id){
          dispatch(getCurrentProductData(_id))
          
        }
    }, [dispatch, _id]);
   // console.log(currentProduct)

    // if(loading){
    //     return <h1>Loading...</h1>
    // }
    // else if(error){
    //     return <h1>Somthing went wrong</h1>
    // }
    // if(Object.keys(product).length===0){
    //     return <h2>Product {_id} not found</h2>
    // }
    const handlecart=()=>{
        let payload={
            ...currentProduct
        }
       // console.log(payload)
       dispatch(addToCart(payload))
    }
  return (
    <Flex justifyContent="center">
   <Products product={currentProduct}/>
   <Box>
    <Button bg="yellow" margin="100px" onClick={handlecart} >Add To Cart</Button>
   </Box>
   
    </Flex>
  );
};

export {ProductDetails};