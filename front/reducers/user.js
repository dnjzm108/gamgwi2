const initalState = {
    loading : false,
    IsLogin:false,
}

const USER_LOGIN_REQUEST = "USER_LOGIN_REQUEST"
const USER_LOGIN_SUCCESS = "USER_LOGIN_SUCCESS"
const USER_LOGIN_ERROR = "USER_LOGIN_ERROR"
const USER_LOGOUT = "USER_LOGOUT"

export const UserLogin_REQUEST = data => {
    return {
        type:USER_LOGIN_REQUEST,
        data,
    }
}

const reducer = (state=initialState,action) => {
    switch(action.type){
        case USER_LOGIN_REQUEST:
            return {
                ...state,
                loadding:true,
            }
        // case USER_LOGIN_SUCCESS:
        //     return {
        //         ...state,
        //         IsLogin:true,   
        //         loadding:false,
        //     }
        // case USER_LOGIN_ERROR:
        //     return {
        //         ...state,
        //         loadding:false,
        //     }
        // case USER_LOGOUT:
        //     return {
        //         ...state,
        //         IsLogin:false,
        //     }
        // default:
        //     return state
    }
}

export default reducer