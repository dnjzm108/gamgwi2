import { HYDRATE } from 'next-redux-wrapper'
import { combineReducers } from "redux";
import post from './post'
import user from './user'
import subscribe from './subscribe'
import {persistReducer} from 'redux-persist'
import storage from 'redux-persist/lib/storage';


const persistConfig ={
    key:'root',
    storage,
    whitelist:["user"]
}


const rootReducer = combineReducers({
    index: (state = {}, action) => {
        switch (action.type) {
            case HYDRATE:
                return{
                    ...state,
                    ...action.payload
                }
            default:
                return state
        }
    },
    post,
    user,
    subscribe
})

export default persistReducer(persistConfig,rootReducer)