import Head from 'next/head'
import WebLayout from "../../component/layout/webLayout";
import Join_form from "../../component/join/join_form"
import Styled from "styled-components";



const Join = () => {
    
    return (
        <>
            <Head>
                <title>Gamgwi | join</title>
            </Head>
            <WebLayout>
                <Join_form>
                </Join_form>
            </WebLayout>
        </>
    )
}

export default Join
