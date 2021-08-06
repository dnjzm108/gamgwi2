import Head from 'next/head'
import WebLayout from "../component/layout/webLayout"
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import Styled from 'styled-components';

const Info = () => {
    return (
        <>
            <Head>
                <title>Gamgwi | 회원정보</title>
            </Head>
            <WebLayout>
                <AccountCircleWrap>
                    <AccountCircleIcon style={AccountCircle} />
                </AccountCircleWrap>
            </WebLayout>
        </>
    )
}

export default Info

const AccountCircleWrap = Styled.div`
    width : 100%;
    height : auto;
    text-align : center;

`

const AccountCircle = {
    'width': '10vw',
    'height': 'auto',
}