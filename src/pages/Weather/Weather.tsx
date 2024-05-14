import { ChangeEvent, useState } from "react";

import Input from "components/Input/Input";
import Button from "components/Button/Button";
import {
  WeatherWrapper,
  Header,
  Main,
  WeatherForm,
  WeatherButtonWrapper,
  InputButtonWrapper,
} from "./styles";
import { WeatherErrorData, WeatherInfoData } from "./types";
import WeatherInfo from "./components/WeatherInfo/WeatherInfo";
import WeatherError from "./components/WeatherError/WeaherError";
import Spinner from "components/Spinner/Spinner";

function Weather() {
  //Контролируем Input
  const [city, setCity] = useState<string>('');
  // стейт для хранения необходимых данных погоде
  const [weatherInfo, setWeatherInfo] = useState<WeatherInfoData | undefined>(undefined);
  // стейт для хранения данных ошибке
  const [weatherError, setWeatherError] = useState<WeatherErrorData | undefined>(undefined);
  //стейт, который контролирует индикатор загрузки
  const [isLoading, setIsLoading] = useState<boolean>(false)

  const APP_ID: string = "eea75aae6dbe00233ac1efadf2d99a2a";
  const URL: string = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${APP_ID}`;

  const getWeatherInfo = async () => {
    // Здесь проверяем пустоту поля
    if (city.trim().length === 0) {
      return alert('Enter city name')
    }

    //Очищаем стейты с предыдущей информацией о погоде или ошибке
    setWeatherInfo(undefined);
    setWeatherError(undefined)
    setIsLoading(true)

    const response = await fetch(URL);
    const data = await response.json();

    if (response.ok) {
      setIsLoading(false);
      setWeatherInfo({
        temp: `${Math.round(data?.main?.temp - 273.15)}°C`,
        icon: `http://openweathermap.org/img/w/${data.weather[0].icon}.png`,
        cityName: `${data?.name}`
      })
    } else {
      setIsLoading(false);
      //Логика работы с ошибкой
      setWeatherError({
        code: data?.cod, message: data?.message
      })
    }
  }

  //Контролируем Input
  const onChangeCity = (event: ChangeEvent<HTMLInputElement>) => {
    setCity(event.target.value)
  }

  return (
    <WeatherWrapper>
      <Header>Weather App</Header>
      <Main>
        <WeatherForm>
          <InputButtonWrapper>
            <Input
              placeholder="Enter city name"
              onInputChange={onChangeCity}
              value={city}
              name="city"
            />
            <WeatherButtonWrapper>
              <Button name="Search" onButtonClick={getWeatherInfo} />
            </WeatherButtonWrapper>
          </InputButtonWrapper>
          {isLoading && <Spinner />}
          {!!weatherInfo && (
            <WeatherInfo
              temp={weatherInfo?.temp}
              icon={weatherInfo?.icon}
              cityName={weatherInfo?.cityName}
            />)}
          {!!weatherError && (<WeatherError error={weatherError} />)}
        </WeatherForm>
      </Main>
    </WeatherWrapper>
  );
}

export default Weather;
