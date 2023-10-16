import React, { createContext, useEffect, useState } from 'react';
import {
    FacebookAuthProvider,
    GithubAuthProvider,
    GoogleAuthProvider,
    createUserWithEmailAndPassword,
    getAuth,
    onAuthStateChanged,
    signInWithEmailAndPassword,
    signInWithPopup,
    signOut,
} from 'firebase/auth';
import app from '../firebase/firebase.config';
import axios from 'axios';

export const AuthContext = createContext();
const auth = getAuth(app);

const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    const googleProvider = new GoogleAuthProvider();
    const facebookProvider = new FacebookAuthProvider();
    const githubProvider = new GithubAuthProvider();

    // Create User
    const createUser = (email, password) => {
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password);
    };

    // Login User
    const loginUser = (email, password) => {
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password);
    };

    // Login With Facebook
    const loginWithFacebook = () => {
        return signInWithPopup(auth, facebookProvider);
    };

    // Login With Google
    const loginWithGoogle = () => {
        return signInWithPopup(auth, googleProvider);
    };

    // Login With Github
    const loginWithGithub = () => {
        return signInWithPopup(auth, githubProvider);
    };

    // LogOut User
    const logOut = () => {
        setLoading(true);
        return signOut(auth);
    };

    // Observer
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
            setUser(currentUser);

            // get and set token
            if (currentUser) {
                axios
                    .post('http://localhost:5000/jwt', {
                        email: currentUser.email,
                    })
                    .then((data) => {
                        localStorage.setItem('access-token', data.data.token);
                    });
            } else {
                localStorage.removeItem('access-token');
            }
            setLoading(false);
        });

        return () => unsubscribe();
    }, []);

    const authInfo = {
        createUser,
        loginUser,
        loginWithFacebook,
        loginWithGoogle,
        loginWithGithub,
        logOut,
        user,
        loading,
    };
    return (
        <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
    );
};

export default AuthProvider;
