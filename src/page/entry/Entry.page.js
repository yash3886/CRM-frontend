import React, {useState} from "react";
import './Entry.style.css';
import { LoginForm } from "../../Components/Login/Login.comp";
import { ResetPassword } from "../../Components/Password-Reset/PasswordReset.comp";


export const Entry = () =>{
    const [email, setemail] = useState("");
    const [password, setPassword] = useState("");
    const [FrmLoad, setFrmLoad] = useState("login");
    
    const handleOnChange = e => {
        const {name, value} = e.target;

        switch(name){
            case 'email':
                setemail(value);
                break;
            case 'password':
                setPassword(value);
                break;
            default:
                break;
        }
    }

    const handleOnSubmit = (e) => {
        e.preventDefault();

        if(!email || !password){
            return alert("Fill up all the form!");
        }

        //TODO call api to submit the form
        console.log(email, password);
    }

    const handleOnResetSubmit = (e) => {
        e.preventDefault();

        if(!email){
            return alert("Please enter the email");
        }

        //TODO call api to submit the form
        console.log(email);
    }

    const Formswitcher = (formType) => {
        setFrmLoad(formType)
    }
    return  <div className="entry-page">
        <div className="p-5 mb-5 bg-light rounded-2">
            <div className="form-box">
                {FrmLoad === 'login' && <LoginForm 
                    handleOnChange={handleOnChange}
                    handleOnSubmit={handleOnSubmit}
                    Formswitcher={Formswitcher}
                    email={email}
                    pass={password}
                /> }
                {FrmLoad === 'reset' && <ResetPassword
                    handleOnChange={handleOnChange}
                    handleOnResetSubmit={handleOnResetSubmit}
                    Formswitcher={Formswitcher}
                    email={email}
                /> }
            </div>
        </div>
    </div>
}