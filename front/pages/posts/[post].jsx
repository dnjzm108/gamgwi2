import {useRouter} from 'next/router'
import Head from 'next/head'

const Post = ()=>{
    const router = useRouter()
    const {post} = router.query
    
    return(
        <>
            <Head>
                <title>Gamgwi | Post</title>
            </Head>
        </>
    )
}

export default Post 