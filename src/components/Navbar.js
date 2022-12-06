import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { UserAuth } from '../context/AuthContext';

const Navbar = () => {
    const { user, logOut } = UserAuth();
    const navigate = useNavigate();
    // console.log(user.email)

    const handleLogout = async () => {
        try {
            await logOut();
            navigate('/');
        } catch (error) {
            console.log(error);
        }
    };

    return (
        <div className="flex items-center justify-between p-4 z-[100] w-full absolute">
            <Link to="/">
                <h1 className="text-blue-600 sm:text-4xl xxs:text-3xl font-bold cursor-pointer xxs:mr-5 sm:mr-4">
                    JAMESFLIX
                </h1>
            </Link>
            {user?.email ? (
                <div>
                    <Link to="/account">
                        <button className="text-white pr-4">Account</button>
                    </Link>
                    <button
                        onClick={handleLogout}
                        className="bg-blue-600 px-6 py-2 rounded cursor-pointer text-white"
                    >
                        Logout
                    </button>
                </div>
            ) : (
                <div>
                    <Link to="/login">
                        <button className="text-white pr-4 hover:scale-[1.1]  xxs:mb-2">Sign In</button>
                    </Link>
                    <Link to="/signup">
                        <button className="bg-blue-600 px-4 py-2 rounded cursor-pointer text-white hover:scale-[1.1]  ">
                            Sign Up
                        </button>
                    </Link>
                </div>
            )}
        </div>
    );
};

export default Navbar;
