import { createContext, useState } from "react";

const AuthContext = createContext("");

const AuthProvider = ({ children }) => {
    const [role, setRole] = useState("guest");
    const [userName, setUserName] = useState("");
    console.log("sidebarRef: ", role);
    return (
        <AuthContext.Provider value={{ role, userName, setUserName, setRole }}>
            {children}
        </AuthContext.Provider>
    );
};

export { AuthContext, AuthProvider };
