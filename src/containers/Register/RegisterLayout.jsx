import signupTablet from '../../assets/visual-elements/signup-tablet.png'
import '../../styles/style.css'
import { Formik, Form, Field, ErrorMessage } from 'formik'
import * as yup from 'yup'  

function RegisterLayout() {

    const handleClickRegister = (values) => console.log(values)

    const validationRegister = yup.object().shape({

        name: yup
            .string()
            .required("Este é um campo obrigatório."),
        
        lastName: yup
            .string()
            .required("Este é um campo obrigatório."),

        email: yup
            .string()
            .email("Isto não é um email válido.")
            .required("Este é um campo obrigatório."),

        birthDate: yup
            .date()
            .required("Este é um campo obrigatório."),

        cpf: yup
            .string()
            .min(11)
            .required("Este é um campo obrigatório."),

        password: yup
            .string()
            .min(8, "A senha deve conter no mínimo 8 caracteres.")
            .required("Este é um campo obrigatório."),
            
        confirmPassword: yup
            .string()
            .oneOf([yup.ref("password"), null], "As senhas não são iguais")
    })

    return (
        <div class="text-white">
            <img src={signupTablet} alt="" />
            <div>
                <h1>Crie sua conta</h1>
                <h1>Cadastre seus dados</h1>
                <div className="container">
                    <Formik 
                        initialValues={{}}
                        onSubmit={handleClickRegister}
                        validationSchema={validationRegister}
                    >
                        <Form className="login-form">
                            <div className="nome-sobrenome">
                                <div className="register-form-group">
                                    <Field name="name" className="form-field" placeholder="Digite seu nome..."
                                    class="bg-[rgb(31, 0, 51, 0.89)]"/>

                                    <ErrorMessage 
                                        component="span"
                                        name="name"
                                        className="form-error"
                                    />
                                </div>

                                <div className="register-form-group">
                                    <Field name="lastName" className="form-field" placeholder="Digite seu sobrenome..."
                                    class="bg-[rgb(31, 0, 51, 0.89)]"
                                    value=""/>

                                    <ErrorMessage 
                                        component="span"
                                        name="lastName"
                                        className="form-error"
                                    />
                                </div>
                            </div>

                            <div className="register-form-group">
                                <Field name="email" className="form-field" placeholder="Digite seu email..."
                                class="bg-[rgb(31, 0, 51, 0.89)]"/>

                                <ErrorMessage 
                                    component="span"
                                    name="email"
                                    className="form-error"
                                />
                            </div>

                            <div className="data-cpf">
                                <div className="register-form-group">
                                    <Field name="birthDate" className="form-field" placeholder="Digite sua data de nascimento..."
                                    class="bg-[rgb(31, 0, 51, 0.89)]"/>

                                    <ErrorMessage 
                                        component="span"
                                        name="birthDate"
                                        className="form-error"
                                    />
                                </div>

                                <div className="register-form-group">
                                    <Field name="cpf" className="form-field" placeholder="Digite seu cpf..."
                                    class="bg-[rgb(31, 0, 51, 0.89)]"
                                    value=""/>

                                    <ErrorMessage 
                                        component="span"
                                        name="cpf"
                                        className="form-error"
                                    />
                                </div>
                            </div>

                            <div className="register-form-group">
                                <Field name="password" className="form-field" placeholder="Digite sua senha..."
                                class="bg-[rgb(31, 0, 51, 0.89)]"/>

                                <ErrorMessage 
                                    component="span"
                                    name="password"
                                    className="form-error"
                                />
                            </div>

                            <div className="register-form-group">
                                <Field name="confirmPassword" className="form-field" placeholder="Confirme sua senha..."
                                class="bg-[rgb(31, 0, 51, 0.89)]"/>

                                <ErrorMessage 
                                    component="span"
                                    name="confirmPassword"
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

export default RegisterLayout