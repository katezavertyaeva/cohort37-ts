import Input from "components/Input/Input";
import Button from "components/Button/Button";
import { LoginFormWrapper, LoginFormName, InputsContainer } from "./styles";

function LoginForm() {
  return (
    <LoginFormWrapper>
      <LoginFormName>Login form</LoginFormName>
      <InputsContainer>
        <Input
          name="login-email"
          type="email"
          placeholder="Enter your email"
          label="Email"
        />
        <Input
          name="login-password"
          type="password"
          placeholder="Enter your password"
          label="Password"
        />
      </InputsContainer>
      <Button type="submit" name="Login" />
    </LoginFormWrapper>
  );
}

export default LoginForm;
