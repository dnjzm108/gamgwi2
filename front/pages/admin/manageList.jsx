import Head from 'next/head'
import WebLayout from '../../component/layout/WebLayout'

const user_list = () => {
    return(
        <>
            <Head>
                <title>Gamgwi | 게시글관리</title>
            </Head>
            <WebLayout>
                <form method="POST" action="http://localhost:3500/admin/user_list">
                    <p>게시글관리</p>
                    <input type="text"/>
                    <input type="submit" value="삭제"/>
                    
                </form>
            </WebLayout>
        </>
    )
}

export default user_list