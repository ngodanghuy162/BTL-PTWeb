import {createContext, useContext, useState} from "react";

const AuthContext = createContext();

const AuthProvider = ({children}) => {
    const [isAdminLogin, setIsAdminLogin] = useState(
        localStorage.getItem("LEADER") !== null
    );
    const [isEmployeeLogin, setIsEmployeeLogin] = useState(
        localStorage.getItem("EMPLOYEE") !== null
    );

    const handleLogin = (data) => {
        const user = {token: data.token,
            authority: data.authority
            };
        if(user.authority.includes('LEADER')) {
            localStorage.setItem("LEADER", JSON.stringify(user));
            setIsAdminLogin(true);
            setIsEmployeeLogin(false);
            console.log("1");
        }
        if(user.authority.includes('EMPLOYEE')) {
            localStorage.setItem("EMPLOYEE", JSON.stringify(user));
            setIsEmployeeLogin(true);
            setIsAdminLogin(false);
            console.log("2");
        }
    };

    const handleLogout = () => {
        localStorage.removeItem("LEADER");
        localStorage.removeItem("EMPLOYEE");
        setIsAdminLogin(false);
        setIsEmployeeLogin(false);
    };

    const getUser = () => {
        return JSON.parse(localStorage.getItem("user"));
    }

    return (
        <AuthContext.Provider
            value={{isAdminLogin, isEmployeeLogin, handleLogin, handleLogout, getUser}}
        >
            {children}
        </AuthContext.Provider>
    );
};

const useAuth = () => {
    return useContext(AuthContext);
};

export {AuthProvider, useAuth};