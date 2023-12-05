import { create } from 'zustand'
import { persist } from 'zustand/middleware'
import { dataEncrypt } from '../security/encrypt-data'

let LoginStore = (set) => ({

    user: {},
    setUser: (user) => set({ user: user }),

    authenticated: false,
    setAuthenticated: (authenticated) => 
    set({ authenticated: authenticated }),

    login: (data, navigate) => { 
        set({ user: dataEncrypt(data), authenticated: true })

        localStorage.setItem('user', dataEncrypt(data))
        navigate('/atendente')
    },

    logout: (navigate) => { 
        set({ user: null, authenticated: false })

        localStorage.removeItem('user')
        localStorage.removeItem('my_store_login')

        navigate('/')
    }
})

LoginStore = persist(LoginStore, { name: 'my_store_login' });

 const authLoginStore = create(LoginStore)

 export default authLoginStore

