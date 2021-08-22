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
                    {/* <Link href="/board/likes">
                        <a ><FavoriteRoundedIcon /></a>
                    </Link> */}
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
    position : fixed;
    bottom : 0;
    width: auto;
    height : 70px;
    border-top: 1px solid #e4e4e4;
    /* margin-top: 30px; */

    & > div > a >svg {
        color: black;
        font-size : 39px;
        padding: 14% 0 14% 0;
    }
    
    @media only screen and (min-width:768px){
        position: fixed;
        bottom: 0;
        width: 1200px;
        height: 90px;
        & > div {
            width : 100%;
            text-align : center;
        }
        & > div > a > svg {
            font-size : 45px;
            padding-top: 1%;
            margin : 10px 0 0 0;
        }
    }
`

const MenubarBox = Styled.div`
    display : flex;
    height: 100%;
    display: block;
    background : white;
    & > a {
        display : inline-block;
        width : 25vw;
        text-align : center;
    } 
    @media only screen and (min-width:768px){
        & > a {
            width: 15vw;
        }
    }
`