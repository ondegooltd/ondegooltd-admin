import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useUserState } from '../container/store/store'
import { Auth } from '../container/services/api';

const Signin = () => {
    const [credential, setCredential] = useState({
        contact: '',
        password: '',
    })
    // const [error, setError] = useState(null)
    const [loading, setLoading] = useState(false)
    const [show, setShow] = useState(false)
    const navigate = useNavigate()
    const setUser = useUserState((state) => state.setUser)
    const setToken = useUserState((state) => state.setToken)
    const setRefreshToken = useUserState((state) => state.setRefreshToken)

    const handleChange = (e) => {
        setCredential({ ...credential, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true)
        const data = await Auth.signin(credential)
        setUser(data.user)
        setToken(data.tokens.accessToken)
        setRefreshToken(data.tokens.refreshToken)
        console.log(loading)
        navigate('/d')
    }

    return (
        <div>
            <section className="bg-teal-500 h-[100vh]">
                <div className="px-0 py-20 mx-auto max-w-7xl sm:px-4">
                    <div className="w-[86%] px-4 pt-5 pb-6 mx-auto mt-8 mb-6 bg-white rounded-none shadow-xl sm:rounded-lg sm:w-8/12 md:w-8/12 lg:w-6/12 xl:w-6/12 sm:px-6">
                        <h1 className="mb-4 text-lg font-semibold text-left text-gray-900">Log in to your account</h1>
                        <form onSubmit={handleSubmit} className="mb-8 space-y-4">
                            <label className="block">
                                <span className="block mb-1 text-xs font-medium text-gray-700">Your Contact</span>
                                <input className="form-input w-full px-2 py-3 transition-all border outline-none focus:border-teal-500" type="contact" onChange={handleChange} name="contact" id="contact" placeholder="0506000000" inputMode="contact" required />
                            </label>
                            <label className="block">
                                <span className="block mb-1 text-xs font-medium text-gray-700">Your Password</span>
                                {/* <input className="form-input w-full px-2 py-3" type="password" onChange={handleChange} name="password" id="password" placeholder="••••••••" required /> */}
                                <div className="w-full" aria-label="input-password-toggle">
                                    <div className="relative w-full">
                                        <input
                                            type={!show ? "password" : "text"}
                                            name="password" onChange={handleChange} id="password"
                                            className="w-full py-3 px-2 transition-all border outline-none focus:border-teal-500"
                                            placeholder="Enter your password"
                                        />
                                        <span onClick={(e) => setShow(!show)} className="absolute cursor-pointer text-slate-400 right-4 top-2/4 -translate-y-2/4">
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                className="w-6 h-6"
                                                fill="none"
                                                viewBox="0 0 24 24"
                                                stroke="currentColor"
                                            >
                                                <path
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                    strokeWidth={2}
                                                    d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                                                />
                                                <path
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                    strokeWidth={2}
                                                    d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                                                />
                                            </svg>
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                className="hidden w-6 h-6"
                                                fill="none"
                                                viewBox="0 0 24 24"
                                                stroke="currentColor"
                                            >
                                                <path
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                    strokeWidth={2}
                                                    d="M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.543-7a9.97 9.97 0 011.563-3.029m5.858.908a3 3 0 114.243 4.243M9.878 9.878l4.242 4.242M9.88 9.88l-3.29-3.29m7.532 7.532l3.29 3.29M3 3l3.59 3.59m0 0A9.953 9.953 0 0112 5c4.478 0 8.268 2.943 9.543 7a10.025 10.025 0 01-4.132 5.411m0 0L21 21"
                                                />
                                            </svg>
                                        </span>
                                    </div>
                                </div>
                            </label>
                            <input type="submit" className="w-full text-white font-medium bg-teal-500 hover:bg-teal-600 py-3 mt-1 btn btn-primary" value="Login" />
                        </form>
                        <div className="space-y-8">
                            <div className="text-center border-b border-gray-200" style={{ lineHeight: "0px" }}>
                                <span className="p-2 text-xs font-semibold tracking-wide text-gray-600 uppercase bg-white" style={{ lineHeight: "0px" }}>Or</span>
                            </div>
                            <div className="grid grid-cols-2 gap-4 border">
                                <a href="/signin" className="py-3 btn btn-icon btn-google">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor" className="mr-1">
                                        <path
                                            d="M20.283,10.356h-8.327v3.451h4.792c-0.446,2.193-2.313,3.453-4.792,3.453c-2.923,0-5.279-2.356-5.279-5.28	c0-2.923,2.356-5.279,5.279-5.279c1.259,0,2.397,0.447,3.29,1.178l2.6-2.599c-1.584-1.381-3.615-2.233-5.89-2.233	c-4.954,0-8.934,3.979-8.934,8.934c0,4.955,3.979,8.934,8.934,8.934c4.467,0,8.529-3.249,8.529-8.934	C20.485,11.453,20.404,10.884,20.283,10.356z"
                                        />
                                    </svg>
                                    <span className="sr-only">Continue with</span> Google
                                </a>
                                <a href="/signin" className="py-3 btn btn-icon btn-dark">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor" className="mr-1">
                                        <path
                                            d="M19.665,16.811c-0.287,0.664-0.627,1.275-1.021,1.837c-0.537,0.767-0.978,1.297-1.316,1.592	c-0.525,0.482-1.089,0.73-1.692,0.744c-0.432,0-0.954-0.123-1.562-0.373c-0.61-0.249-1.17-0.371-1.683-0.371	c-0.537,0-1.113,0.122-1.73,0.371c-0.616,0.25-1.114,0.381-1.495,0.393c-0.577,0.025-1.154-0.229-1.729-0.764	c-0.367-0.32-0.826-0.87-1.377-1.648c-0.59-0.829-1.075-1.794-1.455-2.891c-0.407-1.187-0.611-2.335-0.611-3.447	c0-1.273,0.275-2.372,0.826-3.292c0.434-0.74,1.01-1.323,1.73-1.751C7.271,6.782,8.051,6.563,8.89,6.549	c0.46,0,1.063,0.142,1.81,0.422s1.227,0.422,1.436,0.422c0.158,0,0.689-0.167,1.593-0.498c0.853-0.307,1.573-0.434,2.163-0.384	c1.6,0.129,2.801,0.759,3.6,1.895c-1.43,0.867-2.137,2.08-2.123,3.637c0.012,1.213,0.453,2.222,1.317,3.023	c0.392,0.372,0.829,0.659,1.315,0.863C19.895,16.236,19.783,16.529,19.665,16.811L19.665,16.811z M15.998,2.38	c0,0.95-0.348,1.838-1.039,2.659c-0.836,0.976-1.846,1.541-2.941,1.452c-0.014-0.114-0.021-0.234-0.021-0.36	c0-0.913,0.396-1.889,1.103-2.688c0.352-0.404,0.8-0.741,1.343-1.009c0.542-0.264,1.054-0.41,1.536-0.435	C15.992,2.127,15.998,2.254,15.998,2.38L15.998,2.38z"
                                        />
                                    </svg>
                                    <span className="sr-only">Continue with</span> Apple
                                </a>
                            </div>
                        </div>
                    </div>
                    <p className="mb-4 text-xs text-center text-gray-400">
                        <a href="/" className="text-purple-200 underline hover:text-white">Create an account</a>
                        ·
                        <a href="/" className="text-purple-200 underline hover:text-white">Forgot password</a>
                        ·
                        <a href="/" className="text-purple-200 underline hover:text-white">Privacy & Terms</a>
                    </p>
                </div>
            </section>
        </div>
    );
}

export default Signin;
