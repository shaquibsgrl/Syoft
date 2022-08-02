import {ADD_TO_CART} from "./actionTypes";

const initState={
    cart:[]
}

const cardReducer=(state=initState,action)=>{
   const {type,payload}=action

   switch(type){
   case ADD_TO_CART:
    //checking in the cart if same product is present or not
    const isPresent=state.cart.find((prod)=>{
        return prod._id===payload._id
    })

    //if present we will increase the quantity 
    let newCart
    if(isPresent){
        newCart=state.cart.map((prod)=>{
            if(prod._id===payload._id){
   return {...prod,qty:prod.qty+1}
            }
            else{
                return prod
            }
        })
    }
    else{
        let newPayload={
            ...payload,
            qty:1
        }
        newCart=[...state.cart,newPayload]
    }
    return {...state,cart:newCart}

    //else we will add the quantity

   return {...state,cart:[...state.cart,payload]}

    default :return state
   }
}

export {cardReducer}