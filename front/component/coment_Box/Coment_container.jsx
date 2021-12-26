import Styled from "styled-components"
import FaceIcon from '@material-ui/icons/Face';
import DeleteRoundedIcon from '@material-ui/icons/DeleteRounded';
import useInput from '../../hooks/useInput';
import { useDispatch, useSelector } from "react-redux";
import { Comment_REQUEST, Get_Comment_REQUEST ,Delete_Comment_REQUEST} from '../../reducers/post'
import { useEffect, useState } from "react"

const Coment_container = () => {
    const dispatch = useDispatch()
    const content = useInput('')
    const userid = useSelector(state => state.user.user_info.userid)
    const post = useSelector(state => state.post)
    const comment = useSelector(state => state.post.get_comment)

    useEffect(() => {
        let data = {
            board_id: post.viewIdx
        }
        dispatch(Get_Comment_REQUEST(data))
    }, [])

    const add_comment = async() => {
        let info = {
            userid,
            content: content.value,
            board_id: post.viewIdx
        }
       await dispatch(Comment_REQUEST(info))

        let data = {
            board_id: post.viewIdx
        }
        dispatch(Get_Comment_REQUEST(data))
    }
    const comment_del = (id) =>{
        let info ={
            id
        }
        dispatch(Delete_Comment_REQUEST(info))

        let data = {
            board_id: post.viewIdx
        }
        dispatch(Get_Comment_REQUEST(data))
    }

    return (
        <>
            <Wrap>
                <Text_box >
                    <input type="text" {...content} /> <button onClick={add_comment}>댓글</button>
                </Text_box>

                {comment.map((v,k) => {
                    return (
                        <Containder key={k}>
                            <div>
                                <div> <FaceIcon /></div>
                                <h3>{v.commenter_name}</h3>
                            </div>
                            <div>
                                <span>{v.date}</span>
                                <h3>{v.content}</h3>
                                { v.commenter_name === userid ? 
                                <h4 onClick={()=>{comment_del(v.id)}}><DeleteRoundedIcon /></h4>
                                : ''
                }
                            </div>
                        </Containder>
                    )
                })

                }
            </Wrap>
        </>
    )
}

export default Coment_container

const Wrap = Styled.div`
width: 100%;
padding-bottom: 70px;
@media only screen and (min-width:768px){
    padding-bottom: 90px;

}
`
const Text_box = Styled.div`
&{
    width: 100%;
    margin: 10px 0;
    display: flex;
}
& > input{
    width: 90%;
    font-size: 1.25rem;
}
& > button {
    width: 12%;
    padding:5px;
    font-size:0.75rem;
    box-sizing: border-box;
}
`

const Containder = Styled.div`
&{
    width: 100%;
    /* height: 100px; */
    border: 1px solid black;
    border-radius: 5px;
    margin-bottom: 10px;
    display: flex;
    padding: 10px;
    box-sizing: border-box;
}
& > div:nth-child(1){
    width: 30%;
    /* height: 100px; */
    /* display: flex;
    justify-content: space-between;
    flex-direction: column; */
    padding: 10px;
}
& > div:nth-child(1) > div {
    width: 80px;
    height: 80px;
    background: #ffffff;
    border-radius:100%;
    margin: 0 auto;
    /* position:relative; */
    /* top:50%; */
    /* transform:translateY(-50%); */
    /* border: 1px solid black; */
}
& > div:nth-child(1) > div > svg{
    width: 80px;
    height: auto;
}
& > div:nth-child(1) > h3{
    width: 100%;
    /* margin: 10px; */
    text-align:center;
}
& > div:nth-child(2){
    width: 70%;
    /* height: 100px; */
    /* background: red; */
}

& > div:nth-child(2) > h3{
    margin: 10px 0;
}
`

