//actual state are here

// import uuid from 'uuid'
import {GET_ITEMS , ADD_ITEM , DELETE_ITEM , ITEMS_LOADING } from '../actions/types'
 const initialState ={
     items :[],
     loading :false 
 }
//getting the data takes seconds so laoding value is false
//once we get the data it will set to true 
export default function (state = initialState , action )
{
    switch(action.type)   
    {
case GET_ITEMS:
return{
    ...state ,
    items : action.payload,
    loading:false 
}

case DELETE_ITEM :
return{
    ...state,
    items: state.items.filter(item => item._id !== action.payload)
}
//_id fro mongoos
case ADD_ITEM:
return {
   ...state ,
   items :[action.payload , ...state.items] //the new item that comes in
}

case ITEMS_LOADING:
return {
    ...state ,
    laoding: true 
}
default:
return state 
    }
}

// spred operator ...
//state means eggs ,milk....