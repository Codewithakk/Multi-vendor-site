import React, { useState, useEffect } from 'react';
import Headers from '../components/Headers';
import Footer from '../components/Footer';
import { FaFacebookF } from 'react-icons/fa';
import { Link, useNavigate } from 'react-router-dom';
import { AiOutlineGoogle } from 'react-icons/ai';
import FadeLoader from 'react-spinners/FadeLoader';
import { useSelector, useDispatch } from 'react-redux';
import { customer_login, messageClear } from '../store/reducers/authReducer';
import toast from 'react-hot-toast';

const Login = () => {
    const { loader, successMessage, errorMessage, userInfo } = useSelector(state => state.auth);
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const [state, setState] = useState({
        email: '',
        password: ''
    });

    const inputHandle = (e) => {
        setState({
            ...state,
            [e.target.name]: e.target.value
        });
    };

    const login = (e) => {
        e.preventDefault();
        if (!state.email || !state.password) {
            toast.error("Email and Password are required");
            return;
        }
        dispatch(customer_login(state));
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
    }, [successMessage, errorMessage]);

    return (
        <div>
            <Headers />
            {
                loader && (
                    <div style={{
                        position: 'fixed', left: 0, top: 0, width: '100vw', height: '100vh',
                        display: 'flex', justifyContent: 'center', alignItems: 'center', backgroundColor: 'rgba(56, 48, 48, 0.2)', zIndex: 999
                    }}>
                        <FadeLoader />
                    </div>
                )
            }
            <div style={{ backgroundColor: '#f1f5f9', marginTop: '1rem', padding: '1rem 0' }}>
                <div style={{
                    display: 'flex', flexDirection: 'row', justifyContent: 'center', alignItems: 'center', 
                    padding: '1rem', maxWidth: '90%', margin: '0 auto', flexWrap: 'wrap'
                }}>
                    <div style={{
                        display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', backgroundColor: '#fff',
                        borderRadius: '0.5rem', boxShadow: '0px 4px 12px rgba(0,0,0,0.1)', width: '100%', maxWidth: '700px',
                        overflow: 'hidden', margin: '1rem'
                    }}>
                        {/* Form Section */}
                        <div style={{ padding: '2rem', width: '100%' }}>
                            <h2 style={{ textAlign: 'center', color: '#475569', fontSize: '1.5rem', fontWeight: 'bold' }}>Login</h2>
                            <form onSubmit={login} style={{ color: '#475569' }}>
                                <div style={{ marginBottom: '1rem' }}>
                                    <label htmlFor="email">Email</label>
                                    <input 
                                        onChange={inputHandle} 
                                        value={state.email} 
                                        type="email" 
                                        style={{
                                            width: '100%', padding: '0.75rem', border: '1px solid #cbd5e1', borderRadius: '0.375rem', marginTop: '0.25rem',
                                            outline: 'none', transition: 'border-color 0.3s', boxSizing: 'border-box'
                                        }} 
                                        id='email' 
                                        name='email' 
                                        placeholder='Enter your email' 
                                        required
                                    />
                                </div>
                                <div style={{ marginBottom: '1rem' }}>
                                    <label htmlFor="password">Password</label>
                                    <input 
                                        onChange={inputHandle} 
                                        value={state.password} 
                                        type="password" 
                                        style={{
                                            width: '100%', padding: '0.75rem', border: '1px solid #cbd5e1', borderRadius: '0.375rem', marginTop: '0.25rem',
                                            outline: 'none', transition: 'border-color 0.3s', boxSizing: 'border-box'
                                        }} 
                                        id='password' 
                                        name='password' 
                                        placeholder='Enter your password' 
                                        required
                                    />
                                </div>
                                <button style={{
                                    width: '100%', padding: '0.75rem', backgroundColor: '#6b21a8', color: '#fff', borderRadius: '0.375rem',
                                    textAlign: 'center', border: 'none', cursor: 'pointer', fontWeight: 'bold', marginBottom: '1rem',
                                    fontSize: '1rem'
                                }}>
                                    Login
                                </button>
                            </form>
                            <div style={{ textAlign: 'center', color: '#475569', marginBottom: '1rem' }}>
                                <span>or</span>
                            </div>
                            <button style={{
                                display: 'flex', alignItems: 'center', justifyContent: 'center', width: '100%', padding: '0.75rem',
                                backgroundColor: '#3b5998', color: '#fff', borderRadius: '0.375rem', marginBottom: '0.75rem', fontSize: '1rem'
                            }}>
                                <FaFacebookF />
                                <span style={{ marginLeft: '0.5rem' }}>Login with Facebook</span>
                            </button>
                            <button style={{
                                display: 'flex', alignItems: 'center', justifyContent: 'center', width: '100%', padding: '0.75rem',
                                backgroundColor: '#ea4335', color: '#fff', borderRadius: '0.375rem', fontSize: '1rem'
                            }}>
                                <AiOutlineGoogle />
                                <span style={{ marginLeft: '0.5rem' }}>Login with Google</span>
                            </button>
                            <div style={{ textAlign: 'center', color: '#475569', marginTop: '1rem' }}>
                                <p>Don't have an account? <Link to='/register' style={{ color: '#3b82f6' }}>Register</Link></p>
                                <p> <a href='http://localhost:3001/register' target='_blank' rel="noopener noreferrer" style={{ color: '#3b82f6' }}>Register seller account</a></p>
                            </div>
                        </div>
                        {/* Image Section */}
                        <div style={{ display: 'none', width: '100%', justifyContent: 'center', padding: '1rem' }}>
                            <img 
                                src="https://img.freepik.com/free-vector/mobile-login-concept-illustration_114360-83.jpg?w=740&t=st=1729059055~exp=1729059655~hmac=3e7b3e7e09db7a63e0e6681d888ed62198fd6aa09a811501f1eb7fae4236379e" 
                                alt="Login"
                                style={{ width: '100%', height: 'auto', borderRadius: '0.5rem' }}
                            />
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
};

export default Login;
