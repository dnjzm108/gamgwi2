import Head from 'next/head'
import BasicLayout from '../../component/layout/BasicLayout'
import Login_form from "../../component/user/login_form"
import { useSelector,useDispatch } from 'react-redux';
import { useEffect,useCallback } from 'react'

const Login = () => {
    const dispatch = useDispatch()
    const data = useSelector(state => state.post.data)

    useEffect(() => {
        if (data !== undefined) {
            console.log('login___data+++++++++',data);
            if (data === '글 작성 성공') {
                Router.push('/home')
            }
            dispatch({type:'USER_LOGIN_SUCCESS'})
        }
    }, [data])

    return (
        <>
            <Head>
                <title>Gamgwi | login</title>
            </Head>
            <BasicLayout>
                <Login_form>
                </Login_form>
            </BasicLayout>
        </>
    )
}

export default Login
