import Head from "next/head"
import WebLayout from "../component/layout/webLayout"
import ViewContent from "../component/view/ViewContent"


const view = () => {
    return(
        <>
            <Head>
                <title>Gamgwi | View</title>
            </Head>
            <WebLayout>
                <ViewContent />
            </WebLayout>
        </>
    )
}
export default view 