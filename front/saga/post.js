import {all, fork, put, takeLatest, call} from 'redux-saga/effects'
import axios from 'axios'

function writeAPI(data){
    return axios.post('http://localhost:3005/board/write',data)   //6번
}

function* write (action){
    const result = yield call (writeAPI, action.data)
    const {data} = result

    if(data.result === 'OK'){
        yield put({
            type : 'POST_INSERT_SUCCESS',
        })
    } else {
        yield put({
            type : 'POST_INSERT_FAIL'
        })
    }
}

function* reqWrite(){
    yield takeLatest('POST_INSERT_REQUEST', write)
}

export default function* writeSaga(){
    yield all ([
        fork(reqWrite)
    ])
}