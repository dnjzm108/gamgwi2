import Head from 'next/head'
//import WebLayout from '../../component/layout/WebLayout'
import {useState} from 'react'

const test = () => {
    // function Data() {
    //     const [data,setData] = useState({});
    //     fetch('/data')
    //     .then(res => res.json())
    //     .then(data => setData(data),()=>{
    //     console.log('data read : ' , data);
    //     })
       
    //     return (
    //       <div>
    //         {data.lastname} {data.firstname}
    //       </div>
    //     );
    //   }
    const [data,setData] = useState({})
    fetch('http://localhost:3500/board/list')
    .then(res=>res.json())
    .then(data=>setData(data),()=>{
        console.log('안녕하세요')
    })
    //console.log(data,'dataeaaaaaaaaaaaaaaaaaa')
    return(
        
        <>
            <Head>
                <title>Gamgwi | 게시글</title>
            </Head>
            
                <p>안녕하세요</p>
                {/* <ul>
                    {data.map(list=>(
                        <li key={list.id}>{list.title}</li>
                    ))}
                </ul> */}
                
            
        </>
    )
}

export default test