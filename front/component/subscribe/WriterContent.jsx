import React,{useEffect, useState} from 'react';
import { useDispatch,useSelector } from 'react-redux'
import Styled from 'styled-components'
import DateRangeIcon from '@material-ui/icons/DateRange';
import VisibilityIcon from '@material-ui/icons/Visibility';
import FaceIcon from '@material-ui/icons/Face';
import { GetSubscribe_REQUEST, CancelSubscribe_Request} from '../../reducers/subscribe'

const WriterContent = (props) => {
    const dispatch = useDispatch()
    const userid = useSelector(state => state.user.user_info.userid)
    const list = useSelector(state => state.subscribe.list)
    const getfriend = useSelector(state => state.subscribe.friend)

    const data = [
        {
            name:'algmasdfffffffffffffl',
            id:1,
            hit:3
        },
        {
            name:'algml',
            id:2,
            hit:3
        },
        {
            name:'algml',
            id:3,
            hit:3
        },
        {
            name:'algmasdfffffffffffffl',
            id:4,
            hit:3
        },
        {
            name:'algml',
            id:5,
            hit:3
        },
        {
            name:'algml',
            id:6,
            hit:3
        },
                {
            name:'algml',
            id:7,
            hit:3
        },
    ]

    const [add,setadd] = useState(false);

    useEffect (() => {
        dispatch(GetSubscribe_REQUEST({data:userid,state:true}))
        if(list.length>6){
            setadd(true)
        }else{
            setadd(false)
        }
    },[getfriend])

    const cancelFriendBtn = (ele) => {
        let data = {
            userid:ele.userid,
            nickName:ele.writer_name
        }
        dispatch(CancelSubscribe_Request(data))
        

    }

    const writerList = list.map((ele)=>
        <React.Fragment key={ele.id}>
            <ContentUl>
                <li>
                    {
                        ele.writer_name.length>5
                        ?
                        `${ele.writer_name.substring(0,4)}..`
                        :
                        ele.writer_name
                    }
                </li>
                <li onClick={()=>{cancelFriendBtn(ele)}}>친구삭제</li>
                {/* <li>{ele.hit}</li> */}
            </ContentUl>
        </React.Fragment>

    )

    return(
        <>

            <ContentUl>
                <li>
                    NAME
                </li>
                <li>
                    Following...
                </li>
                {/* <li>
                    Post
                </li> */}
            </ContentUl>
            <ContentMain>
            {writerList}
            {
                add
                ?
                <></>
                :
                <div className="addFriend">
                    <p>새로운 친구를 추가해보세요</p>
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

export default WriterContent;

export const ContentUl = Styled.ul`
    box-sizing:border-box;
    padding-top:25px;
    display:flex;
    justify-content: space-evenly;
    align-items: stretch;
`
export const ContentMain = Styled.div`
    width:100%;
    height:82%;

    .addFriend{
        width:100%;
        height:25%;
        /* background-color:red; */
        display:flex;
        flex-direction:column-reverse;
        > p{
            width:100%;
            height:auto;
            /* background-color:blue; */
            display:flex;
            justify-content:center;

        }
        
    }
`

export const ContentBottom = Styled.ul`
    display:flex;
    justify-content: space-around;
    flex-direction: column-reverse
    align-items: stretch;

`

