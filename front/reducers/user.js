const initalState = {
    loadding: false,
    IsLogin: false,
    user_info: {},
    Id_check: ''
}

const USER_LOGIN_REQUEST = "USER_LOGIN_REQUEST"
const USER_LOGIN_SUCCESS = "USER_LOGIN_SUCCESS"
const USER_LOGIN_ERROR = "USER_LOGIN_ERROR"
const USER_LOGOUT = "USER_LOGOUT"

const USER_JOIN_REQUEST = "USER_JOIN_REQUEST"
const USER_JOIN_SUCCESS = "USER_JOIN_SUCCESS"
const USER_JOIN_ERROR = "USER_JOIN_ERROR"

const USER_ID_CHECKE = "USER_ID_CHECKE"
const USER_ID_SUCCESS = "USER_ID_SUCCESS"
const USER_ID_ERROR = "USER_ID_ERROR"

const USER_COOKIE_CHECK = "USER_COOKIE_CHECK"
const USER_COOKIE_SUCCESS = "USER_COOKIE_SUCCESS"
const USER_COOKIE_ERROR = "USER_COOKIE_ERROR"

const test = "test"

export const User_Logout = () => {
    return {
        type: USER_LOGOUT
    }
}

export const User_Id_Checke = data => {
    console.log('reducer 함수까지옴');
    return {
        type: USER_ID_CHECKE,
        data
    }
}

export const UserLogin_REQUEST = data => {
    console.log("reduser+++++++", data);
    return {
        type: USER_LOGIN_REQUEST,
        data,
    }
}

export const UserJoin_REQUEST = data => {
    console.log("join reduser++++++", data);
    return {
        type: USER_JOIN_REQUEST,
        data
    }
}

export const UserCookieCheck = data => {
    return {
        type: USER_COOKIE_CHECK
    }
}

const reducer = (state = initalState, action) => {
    switch (action.type) {

        case 'test' :
            return{
                ...state,
                Id_check: ''
            }

        case USER_LOGIN_REQUEST:
            console.log('로그인 성공1');
            return {
                ...state,
                loadding: true,
            }


        case USER_LOGIN_SUCCESS:
            console.log('로그인 성공2');
            console.log('_____________data', action);
            return {
                ...state,
                IsLogin: true,
                loadding: false,
                data: action.data,
                user_info: action.user_info,
            }
        case USER_LOGIN_ERROR:
            console.log('로그인 실패');
            console.log("++++++++++=+++실패", action);
            return {
                ...state,
                loadding: false,
                data: action.data,
            }

        case USER_JOIN_REQUEST:
            console.log('가입 성공');
            return {
                ...state,
                loadding: true,
            }

        case USER_JOIN_SUCCESS:
            console.log('완전 가입 성공');
            console.log('+++++++++++join success', action.user_info);
            return {
                ...state,
                loadding: false,
                user_info: action.user_info
            }

        case USER_JOIN_ERROR:
            console.log('가입 실패');
            return {
                ...state,
                loadding: false,
            }
        case USER_LOGOUT:
            return {
                ...state,
                IsLogin: false,
                user_info: {},
                data: 'logout'

            }

        case USER_ID_CHECKE:
            console.log("USER_ID_CHECKE", action);
            return {
                ...state,
                lodding: true,
                Id_check: action
            }

        case USER_ID_SUCCESS:
            return {
                ...state,
                lodding: false,
                Id_check: action.data
            }

        case USER_ID_ERROR:
            return {
                ...state,
                lodding: false,
                Id_check: action.data
            }

        case USER_COOKIE_CHECK:
            return {
                ...state,
                lodding: true,
            }

        case USER_COOKIE_SUCCESS:
            console.log('나 쿠키 성공했을때', action);
            console.log('정상적인 쿠키');
            return {
                ...state,
                loadding: false,
                user_info: action.user_info
            }

        case USER_COOKIE_ERROR:
            console.log('쿠키 없음');
            return {
                ...state,
                lodding: false,

            }

        default:
            return state
    }
}

export default reducer