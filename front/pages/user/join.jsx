import Head from 'next/head'
import BasicLayout from '../../component/layout/BasicLayout'
import Join_form from "../../component/user/join_form"
import Styled from "styled-components";



const Join = () => {
    
    return (
        <>
            <Head>
                <title>Gamgwi | join</title>
            </Head>
            <BasicLayout>
                <Join_form>
                </Join_form>
            </BasicLayout>
        </>
    )
}

export default Join
