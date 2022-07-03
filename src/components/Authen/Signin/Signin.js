import React from 'react'
import './Signin.css'
import { FaFacebook, FaGoogle } from 'react-icons/fa';
import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

function SignIn(props) {
    // const [userName, setUserName] = useState('')
    // const [passWord, setpassWord] = useState('')
    // const [passWordAgain, setPassWordAgain] = useState('')
    // const [email, setEmail] = useState('')

    const [errMessage, setErrMessage] = useState('')

    const [data, setData] = useState(JSON.parse(localStorage.getItem('user') || '[]'))

    const handleOnClickLogIn = () => {
        props.setConditionLogIn(true)
        props.setConditionSignIn(false)
    }

    const handleOnClickBack = () => {
        props.setConditionSignIn(false)
    }

    // const handleOnChangeUsername = (e) => {
    //     setUserName(e.target.value)
    // }

    // const handleOnChangePassword = (e) => {
    //     setpassWord(e.target.value)
    // }

    // const handleOnChangePasswordAgain = (e) => {
    //     setPassWordAgain(e.target.value)
    // }

    // const handleOnChangeEmail = (e) => {
    //     setEmail(e.target.value)
    // }

    const [inpval, setInpval] = useState({
        username: '',
        password: '',
        passwordAgain: '',
        email: ''
    })

    const handleOnChange = (e) => {
        const { value, name } = e.target

        setInpval(() => {
            return {
                ...inpval,
                [name]: value
            }
        })
    }

    
    const handleOnClickSignUp = async (e) => {
       e.preventDefault()
        // const newUser = {
        //     userName,
        //     passWord,
        //     email
        // }
        const {username, password, passwordAgain, email} = inpval

        if (username === '') {
            setErrMessage('Username id field is required')
        }
        else if (password === '') {
            setErrMessage('Password id field is required')
        }
        else if (password.length < 8) {
            setErrMessage('Password length greater eight')
        }
        else if (passwordAgain === '') {
            setErrMessage('PasswordAgain id field is required')
        }
        else if (password != passwordAgain) {
            setErrMessage('Passwords are not the same')
        }
        else if (email === '') {
            setErrMessage('Email id field is required')
        }
        else if (!email.includes('@')) {
            setErrMessage('Plz enter valid email address')
        }
        else {
            setErrMessage('')
            props.setConditionLogIn(true)
            props.setConditionSignIn(false)
            localStorage.setItem('user',JSON.stringify([...data,inpval]))
        }
    }

    // useEffect(() => {

    //     localStorage.setItem('user',JSON.stringify([...data,inpval]))
    //     // props.setData([...props.data,inpval])
    //     // console.log("useEffect")
    // }, []);


    return (
        <div className='modal'>
            <div className='overlay'></div>

            <div className='body'>
                <div className='auth'>
                    <div className='auth__container'>
                        <div className='auth__header'>
                            <h3 className='auth__heading'>Sign Up</h3>
                            <button onClick={handleOnClickLogIn} className='auth__switch-btn'>Log In</button>
                        </div>

                        <form action="/post-crud" method="POST">
                            <div className='auth__form'>
                                <div className='auth__group'>
                                    <input type='text' className='auth__input' placeholder='Enter your username...' onChange={handleOnChange} name='username' />
                                </div>
                                <div className='auth__group'>
                                    <input type='password' className='auth__input' placeholder='Enter your password...' onChange={handleOnChange} name='password' />
                                </div>
                                <div className='auth__group'>
                                    <input type='password' className='auth__input' placeholder='Enter your password Again...' onChange={handleOnChange} name='passwordAgain' />
                                </div>
                                <div className='auth__group'>
                                    <input type='email' className='auth__input' placeholder='Enter your email...' onChange={handleOnChange} name='email' />
                                </div>
                                <div>
                                    <p style={{ color: 'red', fontSize: 15 }}>{errMessage}</p>
                                </div>
                            </div>
                        </form>

                        <div className='auth__aside'>
                            <p className='auth__policy-text'>
                                By registering, you agree to QShop about
                                <a href='' className='auth__text-link'>Terms of Service</a>
                                <a href='' className='auth__text-link'>Privacy Policy</a>
                            </p>
                        </div>

                        <div className='auth__controls'>
                            <button className='btn' onClick={handleOnClickBack}>Back</button>
                            <button className='btn btn--primary' onClick={handleOnClickSignUp}>Sign Up</button>
                        </div>
                    </div>

                    <div className='auth__socials'>
                        <a className='btn btn--s btn-with-icon' href="#"><FaFacebook />Connect with Facebook</a>
                        <a className='btn btn--s2 btn-with-icon' href="#"><FaGoogle />Conncet with Google</a>
                    </div>
                </div>
            </div>
        </div>



    )
}

export default SignIn
