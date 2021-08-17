import Styled from 'styled-components'

export const Form = Styled.div`
    width: 90%;
    height : 75vh;
    border: 1px solid black;
    margin : 10vh auto;


    & >h2{
        width: 100%;
        height: auto;
        text-align: center;
        padding: 10% 0;
        cursor : default;
    }
    & > a{
        display: block;
        text-decoration: none;
        width: 20%;
        height: auto;
        display: block;
        float: right;
        text-align: center;
        margin-top: 10%;
        padding: 0;
        font-size: 1rem;
    }
    & > a:hover{
        color: white;
        background: black;
    }
    & > form > input{
        display:block;
        width : 80%;
        height : 5vh;
        margin: 1.5vh 10%;
        font-size: 15px;
        font-family: 'IM_Hyemin-Bold';
    }
    & > form > div{
        margin: 1.5vh 10%;
    }
    & > form > button{
        display: block;
        font-size: 1rem;
        background: white;
        width: 40%;
        height: 5vh;
        margin: 10vh auto 5vh;
        font-family: 'IM_Hyemin-Bold';
        cursor : pointer;
    }
    & > form > button:hover{
        background: black;
        color:white;
    }

    @media only screen and (min-width:768px){
        width: 45%;  

        & > a{
            padding: 0;
            font-size: 1.3rem;
        }

        & >h2{
            font-size: 3.5rem;
            padding: 1rem 0;
        }
        & > form{
            padding-top: 10%;
        }
        & > form > input{
            font-size: 1.5rem;
        }
        & > form > button{
            font-size: 1.3rem;
        }
    }
`