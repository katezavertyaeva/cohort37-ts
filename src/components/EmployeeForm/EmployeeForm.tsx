import { useState } from 'react';
import { useFormik } from 'formik';
import Input from "components/Input/Input";
import { CardFormComponent, Checkbox, CheckboxContainer, CheckboxLabel, EmployeeFormComponent, FormWrapper } from "./styles";
import { EmployeeFormValues } from './types';
import Button from 'components/Button/Button';

function EmployeeForm() {
  const [formValues, setFormValues] = useState<EmployeeFormValues>({
    name: "",
    surname: "",
    age: "",
    position: "",
    agreement: false
  });

  const formik = useFormik({
    initialValues: {
      name: '',
      surname: '',
      age: '',
      position: '',
      agreement: false
    } as EmployeeFormValues,
    onSubmit: (values: EmployeeFormValues) => {
      console.table(values)
      // console.log(`Form values: ${values.name}, ${values.surname}, ${values.age}, ${values.position}, ${values.agreement}`)
    }
  });

  return (
    <FormWrapper>
      <EmployeeFormComponent onSubmit={formik.handleSubmit}>
        <Input
          name="name"
          placeholder="Enter your name"
          label="Name"
          onInputChange={formik.handleChange}
          value={formik.values.name}
        />
        <Input
          name="surname"
          placeholder="Enter your surname"
          label="Surname"
          onInputChange={formik.handleChange}
          value={formik.values.surname}
        />
        <Input
          name="age"
          placeholder="Enter your age"
          label="Age"
          onInputChange={formik.handleChange}
          value={formik.values.age}
        />
        <Input
          name="position"
          placeholder="Enter your position"
          label="Position"
          onInputChange={formik.handleChange}
          value={formik.values.position}
        />
        <CheckboxContainer>
          <Checkbox
            id='agreement-id'
            name='agreement'
            type='checkbox'
            onChange={formik.handleChange}
            checked={formik.values.agreement}
          />
          <CheckboxLabel htmlFor='agreement-id'>I Agree</CheckboxLabel>
        </CheckboxContainer>
        <Button type="submit" name="Create" disabled={!formik.values.agreement} />
      </EmployeeFormComponent>
      <CardFormComponent>
        <p>name</p>
        <p>surname</p>
        <p>age</p>
        <p>position</p>
      </CardFormComponent>
    </FormWrapper>)

}

export default EmployeeForm;