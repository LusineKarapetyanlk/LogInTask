import { SET_LOGIN, HAS_ERROR, SET_USER, SET_REGISTRATION_ERROR } from "./loginActionTypes";

const initState = {
    // user : null, {pass, email}, false
    // loading : true/false
    // error : true/false
    user: null,
    loading : true,
    error : false,
   registartion_error : false
  };
  
  const reducer = (state = initState, action)=>{
    console.log(action.payload)
    switch (action.type) {
      case SET_USER:
        return {
          ...state,
          loading: false,
          user: action.payload,
          error: false
        }
      case HAS_ERROR:
        return {
          ...state,
          error: action.payload,
        }
        case SET_REGISTRATION_ERROR:
          return {
            ...state,
            registartion_error : action.payload
          }
  
      default:
        return state;
    }
  };
  export default reducer;