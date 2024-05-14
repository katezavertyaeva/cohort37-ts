import styled from "@emotion/styled";

export const WeatherErrorWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 6px;
  width: 100%;
  height: fit-content;
  padding: 16px 28px;
  background: linear-gradient(
    134deg,
    rgba(47, 72, 111, 0.62) 5.78%,
    rgba(11, 27, 52, 0.62) 96.58%
  );
  backdrop-filter: blur(4px);
  border-radius: 20px;
`;

export const ApiError = styled.p`
  font-size: 57px;
  color: #f35e5e;
`;

export const ErrorMessage = styled.p`
  font-size: 18px;
  color: white;
`;
