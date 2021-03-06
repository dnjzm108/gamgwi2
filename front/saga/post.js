import { all, fork, put, takeLatest, call } from 'redux-saga/effects'
import axios from 'axios'
import {url} from './url'

/* 글 작성 */
function writeAPI(data) {
    return axios.post(`${url}/board/write`, data)   
}

function* write(action) {
    const result = yield call(writeAPI, action.data)
    const { data } = result

    if (data.result === 'OK') {
        yield put({
            type: 'POST_INSERT_SUCCESS',
            data: data.msg
        })
    } else {
        yield put({
            type: 'POST_INSERT_ERROR',
            data: data.msg
        })
    }
}

function* reqWrite() {
    yield takeLatest('POST_INSERT_REQUEST', write)
}

/* 글 목록 가져옴 */
function* getList() {
    const result = yield call(axios.get,`${url}/board/list`)
    const { data } = result

    if (data.result === 'OK') {
        yield put({
            type: 'POST_GET_SUCCESS',
            list : data.list
        })
    } else {
        yield put({
            type: 'POST_GET_ERROR',
        })
    }
}

function* reqGetList() {
    yield takeLatest('POST_GET_REQUEST', getList)
}

/* Likes 가져옴 */
function* getLikes(action){
    const result = yield call(axios.post,`${url}/board/likes`,action.data)
    const {data} = result;
    if(data.result=='OK'){
        yield put({
            type:'GET_LIKES_SUCCESS',
            data
        })
    }else {
        yield put({
            type:'GET_LIKES_ERROR'
        })
    }
}

function* reqGetLikes(){
    yield takeLatest('GET_LIKES_REQUEST',getLikes)
}

/* 검색 기능 */
function postSearch(data){
    return axios.post(`${url}/board/list`,{search:data.search,searchedValue:data.searchedValue})
}


function* postGetSearch(action){
    const result = yield call(postSearch,action.data)
    const {data} = result

    if(data.result==="OK"){
        yield put({
            type:'POST_SEARCH_SUCCESS',
            searchList:data.list
        })
    }else{
        yield put({
            type:'POST_SEARCH_ERROR',
            msg:data.msg
        })
    }
}

function* reqPost() {
    yield takeLatest('POST_SEARCH_REQUEST', postGetSearch)
}


/* 글 view 가져옴 */
function* getView(action) {
    const result = yield call(axios.post,`${url}/board/view`,action.data)
    const { data } = result
    if (data.result === 'OK') {
        yield put({
            type: 'POST_VIEW_SUCCESS',
            view : data.view,
            like: data.like,
            friend:data.friend
        })
    } else {
        yield put({
            type: 'POST_VIEW_ERROR',
            msg : data.msg
        })
    }
}

function* reqViewList() {
    yield takeLatest('POST_VIEW_REQUEST', getView)
}




/* 글 삭제 */
function* deleteView(action) {
    const result = yield call(axios.post,`${url}/board/delete`,{idx:action.idx})
    const { msg, deletedRes } = result.data
   
    if (result.data.result === 'OK') {
        yield put({
            type: 'POST_DELETE_SUCCESS',
            deletedList : deletedRes,
            msg
        })
    } else {
        yield put({
            type: 'POST_DELETE_ERROR',
            msg
        })
    }
}

function* reqViewDelete() {
    yield takeLatest('POST_DELETE_REQUEST', deleteView)
}

/* 글 수정 */
function* modifyView(action) {
    const result = yield call(axios.post,`${url}/board/modify`, {modifyData : action.modifiedData})
    const {data} = result
    
    if (result.data.result === 'OK') {
        yield put({
            type: 'POST_MODIFY_SUCCESS',
            modifiedList : data.modifiedRes,
            msg : data.msg
        })
    } else {
        yield put({
            type: 'POST_MODIFY_ERROR',
            msg : data.msg
        })
    }
}

function* reqViewModify() {
    yield takeLatest('POST_MODIFY_SUBMIT_REQUEST', modifyView)
}

/* 좋아요 추가할 때 */
function* addLikes(action) {
    const result = yield call(axios.post,`${url}/board/addLike`,action)
    const {data} = result
    if(data.result=='OK'){
        yield put({
           type:'ADD_LIKES_SUCCESS',
           data
        })
    }else {
        yield put({
            type:'ADD_LIKES_ERROR'
        })
        
    }
}
/*좋아요 삭제*/ 
function* del_Likes(action) {
    const result = yield call(axios.post,`${url}/board/del_Like`,action)
    const {data} = result;
    if(data.result=='OK'){
        yield put({
           type:'DELETE_LIKES_SUCCESS',
           data
        })
    }else {
        yield put({
            type:'DELETE_LIKES_ERROR'
        })
        
    }
}

function* reqAddLikes() {
    yield takeLatest('ADD_LIKES_REQUEST', addLikes)
    yield takeLatest('DELETE_LIKES_REQUEST', del_Likes)
}

function* addComment(action) {
    const result = yield call(axios.post,`${url}/board/addcomment`,action.data)
    const {data} = result

    if(data.result=='OK'){
        yield put({
           type:'COMMENT_SUCCESS',
           addLike:data.likestate
        })
    }else {
        yield put({
            type:'COMMENT_ERROR'
        })
        
    }
}

function* getComment(action) {
    const result = yield call(axios.post,`${url}/board/get_comment`,action.data)
    const {data} = result
    if(data.result=='OK'){
        yield put({
           type:'GET_COMMENT_SUCCESS',
           data
        })
    }else {
        yield put({
            type:'GET_COMMENT_ERROR'
        })
        
    }
}

function* delComment(action) {
    const result = yield call(axios.post,`${url}/board/delete_comment`,action.data)
    const {data} = result
    if(data.result=='OK'){
        yield put({
           type:'DELETE_COMMENT_SUCCESS',
           data
        })
    }else {
        yield put({
            type:'DELETE_COMMENT_ERROR'
        })
        
    }
}


function* reqComment() {
    yield takeLatest('COMMENT_REQUEST', addComment)
    yield takeLatest('GET_COMMENT_REQUEST', getComment)
    yield takeLatest('DELETE_COMMENT_REQUEST', delComment)
}


export default function* writeSaga() {
    yield all([
        fork(reqWrite),
        fork(reqGetList),
        fork(reqGetLikes),
        fork(reqPost),
        fork(reqViewList),
        fork(reqViewDelete),
        fork(reqViewModify),
        fork(reqAddLikes),
        fork(reqComment),
    ])
}