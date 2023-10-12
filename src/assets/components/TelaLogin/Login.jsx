import "./Login.css"
import logo from "../../images/logoRedondaMelinda.png"
import { useLogin } from "../../../hooks/useLogin";

function Login() {

  const { register, handleSubmit, handleForm, errors, error, loading } = useLogin()

  return (
    <div className="container">
        <form onSubmit={handleSubmit(handleForm)} className="form-login">
            <figure>
                <img src={logo} alt="logo Melinda" />
            </figure>
            <div>
                <label htmlFor="">Registro: </label>
                <input 
                  type="number" 
                  placeholder="Registro" 
                  {...register('register')}
                 />

                 {errors.register?.message && (
                  <p className="error-login-message">{errors.register.message}</p>
                 )}
            </div>
            <div>
                <label htmlFor="">Senha: </label>
                <input 
                  type="password" 
                  placeholder="Senha" 
                  {...register('password')}
                />
                 {errors.password?.message && (
                  <p className="error-login-message">{errors.password.message}</p>
                 )}

                 {error && (
                    <p className="error-login-message">{error}</p>
                 )}
            </div>
            <button type="submit">{ loading ? <i className='bx bx-loader-circle loading-icon'></i> : 'Entrar' }</button>
        </form>
    </div>
  )
}

export default Login;