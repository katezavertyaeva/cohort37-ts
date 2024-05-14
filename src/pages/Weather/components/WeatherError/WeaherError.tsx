import { WeatherErrorProps } from "./types";
import { ApiError, ErrorMessage, WeatherErrorWrapper } from "./styles";

function WeatherError({ error }: WeatherErrorProps) {
  return (
    <WeatherErrorWrapper>
      <ApiError>{`API Error ${error.code}`}</ApiError>
      <ErrorMessage>{error.message}</ErrorMessage>
    </WeatherErrorWrapper>
  );
}

export default WeatherError;
