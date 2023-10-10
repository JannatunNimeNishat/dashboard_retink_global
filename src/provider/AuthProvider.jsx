import { useState } from "react";
import { createContext } from "react";

export const AuthContext = createContext();

const AuthProvider = ({ children }) => {
    const [user, setUser] = useState({ name: 'ni7' });
    const [sidebar, setSidebar] = useState(0);
    const handleSidebar = (value) => {
        
        setSidebar(value);
    }
    const data = {
        user,
        handleSidebar,
        sidebar
    }
    return (
        <AuthContext.Provider value={data}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;