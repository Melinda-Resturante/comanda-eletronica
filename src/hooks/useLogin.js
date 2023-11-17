import { useForm } from "react-hook-form"
import useFetchLogin from "./useFetchLogin"
import { useEffect } from "react"

import { zodResolver } from '@hookform/resolvers/zod'
import { schemaLogin } from "../schemas/schemaLogin"

export const useLogin = () => {

  const { register, handleSubmit, formState: { errors }, reset, setFocus } = useForm({
    mode: 'onSubmit',
    defaultValues: { register: '', password: ''},
    resolver: zodResolver(schemaLogin)
    })

    const { fetchData, error, loading }  = useFetchLogin()

    const handleForm = async (data) => {
     await fetchData(data)
     reset()
    }

    useEffect(() => {
        setFocus('register')
    }, [])

    return {
        register,
        handleSubmit,
        handleForm,
        errors,
        error,
        loading
    }
}