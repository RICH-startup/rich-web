import screenLogin from '../../assets/visual-elements/screen-login.png'
import '../../styles/style.css'
import { Formik, Form, Field, ErrorMessage } from 'formik'
import * as yup from 'yup'  

function LoginLayout() {

    const handleClickLogin = (values) => console.log(values)

    const validationLogin = yup.object().shape({
        email: yup
            .string()
            .email("Isto não é um email.")
            .required("Este é um campo obrigatório."),

        password: yup
            .string()
            .min(8, "A senha deve conter no mínimo 8 caracteres.")
            .required("Este é um campo obrigatório."),
    })

    return (
        <div class="text-white">
            <img src={screenLogin} alt="" />
            <div>
                <h1>Bem vindo de volta!</h1>
                <h1>Faça login para acessar nossos recursos</h1>
                <div className="container">
                    <Formik 
                        initialValues={{}}
                        onSubmit={handleClickLogin}
                        validationSchema={validationLogin}
                    >
                        <Form className="login-form">
                            <div className="login-form-group">
                                <Field name="email" className="form-field" placeholder="Digite seu email..."
                                class="bg-[rgb(31, 0, 51, 0.89)]"/>

                                <ErrorMessage 
                                    component="span"
                                    name="email"
                                    className="form-error"
                                />
                            </div>

                            <div className="login-form-group">
                                <Field name="password" className="form-field" placeholder="Digite sua senha..."
                                class="bg-[rgb(31, 0, 51, 0.89)]"/>

                                <ErrorMessage 
                                    component="span"
                                    name="password"
                                    className="form-error"
                                />
                            </div>
                            <button className="button" type="submit">Login</button>
                        </Form>
                    </Formik>
                </div>
            </div>
        </div>
    )
}

export default LoginLayout