import "./Login.css"
import logo from "../../images/logoRedondaMelinda.png"
import { useEffect, useState } from "react"


function Login() {
    const [data, setData] = useState([])


    const fetching = async () => {

        const body = {
                "id": "1000",
                "senha": "senha"
        }

        const init = {
            method: 'POST',
            headers: {
                "Content-Type": 'application/json'
            },
            body: JSON.stringify(body)
        }

        const url = 'http://localhost:4000/auth/login'

        const respo =  await fetch(url, init)
            const data = await respo.json()
            console.log(data)
    }

  fetching()


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