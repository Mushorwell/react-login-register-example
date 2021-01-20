import React, {useState} from 'react';
import ReactDOM from 'react-dom';
import SetReg from "./SetReg";

function Login(props){
    // const [state, setstate] = useState("initialState");
    return(<div>
        <div><h1>Login</h1></div>
        <input type="email" name="email" placeholder="Email"/>
        <input type="password" name="password" placeholder="Password"/>
        <div>
            <button type="button" className='btn'>
                Sign in
            </button>
            <br/>
            <hr/>
            <SetReg option={props.option} update={props.updateOption}/>
        </div>
    </div>);
}
export default Login;