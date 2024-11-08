import { createContext, useEffect, useState } from "react";
import { getRequest } from "../Services/ApiController";
const AuthContext = createContext("");

const AuthProvider = ({ children }) => {
    const [role, setRole] = useState("");
    const [userName, setUserName] = useState("");
    const [isLogin, setisLogin] = useState(false);
    useEffect(() => {
        if (localStorage.getItem("access_token")) {
            getRequest("/api/profile/", (err, res) => {
                if (err) {
                    console.log("error ", err);
                } else {
                    setRole(res.data.type);
                    setUserName(res.data.first_name);
                }
            });
        }
    }, [isLogin]);
    return (
        <AuthContext.Provider value={{ role, userName, setUserName, setRole, isLogin, setisLogin }}>
            {children}
        </AuthContext.Provider>
    );
};

export { AuthContext, AuthProvider };
