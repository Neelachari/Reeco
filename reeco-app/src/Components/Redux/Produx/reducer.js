import { GET_PRODUCT_SUCCESS, POST_PRODUCT_SUCCESS, } from "./actiontypes"


const initialState={
    products:[],
    isLoading:false,
    isError:false
}


export const reducer = (state = initialState,{type,payload}) => {
  switch(type){
    case POST_PRODUCT_SUCCESS:{
      return {...state, isError:false, isLoading:false,  products:[...state.products, payload]}
    }
    case GET_PRODUCT_SUCCESS:{
      return {...state, isError:false, isLoading:false, products:payload}
    }
    default : return state

  }
}
