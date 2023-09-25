import "./Login.css"
import logo from "../../images/logoRedondaMelinda.png"
import useFetchLogin from "../../../hooks/useFetchLogin"
import { useForm } from 'react-hook-form'
import { z } from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import { useEffect } from "react"
import authLoginStore from "../../../store/Auth"

const schema = z
.object({
  register: z.string().min(4, 'Campo Registro precisa de 4 números').max(4, 'Só aceita 4 numeros'),
  password: z.string().min(1, 'O campo Senha é obrigatório')
})

function Login() {

  const { register, handleSubmit, formState, reset, setFocus } = useForm({
    mode: 'onSubmit',
    defaultValues: {
      register: '',
      password: ''
    },
    resolver: zodResolver(schema)
    
  })

  const { user, authenticated } = authLoginStore()
  console.log('user zus', user)
  const { errors } = formState
  const { fetchData, error }  = useFetchLogin()

  const handleForm = async (data) => {
   await fetchData(data)
   console.log(authenticated)
    reset()
  }

  useEffect(() => {
    setFocus('register')
  }, [])

  return (
    <div className="container">
        <form onSubmit={handleSubmit(handleForm)} className="form-login">
          {String(authenticated)}
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

export default Login