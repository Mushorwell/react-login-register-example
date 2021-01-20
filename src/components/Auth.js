import React, {createContext, useState} from 'react';
import Login from "./Login";
import Register from "./Register";
function Auth() {
    const [userAuth, setUserAuth] = useState({
        userRegistered: true,
        userType: "default"
    });
    return (
        <div className="AuthPane">
            <div>
                {userAuth.userRegistered ? <Login option={userAuth} updateOption={setUserAuth}/> : <Register option={userAuth} updateOption={setUserAuth}/> }
            </div>
        </div>
    );
}

export default Auth;
