export interface EmployeeFormValues {
  name: string,
  surname: string,
  age: string,
  position: string,
  agreement: boolean
}

export enum EMPLOYEE_FIELD_NAMES {
  NAME = 'name',
  SURNAME = 'surname',
  AGE = 'age',
  POSITION = 'position',
  AGREEMENT = 'agreement',
}