import { useFormik } from 'formik';
import { useContext, useState } from 'react';
import { FaGoogle, FaGithub } from 'react-icons/fa'
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from './provider/AuthProvider';
import Lottie from "lottie-react";
import  arrowLeft  from './assets/back/left_arrow_red.json';
const initialValue = {
    email: '',
    password: ''

}

const Login = () => {

    const [loginError, setLoginError] = useState();
    const { login, googleSignIn } = useContext(AuthContext);
    const navigate = useNavigate();

    const location = useLocation()
    const from = location.state?.from?.pathname || '/';


    //formik
    const { values, handleBlur, handleChange, handleSubmit } = useFormik({
        initialValues: initialValue,
        onSubmit: (values, target) => {
            const email = values.email;
            const password = values.password;
            //console.log(email,password);
            setLoginError('')
            //
            login(email, password)
                .then(result => {
                    console.log(result.user);
                    navigate(from, { replace: true });
                })
                .catch(error => {
                    setLoginError(error.message);
                })
            target.resetForm()
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

            <div className=' flex items-center justify-center w-screen h-screen bg-black '>
                <form onSubmit={handleSubmit} className='  w-[450px] px-10 py-5 text-center border mx-auto'>
                    <h3 className='text-3xl font-bold mt-5 text-white'>Please Login</h3>

                    <input className='border-b-2 bg-black w-full mt-10 px-2 text-white'
                        type="email"
                        name="email"
                        placeholder='please enter your email'
                        value={values.email}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        required
                    />

                    <br />

                    <input className='border-b-2 bg-black w-full mt-8 px-2 text-white'
                        type="password"
                        name="password"
                        placeholder='please enter your password'
                        value={values.password}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        required
                    />

                    <input className='mt-8  cursor-pointer
                 bg-[#754DE8] text-white font-semibold
                 transition ease-in-out delay-75   hover:scale-105  duration-200 w-[150px] h-[40px] rounded-[18px]
                ' type="submit" value="Login" />

                    {
                        loginError && <p className='mt-4 text-red-700 font-semibold text-center'>{loginError}</p>
                    }


                    <p className='mt-4 text-white'><small>Don't have an account ? <span className='primary-color font-semibold'>
                        <Link to='/register' className=' '>register</Link>
                    </span></small></p>


                    <div className='mt-4 flex justify-center items-center gap-3'>
                        <div className='h-1 bg-white w-1/2'></div>
                        <p className='text-xl text-white'>or</p>
                        <div className='h-1 bg-white w-1/2'></div>
                    </div>

                    <div className='mt-4 border w-full rounded-lg  transition ease-in-out delay-75   hover:scale-105  duration-200'>

                        <button onClick={handleGoogleSignUp} className='flex items-center gap-5 h-[40px] w-1/1 mx-auto text-white
                     
                    '>
                            <FaGoogle className='h-6 w-6 ' />
                            <p>Continue with Google</p>
                        </button>
                    </div>


                </form>
            </div>
        </>
    );
};

export default Login;