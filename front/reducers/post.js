const initalState = {
    loading: false,
}

const POST_INSERT_REQUEST = "POST_INSERT_REQUEST"
const POST_INSERT_SUCCESS = "POST_INSERT_SUCCESS"
const POST_INSERT_ERROR = "POST_INSERT_ERROR"
const POST_INSERT_RESET = "POST_INSERT_RESET"

const POST_GET_REQUEST = "POST_GET_REQUEST"
const POST_GET_SUCCESS = "POST_GET_SUCCESS"
const POST_GET_ERROR = "POST_GET_ERROR"

const POST_MODIFY_REQUEST = "POST_MODIFY_REQUEST"
const POST_MODIFY_SUCCESS = "POST_MODIFY_SUCCESS"
const POST_MODIFY_ERROR = "POST_MODIFY_ERROR"

const POST_DELETE_REQUEST = "POST_DELETE_REQUEST"
const POST_DELETE_SUCCESS = "POST_DELETE_SUCCESS"
const POST_DELETE_ERROR = "POST_DELETE_ERROR"

/* 입력 */
export const PostInsert_REQUEST = data => {
    console.log("insert === ", data);
    return {
        type: POST_INSERT_REQUEST,
        data
    }
}
export const PostInsert_SUCCESS = () => {
    return {
        type: POST_INSERT_SUCCESS,
        data
    }
}
export const PostInsert_ERROR = () => {
    return {
        type: POST_INSERT_ERROR,
        data
    }
}

/* 가져오기 */
export const PostGet_REQUEST = data => {
    console.log("list get === ", data);
    return {
        type: POST_GET_REQUEST,
        data
    }
}
export const PostGet_SUCCESS = () => {
    return {
        type: POST_GET_SUCCESS,
    }
}
export const PostGet_ERROR = () => {
    return {
        type: POST_GET_ERROR,
    }
}

/* 수정 
export const PostModify_REQUEST = data => {
    return{
        type : POST_MODIFY_REQUEST,      
        data,                          
    }
}
export const PostModify_SUCCESS = () => {
    return{
        type : POST_MODIFY_SUCCESS,
    }
}
export const PostModify_ERROR = () => {
    return{
        type : POST_MODIFY_ERROR,
    }
}

/* 삭제 
export const PostDelete_REQUEST = () => {
    return{
        type : POST_DELETE_REQUEST,
    }
}

export const PostDelete_SUCCESS = () => {
    return{
        type : POST_DELETE_SUCCESS,
    }
}

export const PostDelete_ERROR = () => {
    return{
        type : POST_DELETE_ERROR,
    }
}
*/


const reducer = (state = initalState, action) => {
    switch (action.type) {
        case POST_INSERT_REQUEST:
            return {
                ...state,
                loading: true,
            }
        case POST_INSERT_SUCCESS:
            console.log('insert 성공');
            return {
                ...state,
                data: action.data,
                loading: false,
            }
        case POST_INSERT_ERROR:
            console.log('insert 실패');
            return {
                ...state,
                data: action.data,
                loading: false,
            }
        case POST_INSERT_RESET:
            return {
                ...state,
                data: undefined,
                loading: false,
            }
        case POST_GET_REQUEST:
            return {
                ...state,
                loading: true,
            }
        case POST_GET_SUCCESS:
            console.log('get 성공');
            return {
                ...state,
                loading: false,
            }
        case POST_GET_ERROR:
            console.log('get 실패');
            return {
                ...state,
                loading: false,
            }
        default:
            return state
    }
}


export default reducer