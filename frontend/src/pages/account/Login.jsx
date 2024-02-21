import React, { useEffect } from 'react'
import './account.css'
import logo from '../../images/logo2.svg'
import axios from 'axios'
import { useDispatch, useSelector } from 'react-redux'
import { login, registerUser } from '../../actions/userAction'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import ButtonLoader from '../../components/buttonLoader/ButtonLoader'
import { Link, useNavigate } from 'react-router-dom'
const Login = () => {


    const toggelForm = (e, id) => {
        e.preventDefault()
        let loginFrom = document.getElementById('login-form')
        let registerFrom = document.getElementById('register-form')

        if (id === 'register') {
            loginFrom.classList.add('remove-login')
            registerFrom.classList.add('bring-register')
        } else {
            loginFrom.classList.remove('remove-login')
            registerFrom.classList.remove('bring-register')
        }

    }


    const dispatch = useDispatch()
    const navigate = useNavigate()


    const { user, error, loading, isAuthenticate } = useSelector(state => state.user)
    const hanldeLogin = async (e) => {
        e.preventDefault()
        let formData = Object.fromEntries(new FormData(e.target))
        console.log(formData)
        await dispatch(login(formData))


    }

    const handelRegister = async(e) =>{
        e.preventDefault()
        let formData = Object.fromEntries(new FormData(e.target))
        console.log(formData)
        await dispatch(registerUser(formData))
    }
    console.log(isAuthenticate)
    const showtoast = (message, type) => {
        if (type === 'danger') {
            toast.error(message)
        } else {
            toast.success(message)
        }
    }
    useEffect(() => {
        if (error) {
            showtoast(error, 'danger')
            console.log(error)
        }
        if (isAuthenticate) {
            navigate('/account')
        }

    }, [error, isAuthenticate])

    return (
        <div className='login-main'>
            <div className='login-container'>
                <div className='login-form' id='login-form'>
                    <div className='form-heading'>
                        <Link to={'/'}><img src={logo} /></Link>
                        <h2>Login</h2>
                    </div>
                    <div className='form-sub-heading'>
                        <span>Lorem ipsum dolor sit amet, consectetur</span>
                    </div>
                    <form className='form' onSubmit={(e) => hanldeLogin(e)}>
                        <div className='form-container'>
                            <input type='email' name='email' className='login-input' placeholder='Email' />
                            <input type='password' name='password' className='login-input' placeholder='Password' />
                        </div>
                        <div className='form-btn'>
                            <button type='submit'>{loading ? <ButtonLoader /> : 'Login'}</button>
                            <button type='button' className='gotosignup' onClick={(e) => toggelForm(e, 'register')}>SignUp</button>
                        </div>
                    </form>
                </div>
                <div className='login-form register-form' id='register-form'>
                    <div className='form-heading'>
                        <img src={logo} />
                        <h2>SignUp</h2>
                    </div>
                    <div className='form-sub-heading'>
                        <span>Lorem ipsum dolor sit amet, consectetur</span>
                    </div>
                    <form className='form' onSubmit={(e) => handelRegister(e)}>
                        <div className='form-container'>
                            <input type='text' name='name' className='login-input' placeholder='Name' />
                            <input type='email' name='email' className='login-input' placeholder='Email' />
                            <input type='password' name='password' className='login-input' placeholder='Password' />
                        </div>
                        <div className='form-btn'>
                            <button type='submit'>Sign up</button>
                            <button type='button' className='gotosignup' onClick={(e) => toggelForm(e, 'login')}>logIn</button>

                        </div>
                    </form>
                </div>
            </div>
            <ToastContainer
                position="top-right"
                autoClose={5000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="dark"
            // transition: Bounce
            />
        </div>
    )
}

export default Login