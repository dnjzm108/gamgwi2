import Styled from 'styled-components';
import { makeStyles } from '@material-ui/core/styles';
import WbSunnyRoundedIcon from '@material-ui/icons/WbSunnyRounded';
import FilterDramaRoundedIcon from '@material-ui/icons/FilterDramaRounded';
import AcUnitIcon from '@material-ui/icons/AcUnit';

const TodayWeather = () => {

    return (
        <>
            <TodayWeatherWrap>

                <p>오늘, 내 마음의 날씨</p>
                <TodayWeatherUl>
                    <li>
                        <TodayWeatherCheckBox type="checkbox" id="sun" />
                        <label htmlFor="sun">
                            <WbSunnyRoundedIcon style={FontSize} />
                        </label>
                    </li>
                    <li>
                        <TodayWeatherCheckBox type="checkbox" id="cloud" />
                        <label htmlFor="cloud">
                            <FilterDramaRoundedIcon style={FontSize} />
                        </label>
                    </li>
                    <li>
                        <TodayWeatherCheckBox type="checkbox" id="snow" />
                        <label htmlFor="snow">
                            <AcUnitIcon style={FontSize} />
                        </label>
                    </li>
                </TodayWeatherUl>
            </TodayWeatherWrap>
        </>
    )
}

export default TodayWeather


const TodayWeatherWrap = Styled.div`
    height: 100%;
    width: 100%;
    text-align : right;
`

const TodayWeatherUl = Styled.ul`
    list-style : none;
    display : flex;
    float : right;
    margin : 0;

    & > li {
        list-style : none;
        width: 60px;
    }
`

const TodayWeatherCheckBox = Styled.input`
    display : none;
`

const FontSize = {
    'fontSize': '30',
    'width': '30px',
    
}