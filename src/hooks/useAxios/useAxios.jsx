import axios from 'axios'
import React from 'react'

const apiBaseUrl = import.meta.env.VITE_API_URL ?? 'https://swiftcartbd-server.vercel.app/'

const axiosInstance = axios.create({
    baseURL: apiBaseUrl
})

const useAxios = () => {
    return axiosInstance
}
export default useAxios