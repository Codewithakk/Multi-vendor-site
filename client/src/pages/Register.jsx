import React, { useEffect, useState } from 'react';
import Headers from '../components/Headers';
import Footer from '../components/Footer';
import { FaFacebookF } from 'react-icons/fa';
import FadeLoader from 'react-spinners/FadeLoader';
import { Link, useNavigate } from 'react-router-dom';
import { AiOutlineGoogle } from 'react-icons/ai';
import { useSelector, useDispatch } from 'react-redux';
import toast from 'react-hot-toast';
import { customer_register, messageClear } from '../store/reducers/authReducer';

const Register = () => {
    const navigate = useNavigate();
    const { loader, successMessage, errorMessage, userInfo } = useSelector(state => state.auth);
    const dispatch = useDispatch();
    const [state, setState] = useState({
        name: '',
        email: '',
        password: ''
    });

    const inputHandle = (e) => {
        setState({
            ...state,
            [e.target.name]: e.target.value
        });
    };

    const register = (e) => {
        e.preventDefault();
        dispatch(customer_register(state));
    };

    useEffect(() => {
        if (successMessage) {
            toast.success(successMessage);
            dispatch(messageClear());
        }
        if (errorMessage) {
            toast.error(errorMessage);
            dispatch(messageClear());
        }
        if (userInfo) {
            navigate('/');
        }
    }, [successMessage, errorMessage, userInfo, navigate, dispatch]);

    return (
        <div>
            {loader && (
                <div className="w-screen h-screen flex justify-center items-center fixed left-0 top-0 bg-[#38303033] z-[999]">
                    <FadeLoader />
                </div>
            )}
            <Headers />
            <div className="bg-slate-200 mt-4">
                <div className="flex justify-center items-center p-4 sm:p-10">
                    <div className="w-full max-w-md mx-auto bg-white rounded-md overflow-hidden shadow-lg">
                        <div className="px-6 py-6">
                            <h2 className="text-center text-xl font-bold text-slate-600 mb-4">Register</h2>
                            <form onSubmit={register} className="text-slate-600 space-y-4">
                                <div className="flex flex-col">
                                    <label htmlFor="name">Name</label>
                                    <input
                                        onChange={inputHandle}
                                        value={state.name}
                                        type="text"
                                        id="name"
                                        name="name"
                                        className="px-3 py-2 border border-slate-200 rounded-md focus:outline-none focus:ring focus:ring-indigo-300"
                                        placeholder="Name"
                                        required
                                    />
                                </div>
                                <div className="flex flex-col">
                                    <label htmlFor="email">Email</label>
                                    <input
                                        onChange={inputHandle}
                                        value={state.email}
                                        type="email"
                                        id="email"
                                        name="email"
                                        className="px-3 py-2 border border-slate-200 rounded-md focus:outline-none focus:ring focus:ring-indigo-300"
                                        placeholder="Email"
                                        required
                                    />
                                </div>
                                <div className="flex flex-col">
                                    <label htmlFor="password">Password</label>
                                    <input
                                        onChange={inputHandle}
                                        value={state.password}
                                        type="password"
                                        id="password"
                                        name="password"
                                        className="px-3 py-2 border border-slate-200 rounded-md focus:outline-none focus:ring focus:ring-indigo-300"
                                        placeholder="Password"
                                        required
                                    />
                                </div>
                                <button
                                    type="submit"
                                    className="w-full py-2 bg-purple-500 text-white rounded-md hover:bg-purple-600 transition-all"
                                >
                                    Register
                                </button>
                            </form>

                            <div className="flex items-center my-4">
                                <div className="w-1/2 h-[1px] bg-slate-300"></div>
                                <span className="px-3 text-slate-600">or</span>
                                <div className="w-1/2 h-[1px] bg-slate-300"></div>
                            </div>

                            <button className="w-full py-2 bg-indigo-500 text-white rounded-md flex items-center justify-center gap-2 mb-3 hover:bg-indigo-600 transition-all">
                                <FaFacebookF />
                                <span>Login with Facebook</span>
                            </button>

                            <button className="w-full py-2 bg-orange-500 text-white rounded-md flex items-center justify-center gap-2 mb-3 hover:bg-orange-600 transition-all">
                                <AiOutlineGoogle />
                                <span>Login with Google</span>
                            </button>

                            <div className="text-center text-slate-600">
                                <p>
                                    Already have an account?{' '}
                                    <Link className="text-blue-500 hover:underline" to="/login">
                                        Login
                                    </Link>
                                </p>
                            </div>

                            <div className="text-center text-slate-600 mt-2">
                                <p>
                                    <a
                                        href="http://localhost:3001/login"
                                        target="_blank"
                                        className="text-blue-500 hover:underline"
                                        rel="noopener noreferrer"
                                    >
                                        Login to seller account
                                    </a>
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
};

export default Register;
