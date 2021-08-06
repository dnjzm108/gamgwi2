import { makeStyles } from '@material-ui/core/styles';
import Styled from 'styled-components';
import HomeRoundedIcon from '@material-ui/icons/HomeRounded';
import FavoriteRoundedIcon from '@material-ui/icons/FavoriteRounded';
import FormatListBulletedRoundedIcon from '@material-ui/icons/FormatListBulletedRounded';
import CreateRoundedIcon from '@material-ui/icons/CreateRounded';
import PermIdentityRoundedIcon from '@material-ui/icons/PermIdentityRounded';
import Link from 'next/link'


const MobileMenuBar = () => {
    const classes = useStyles();
    return (
        <>
            <MenuBarWrap>
                <div className={classes.root}>
                    <Link href="/list">
                        <a ><FormatListBulletedRoundedIcon style={MenuFontSize} /></a> 
                    </Link>
                    <Link href="/likes">
                        <a ><FavoriteRoundedIcon style={MenuFontSize} /></a> 
                    </Link>
                    <Link href="/home">
                        <a ><HomeRoundedIcon style={MenuFontSize} /></a> 
                    </Link>
                    <Link href="/write">
                        <a ><CreateRoundedIcon style={MenuFontSize} /></a> 
                    </Link>
                    <Link href="/info">
                        <a ><PermIdentityRoundedIcon style={MenuFontSize} /></a> 
                    </Link>  
                </div>
            </MenuBarWrap>
        </>
    )
}

export default MobileMenuBar

const useStyles = makeStyles((theme) => ({
    root: {
        '& > a > svg': {
            //margin: theme.spacing(2),
            margin : '16px',
            color : 'black',
        },
    },
}));

const MenuBarWrap = Styled.div`
    position : absolute;
    bottom : 0;
    width: auto;
    height : 70px;
    border-top: 1px solid #e4e4e4;
    margin-top: 30px;
    
    @media only screen and (min-width:768px){
        position : relative;
        width : 1200px;
        & > div {
            width : 100%;
            text-align : center;
        }
        & > div > a > svg {
            margin : 20px 100px;
        }
    }
`
const MenuFontSize = {
    'fontSize' : '39'
}
