import Head from "next/head"
import {useRouter} from 'next/router'
import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import WebLayout from "../../component/layout/WebLayout"
import ViewContent from "../../component/view/ViewContent"


const view = () => {
    const data = useSelector(state => state.post.view)

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