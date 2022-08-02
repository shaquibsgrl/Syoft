import {PRODUCT_LOADING,PRODUCT_SUCCESS,PRODUCT_ERROR,CURRENT_PRODUCT_LOADING,CURRENT_PRODUCT_ERROR,CURRENT_PRODUCTS_SUCCESS} from "./actionTypes"
const handleLoading=()=>({
    type:PRODUCT_LOADING
})
const handleError=()=>({
    type:PRODUCT_ERROR
})
const handleSuccess=(payload)=>({
    type:PRODUCT_SUCCESS,
    payload
 })

 const getData=()=>(dispatch)=>{
    dispatch(handleLoading())
    fetch("https://mernprojectxyz.herokuapp.com/products")
      .then((res) => res.json())
      .then((res) => dispatch(handleSuccess(res.products)))
      .catch(() => dispatch(handleError()));
 }




 const handleCurrentProductLoading=()=>({
    type:CURRENT_PRODUCT_LOADING
})
const handleCurrentProductError=()=>({
    type:CURRENT_PRODUCT_ERROR
})
const handleCurrentProductSuccess=(payload)=>({
    type:CURRENT_PRODUCTS_SUCCESS,
    payload
 })

 const getCurrentProductData=(_id)=>(dispatch)=>{
    dispatch(handleCurrentProductLoading())
    fetch(`https://mernprojectxyz.herokuapp.com/products/${_id}`)
      .then((res) => res.json())
      //.then((res)=>console.log(res))
      .then((res) => dispatch(handleCurrentProductSuccess(res.product)))
      .catch(() => dispatch(handleCurrentProductError()));
 }
 
 
 export {getData,getCurrentProductData}