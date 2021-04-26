import React, { useContext } from 'react';
import './Login.css'
import firebase from "firebase/app";
import "firebase/auth";
import { UserContext } from '../../App';
import firebaseConfig from './firebase.config';
import { useHistory, useLocation } from 'react-router';


const Login = () => {
    const [loggedInUser,setLoggedInUser] = useContext(UserContext);
    const provider = new firebase.auth.GoogleAuthProvider();
    const history = useHistory();
    const location= useLocation();
    const  { from } = location.state || { from: { pathname: "/" } };
    const handleGoogle = () =>{
        firebase.auth()
        .signInWithPopup(provider)
        .then((result) => {
            /** @type {firebase.auth.OAuthCredential} */
            var credential = result.credential;

            // This gives you a Google Access Token. You can use it to access the Google API.
            var token = credential.accessToken;
            // The signed-in user info.
            var {displayName,email} = result.user;
            const signedInUser ={name:displayName,email:email};
            setLoggedInUser(signedInUser);
            console.log(displayName);
            history.replace(from);
            // ...
        }).catch((error) => {
            // Handle Errors here.
            var errorCode = error.code;
            var errorMessage = error.message;
            // The email of the user's account used.
            var email = error.email;
            // The firebase.auth.AuthCredential type that was used.
            var credential = error.credential;
    // ...
  });
    }
    if(firebase.apps.length ===0){
        firebase.initializeApp(firebaseConfig);
    }
    return (
        <div className='login'>
            <div className='loginBox'>
                <h1>Welcome To Urban Rides</h1>
                <form action="">
                    <p>Username or Email</p>
                    <input type="text" placeholder="Enter Your Username or Email" />
                    <p>Password</p>
                    <input type="password" placeholder="Enter Your Password" />
                    <input type="submit" />
                    <a href="">Lost Your Password?</a>
                    <p>Don't have an account?<a href="">Sign Up</a></p>
                </form>
                <button className='signUpGoogle' onClick={handleGoogle}>Sign Up With Google</button>
                <button className='signUp'>Sign Up With Facebook</button>
            </div>
        </div>

    );
};

export default Login;