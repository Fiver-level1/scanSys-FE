import { Children, createContext, useState } from "react";
const AuthContext = createContext("");

const AuthProvider = ({ children }) => {
    const [role, setRole] = useState("guest");
    const [islogin, setIslogin] = useState(false);


    return <AuthContext.Provider value="hello">
        {{ children }}
    </AuthContext.Provider>

}

export { AuthContext, AuthProvider }



