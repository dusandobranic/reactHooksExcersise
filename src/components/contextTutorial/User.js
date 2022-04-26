import { useContext } from "react";
import { GlobalContext } from "./ContextTutorial";

const User = () => {

    const {userName} = useContext(GlobalContext)
    return ( 
        <>
            <h1>User: {userName}</h1>
        </>
     );
}
 
export default User;