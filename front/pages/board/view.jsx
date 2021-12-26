import Head from "next/head"
import {useRouter} from 'next/router'
import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import WebLayout from "../../component/layout/WebLayout"
import ViewContent from "../../component/view/ViewContent"
import { PostView_REQUEST } from "../../reducers/post"


const view = () => {
    const viewIdx = useSelector(state => state.post.viewIdx)
    const getfriend = useSelector(state => state.subscribe.friend)
    const userid = useSelector(state => state.user.user_info.userid)
    console.log(getfriend,'greteee')
    
    const dispatch = useDispatch()
    
    useEffect(()=>{
        let data = {
            viewIdx,
            userid
        }
        dispatch(PostView_REQUEST(data))
    },[viewIdx,getfriend])

    const viewData = useSelector(state => state.post.view)
    const viewDataCopy = {...viewData}
    
    return(
        <>
            <Head>
                <title>Gamgwi | View</title>
            </Head>
            <WebLayout>
                <ViewContent viewData = {viewDataCopy} />
            </WebLayout>
        </>
    )
}
export default view 