import Head from 'next/head'
import WebLayout from '../../component/layout/WebLayout'
import {useState} from 'react'

const user_list = (req,res) => {
    const [data,setData] = useState({})
    // fetch('http://localhost:3500/admin/user_list_get')
    // .then(res=>res.json({res}))
    // .then(data=>setData(data),()=>{
    //     console.log('data read',Object.keys(data.return))
    // })
    return(
        <>
            <Head>
                <title>Gamgwi | 회원관리</title>
            </Head>
            <WebLayout>
                <form method="POST" action="http://localhost:3500/admin/user_list">
                    <p>회원관리{}</p>
                    <input type="submit" value="삭제"/>
                </form>
            </WebLayout>
        </>
    )
}

export default user_list