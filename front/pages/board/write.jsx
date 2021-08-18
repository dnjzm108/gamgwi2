import Head from 'next/head'
import Router from "next/router"
import { useEffect, useCallback } from 'react'
import { useSelector, useDispatch } from 'react-redux';
import WebLayout from "../../component/layout/WebLayout";
import Styled from "styled-components";
import TextArea from '../../component/write/TextArea';

const Write = () => {
    const dispatch = useDispatch()
    const data = useSelector(state => state.post.data)
    
    
    useEffect(() => {
        if (data !== undefined) {
            alert(data)

            if (data === '글 작성 성공') {
                Router.push('/board/list')
            }
            dispatch({ type: 'POST_INSERT_RESET' })
        }
    }, [data])

    return (
        <>
            <Head>
                <title>Gamgwi | 글 작성</title>
            </Head>
            <WebLayout>
                <WebTitle>오늘의 글귀</WebTitle>
                <div>
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
