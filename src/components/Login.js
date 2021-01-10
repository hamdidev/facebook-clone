import { Button } from '@material-ui/core';
import React from 'react'
import {auth, provider} from '../firebase'
import {useStateValue} from './StateProvider'
import {actionTypes} from './Reducer'
import '../styles/login.css'

const Login = () => {
    const [state, dispatch] = useStateValue();
    const signIn = ()=>{
        
        auth.signInWithPopup(provider)
        .then((result)=>{
            dispatch({
                type: actionTypes.SET_USER,
                user: result.user
            })
            console.log(result.user)
        }).catch(error => alert(error.message))
    }
    return (
        <div className="login">
            <div className="login__logo">
                <img src="https://1000logos.net/wp-content/uploads/2016/11/Facebook-logo.png" alt=""/>
                <img className="login__img" src="https://logos-world.net/wp-content/uploads/2020/04/Facebook-Logo.png" alt=""/>
                
            </div>
            <Button type="submit" onClick={signIn}>Sign In</Button>
        </div>
    )
}

export default Login
