import Head from "next/head"
import {useRouter} from 'next/router'
import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import WebLayout from "../../component/layout/webLayout"
import ViewContent from "../../component/view/ViewContent"
import Router from "next/router"


const view = () => {
    const data = useSelector(state => state.post.view)

    // view 에서 새로고침시 오류나는 문제
    // console.log("veiw.jsx data=====",data);

    useEffect(()=>{

    },[data])

    return(
        <>
            <Head>
                <title>Gamgwi | View</title>
            </Head>
            <WebLayout>
                <ViewContent data={data}/>
            </WebLayout>
        </>
    )
}
export default view 