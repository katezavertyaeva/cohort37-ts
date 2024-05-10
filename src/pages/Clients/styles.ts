import styled from "@emotion/styled";
import { Link } from "react-router-dom";

export const ClientsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 30px;
`
export const ClientLink = styled(Link)`
 text-decoration: none;
 font-size: 20px;
 color: #1f27f5;
`
