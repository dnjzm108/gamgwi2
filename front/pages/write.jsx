import Head from 'next/head'
import WebLayout from "../component/layout/webLayout";
import TodayWeather from "../component/write/TodayWeather";
import Styled from "styled-components";
import TextArea from "../component/write/TextArea";


const Write = () => {
    
    return (
        <>
            <Head>
                <title>Gamgwi | 글 작성</title>
            </Head>
            <WebLayout>
                <WebTitle>오늘의 글귀</WebTitle>
                <div>
                    <TodayWeather />
                    <TextArea />
                </div>
            </WebLayout>
        </>
    )
}

export default Write




const WebTitle = Styled.div`
    display :none;
    @media only screen and (min-width:768px){
            display : block;
            font-size : 30px;
            text-align : center;
            font-weight : bold;
    }
`
