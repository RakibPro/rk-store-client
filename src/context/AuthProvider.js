import React, { createContext, useEffect, useState } from 'react';
import {
    getAuth,
    createUserWithEmailAndPassword,
    updateProfile,
    signInWithEmailAndPassword,
    FacebookAuthProvider,
    GoogleAuthProvider,
    GithubAuthProvider,
    signInWithPopup,
    onAuthStateChanged,
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

    // Update User
    const updateUser = (userInfo) => {
        return new Promise((resolve, reject) => {
            const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
                if (currentUser) {
                    updateProfile(currentUser, userInfo)
                        .then(() => {
                            // Profile update was successful
                            unsubscribe();
                            setLoading(false);
                            resolve();
                        })
                        .catch((error) => {
                            // Handle the error
                            unsubscribe();
                            console.error('Error updating profile:', error);
                            setLoading(false);
                            reject(error);
                        });
                }
            });
        });
    };

    // Login User
    const loginUser = (email, password) => {
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password);
    };

    // Login With Facebook
    const loginWithFacebook = () => {
        setLoading(true);
        return signInWithPopup(auth, facebookProvider);
    };

    // Login With Google
    const loginWithGoogle = () => {
        setLoading(true);
        return signInWithPopup(auth, googleProvider);
    };

    // Login With Github
    const loginWithGithub = () => {
        setLoading(true);
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
                    .post('https://rk-store-server.vercel.app/jwt', {
                        email: currentUser.email,
                    })
                    .then((data) => {
                        localStorage.setItem('access-token', data.data.token);
                    })
                    .catch((error) => {
                        console.error('Error while fetching token:', error);
                    })
                    .finally(() => {
                        setLoading(false);
                    });
            } else {
                localStorage.removeItem('access-token');
                setLoading(false);
            }
        });

        return () => unsubscribe();
    }, []);

    const authInfo = {
        createUser,
        updateUser,
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
