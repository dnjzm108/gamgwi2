import Head from 'next/head'
import WebLayout from "../../component/layout/webLayout";
import Login_form from "../../component/login/login_form"
import Styled from "styled-components";



const Login = () => {
    
    return (
        <>
            <Head>
                <title>Gamgwi | login</title>
            </Head>
            <WebLayout>
                <Login_form>
                </Login_form>
            </WebLayout>
        </>
    )
}

export default Login
