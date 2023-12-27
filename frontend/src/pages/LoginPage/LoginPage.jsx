import MainLayout from "../../layouts/MainLayout";
import React, {useState} from "react";
import axios from "axios";

function LoginPage() {
    const [fName, setFName] = useState("");
    const [lName, setLName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [registerPage, setRegisterPage] = useState(true);
    const login = (e) => {
        // e.preventDefault();
        console.log(`Email: ${email}`);
        console.log(`Password:${password}`);
        axios.post("http://localhost:5050/api/auth/login", {
            "email": email,
            "password": password
        }).then(res => {
            console.log(res.data.token)
            window.localStorage.setItem('token', res.data.token)
        }).catch(error =>{
            console.error(error);
        })
    }
    const register = (e) => {
        // e.preventDefault();
        console.log(`Email: ${email}`);
        console.log(`Password:${password}`);
        axios.post("http://localhost:5050/api/auth/register", {
            "fName": fName,
            "lName": lName,
            "email": email,
            "password": password
        }).then(res => {
            alert(`Dear ${fName}, your account was created`);
            window.localStorage.setItem('token', res.data.token);
        }).catch(error =>{
            console.error(error);
        })

    }
    if (registerPage) {
        return (
            <MainLayout>
                <div>
                    <h1>Register page</h1>
                    <br/>
                    <button onClick={() => setRegisterPage(!registerPage)}>Change page</button>
                    <br/>
                    <br/>
                    <form action="">
                        <input type="text" value={fName} onInput={e => setFName(e.target.value)}/> First Name
                        <br/> <br/>
                        <input type="text" value={lName} onInput={e => setLName(e.target.value)}/> Last Name
                        <br/><br/>
                        <input type="text" value={email} onInput={e => setEmail(e.target.value)}/> Email
                        <br/><br/>
                        <input type="text" value={password} onInput={e => setPassword(e.target.value)}/> Password
                        <br/><br/>
                        <button onClick={(e) => register(e.target.value)}>Register</button>
                        <br/>
                        <br/>
                    </form>
                </div>
            </MainLayout>
        )
    }

    return (
        <MainLayout>
            <div>
                <h1>LoginPage page</h1>
                <button onClick={() => setRegisterPage(!registerPage)}>Change page</button>
                <br/>
                <form action="">
                    <input type="text" value={email} onInput={e => setEmail(e.target.value)}/> Email
                    <br/><br/>
                    <input type="text" value={password} onInput={e => setPassword(e.target.value)}/> Password
                    <br/><br/>
                    <br/>
                    <br/>
                    <button onClick={(e) => login(e.target.value)}>Login</button>
                </form>
            </div>
        </MainLayout>
    );
}

export default LoginPage;
