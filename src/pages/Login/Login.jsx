import { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import { FaEye, FaEyeSlash } from "react-icons/fa6";
import { useLocation, useNavigate } from "react-router";
import useAuth from "../../hooks/useAuth/useAuth";
import { toast, Bounce } from "react-toastify";
import useAxios from "../../hooks/useAxios/useAxios";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";

const Login = () => {
    const { googleLogin, loginUser, setUser } = useAuth();
    const [showPassword, setShowPassword] = useState(false);
    const navigate = useNavigate();
    const location = useLocation();
    const axiosInstance = useAxios();

    useEffect(() => {
        document.title = "Swift Cart | Login";
    }, []);

    const {
        register,
        handleSubmit,
        formState: { errors, isSubmitting },
    } = useForm();

    const onSubmit = async (data) => {
        try {
            const { email, password } = data;
            const userCredential = await loginUser(email, password);
            const user = userCredential.user;

            // Update or insert user info with lastLogin
            const userInfo = {
                name: user.displayName || "User",
                email: user.email,
                photoURL: user.photoURL || "",
                role: "patient",
                lastLogin: new Date().toISOString(),
            };

            await axiosInstance.post("/api/users", userInfo);

            toast.success("Login successful!", { transition: Bounce });
            navigate(location.state || "/");
        } catch (error) {
            toast.error(`Login failed: ${error.message}`, { transition: Bounce });
        }
    };

    const handleGoogleLogin = async () => {
        try {
            const userCredential = await googleLogin();
            const user = userCredential.user;

            const userInfo = {
              name: user.displayName,
              email: user.email,
              photoURL: user.photoURL,
              role: "patient",
              createdAt: new Date().toISOString(),
              lastLogin: new Date().toISOString(),
            };

            await axiosInstance.post("/api/users", userInfo);

            toast.success("Login successful!", { transition: Bounce });
            navigate(location.state || "/");
        } catch (error) {
            toast.error(`Google login failed: ${error.message}`, { transition: Bounce });
        }
    };

    return (
        <div className="flex items-center justify-center p-30">
            <Helmet>
                <title>Swift Cart | Login</title>
            </Helmet>

            <div className="w-full max-w-11/12 flex flex-col-reverse justify-items-center">
                {/* Login Form */}
                <div className="w-full max-w-md mx-auto">
                    <div className="bg-white rounded-2xl shadow border border-gray-100 p-8">
                        <div className="text-center mb-6">
                            <h1 className="text-2xl font-bold text-gray-900">Login to your account</h1>
                            <p className="text-gray-600">The best finds, all in one cart</p>
                        </div>

                        <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
                            {/* Email */}
                            <div>
                                <label className="block mb-1 font-medium text-gray-700">Email</label>
                                <input
                                    type="email"
                                    placeholder="Enter your email"
                                    className={`input input-bordered w-full ${errors.email ? "border-red-500" : ""}`}
                                    {...register("email", {
                                        required: "Email is required",
                                        pattern: {
                                            value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                                            message: "Invalid email address",
                                        },
                                    })}
                                />
                                {errors.email && <p className="text-red-500 text-sm">{errors.email.message}</p>}
                            </div>

                            {/* Password */}
                            <div>
                                <label className="block mb-1 font-medium text-gray-700">Password</label>
                                <div className="relative">
                                    <input
                                        type={showPassword ? "text" : "password"}
                                        placeholder="Enter your password"
                                        className={`input input-bordered w-full pr-12 ${errors.password ? "border-red-500" : ""}`}
                                        {...register("password", {
                                            required: "Password is required",
                                            minLength: { value: 6, message: "Password must be at least 6 characters" },
                                            pattern: {
                                                value: /(?=.*[a-z])(?=.*[A-Z]).{6,}/,
                                                message: "Must contain uppercase, lowercase, and number",
                                            },
                                        })}
                                    />
                                    <button type="button" className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-600" onClick={() => setShowPassword(!showPassword)}>
                                        {showPassword ? <FaEyeSlash /> : <FaEye />}
                                    </button>
                                </div>
                                {errors.password && <p className="text-red-500 text-sm">{errors.password.message}</p>}
                                <div className='links'>
                                  <Link to='/forgot-password' className='link'>
                                    Forgot password?
                                  </Link>
                                </div>
                            </div>

                            {/* Submit Button */}
                            <button type="submit" disabled={isSubmitting} className="btn bg-[#ab7a5f] hover:opacity-80 w-full text-white font-semibold">
                                {isSubmitting ? "Logging in..." : "Login"}
                            </button>

                            {/* Divider */}
                            <div className="flex items-center gap-2">
                                <div className="flex-grow border-t border-gray-300"></div>
                                <span className="text-gray-500 text-sm">or</span>
                                <div className="flex-grow border-t border-gray-300"></div>
                            </div>

                            {/* Google & Github Login */}
                            <div className='flex justify-center gap-5'>
                              <button type="button" onClick={handleGoogleLogin} className='btn hover:opacity-80 w-full text-[#ab7a5f] border border-[#ab7a5f] font-semibold cursor-pointer'>
                                  Continue with Google
                              </button>
                            </div>

                            {/* Redirect to Register */}
                            <p className="text-center text-sm text-gray-600">
                                Don't have an account?{" "}
                                <button type="button" onClick={() => navigate("/register")} className="font-semibold text-[#ab7a5f] hover:underline cursor-pointer">
                                    Register
                                </button>
                            </p>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;