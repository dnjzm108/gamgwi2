const initalState = {
    loading : false,
    IsLogin:false,
}

const USER_LOGIN_REQUEST = "USER_LOGIN_REQUEST"
// const USER_LOGIN_SUCCESS = "USER_LOGIN_SUCCESS"
// const USER_LOGIN_ERROR = "USER_LOGIN_ERROR"
// const USER_LOGOUT = "USER_LOGOUT"

const USER_JOIN_REQUEST = "USER_JOIN_REQUEST"

export const UserLogin_REQUEST = data => {
    console.log("reduser+++++++",data);
    return {
        type:USER_LOGIN_REQUEST,
        data,
    }
}

export const UserJoin_REQUEST = data =>{

    return{
        type:USER_JOIN_REQUEST,
        data
    }
}

const reducer = (state=initalState,action) => {
    switch(action.type){
        case USER_LOGIN_REQUEST:
            console.log('로그인 성공');
            return {
                ...state,
                loadding:true,
            }

            case USER_JOIN_REQUEST:
                console.log('가입성공');
                return{
                    ...state,
                    loadding:true,
                }
        default:
            return state;
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