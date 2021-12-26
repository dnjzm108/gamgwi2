const subscribeState = {
    loading:false,
    data:{},
    list:[],
    list2:[],
    subscribe:[],
    friend:false,
    post:false
}

const GET_SUBSCRIBE_REQUEST = "GET_SUBSCRIBE_REQUEST";
const GET_SUBSCRIBE_SUCCESS ="GET_SUBSCRIBE_SUCCESS";
const GET_SUBSCRIBE_SUCCESS2 ="GET_SUBSCRIBE_SUCCESS2";
const GET_SUBSCRIBE_ERROR = "GET_SUBSCRIBE_ERROR";

const ADD_FRIEND_REQUEST = "ADD_FRIEND_REQUEST"
const ADD_FRIEND_SUCCESS = "ADD_FRIEND_SUCCESS"
const ADD_FRIEND_ERROR = "ADD_FRIEND_ERROR"

const GET_ALL_SUBSCRIBE_REQUEST = "GET_ALL_SUBSCRIBE_REQUEST";
const GET_ALL_SUBSCRIBE_SUCCESS = "GET_ALL_SUBSCRIBE_SUCCESS";
const GET_ALL_SUBSCRIBE_ERROR = "GET_ALL_SUBSCRIBE_ERROR";

const CANCEL_SUBSCRIBE_REQUEST = "CANCEL_SUBSCRIBE_REQUEST";
const CANCEL_SUBSCRIBE_SUCCESS = "CANCEL_SUBSCRIBE_SUCCESS";
const CANCEL_SUBSCRIBE_ERROR = "CANCEL_SUBSCRIBE_ERROR";

const CANCEL_POST_REQUEST = "CANCEL_POST_REQUEST";
const CANCEL_POST_SUCCESS = "CANCEL_POST_SUCCESS";
const CANCEL_POST_ERROR = "CANCEL_POST_ERROR";



export const GetSubscribe_REQUEST = (data) => {
    return {
        type: GET_SUBSCRIBE_REQUEST,
        data
    }
}

export const GetSubscribe_SUCCESS = (data) => {
    return {
        type: GET_SUBSCRIBE_SUCCESS,
        data
    }
}

export const GetSubscribe_SUCCESS2 = (data) => {
    return {
        type: GET_SUBSCRIBE_SUCCESS2,
        data
    }
}

export const GetSubscribe_ERROR = () => {
    return {
        type: GET_SUBSCRIBE_ERROR,

    }
}

export const AddFriend_REQUEST = (data) => {
    return {
        type:ADD_FRIEND_REQUEST,
        data
    }
}

export const AddFriend_SUCCESS = (data) => {
    return {
        type:ADD_FRIEND_SUCCESS,
        data
    }
}

export const AddFriend_ERROR = () => {
    return {
        type:ADD_FRIEND_ERROR,
    }
}

export const GetAllSubscribe_Request = (data) => {
    return {
        type:GET_ALL_SUBSCRIBE_REQUEST,
        data
    }
}

export const GetAllSubscribe_Success = (data) => {
    return {
        type:GET_ALL_SUBSCRIBE_SUCCESS,
        data
    }
}

export const GetAllSubscribe_Error = () => {
    return {
        type:GET_ALL_SUBSCRIBE_ERROR
    }
}

export const CancelSubscribe_Request = (data) => {
    return {
        type:CANCEL_SUBSCRIBE_REQUEST,
        data
    }
}

export const CancelSubscribe_Success = (data) => {
    return {
        type:CANCEL_SUBSCRIBE_SUCCESS,
        data
    }
}

export const CancelSubscribe_Error = () => {
    return {
        type:CANCEL_SUBSCRIBE_ERROR,
    }
}

export const CancelPost_Request = (data) => {
    return {
        type:CANCEL_POST_REQUEST,
        data
    }
}

export const CancelPost_Success = (data) => {

    return {
        type:CANCEL_POST_SUCCESS,
        data:!data
    }
}

export const CancelPost_Error = () => {
    return {
        type:CANCEL_POST_ERROR
    }
}



const subscribeReducer = (state = subscribeState, action) => {
    switch (action.type) {
        case GET_SUBSCRIBE_REQUEST :
            return {
                ...state,
                loadding:true
            }
        case GET_SUBSCRIBE_SUCCESS :
            return {
                ...state,
                loadding:true,
                list : action.data
            }
        case GET_SUBSCRIBE_SUCCESS2 :
            return {
                ...state,
                loadding:true,
                list2 : action.data
            }
        case GET_SUBSCRIBE_ERROR :
            return {
                ...state,
                loadding:false,
            }
        case ADD_FRIEND_REQUEST:
            return {
                ...state,
                data:action.data
            }
        case ADD_FRIEND_SUCCESS:
            return {
                ...state,
                friend:action.data
            }
        case ADD_FRIEND_ERROR:
            return {
                ...state,
                data:action.data
            }
        case GET_ALL_SUBSCRIBE_REQUEST:
            
            return{
                ...state,
                data:action.data
            }
        case GET_ALL_SUBSCRIBE_SUCCESS:
            return{
                ...state,
                subscribe:action.data
            }
        case GET_ALL_SUBSCRIBE_ERROR:
            return{
                ...state
            }
        case CANCEL_SUBSCRIBE_REQUEST:
            return{
                ...state,
                data:action.data
            }
        case CANCEL_SUBSCRIBE_SUCCESS:
            return{
                ...state,
                friend:action.data
            }
        case CANCEL_SUBSCRIBE_ERROR:
            return{
                ...state
            }
        case CANCEL_POST_REQUEST:
            return{
                ...state,
                data:action.data
            }
        case CANCEL_POST_SUCCESS:
            return{
                ...state,
                post:true
            }
        case CANCEL_POST_ERROR:
            return{
                ...state
            }
        default :
            return state
    }
}

export default subscribeReducer;