import React, { useState } from 'react';
import './LogIn.scss';
import logo from '../../images/logo/logo.png';
import word from '../../images/words/word.png';
import icons from '../../images/icons/icons.png';

const LogIn = () => {
    const [passwordShown, setPasswordShown] = useState(false);
    const togglePassword = () => {
        setPasswordShown(!passwordShown);
    };
    return (
        <div className={'Log-in'}>
            <div className={'left'}>
                <div className={'head'}>
                    <img className={'logo'} src={logo} />
                    <img className={'word'} src={word} />
                </div>
                <div className={'inputs'}>
                    <input className={'login'} type={'text'} placeholder={'User name'} />
                    <div className={'input-icon'}>
                        <input
                            className={'password'}
                            type={passwordShown ? "text" : "password"}
                            placeholder={"Password"} />
                        <i id={'icon'} className={"fas fa-eye fa-1x"} onClick={togglePassword}></i>
                    </div>
                </div>
                <button>
                    Log in
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
                    <p>Don't have an account yet?</p>
                    <a href='/SignUp'>Register now!</a>
                </div>
            </div>
            <div className={'right'}>
                <h1>Order from home,
                    Stay home
                    Stay safe!</h1>
            </div>
        </div>
    );
};

export default LogIn;