import Styled from "styled-components"
import useInput from '../../hooks/useInput'
import Link from 'next/link'
import { useDispatch, useSelector } from 'react-redux'
import { UserLogin_REQUEST } from "../../reducers/user"

const Login_form = () => {
  const dispatch = useDispatch();

  const userid = useInput('')
  const userpw = useInput('')

  const handleSubmit = e => {
    e.preventDefault()

    const data = {
      userid: userid.value,
      userpw: userpw.value
    }
    console.log(userid.value, userpw.value);

    dispatch(UserLogin_REQUEST(data))

    // userid.value === "web7722" && userpw.value === "1234"
    // ? Router.push('/')
    // : alert('아이디와 패스워드가 다릅니다.')
  }

  return (
    <>
      <Form>
        <h2>LOGIN</h2>
        <form onSubmit={handleSubmit}>
          <input type="text"  {...userid} placeholder="아이디를 입력해주세요." />
          <input type="password" {...userpw} placeholder="패스워드를 입력해주세요." />
          <button type="submit">로그인</button>
        </form>

        <Link href='/user/join'>
          <a>회원가입</a>
        </Link>
      </Form>
    </>
  )
}

export default Login_form

const Form = Styled.div`
      width: 90%;
      height : 70vh;
      border: 1px solid black;
      margin : 10vh auto;
      

      & >h2{
        width: 100%;
        height: auto;
        text-align: center;
        padding: 10% 0;
        cursor : default;
      }
      & > a{
        display: block;
        text-decoration: none;
        width: 20%;
        height: auto;
        display: block;
        float: right;
        text-align: center;
        margin-top: 10%;
        padding: 0;
        font-size: 1rem;
      }
      & > a:hover{
          color: white;
          background: black;
      }
      & > form > input{
          display:block;
          width : 80%;
          height : 5vh;
          margin: 4vh 10%; 
          font-size: 15px;
          font-family: 'IM_Hyemin-Bold';
      }
      & > form > button{
          display: block;
          font-size: 1rem;
          background: white;
          width: 40%;
          height: 5vh;
          margin: 10vh auto 5vh;
          font-family: 'IM_Hyemin-Bold';
          cursor : pointer;
      }
      & > form > button:hover{
        background: black;
        color:white;
      }

      @media only screen and (min-width:768px){
        width: 45%;  

        & > a{
            padding: 0;
            font-size: 1.3rem;
        }

        & >h2{
          font-size: 3.5rem;
          padding: 1rem 0;
        }
        & > form{
          padding-top: 10%;
        }
        & > form > input{
          font-size: 1.5rem;
        }
        & > form > button{
          font-size: 1.3rem;
        }
      }
`