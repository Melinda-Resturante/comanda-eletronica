import "./Login.css"
import logo from "../../images/logoRedondaMelinda.png"


function Login() {
  return (
    <div className="container">
        <form action="" className="form-login">
            <figure>
                <img src={logo} alt="logo Melinda" />
            </figure>
            <div>
                <label htmlFor="">Registro: </label>
                <input type="text" />
            </div>
            <div>
                <label htmlFor="">Senha: </label>
                <input type="password" />
            </div>
            <button>Entrar</button>
        </form>
    </div>
  )
}

export default Login