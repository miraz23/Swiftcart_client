import React, {useEffect, useState } from 'react'
import { AuthContext } from "../AuthContext/AuthContext"
import {auth} from '../../service/firebase.config'
import { 
    GoogleAuthProvider,
    signInWithPopup,
    signInWithEmailAndPassword, 
    signOut, 
    createUserWithEmailAndPassword, 
    updateProfile,
    onAuthStateChanged 
} from 'firebase/auth';

const AuthProvider = ({children}) => {
    const [user, setUser] = useState(null)
    const [loading, setLoading] = useState(true)

    const googleProvider = new GoogleAuthProvider()
    const googleLogin = () => {
        setLoading(true)
        return signInWithPopup(auth, googleProvider)
    }

    const loginUser = (email, password) => {
        setLoading(true)
        return signInWithEmailAndPassword(auth, email, password)
    }

    const logoutUser = () =>{
        setLoading(true)
        return signOut(auth)
    }

    const createUser = (email, password) => {
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password)
    }

    const updateUser = (updatedData) => {
        return updateProfile(auth.currentUser, updatedData)
    }

    useEffect(()=>{
        const unSubscribe = onAuthStateChanged(auth, (currentUser)=>{
            setUser(currentUser)
            setLoading(false)
        })

        return ()=>{
            unSubscribe()
        }
    }, [])

    const authInfo = {
        user, setUser, 
        loading, setLoading, 
        createUser, updateUser, 
        googleLogin,
        loginUser, logoutUser
    }

    return(
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    )
}
export default AuthProvider