import {useState} from 'react'

interface State {
  email: string
  name: string
  password: string
  passwordConfirmation: string
}

export const useForm = (initialValues: State) => {
  const [values, setValues] = useState<State>(initialValues)

  const handleChange = (field: string, value: string) => {
    setValues((prevState: State) => ({
      ...prevState,
      [field]: value
    }))
  }

  return {
    values,
    handleChange
  }
}
