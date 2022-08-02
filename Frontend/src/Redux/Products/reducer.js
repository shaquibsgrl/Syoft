import {PRODUCT_LOADING,PRODUCT_SUCCESS,PRODUCT_ERROR,CURRENT_PRODUCT_LOADING,CURRENT_PRODUCT_ERROR,CURRENT_PRODUCTS_SUCCESS} from "./actionTypes"

const initState={
    loading:false,
    error:false,
    products:[],
    currentproducts:[]
}

const productReducer=(state=initState,action)=>{
          switch(action.type){
            case PRODUCT_LOADING:
            return {...state,loading:true}

                case PRODUCT_ERROR:
                return {...state,loading:false,error:true}
    
                case PRODUCT_SUCCESS:
                    return {...state,loading:false,error:false,products:action.payload}

                    case CURRENT_PRODUCT_LOADING:
                        return {...state,loading:true}
            
                            case CURRENT_PRODUCT_ERROR:
                            return {...state,loading:false,error:true}
                
                            case CURRENT_PRODUCTS_SUCCESS:
                                return {...state,loading:false,error:false, currentproducts:action.payload}
              
                    default:
                        return state;
          }
}

export {productReducer}