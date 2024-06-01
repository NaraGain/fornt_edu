
import { Reducer } from "react";
import { IUser, userAction } from "./type.user";


export const userReducer:Reducer<IUser , userAction>
 =  (state:IUser  , action:userAction) => {
    switch(action.type){
      case "GET_USER":
        return {...state, user:action.payload};
      case "LOADING_USER":
        return {...state , loading: action.payload}
      default:
        return state
    }
  }