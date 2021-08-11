import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { UserJoin_REQUEST } from "../../reducers/user"
import useInput from '../../hooks/useInput'


const Join_form = () => {
    const dispatch = useDispatch();

     const userid = useInput('')
     const userpw = useInput('')

    // const [passwordCheck, setPasswordCheck] = useState('')
    // const [passwordError, setPasswordError] = useState(false)

    const handlePassword = e => {
        const { value } = { ...e.target }
        // setPasswordError(userpassword.value !== value) // 1234 === 1234 ture
        // setPasswordCheck(value)
    }

    const handleSubmit = e => {
        e.preventDefault()

        const data ={
            userid : userid.value,
            userpw : userpw.value
        }
        dispatch(UserJoin_REQUEST(data))

        // if (userpassword.value !== passwordCheck) {
        //     setPasswordError(true)
        //     return
        // } else {
        //     setPasswordError(false)
        // }

        // if (!term) {
        //     setTermError(true)
        //     return;
        // }
    }

    return (
        <>
            <h2>회원가입</h2>
            <form onSubmit={handleSubmit}>
                <input type="text" {...userid} placeholder="아이디를 입력해주세요." /> <br />
                <input type="password" {...userpw} placeholder="패스워드를 입력해주세요." /> <br />
                <input type="password" onChange={handlePassword} placeholder="패스워드를 다시 입력해주세요." /> <br />
                {/* {passwordError && <div style={{ color: 'red' }}>비밀번호가 일치하지 않습니다.</div>} */}
                <button type="submit">회원가입</button>
            </form>
        </>
    )
}

export default Join_form