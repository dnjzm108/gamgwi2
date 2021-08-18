import Head from 'next/head'
import Router from "next/router"
import BasicLayout from '../../component/layout/BasicLayout'
import Login_form from "../../component/user/Login_form"
import { useSelector,useDispatch } from 'react-redux';
import { useEffect,useCallback } from 'react'

const Login = () => {
    const dispatch = useDispatch()
    const data = useSelector(state => state.user)

    useEffect(() => {
        if (data.data !== undefined) {
            console.log('login___data+++++++++',data);
             if (data.data === 'OK') {
                 Router.push('/home')
             }else if(data.data === '아이디와 비밀번호를 확인해주세요'){
                 alert(data.data)
             }

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
