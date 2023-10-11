import { useContext, useState } from "react";
import { AuthContext } from "./provider/AuthProvider";
import { Link, useNavigate } from "react-router-dom";
import { useFormik } from "formik";
import { FaGoogle } from 'react-icons/fa'
import registerSchema from "./schema/YupValidation";
import Lottie from "lottie-react";
import arrowLeft from './assets/back/left_arrow_red.json';
const initialValue = {
    name: '',
    email: '',
    password: '',
    photoURL: ''
}

const Register = () => {

    const [loginError, setLoginError] = useState();
    const { registerUser, googleSignIn } = useContext(AuthContext);
    const navigate = useNavigate();

    //formik
    const { values, errors, handleBlur, handleChange, handleSubmit, touched } = useFormik({
        initialValues: initialValue,
        validationSchema: registerSchema,
        onSubmit: (values, action) => {
            const name = values.name;
            const email = values.email;
            const password = values.password;
            const photoURL = values.photoURL;
            console.log(name, email, password, photoURL);
            setLoginError('')

            registerUser(email, password)
                .then(() => {

                    navigate('/');
                })
                .catch(error => {
                    setLoginError(error.message)
                })

            action.resetForm();
        }
    })

    //google signUp
    const handleGoogleSignUp = () => {
        setLoginError('')
        googleSignIn()
            .then(result => {
                console.log(result.user);
                navigate('/')
            })
            .catch(error => {
                setLoginError(error.message)
            })
    }


    return (
        <>
            <Link to='/' className='absolute top-0 left-10 flex items-center '>

                <Lottie className='h-20 w-20' animationData={arrowLeft} />
                <p className='text-3xl font-semibold -ml-4 text-red-500 hover:text-red-700'>Back to Home</p>
            </Link>

            <div className='w-screen h-screen flex justify-center items-center bg-black  '>
                <form onSubmit={handleSubmit} className=' w-[450px] px-10 py-5 text-center border mx-auto'>
                    <h3 className='text-3xl font-bold mt-5 text-white'>Please Register</h3>


                    <input className='border-b-2 bg-black w-full mt-10 px-2 text-white'
                        type="text"
                        name="name"
                        placeholder='please enter your name'
                        value={values.name}
                        onChange={handleChange}
                        onBlur={handleBlur}
                    />
                    <br />
                    {
                        errors.name && touched.name ?
                            <p className='mt-4 text-red-600 font-semibold text-center'><small>{errors.name}</small></p>
                            :
                            null
                    }




                    <input className='border-b-2 bg-black w-full mt-10 px-2 text-white'
                        type="email"
                        name="email"
                        placeholder='please enter your email'
                        value={values.email}
                        onChange={handleChange}
                        onBlur={handleBlur}
                    />
                    {
                        errors.email && touched.email ?
                            <p className='mt-4 text-red-600 font-semibold text-center'><small>{errors.email}</small></p>
                            :
                            null
                    }
                    <br />

                    <input className='border-b-2 bg-black w-full mt-8 px-2 text-white'
                        type="password"
                        name="password"
                        placeholder='please enter your password'
                        value={values.password}
                        onChange={handleChange}
                        onBlur={handleBlur}
                    />
                    {
                        errors.password && touched.password ?
                            <p className='mt-4 text-red-600 font-semibold text-center'><small>{errors.password}</small></p>
                            :
                            null
                    }
                    <br />


                    <input className='mt-8 my-btn  cursor-pointer
            bg-[#754DE8] text-white font-semibold
            transition ease-in-out delay-75   hover:scale-105  duration-200 w-[150px] h-[40px] rounded-[18px]
            ' type="submit" value="Register" />

                    {
                        loginError && <p className='mt-4 text-red-700 font-semibold text-center'>{loginError}</p>
                    }


                    <p className='mt-4 text-white'><small>Don't have an account ? <span className='primary-color font-semibold'>
                        <Link to='/login'>login</Link>
                    </span></small></p>


                    <div className='mt-4 flex justify-center items-center gap-3'>
                        <div className='h-1 bg-white w-1/2'></div>
                        <p className='text-xl text-white'>or</p>
                        <div className='h-1 bg-white w-1/2'></div>
                    </div>

                    <div className='mt-4 border w-full rounded-lg text-white '>
                        <button onClick={handleGoogleSignUp} className='flex items-center gap-5 h-[40px] w-1/1 mx-auto'>
                            <FaGoogle className='h-6 w-6 ' />
                            <p>Continue with Google</p>
                        </button>
                    </div>


                </form>
            </div>
        </>
    );
};

export default Register;