import "./Login.css"
import logo from "../../images/logoRedondaMelinda.png"
import useFetchLogin from "../../../hooks/useFetchLogin"
import { useForm } from 'react-hook-form'
import { schema } from "../../../hooks/validation"
import { zodResolver } from '@hookform/resolvers/zod'
import { useEffect } from "react"

function Login() {

  const { register, handleSubmit, formState: {errors}, reset, setFocus } = useForm({
    mode: 'onSubmit',
    defaultValues: { register: '', password: ''},
    resolver: zodResolver(schema)
  })

  const { fetchData, error }  = useFetchLogin()

  const handleForm = async (data) => {
   await fetchData(data)
    reset()
  }

  useEffect(() => {
    setFocus('register')
  }, [])

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
            <button type="submit">Entrar</button>
        </form>
    </div>
  )
}

export default Login;