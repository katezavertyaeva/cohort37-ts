import styled from "@emotion/styled";

import { WeatherBack } from "assets";

export const WeatherWrapper = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  background: url(${WeatherBack});
  background-repeat: no-repeat;
  background-size: cover;
`;

export const Header = styled.header`
  display: flex;
  width: 100%;
  align-items: center;
  justify-content: center;
  height: 80px;
  padding: 25px 85px;
  border-bottom: 1px #d2d2d2 solid;
  background: linear-gradient(
      0deg,
      rgba(255, 255, 255, 0.1) 0%,
      rgba(255, 255, 255, 0.1) 100%
    ),
    rgba(18, 45, 77, 0.5);
  backdrop-filter: blur(8px);
  font-size: 24px;
  font-weight: bold;
  color: white;
`;

export const Main = styled.main`
  display: flex;
  flex: 1;
  justify-content: center;
`;

export const WeatherForm = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 709px;
  gap: 60px;
  margin-top: 140px;
`;

export const InputButtonWrapper = styled.div`
  display: flex;
  width: 100%;
  gap: 12px;
`;

export const WeatherButtonWrapper = styled.div`
  width: 146px;
`;
