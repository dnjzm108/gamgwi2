import Styled from 'styled-components';
import HomeRoundedIcon from '@material-ui/icons/HomeRounded';
import FavoriteRoundedIcon from '@material-ui/icons/FavoriteRounded';
import FormatListBulletedRoundedIcon from '@material-ui/icons/FormatListBulletedRounded';
import CreateRoundedIcon from '@material-ui/icons/CreateRounded';
import PermIdentityRoundedIcon from '@material-ui/icons/PermIdentityRounded';
import Link from 'next/link'


const MobileMenuBar = () => {
    return (
        <>
            <MenuBarWrap>
                <MenubarBox>
                    <Link href="/board/list">
                        <a ><FormatListBulletedRoundedIcon /></a>
                    </Link>
                    <Link href="/board/likes">
                        <a ><FavoriteRoundedIcon /></a>
                    </Link>
                    <Link href="/home">
                        <a ><HomeRoundedIcon /></a>
                    </Link>
                    <Link href="/board/write">
                        <a ><CreateRoundedIcon /></a>
                    </Link>
                    <Link href="/user/info">
                        <a ><PermIdentityRoundedIcon /></a>
                    </Link>
                </MenubarBox>
            </MenuBarWrap>
        </>
    )
}

export default MobileMenuBar

const MenuBarWrap = Styled.div`
    position : absolute;
    bottom : 0;
    width: auto;
    height : 70px;
    border-top: 1px solid #e4e4e4;
    margin-top: 30px;

    & > div > a >svg {
        color: black;
        font-size : 39px;
        padding-top : 16%;
    }
    
    @media only screen and (min-width:768px){
        position : relative;
        width : 1200px;
        & > div {
            width : 100%;
            text-align : center;
        }
        & > div > a > svg {
            font-size : 45px;
            padding-top : 5%;
            margin : 20px 100px;
        }
    }
`

const MenubarBox = Styled.div`
    display : flex;
    & > a {
        display : inline-block;
        width : 20vw;
        text-align : center;
    } 
`