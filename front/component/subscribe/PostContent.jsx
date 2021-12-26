import React, { useEffect, useState } from 'react';
import Styled from 'styled-components'
import { ContentUl, ContentMain, ContentBottom } from './WriterContent';
import { GetSubscribe_REQUEST,CancelPost_Request } from '../../reducers/subscribe'
import { useDispatch,useSelector } from 'react-redux'

const PostContent = (props) => {
    const dispatch = useDispatch()
    const userid = useSelector(state => state.user.user_info.userid)
    const list = useSelector(state => state.subscribe.list2)
    const poststate = useSelector(state =>state.subscribe.post)

    console.log(!poststate,'posettest')

    const data = [
        {
            title:'algmasdfffffffffffffl',
            name:'algml',
            category:'drama',
            id:1,
            hit:3
        },
        {
            title:'algml',
            name:'algml',
            category:'drama',
            id:2,
            hit:3
        },
        {
            title:'algml',
            name:'algml',
            category:'drama',
            id:3,
            hit:3
        },
    ]

    const [add, setadd] = useState(false);

    useEffect(()=>{
        dispatch(GetSubscribe_REQUEST({data:userid,state:false}))
        if(list.length>6){
            setadd(true)
        }else{
            setadd(false)
        }
    },[poststate])

    const cancelPostBtn = (ele) => {
        let data = {
            id:ele.id,
            userid
        }
        dispatch(CancelPost_Request(data))
    }

    const postList = list.map((ele)=>
        <React.Fragment key={ele.id}>
            <ContentUl>
            <li>
                    {
                        ele.title.length>5
                        ?
                        `${ele.title.substring(0,4)}..`
                        :
                        ele.title
                    }
                </li>
                <li>{ele.nickNAme}</li>
                <li>{ele.hit}</li>
                <li onClick={()=>cancelPostBtn(ele)}>글귀삭제</li>
            </ContentUl>
        </React.Fragment>
    )

    return(
        <>
            <ContentUl>
                <li>
                    TITLE
                </li>
                <li>
                    NAME
                </li>
                <li>
                    HIT
                </li>
                <li>
                    LIKE
                </li>
            </ContentUl>
            <ContentMain>
                {postList}
                {
                    add
                    ?
                    <></>
                    :
                    <div className='addFriend'>
                        <p>좋아하는 글을 추가해보세요</p>
                        <p>+</p>
                    </div>
                }
            </ContentMain>
            <ContentBottom>
                <li> (- </li>
                <li> -) </li>
            </ContentBottom>
        </>
    )
}

export default PostContent;