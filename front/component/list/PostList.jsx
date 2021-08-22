import Styled from "styled-components"
import DateRangeIcon from '@material-ui/icons/DateRange';
import VisibilityIcon from '@material-ui/icons/Visibility';
import FaceIcon from '@material-ui/icons/Face';

const PostContent = (props) => {
    return (
        <>
            <PostContentWrap>
                <ListTable>
                    <thead>
                        <tr>
                            <th>TITLE</th>
                            <th><FaceIcon /></th>
                            <th><VisibilityIcon /></th>
                            <th><DateRangeIcon /></th>
                        </tr>
                    </thead>
                    <tbody>
                        {props.list}
                    </tbody>
                </ListTable>
            </PostContentWrap>
        </>
    )
}

const PostList = (props) => {
    return (
        <>
            <ListWrap>
                <PostContent list={props.list} />
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

    

    & >thead> tr:nth-child(1){
        width: 100%;
        height : auto;
    }
    
    & >thead> tr:nth-child(1)>th{
        border-bottom: 4px solid #efefef;
    }
    & >thead> tr:nth-child(1) > th:nth-child(1) {
        width: 50%;
    }
    & >thead> tr:nth-child(1) > th:nth-child(2) {
        width: 15%;
    }
    & >thead> tr:nth-child(1) > th:nth-child(3){
        width: 5%;
    }
    & >thead > tr:nth-child(1) > th:nth-child(4){
        width: 30%;
    }
    & > tbody >tr {
        height: 70px;
        text-align : center;
        font-size : 16px;
    }
    & > tbody >tr > td:nth-child(1){
        cursor : pointer;
    }
    & > tbody> tr > td:nth-child(2){
        font-size : 14px;
        cursor : pointer;
    }
    & > tbody > tr > td:nth-child(3){
        font-size : 14px;
    }
    & > tbody > tr > td:nth-child(4){
        font-size : 12px;
    }

    @media only screen and (min-width:768px){

        & > thead > tr:nth-child(1){
            font-size : 35px;
        }
        & > thead > tr:nth-child(1) > th,
        & > thead >tr:nth-child(1) > th > svg {
            font-size : 30px;
        }
        & > tbody > tr {
            height: 140px;
            font-size : 25px;
        }
        & >thead >tr:nth-child(1) > th:nth-child(1) {
            width: 50%;
        }
        & >thead >tr:nth-child(1) > th:nth-child(2) {
            width: 15%;
        }
        & > thead > tr:nth-child(1) > th:nth-child(3){
            width: 10%;
        }
        & > thead> tr:nth-child(1) > th:nth-child(4){
            width : 15%;
        }
        & > tbody > tr > td {
            font-size : 20px;
        }
    }
`