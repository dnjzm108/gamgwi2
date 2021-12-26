import React,{useState} from 'react';
import Styled from 'styled-components'
import WriterContent from './WriterContent'
import PostContent from './PostContent';

const Top = () => {
    const [subscribeContent,setsubscribeContent] = useState(false);
    const BtnWriter = () => {
        setsubscribeContent(false)
    }
    const BtnPost = () => {
        setsubscribeContent(true)
    }

    return(
        <React.Fragment>
            <TopUl>
                <li>
                    구독
                </li>
                <li>
                    <TopRight>
                        <li onClick={BtnWriter} >작가</li>
                        <li>|</li>
                        <li onClick={BtnPost}>글</li>
                    </TopRight>
                </li>
            </TopUl>
            {
               subscribeContent
               ?
               <PostContent currentStatus={subscribeContent}/>
               : 
               <WriterContent currentStatus={subscribeContent}/>
            }
            
        </React.Fragment>
    )
}

export default Top;

export const TopUl = Styled.ul`
    width:100%;
    height:10%;
    /* background-color:blue; */
    display:flex;
    justify-content: space-between;
    align-items: stretch;
    padding:14px;
    box-sizing:border-box;
    border-bottom:3px solid #e4e4e4;


/* 
    @media only screen and (min-width:768px){


    } */

`

export const TopLi = Styled.li`
    width:50%;
    height:10%;

`

export const TopRight = Styled.ul`
    width:100%;
    display:flex;
    justify-content: space-around;
    align-items: stretch;
    padding:0px 7px;
    

    @media only screen and (min-width:768px){


    }

`
