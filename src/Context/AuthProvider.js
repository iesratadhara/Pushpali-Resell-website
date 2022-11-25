import React, { createContext, useState } from 'react';
import {createUserWithEmailAndPassword, getAuth, signInWithPopup, updateProfile} from 'firebase/auth'
import app from '../firebase/firebase.config';

export const AuthContext = createContext()
const auth =  getAuth(app)

const AuthProvider = ({children}) => {
    const[loading, setLoading] = useState(true)


    const createUser =(email, password)=>{
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password)
    }

    const updateUser =(userInfo)=>{
        return updateProfile(auth.currentUser, userInfo)
    }

    const googleSignIn = (provider)=>{
        setLoading(true)
        return signInWithPopup(auth, provider)
    }


    const authInfo = {
        loading,
        createUser,
        googleSignIn,
        updateUser,
    }
    return (
    <AuthContext.Provider value={authInfo}>
        {children}
    </AuthContext.Provider>
    );
};

export default AuthProvider;