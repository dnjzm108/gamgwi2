import Head from "next/head"
import { useEffect } from "react"
import { useSelector, useDispatch } from 'react-redux'
import WebLayout from "../../component/layout/WebLayout"
import Styled from "styled-components"
import ModifyArea from "../../component/write/ModifyArea"


const Modify = () => {
    const dispatch = useDispatch()
    const modifyData = useSelector(state => state.post.modifyData)

    return (
        <>
            <Head>
                <title>Gamgwi | 글 수정</title>
            </Head>
            <WebLayout>
                <WebTitle>오늘의 글귀</WebTitle>
                <div>
                    <ModifyArea />
                </div>
            </WebLayout>
        </>
    )
}

export default Modify


const WebTitle = Styled.div`
    display :none;
    @media only screen and (min-width:768px){
            display : block;
            font-size : 30px;
            text-align : center;
            font-weight : bold;
    }
`
