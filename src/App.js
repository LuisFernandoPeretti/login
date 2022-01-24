import './App.css';
import { Formik, Form, Field, ErrorMessage} from "formik"
import * as yup from "yup"

function App() {

  const handleClickLogin = (values) => console.log(values)

  const validationLogin = yup.object().shape({
    email: yup.string().email("Não é um email válido").required("Este campo é obrigatório"),
    password: yup.string().min(8, "A senha deve ter no mínimo 8 caracteres").required()
  })

  return (
    <div className="container">
      <h1>Login</h1>
      <Formik initialValues={{}}
      onSubmit={handleClickLogin}
      validationSchema={validationLogin}
      >
        <Form className="login-form">
          <div className='login-form-group'>
            <Field name="email"
              className="form-field"
              placeholder="Email"
            >
            </Field>
            <ErrorMessage
              component="spam"
              name="email"
              className='form-error'
            >
            </ErrorMessage>
          </div>
          <div className='login-form-group'>
            <Field name="password"
              className="form-field"
              placeholder="Senha"
            >
            </Field>
            <ErrorMessage
              component="spam"
              name="password"
              className='form-error'
            >
            </ErrorMessage>
          </div>
          <button className='button'
          type="submit"
          >
            Login
          </button>
        </Form>
      </Formik>
    </div>
  );
}

export default App;
