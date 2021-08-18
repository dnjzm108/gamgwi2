import Router from 'next/router'
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import Styled from 'styled-components';


const GoBack = () => {
    return (
        <>
            <GoBackWrap>
                <p onClick={() => { Router.back() }}><ArrowBackIcon/></p>
            </GoBackWrap>
        </>
    )
}

export default GoBack


const GoBackWrap = Styled.div`
    cursor : pointer;
    @media only screen and (min-width:768px){
        & > p > svg{
            font-size : 40px;
        }
        
    }
`