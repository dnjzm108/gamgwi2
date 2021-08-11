const initalState = {
    loading : false,
}

const POST_INSERT_REQUEST = "POST_INSERT_REQUEST"
const POST_INSERT_SUCCESS = "POST_INSERT_SUCCESS"
const POST_INSERT_ERROR = "POST_INSERT_ERROR"

const POST_MODIFY_REQUEST = "POST_MODIFY_REQUEST"
const POST_MODIFY_SUCCESS = "POST_MODIFY_SUCCESS"
const POST_MODIFY_ERROR = "POST_MODIFY_ERROR"

const POST_DELETE_REQUEST = "POST_DELETE_REQUEST"
const POST_DELETE_SUCCESS = "POST_DELETE_SUCCESS"
const POST_DELETE_ERROR = "POST_DELETE_ERROR"

/* 입력 */
export const PostInsert_REQUEST = data => {
    // console.log("insert === ",data);
    return{
        type : POST_INSERT_REQUEST,      
        data,                          
    }
}
export const PostInsert_SUCCESS = () => {
    return{
        type : POST_INSERT_SUCCESS,
    }
}
export const PostInsert_ERROR = () => {
    return{
        type : POST_INSERT_ERROR,
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
            console.log('reducer 작동함')
            return{
                ...state,
                lodding:true,
            }
        case POST_INSERT_SUCCESS:
            return{
                ...state,
                loadding:false,
            }
        case POST_INSERT_ERROR:
            return{
                ...state,
                loadding:false,
            }
        default:
            return state
    }
}


export default reducer