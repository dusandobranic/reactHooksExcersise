import { useContext } from "react";
import { GlobalContext } from "./ContextTutorial";

const Password = () => {
    const {userName, setUserName} = useContext(GlobalContext)

    console.log(useContext(GlobalContext))
    return ( 
        <div>
            <h1>UserName: {userName}</h1>
            <input
                onChange={(e) => {
                    setUserName(e.target.value)
                }}
            />
        </div>
     );
}
 
export default Password;