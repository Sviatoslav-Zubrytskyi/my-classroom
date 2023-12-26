import MainLayout from "../../layouts/MainLayout";
import React, {useState} from "react";
import axios from "axios";

function LoginPage() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
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
            "name": name,
            "email": email,
            "password": password
        }).then(res => {
            alert(res.data)
        }).catch(error =>{
            console.error(error);
        })

    }


    return (
        <MainLayout>
            <div>
                <h1>LoginPage page</h1>
                <br/>
                <form action="">
                    <input type="text" value={name} onInput={e => setName(e.target.value)}/> Name
                    <br/><br/>
                    <input type="text" value={email} onInput={e => setEmail(e.target.value)}/> Email
                    <br/><br/>
                    <input type="text" value={password} onInput={e => setPassword(e.target.value)}/> Password
                    <br/><br/>
                    <button onClick={(e) => register(e.target.value)}>Register</button>
                    <br/>
                    <br/>
                    <button onClick={(e) => login(e.target.value)}>Login</button>
                </form>
            </div>
        </MainLayout>
    );
}

export default LoginPage;
