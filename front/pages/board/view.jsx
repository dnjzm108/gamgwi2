import Head from "next/head"
import {useRouter} from 'next/router'
import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import WebLayout from "../../component/layout/webLayout"
import ViewContent from "../../component/view/ViewContent"


const view = () => {
    const data = useSelector(state => state.post.view)
    //console.log("veiw.jsx data=====",data);

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