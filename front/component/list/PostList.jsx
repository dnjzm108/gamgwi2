import Styled from "styled-components"
import DateRangeIcon from '@material-ui/icons/DateRange';
import VisibilityIcon from '@material-ui/icons/Visibility';
import FaceIcon from '@material-ui/icons/Face';

const PostContent = (props)=>{
    return(
        <>
            <PostContentWrap>
                <ListTable>
                    <tr>
                        <th>TITLE</th>
                        <th><FaceIcon/></th>
                        <th><VisibilityIcon/></th>
                        <th><DateRangeIcon/></th>
                    </tr>
                    {props.list}
                </ListTable>
            </PostContentWrap>
        </>
    )
}

const PostList = (props)=>{
    return(
        <>
            <ListWrap>
                <PostContent list={props.list}/>
            </ListWrap>
        </>
    )
}

export default PostList

const ListWrap = Styled.div`
    width : 100%;
    height : 75vh;
    overflow-y: scroll;
    & > div{
        width : 100%;
        height : auto;
        //background : #dada89;
    }
    & ::-webkit-scrollbar{
        width: 6px;
    }
    &::-webkit-scrollbar-thumb{
        height: 7%; 
        background-color: #a3a1a1; 
        border-radius: 10px;
    }
    &::-webkit-scrollbar-track{ 
        background-color: rgba(0,0,0,0); 
    }

` 

const PostContentWrap = Styled.div`
    
`


const ListTable = Styled.table`
    width: 100%;

    

    & > tr:nth-child(1){
        width: 100%;
        height : auto;
    }
    
    & > tr:nth-child(1)>th{
        border-bottom: 4px solid #efefef;
    }
    & > tr:nth-child(1) > th:nth-child(1) {
        width: 50%;
    }
    & > tr:nth-child(1) > th:nth-child(2) {
        width: 15%;
    }
    & > tr:nth-child(1) > th:nth-child(3){
        width: 5%;
    }
    & > tr:nth-child(1) > th:nth-child(4){
        width: 30%;
    }
    & > tr {
        height: 70px;
        text-align : center;
        font-size : 16px;
    }
    & > tr > td:nth-child(1){
        cursor : pointer;
    }
    & > tr > td:nth-child(2){
        font-size : 14px;
        cursor : pointer;
    }
    & > tr > td:nth-child(3){
        font-size : 14px;
    }
    & > tr > td:nth-child(4){
        font-size : 12px;
    }

    @media only screen and (min-width:768px){

        & > tr:nth-child(1){
            font-size : 35px;
        }
        & > tr:nth-child(1) > th,
        & > tr:nth-child(1) > th > svg {
            font-size : 30px;
        }
        & > tr {
            height: 140px;
            font-size : 25px;
        }
        & > tr:nth-child(1) > th:nth-child(1) {
            width: 60%;
        }
        & > tr:nth-child(1) > th:nth-child(2) {
            width: 15%;
        }
        & > tr:nth-child(1) > th:nth-child(3){
            width: 10%;
        }
        & > tr:nth-child(1) > th:nth-child(4){
            width : 15%;
        }
        & > tr > td:nth-child(2),
        & > tr > td:nth-child(3),
        & > tr > td:nth-child(4){
            font-size : 20px;
        }
    }
`