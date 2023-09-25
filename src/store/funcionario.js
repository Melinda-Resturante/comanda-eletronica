import { create } from 'zustand'

const useFuncionarioStore = create((set) => ({
    funcionarios: [],
    funcionarioEdit: null,
 
    addFuncionario: (funcionario) => {
        set(state => ({funcionarios: [...state.funcionarios, funcionario]}))
    },

    deleteFuncionario: (index) => {
        set(state => ({funcionarios: [...state.funcionarios.filter((funcionario, idx) => idx !== index)]}))
    },

    setFuncionarioEdit: (funcionario) => {
        set({ funcionarioEdit: funcionario })
    },

    updateFuncionario: (funcionario) => {
        set(state => ({
            funcionarios: state.funcionarios.map((f, idx) => (idx === state.funcionarioEdit.index ? funcionario : f))
         }));
    }
}))


export default useFuncionarioStore