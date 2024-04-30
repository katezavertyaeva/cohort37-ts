import Input from "components/Input/Input";
import Button from "components/Button/Button";
import { LoginFormComponent, LoginFormName, InputsContainer } from "./styles";
import { useFormik } from "formik";
import { LoginFormValues } from './types';

function LoginForm() {
  // сохранение возвращаемого useFormik значения в переменную formik
  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    } as LoginFormValues,
    onSubmit: (values: LoginFormValues) => {
      console.log(values);
    },
  });

  console.log(formik);

  return (
    //привязываем к элементу формы действие submit
    <LoginFormComponent onSubmit={formik.handleSubmit}>
      <LoginFormName>Login form</LoginFormName>
      <InputsContainer>
        <Input
          name="email"
          type="email"
          placeholder="Enter your email"
          label="Email"
          onInputChange={formik.handleChange}
          value={formik.values.email}
        />
        <Input
          name="password"
          type="password"
          placeholder="Enter your password"
          label="Password"
          onInputChange={formik.handleChange}
          value={formik.values.password}
        />
      </InputsContainer>
      <Button type="submit" name="Login" />
    </LoginFormComponent>
  );
}

export default LoginForm;
