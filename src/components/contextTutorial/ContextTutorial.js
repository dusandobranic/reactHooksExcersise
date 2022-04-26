import { useState, createContext } from "react";
import Login from "./Login";
import User from "./User";

export const GlobalContext = createContext(null);

const ContextTutorial = () => {
    const [userName, setUserName] = useState('');

    return (
        <GlobalContext.Provider value={{userName, setUserName}}>
            <div>
                <Login />
                <User />
            </div>
        </GlobalContext.Provider>
    );
}

export default ContextTutorial;