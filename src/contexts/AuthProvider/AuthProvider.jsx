import React, {useEffect, useState } from 'react'
import { AuthContext } from "../AuthContext/AuthContext"
import {auth, storage} from '../../service/firebase.config'
import { 
    GoogleAuthProvider,
    signInWithPopup,
    signInWithEmailAndPassword, 
    signOut, 
    createUserWithEmailAndPassword, 
    updateProfile,
    onAuthStateChanged, 
    reauthenticateWithCredential,
    EmailAuthProvider,
    updatePassword
} from 'firebase/auth';
import { getDownloadURL, ref, uploadString } from 'firebase/storage'

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

    // Additional helpers used by Profile page
    const updateUserProfileName = (displayName) => {
        return updateProfile(auth.currentUser, { displayName })
    }

    const updateUserProfileImage = (photoURL) => {
        return updateProfile(auth.currentUser, { photoURL })
    }

    const uploadProfileImage = async (dataUrl) => {
        try{
            const imageRef = ref(storage, `profiles/${auth.currentUser.uid}.jpg`)
            await uploadString(imageRef, dataUrl, 'data_url')
            const url = await getDownloadURL(imageRef)
            return { success: true, data: { url } }
        }catch(error){
            return { success: false, message: error.message }
        }
    }

    const reauthenticateUser = (currentPassword) => {
        const credential = EmailAuthProvider.credential(auth.currentUser.email, currentPassword)
        return reauthenticateWithCredential(auth.currentUser, credential)
    }

    const updateUserProfilePassword = (newPassword) => {
        return updatePassword(auth.currentUser, newPassword)
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
        loginUser, logoutUser,
        // aliases/compat for pages using different names
        currentUser: user,
        updateUserProfileName,
        updateUserProfileImage,
        uploadProfileImage,
        reauthenticateUser,
        updateUserProfilePassword
    }

    return(
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    )
}
export default AuthProvider