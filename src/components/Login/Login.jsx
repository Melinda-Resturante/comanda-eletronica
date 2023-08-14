import "./Login.css"
import logo from "../../assets/images/logoRedondaMelinda.png"


function Login() {
  return (
    <div className="container">
        <form action="" className="form-login">
            <figure>
                <img src={logo}  alt="" />
            </figure>
            <div>
                <label htmlFor="">Login</label>
                <input type="text" />
            </div>
            <div>
                <label htmlFor="">Senha</label>
                <input type="password" />
            </div>
            <button>Entrar</button>
        </form>
    </div>
  )
}

export default Login