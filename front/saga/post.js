import { all, fork, put, takeLatest, call } from 'redux-saga/effects'
import axios from 'axios'

/* 글 작성 */
function writeAPI(data) {
    console.log("write api = ", data);
    return axios.post('http://localhost:3500/board/write', data)   //6번
}

function* write(action) {
    //console.log("action = ", action);
    const result = yield call(writeAPI, action.data)
    //console.log("result = ", result);
    const { data } = result
    //console.log("data = ", data);
    // 성공하면 data.msg 를 보내서 alert 띄우고 글 view 로 가기

    if (data.result === 'OK') {
        //alert(data.msg)
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
    const result = yield call(axios.get,'http://localhost:3500/board/list')
    //console.log('get 요청 result ====',result);
    const { data } = result
    //console.log("get data =======",data);
    //console.log("get data list =======",data.list);
   

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

function* getLikes() {
    const result = yield call(axios.get,'http://localhost:3500/board/likes')
    const {data} = result
    console.log(data,'likessssssssssssssssssssss__post.jsx')
    if(data.result=='OK'){
        yield put({
            type:'GET_LIKES_SUCCESS',
            list:data.list
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

function postSearch(data){
    console.log(data)
    return axios.post('http://localhost:3500/board/list',{search:data.search,searchedValue:data.searchedValue})
}

function* postGetSearch(action){
    const result = yield call(postSearch,action.data)
    const {data} = result
    if(data.result==="OK"){
        yield put({
            type:'POST_SEARCH_SUCCESS'
        })
    }else{
        yield put({
            type:'POST_SEARCH_ERROR'
        })
    }
}

function* reqPost() {
    yield takeLatest('POST_INSERT_REQUEST', postGetSearch)
}


export default function* writeSaga() {
    yield all([
        fork(reqWrite),
        fork(reqGetList),
        fork(reqGetLikes),
        fork(reqPost)
    ])
}