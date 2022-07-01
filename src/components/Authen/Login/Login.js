import React from 'react'
import { FaFacebook, FaGoogle } from 'react-icons/fa';
import { useState } from 'react';
import './Login.css'
import handleLoginApi from '../../../services/userService';
import { useNavigate} from 'react-router-dom'
// import * as actions from '../../../store/actions'
// import { connect } from 'react-redux'
// import { push } from 'connected-react-router'


function LogIn(props) {

    // const [username, setUsername] = useState('')
    // const [password, setPassword] = useState('')
    // const [errMessage, setErrMessage] = useState('')
    // const [Account, setAccount] = useState(JSON.parse(localStorage.getItem("customerInfor")))
    // const [acceptLogin, setAcceptLogin] = useState({})

    // const [status, setStatus] = useState(false)


    const handleOnClickSignIn = () => {
        props.setConditionSignIn(true)
        props.setConditionLogIn(false)
    }

    const handleOnClickBack = () => {
        props.setConditionLogIn(false)
    }

    // const handleOnClickLogin = async () => {
        
        
    //     try {
    //         let data = await handleLoginApi(username, password)
    //         //console.log(data.message)
    //         if(data.errCode !==0){
    //             setErrMessage(data.message)
    //             console.log(data.message)
    //             setStatus(false)
    //         }
    //         if(data.errCode === 0){
    //             setErrMessage('')
    //             console.log('login succeess')
    //             setStatus(true)
    //             //this.props.userLoginSuccess(data.user)
    //         }
    //     } 
    //     catch (e) {
    //         console.log(e.response.data.message)
    //         if(e.response){
    //             if(e.response.data){
    //                 setErrMessage(e.response.data.messega)
    //             }
    //         }
    //     }
    // }



    // const handleLogin = () => {
    //     setAccount(JSON.parse(localStorage.getItem("customerInfor")))
    //     console.log(typeof(Account))
    //     setAcceptLogin( Account.find(account => account.userName === username))
    //     if(acceptLogin!= undefined){
    //         if(acceptLogin.passWord == password){
    //             props.setConditionLogIn(false)
    //             alert("dang nhap thanh cong")
    //         }
    //         else alert("sai mat khau")
    //     }
    //     else alert("sai tai khoan");
    //     console.log("handleloginbutton")
    // }

    // const handleUsername = (e) => {
    //     setUsername(e.target.value)
    // }

    // const handlePassword = (e) => {
    //     setPassword(e.target.value)
    // }


    const history = useNavigate()

    const [inpval, setInpval] = useState({
        username: '',
        password: '',
    })

    const handleOnChange = (e) => {
        const {value, name} = e.target

        setInpval(() => {
            return {
                ...inpval,
                [name]: value
            }
        })
    }

    const [errMessage, setErrMessage] = useState('')

    const handleOnClickLogIn = (e) => {
        e.preventDefault()

        const getUser = localStorage.getItem('user')
        console.log(getUser)
        const {username, password} = inpval

        if(username === ''){
            setErrMessage('Username id field is required')
        } 
        else if(password === ''){
            setErrMessage('Password id field is required')
        }
        else if(password.length < 8){
            setErrMessage('Password length greater eight')
        }
        else {
            setErrMessage('')
            if(getUser && getUser.length){
                const userData = JSON.parse(getUser)
                const userLogin = userData.filter((el, k) => {
                    return el.username === username && el.password === password
                })
                if(userLogin.length === 0) {
                    setErrMessage('invalid details')
                }
                else {
                    setErrMessage('')
                    localStorage.setItem('user_login', JSON.stringify(getUser))
                    history('/home')
                    props.setConditionLogIn(false)
                }
            }
        }
    }

    return (
        <div className='modal'>
            <div className='overlay'></div>

            <div className='body'>
                <div className='auth'>
                    <div className='auth__container'>
                        <div className='auth__header'>
                            <h3 className='auth__heading'>Log In</h3>
                            <button onClick={handleOnClickSignIn} className='auth__switch-btn'>Sign Up</button>
                        </div>

                        <div className='auth__form'>
                            <div className='auth__group'>
                                <input type='text' className='auth__input' placeholder='Enter your user...' onChange={handleOnChange} name='username' />
                            </div>
                            <div className='auth__group'>
                                <input type='password' className='auth__input' placeholder='Enter your password...' onChange={handleOnChange} name='password' />
                            </div>
                            <div className='errMessage' style = {{ color:'red', fontSize: 15}}>
                                {errMessage}
                            </div>
                        </div>

                        <div className='auth__aside'>
                            <div className='auth__help'>
                                <a href='' className='auth__help-link auth__help-link-forgot'>Forgot password</a>
                                <span className='auth__help-separate'></span>
                                <a href='' className='auth__help-link auth__help-link-help'>Help?</a>
                            </div>
                        </div>

                        <div className='auth__controls'>
                            <button className='btn' onClick={handleOnClickBack}>Back</button>
                            <button className='btn btn--primary' onClick={handleOnClickLogIn} >Log In</button>
                        </div>
                    </div>

                    <div className='auth__socials'>
                        <a className='btn btn--s btn-with-icon' href="https://www.facebook.com/profile.php?id=100011161051954"><FaFacebook />Connect with Facebook</a>
                        <a className='btn btn--s2 btn-with-icon' href="#"><FaGoogle />Connect with Google</a>
                    </div>
                </div>
            </div>
        </div>



    )
}


// const mapStateToProps = state => {
//     return {
//         language: state.app.language
//     }
// }

// const mapDispatchToProps = dispatch => {
//     return {
//         //navigate: (path) => dispatch(push(path)),
//         // adminLoginSuccess: (adminInfo) => dispatch(actions.adminLoginSuccess(adminInfo)),
//         // adminLoginFail: () => dispatch(actions.adminLoginFail()),
//         userLoginFail: () => dispatch(actions.userLoginFail()),
//         userLoginSuccess: (userInfo) => dispatch(actions.userLoginSuccess(userInfo)),
//     }
// }



export default LogIn;