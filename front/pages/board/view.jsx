import Head from "next/head"
import {useRouter} from 'next/router'
import WebLayout from "../../component/layout/webLayout"
import ViewContent from "../../component/view/ViewContent"


const view = () => {
    const router = useRouter()
    const {post} = router.query

    return(
        <>
            <Head>
                <title>Gamgwi | View</title>
            </Head>
            <WebLayout>
                <ViewContent post={post}/>
            </WebLayout>
        </>
    )
}
export default view 