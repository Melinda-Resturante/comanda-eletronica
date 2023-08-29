import "./Login.css"
import logo from "../../images/logoRedondaMelinda.png"
import { useEffect, useState } from "react"


function Login() {
    const [data, setData] = useState([])

    useEffect(() => {
        fetch('http://localhost:4000/auth/login').then(resp => setData(resp.json())).catch(e => console.log(e.error))
        console.log(data)
    }, [])

  return (
    <div className="container">
        <form action="POST" className="form-login">
            <figure>
                <img src={logo} alt="logo Melinda" />
            </figure>
            <div>
                <label htmlFor="">Registro: </label>
                <input type="text" placeholder="Registro"/>
            </div>
            <div>
                <label htmlFor="">Senha: </label>
                <input type="password" placeholder="Senha"/>
            </div>
            <button>Entrar</button>
        </form>
    </div>
  )
}

export default Login