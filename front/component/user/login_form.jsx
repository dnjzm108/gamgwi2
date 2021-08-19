import { Form } from './join_login_css'
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
    dispatch(UserLogin_REQUEST(data))
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

