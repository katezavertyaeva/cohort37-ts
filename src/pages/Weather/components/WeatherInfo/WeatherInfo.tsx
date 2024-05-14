import { WeatherInfoProps } from "./types";
import {
  CityName,
  IconWrapper,
  TempWrapper,
  WeatherInfoContainer,
  WeatherInfoWrapper,
  WeatherImg,
} from "./styles";

function WeatherInfo({ temp, icon, cityName }: WeatherInfoProps) {
  return (
    <WeatherInfoWrapper>
      <WeatherInfoContainer>
        <TempWrapper>
          {temp}
          <CityName>{cityName}</CityName>
        </TempWrapper>
        <IconWrapper>
          <WeatherImg src={icon} alt="Weather Icon" />
        </IconWrapper>
      </WeatherInfoContainer>
    </WeatherInfoWrapper>
  );
}

export default WeatherInfo;
