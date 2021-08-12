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

const POST_VIEW_REQUEST = "POST_VIEW_REQUEST"
const POST_VIEW_SUCCESS = "POST_VIEW_SUCCESS"
const POST_VIEW_ERROR = "POST_VIEW_ERROR"

const POST_MODIFY_REQUEST = "POST_MODIFY_REQUEST"
const POST_MODIFY_SUCCESS = "POST_MODIFY_SUCCESS"
const POST_MODIFY_ERROR = "POST_MODIFY_ERROR"

const POST_DELETE_REQUEST = "POST_DELETE_REQUEST"
const POST_DELETE_SUCCESS = "POST_DELETE_SUCCESS"
const POST_DELETE_ERROR = "POST_DELETE_ERROR"

const GET_LIKES_REQUEST = "GET_LIKES_REQUEST"
const GET_LIKES_SUCCESS = "GET_LIKES_SUCCESS"
const GET_LIKES_ERROR = "GET_LIKES_ERROR"


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
export const PostGet_REQUEST = () => {
    //console.log('postget request');
    return {
        type: POST_GET_REQUEST,
    }
}
export const PostGet_SUCCESS = (list) => {
    //console.log('post get list', list);
    return {
        type: POST_GET_SUCCESS,
        list
    }
}
export const PostGet_ERROR = () => {
    return {
        type: POST_GET_ERROR,
    }
}
export const GetLikes_SUCCESS = () => {
    return {
        type: GET_LIKES_SUCCESS,
    }
}

/* 글 view 보기 */
export const PostView_REQUEST = (idx) => {
    // console.log('post view request idx ====', idx);
    return {
        type: POST_VIEW_REQUEST,
        idx,
    }
}
export const PostView_SUCCESS = () => {
    return {
        type: POST_VIEW_SUCCESS,
    }
}
export const PostView_ERROR = () => {
    return {
        type: POST_VIEW_ERROR,
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

/* 삭제 */
export const PostDelete_REQUEST = (idx) => {
    return {
        type: POST_DELETE_REQUEST,
        idx
    }
}

export const PostDelete_SUCCESS = (deletedList) => {
    console.log(deletedList);
    return {
        type: POST_DELETE_SUCCESS,
        deletedList,
    }
}

export const PostDelete_ERROR = () => {
    return {
        type: POST_DELETE_ERROR,
    }
}



const reducer = (state = initalState, action) => {
    switch (action.type) {
        /* 글 작성 */
        case POST_INSERT_REQUEST:
            return {
                ...state,
                loading: true,
            }
        case POST_INSERT_SUCCESS:
            //console.log('insert 성공');
            return {
                ...state,
                data: action.data,
                loading: false,
            }
        case POST_INSERT_ERROR:
            //console.log('insert 실패');
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
        /* 글 가져오기 */
        case POST_GET_REQUEST:
            return {
                ...state,
                loading: true,
            }
        case POST_GET_SUCCESS:
            /*console.log('get 성공');
            console.log('action =======', action);
            console.log('action.list =======', action.list);*/
            return {
                ...state,
                list: action.list,
                loading: false,
            }
        case POST_GET_ERROR:
            // console.log('get 실패');
            return {
                ...state,
                loading: false,
            }
        case GET_LIKES_REQUEST:
            return {
                ...state,
                loading: true
            }
        case GET_LIKES_SUCCESS:
            /*console.log('likes 성공')
            console.log(action, 'likes action')
            console.log(action.list, 'action=================likeslist')*/
            return {
                ...state,
                list: action.list,
                loading: false
            }
        case POST_VIEW_REQUEST:
            //console.log('view request action========',action);
            return {
                ...state,
                idx: action.idx,
                loading: true,
            }
        case POST_VIEW_SUCCESS:
            //console.log('view 성공 action =====', action);
            return {
                ...state,
                view: action.view,
                loading: false,
            }
        case POST_VIEW_ERROR:
            console.log('view 실패');
            return {
                ...state,
                msg: action.msg,
                loading: false,
            }

        case POST_VIEW_REQUEST:
            //console.log('view request action========',action);
            return {
                ...state,
                idx: action.idx,
                loading: true,
            }
        case POST_VIEW_SUCCESS:
            //console.log('view 성공 action =====', action);
            return {
                ...state,
                view: action.view,
                loading: false,
            }
        case POST_VIEW_ERROR:
            console.log('view 실패');
            return {
                ...state,
                msg: action.msg,
                loading: false,
            }
        /* 글 삭제 */
        case POST_DELETE_REQUEST:
            console.log('DELETE request action========',action);
            return {
                ...state,
                idx : action.idx,
                loading: true,
            }
        case POST_DELETE_SUCCESS:
            console.log('delete 성공 action =====', action);
            let {deletedList, msg} = action
            return {
                ...state,
                deleteMsg : msg,
                deletedList,
                loading: false,
            }
        case POST_DELETE_ERROR:
            console.log('delete 실패');
            return {
                ...state,
                loading: false,
            }
        default:
            return state
    }
}


export default reducer