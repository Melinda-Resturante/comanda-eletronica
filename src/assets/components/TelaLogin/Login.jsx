import React, { useState } from "react";
import { useNavigate } from 'react-router-dom';
import "./Login.css"
import logo from "../../images/logoRedondaMelinda.png"
import useFetchLogin from "../../../hooks/useFetchLogin";
import AddFuncionarios from "../../routes/Funcionarios/AddFuncionarios";

function Login() {
    const [token, setToken] = useState("");
    const navigate = useNavigate(); 

    const handleSuccessfulLogin = (token) => {
        console.log("Token gerado:", token);

        setToken(token); 
        navigate('/funcionarios', { state: { authToken: token } });
    };
    
    const { setRegister, setPassword, handleSubmit } = useFetchLogin(handleSuccessfulLogin);
    
    return (
        <div className="container">
            <form onSubmit={handleSubmit} className="form-login">
                <figure>
                    <img src={logo} alt="logo Melinda" />
                </figure>
                <div>
                    <label htmlFor="register">Registro: </label>
                    <input
                        type="text"
                        id="register" 
                        placeholder="Registro"
                        onChange={(e) => setRegister(e.target.value)} 
                    />
                </div>
                <div>
                    <label htmlFor="password">Senha: </label>
                    <input
                        type="password"
                        id="password" 
                        placeholder="Senha"
                        onChange={(e) => setPassword(e.target.value)} 
                    />
                </div>
                <button type="submit" >Entrar</button> 
            </form>
            {token && <AddFuncionarios authToken={token} isClose={() => setToken('')} />}
        </div>
    );
}

export default Login;