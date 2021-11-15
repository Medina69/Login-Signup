import React, { useState } from 'react';
import './SignUp.scss';
import logo from '../../images/big-logo/logo.png';
import word from '../../images/words/SignUp.png';
import icons from '../../images/icons/icons.png';

const SignUp = () => {
    const [passwordShown, setPasswordShown] = useState(false);
    const togglePassword = () => {
        setPasswordShown(!passwordShown);
    };
    return (
        <div className={'Sign-up'}>
            <div className={'left'}>
                <div className={'head'}>
                    <img className={'logo'} src={logo} />
                    <img className={'word'} src={word} />
                </div>
                <div className={'inputs'}>
                    <input className={'password'} type={'text'} placeholder={'Email'} />
                    <input className={'password'} type={'text'} placeholder={'User name'} />
                    <input className={'password'} type={'number'} placeholder={'Date of birth'} />
                    <div className={'input-icon'}>

                        <input
                            className={'password'}
                            type={passwordShown ? "text" : "password"}
                            placeholder={"Password"} />

                        <i id={'icon'} className={"fas fa-eye fa-1x"} onClick={togglePassword}></i>
                    </div>
                    <div className={'input-icon'}>
                        <input
                            className={'password'}
                            type={passwordShown ? "text" : "password"}
                            placeholder={"Password"} />
                        <i id={'icon'} className={"fas fa-eye fa-1x"} onClick={togglePassword}></i>

                    </div>
                </div>
                <button>
                    Sign up
                </button>
                <div className={'hr-p-hr'}>
                    <hr />
                    <p>
                        Or sign up with
                    </p>
                    <hr />
                </div>
                <img className={'icons'} src={icons} />

                <div className={'p'}>
                    <p>Already have an account?</p>
                    <a href='/LogIn'>Log in now!</a>
                </div>
            </div>
            <div className={'right'}>
                <h1>welcome to our
                    Sweetistic
                    cafe!</h1>
            </div>
        </div>
    );
};

export default SignUp;