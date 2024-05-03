import styled from "@emotion/styled";

export const EmployeeFormComponent = styled.form`
  display: flex;
  flex-direction: column;
  gap: 30px;
  width: 590px;
  height: fit-content;
  padding: 60px;
  border: 1px solid black;
  border-radius: 4px;
  background-color: white;
`
export const Checkbox = styled.input`
  width: 25px;
  height: 25px;
`
export const CheckboxLabel = styled.label`
 font-size: 20px; 
`
export const CheckboxContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  `
export const CardFormComponent = styled.div`
display: flex;
flex-direction: column;
gap: 30px;
width: 590px;
height: 600px;
padding: 60px;
border: 2px solid black;
border-radius: 6px;
margin-top: 50px;
background-color: #b3c5e8;
`;

export const FormWrapper = styled.div`
display: flex;
gap: 30px;
`;

export const ErrorAgreementMessage = styled.p`
  color: red;
  font-size: 16px;
  height: 18px;
`