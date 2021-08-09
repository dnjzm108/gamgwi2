import Styled from "styled-components"

const ListContent = ()=>{
    return(
        <ul>
            <li>
                {
                    /*
                        list.map((v,k)=>{
                            <li key = {k}> {v} </li>
                        })
                    */
                }
            </li>
        </ul>
    )
}

const PostList = ()=>{
    return(
        <>
            <ListWrap>
                글 리스트 들어갈 공간
            </ListWrap>
        </>
    )
}

export default PostList

const ListWrap = Styled.div`
    width : 100%;
    height : 80vh;
    background : #e2b0b0;
`