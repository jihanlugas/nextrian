import GuestLayout from "../components/GuestLayout";
import ButtonSubmit from "../components/formik/ButtonSubmit";
import FieldInput from "../components/formik/FieldInput";
import FieldInputpassword from "../components/formik/FieldInputpassword";
import { Field, Form, Formik } from 'formik';
import { useRouter } from 'next/router'


const Signin = () => {
    const router = useRouter()

    const initFormikValue = {
        email: '',
        password: '',
    }

    const handleSubmit = (values, actions) => {
        // dispatch(userSignIn(values))
        router.push('/')
    }

    return (
        <GuestLayout>
            <div className="h-screen w-screen bg-blue-200 flex justify-center items-center">
                <div className="w-full max-w-md p-4">
                    <div className="bg-gray-200 rounded-xl p-2">
                        <Formik
                            initialValues={initFormikValue}
                            onSubmit={handleSubmit}
                        >
                            {() => {
                                return (
                                    <Form>
                                        <div className="p-2 w-full flex justify-center">
                                            <div className="text-3xl">
                                                <span>Sign In</span>
                                            </div>
                                        </div>
                                        <div className="p-2">
                                            <div className="mb-2">
                                                <FieldInput
                                                    type="email"
                                                    label={"Email"}
                                                    placeholder="Email"
                                                    name="email"
                                                />
                                            </div>
                                            <div className="mb-2">
                                                <FieldInputpassword
                                                    label={"Password"}
                                                    placeholder="Password"
                                                    name="password"
                                                />
                                            </div>
                                        </div>
                                        <div className="p-2">
                                            <ButtonSubmit
                                                label="Login"
                                                className="w-full"
                                            />
                                        </div>
                                    </Form>
                                )
                            }}
                        </Formik>
                    </div>
                </div>
            </div>
        </GuestLayout>
    )
}

export default Signin;