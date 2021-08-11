import {all, fork} from 'redux-saga/effects'
 import writeSaga from './post'
//import testSaga from './test'
import userSaga from './user'

export default function* rootSaga(){
    yield all([
        fork(writeSaga),
       //fork(testSaga),
       fork(userSaga)
    ])
}