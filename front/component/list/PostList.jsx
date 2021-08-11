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

export async function getStaticProps() {
    const res = await fetch('http://localhost:3500/board/list')
    const posts = await res.json()
    console.log(posts)
    // By returning { props: posts }, the Blog component
    // will receive `posts` as a prop at build time
    return {
      props: {
        posts,
      },
    }
  }

const PostList = ({datas})=>{
    //console.log(datas)

    return(
        <>
            <ListWrap>
            </ListWrap>
        </>
    )
}



export default PostList

const ListWrap = Styled.div`
    width : 100%;
    height : 75vh;
    background : #e2b0b0;
`