import Head from 'next/head'
import BasicLayout from '../../component/layout/BasicLayout'
import Login_form from "../../component/user/login_form"
import Styled from "styled-components";



const Login = () => {
    
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
