import { useContext, useState } from "react";
import { GlobalContext } from "./ContextTutorial";
import Password from "./Password";

const Login = () => {
    const [password, setPassword] = useState('');
    const { setUserName, userName } = useContext(GlobalContext);
    return (
        <div>
            <input
                onChange={(e) => {
                    setUserName(e.target.value)
                }}
            />

            <GlobalContext.Provider value={{password, setPassword }}>
                <Password />
            </GlobalContext.Provider>
        </div>
    );
}

export default Login;