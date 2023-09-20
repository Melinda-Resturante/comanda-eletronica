import { create } from 'zustand'

const useFuncionarioStore = create((set) => ({
    funcionarios: [],
    funcionarioEdit: null,
    senhaModalOpen: false, 
    senha: '',

    addFuncionario: (funcionario) => {
        set(state => ({funcionarios: [...state.funcionarios, funcionario]}))
    },

    deleteFuncionario: (index) => {
        set(state => ({funcionarios: [...state.funcionarios.filter((funcionario, idx) => idx !== index)]}))
    },

    setFuncionarioEdit: (funcionario) => {
        set({funcionarioEdit: funcionario})
    },

    updateFuncionario: (funcionario) => {
        set(state => ({
            funcionarios: state.funcionarios.map((f, idx) => (idx === state.funcionarioEdit.index ? funcionario : f))
         }));
    },

    openSenhaModal: () => {
        set({ senhaModalOpen: true });
      },

      closeSenhaModal: () => {
        set({ senhaModalOpen: false, senha: '' }); 
      },

      saveSenha: (novaSenha) => {
        console.log('Senha cadastrada:', novaSenha);
        set({ senha: '', senhaModalOpen: false }); 
      },
}))


export default useFuncionarioStore