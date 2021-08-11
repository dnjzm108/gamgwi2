import { fork,all,takeLatest, call,put } from "redux-saga/effects"
import axios from 'axios'

//saga effect -> middle 만들때 사람들이 많이쓰는것들 모음집
// call fork 차이점은 

/*
    call 비동기통시할떄 사용
    fork 동기함수 사용 
*/

// axios.post('url',data)

// call(axois.post,'url',data)
function* write(action){
    // 비동기 요청 코드처리하고 
    // dispatch 왜할까 ? 
    // 로그인 
    /*dispatch({  
        type:'USER_LOGIN_REQUEST',
        data:{
            userid:'web7722',
            uswerpw:'1234',
        }
    })
    */
   // back-end server data 전송
   // fetch axios 
   // result 값에 어떤한 값이 담아져있을까.
   // 예외가 2개 성공했을때와 실패했을때. 
   // dispatch 
   
   const result = yield call(axios.post,'url',action.data)
   if(result.msg == "OK"){
        yield put({
            type:'POST_INSERT_SUCCESS',
            data:'성공하는 이미지'
        })
   } else {
        yield put({
            type:'POST_INSERT_FAIL'
        })
   }

}

function* watchWrite(){
    // if action.type == 'POST_INSERT_REQUEST'
    console.log('watchWrite 작동함')
    yield takeLatest('POST_INSERT_REQUEST',write) // 성공 or 실패에대한 코드처리
    console.log('watchWirte 작동끝')
}

export default function* testSaga() {
    console.log('testSaga 작동함')
    yield all([
        fork(watchWrite) // 함수를 실행시켜준다
    ])
}


