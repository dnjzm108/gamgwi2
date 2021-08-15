import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { UserJoin_REQUEST } from "../../reducers/user"
import useInput from '../../hooks/useInput'
import Styled from "styled-components"


const Join_form = () => {
    const dispatch = useDispatch();

    const userid = useInput('')
    const userpw = useInput('')


    const [passwordCheck, setPasswordCheck] = useState('')
    const [passwordError, setPasswordError] = useState(false)

    const handlePassword = e => {
        const { value } = { ...e.target }
        setPasswordError(userpw.value !== value) // 1234 === 1234 ture
        setPasswordCheck(value)
    }


    const handleSubmit = e => {
        e.preventDefault()

        const data = {
            userid: userid.value,
            userpw: userpw.value
        }
        dispatch(UserJoin_REQUEST(data))

        if (userpw.value !== passwordCheck) {
            setPasswordError(true)
            return
        } else {
            setPasswordError(false)
        }

    }

    return (
        <>
            <Form>
                <h2>회원가입</h2>
                <form onSubmit={handleSubmit}>
                    <input type="text" {...userid} placeholder="아이디를 입력해주세요." />
                    <input type="password" {...userpw} placeholder="패스워드를 입력해주세요." />
                    <input type="password" value={passwordCheck} onChange={handlePassword} placeholder="패스워드를 다시 입력해주세요." />
                    {passwordError && <div style={{ color: 'red' }}>비밀번호가 일치하지 않습니다.</div>}
                    <button type="submit">회원가입</button>
                </form>
            </Form>
        </>
    )
}

export default Join_form

const Form = Styled.div`
      width : 40vw;
      height : 65vh;
      border: 1px solid black;
      margin : 10vh auto;

      & >h2{
          width: 20vw;
          font-size:4rem;
        margin: 5vh auto;
      }

      & > form > input{
          display:block;
          width : 80%;
          height : 5vh;
          margin: 4vh 10%; 
          font-size:2rem;
      }
      & > form > button{
          display:block;
          font-size: 2rem;
          background:white;
          width:40%;
          height:5vh;
          margin: 10vh auto;
      }
      & > form > button:hover{
    background: black;
    color:white;
    }

      @media only screen and (max-width:768px){
        width:80vw;  

        & >h2{
          width: 30vw;
          font-size:1.6rem;
        margin: 5vh auto;
      }
      & > form > input{
        font-size:1rem;
      }
      & > form > button{
        font-size: 1rem;
    }
    
    }
      }
`