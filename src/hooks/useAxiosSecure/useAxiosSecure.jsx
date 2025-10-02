import axios from 'axios'
import useAuth from '../useAuth/useAuth';
import { useNavigate } from 'react-router-dom';

const apiBaseUrl = import.meta.env.VITE_API_URL ?? 'https://swiftcartbd-server.vercel.app'

const axiosSecure = axios.create({
    baseURL: apiBaseUrl
})

const useAxiosSecure = () => {
    const { user, logoutUser } = useAuth()
    const navigate = useNavigate()

    axiosSecure.interceptors.request.use(
        (config) => {
            if(user?.accessToken){
                config.headers.Authorization = `Bearer ${user.accessToken}`
            }
            return config
        },
        (error) => {
            return Promise.reject(error)
        }
    )

    axiosSecure.interceptors.response.use(
        res => res,
        error => {
            const status = error.response?.status
            if(status === 403){
                navigate("/forbidden")
            }
            else if(status === 401){
                logoutUser()
                .then(() => navigate("/login"))
                .catch(() => {})
            }
            return Promise.reject(error)
        }
    )
    return axiosSecure
}
export default useAxiosSecure

