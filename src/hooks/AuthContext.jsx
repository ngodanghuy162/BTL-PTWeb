import {createContext, useContext, useState} from "react";

const AuthContext = createContext();

const AuthProvider = ({children}) => {
    const [isLeaderLogin, setIsLeaderLogin] = useState(
        localStorage.getItem("LEADER") !== null
    );

    const [isAdminGdLogin, setIsAdminGdLogin] = useState(
        localStorage.getItem("ADMINGD") !== null
    );

    const [isAdminTkLogin, setIsAdminTkLogin] = useState(
        localStorage.getItem("ADMINTK") !== null
    );
    
    const [isNvgdLogin, setIsNvgdLogin] = useState(
        localStorage.getItem("NVGD") !== null
    );

    const [isNvtkLogin, setIsNvtkLogin] = useState(
        localStorage.getItem("NVTK") !== null
    );

    const handleLogin = (data) => {
        const user = {token: data.token,
            authority: data.authority
            };
        console.log(data.authority);

        setIsLeaderLogin(false);
        setIsAdminGdLogin(false);
        setIsAdminTkLogin(false);
        setIsNvgdLogin(false);
        setIsNvtkLogin(false);

        if(user.authority.includes('LEADER')) {
            localStorage.setItem("LEADER", JSON.stringify(user));
            setIsLeaderLogin(true);
        }

        if(user.authority.includes('ADMINGD')) {
            localStorage.setItem("ADMINGD", JSON.stringify(user));
            setIsAdminGdLogin(true);
        }

        if(user.authority.includes('ADMINTK')) {
            localStorage.setItem("ADMINTK", JSON.stringify(user));
            setIsAdminTkLogin(true);
        }

        if(user.authority.includes('NVGD')) {
            localStorage.setItem("NVGD", JSON.stringify(user));
            setIsNvgdLogin(true);
        }

        if(user.authority.includes('NVTK')) {
            localStorage.setItem("NVTK", JSON.stringify(user));
            setIsNvtkLogin(true);
        }
        console.log(isNvtkLogin);

    };

    const handleLogout = () => {
        localStorage.removeItem("LEADER");
        localStorage.removeItem("ADMINGD");
        localStorage.removeItem("ADMINTK");
        localStorage.removeItem("NVGD");
        localStorage.removeItem("NVTK");
        setIsLeaderLogin(false);
        setIsAdminGdLogin(false);
        setIsAdminTkLogin(false);
        setIsNvgdLogin(false);
        setIsNvtkLogin(false);
    };

    const getUser = () => {
        if (localStorage.getItem("LEADER"))
        return JSON.parse(localStorage.getItem("LEADER"));

        if (localStorage.getItem("ADMINGD"))
        return JSON.parse(localStorage.getItem("ADMINGD"));

        if (localStorage.getItem("ADMINTK"))
        return JSON.parse(localStorage.getItem("ADMINTK"));

        if (localStorage.getItem("NVGD"))
        return JSON.parse(localStorage.getItem("NVGD"));

        if (localStorage.getItem("NVTK"))
        return JSON.parse(localStorage.getItem("NVTK"));
    }

    return (
        <AuthContext.Provider
            value={{isLeaderLogin, isAdminGdLogin, isAdminTkLogin, isNvgdLogin, isNvtkLogin, handleLogin, handleLogout, getUser}}
        >
            {children}
        </AuthContext.Provider>
    );
};

const useAuth = () => {
    return useContext(AuthContext);
};

export {AuthProvider, useAuth};