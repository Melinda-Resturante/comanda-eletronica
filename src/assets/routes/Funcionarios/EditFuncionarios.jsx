import useFuncionarioStore from "../../../store/funcionario"
import React, { useState, useEffect } from 'react';

function EditFuncionarios({ onClose }) {
    const updateFuncionario = useFuncionarioStore(state => state.updateFuncionario)
    const funcionarioEdit = useFuncionarioStore(state => state.funcionarioEdit)
    const [register, setRegister] = useState(null)
    const [name, setName] = useState('')
    const [jobFunction, setJobFunction] = useState('')
    
    useEffect(() => {
        setRegister(funcionarioEdit.register)
        setName(funcionarioEdit.name)
        setJobFunction(funcionarioEdit.jobFunction)
        console.log(funcionarioEdit)
    }, [funcionarioEdit])

    const handleRegisterChange = (event) => {
        setRegister(event.target.value)
    }

    const handleNameChange = (event) => {
        setName(event.target.value)
    }

    const handlejobFunctionChange = (event) => {
        setJobFunction(event.target.value)
    }

    const handleSave = () => {
       
        const updatedFuncionario = {
            ...funcionarioEdit,
            register,
            name,
            jobFunction
        };
        
        updateFuncionario(updatedFuncionario);
        onClose();
        }
        
    return (
        <div>
            <h2>Editar Funcionário</h2>
            <div>
                <label>Registro</label>
                <input 
                    type="text" 
                    name="register" 
                    value={register} 
                    onChange={handleRegisterChange} />
            </div>
            <div>
                <label>Email</label>
                <input 
                    type="email" 
                    name="name" 
                    value={name} 
                    onChange={handleNameChange}
                    />
            </div>
            <div>
                <label>Função</label>
                <input 
                    type="text" 
                    name="jobFunction" 
                    value={jobFunction}  
                    onChange={handlejobFunctionChange}
                    />
            </div>
            <button onClick={handleSave}>Editar Funcionario</button>
         
        </div>
    );
}

export default EditFuncionarios;
