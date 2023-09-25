import { create } from 'zustand'

import { persist } from 'zustand/middleware'

let LoginStore = (set) => ({

    user: {},
    setUser: (user) => set({ user: user }),

    authenticated: false,
    setAuthenticated: (authenticated) => 
    set({ authenticated: authenticated }),

    login: (data, navigate) => { 
        set({ user: data, authenticated: true })
        
        localStorage.setItem('user', JSON.stringify(data))
        navigate('/atendente')
    },

    logout: (navigate) => { 
        set({ user: null, authenticated: false })

        localStorage.removeItem('user')
        localStorage.removeItem('my_store_login')

        navigate('/')
    },

    initialize: () => {
        const storedUser = localStorage.getItem('user')
        if(storedUser) {
            const userData = JSON.parse(storedUser)

          set({ user: userData, authenticated: true })
        }
    }
})

LoginStore = persist(LoginStore, { name: 'my_store_login' });

 const authLoginStore = create(LoginStore)

 export default authLoginStore

