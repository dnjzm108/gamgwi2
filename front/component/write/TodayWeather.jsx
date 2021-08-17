import Styled from 'styled-components';
import WbSunnyRoundedIcon from '@material-ui/icons/WbSunnyRounded';
import FilterDramaRoundedIcon from '@material-ui/icons/FilterDramaRounded';
import AcUnitIcon from '@material-ui/icons/AcUnit';

const TodayWeather = (props) => {  
    return (
        <>
            <TodayWeatherWrap>
                <TodayMyWeather>오늘, 내 마음의 날씨</TodayMyWeather>
                <TodayWeatherUl>
                    <li>
                        <TodayWeatherCheckBox type="radio" id="sun" name="weather" value="sun" onChange={props.weatherChange} />
                        <label htmlFor="sun">
                            <WbSunnyRoundedIcon style={FontSize} />
                        </label>
                    </li>
                    <li>
                        <TodayWeatherCheckBox type="radio" id="cloud" name="weather" value="cloud" onChange={props.weatherChange}/>
                        <label htmlFor="cloud">
                            <FilterDramaRoundedIcon style={FontSize} />
                        </label>
                    </li>
                    <li>
                        <TodayWeatherCheckBox type="radio" id="snow" name="weather" value="snow" onChange={props.weatherChange}/>
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

const TodayMyWeather = Styled.div`
    width: 100%;
    height: 30px;
    font-size: 15px;
`

const TodayWeatherWrap = Styled.div`
    /* height: 100%; */
    width: 100%;
    height: 80px;
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
    
    & + label {
        color : #b8b8b8;
        cursor : pointer;
    }
    &:checked + label {
        color : black;
    }
`



const FontSize = {
    'fontSize': '30',
    'width': '30px',
    
}