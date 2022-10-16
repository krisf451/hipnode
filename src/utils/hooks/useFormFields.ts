/* eslint-disable @typescript-eslint/no-explicit-any */
import { useState } from 'react';

interface FormFields {
  [key: string]: any;
}

export const useFormFields = (initialValues : FormFields): [ any, (event: React.ChangeEvent<HTMLInputElement>) => void, () => void] => {
  const [values, setValues] = useState(initialValues);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { target } = e;
    const { name, value } = target;

    setValues({ ...values, [name]: value });
  };

  const resetFormFields = () => setValues(initialValues);

  return [values, handleChange, resetFormFields];
};
