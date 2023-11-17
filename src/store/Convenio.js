import { create } from "zustand";

const useConvenioStore = create((set) => ({
    convenio: [],
    convenioEdit: null,
    modalConvenio: false,

    closeModal: () => { set({ modalConvenio: false, convenioEdit: null }) },

    columns: [
        { key: 'empresa', header: 'Empresa' },
        { key: 'cnpj', header: 'CNPJ' },
        { key: 'nome', header: 'Nome' },
      ],

    addConvenio: (convenio) => {
        set(state => ({convenio: [...state.convenio, convenio]}))
    },

    deleteConvenio: (index) => {
        set(state => ({convenio: [...state.convenio.filter((convenio, idx) => idx !== index)]}))
    },

    setConvenioEdit: (convenio, index) => {
        set({ convenioEdit: { ...convenio, index: index + 1 }, modalConvenio: true })
    },

    updateConvenio: (convenio) => {
        set(state => ({
            convenio: state.convenio.map((f, idx ) => (idx + 1 === state.convenioEdit.index ? convenio : f)),
            convenioEdit: null,
            modalConvenio: false
         }));
    },
}))

export default useConvenioStore