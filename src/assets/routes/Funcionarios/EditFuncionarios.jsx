import React, { useState, useEffect } from 'react';
import useFuncionarioStore from "../../../store/funcionario";

function EditFuncionarios({ onClose }) {
    const updateFuncionario = useFuncionarioStore(state => state.updateFuncionario)
    const funcionarioEdit = useFuncionarioStore(state => state.funcionarioEdit)
    
    const [register, setRegister] = useState(null);
    const [name, setName] = useState('');
    const [lastName, setLastName] = useState('');
    const [cpf, setCpf] = useState('');
    const [birthDate, setBirthDate] = useState('');
    const [phone1, setPhone1] = useState('');
    const [phone2, setPhone2] = useState('');
    const [street, setStreet] = useState('');
    const [number, setNumber] = useState('');
    const [cep, setCep] = useState('');
    const [district, setDistrict] = useState('');
    const [city, setCity] = useState('');
    const [state, setState] = useState('');
    const [email, setEmail] = useState('');
    const [selectedFunctions, setSelectedFunctions] = useState([]);
    const [errors, setErrors] = useState({});

    useEffect(() => {
        setRegister(funcionarioEdit.register);
        setName(funcionarioEdit.name);
        setLastName(funcionarioEdit.lastName);
        setCpf(funcionarioEdit.cpf);
        setBirthDate(funcionarioEdit.birthDate);
        setPhone1(funcionarioEdit.phone1);
        setPhone2(funcionarioEdit.phone2);
        setStreet(funcionarioEdit.street);
        setNumber(funcionarioEdit.number);
        setCep(funcionarioEdit.cep);
        setDistrict(funcionarioEdit.district);
        setCity(funcionarioEdit.city);
        setState(funcionarioEdit.state);
        setEmail(funcionarioEdit.email);
        setSelectedFunctions(funcionarioEdit.jobFunction.split(", "));
    }, [funcionarioEdit]);

    const handleFunctionChange = (e) => {
        const value = e.target.value;
        if (selectedFunctions.includes(value)) {
            setSelectedFunctions(selectedFunctions.filter((func) => func !== value));
        } else {
            setSelectedFunctions([...selectedFunctions, value]);
        }
    }

    const validateForm = () => {
        const newErrors = {};

        if (!name) {
            newErrors.name = "Campo obrigatório";
        }
        if (!lastName) {
            newErrors.lastName = "Campo obrigatório";
        }
        if (!cpf) {
            newErrors.cpf = "Campo obrigatório";
        }
        if (!birthDate) {
            newErrors.birthDate = "Campo obrigatório";
        }
        if (!phone1) {
            newErrors.phone1 = "Campo obrigatório";
        }
        if (!street) {
            newErrors.street = "Campo obrigatório";
        }
        if (!number) {
            newErrors.number = "Campo obrigatório";
        }
        if (!cep) {
            newErrors.cep = "Campo obrigatório";
        }
        if (!district) {
            newErrors.district = "Campo obrigatório";
        }
        if (!city) {
            newErrors.city = "Campo obrigatório";
        }
        if (!state) {
            newErrors.state = "Campo obrigatório";
        }
        if (selectedFunctions.length === 0) {
            newErrors.selectedFunctions = "Selecione pelo menos uma função";
        }

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleSave = () => {
        if (validateForm()) {
            const updatedFuncionario = {
                ...funcionarioEdit,
                register,
                name,
                lastName,
                cpf,
                birthDate,
                phone1,
                phone2,
                street,
                number,
                cep,
                district,
                city,
                state,
                email,
                jobFunction: selectedFunctions.join(", "),
            };
            updateFuncionario(updatedFuncionario);
            onClose();
        }
    }

    return (
       
        <div className="employee-form">
         <div className="fieldset">
            <h2 className="titleH2">Editar Funcionário</h2>
            <div className="input-group">
                <label className="label">Registro</label>
                <input 
                    type="text" 
                    name="register" 
                    value={register} 
                    onChange={e => setRegister(e.target.value)} 
                    disabled/>
            </div>

            <div className="input-group">
                <label className="label">Nome</label>
                <input 
                    type="text" 
                    name="name" 
                    value={name} 
                    onChange={e => setName(e.target.value)} />
            </div>
            {errors.name && <p className="error-message">{errors.name}</p>}

            <div className="input-group">
                <label className="label">Sobrenome</label>
                <input 
                    type="text" 
                    name="lastName" 
                    value={lastName} 
                    onChange={e => setLastName(e.target.value)} />
            </div>
            {errors.lastName && <p className="error-message">{errors.lastName}</p>}

            <div className="input-group">
                <label className="label">CPF</label>
                <input 
                    type="text" 
                    name="cpf" 
                    value={cpf} 
                    onChange={e => setCpf(e.target.value)} />
            </div>
            {errors.cpf && <p className="error-message">{errors.cpf}</p>}

            <div className="input-group">
                <label className="label">Data de Nascimento</label>
                <input 
                    type="date" 
                    name="birthDate" 
                    value={birthDate} 
                    onChange={e => setBirthDate(e.target.value)} />
            </div>
            {errors.birthDate && <p className="error-message">{errors.birthDate}</p>}

            <div className="input-group">
                <label className="label">Telefone 1</label>
                <input 
                    type="tel" 
                    name="phone1" 
                    value={phone1} 
                    onChange={e => setPhone1(e.target.value)} />
            </div>
            {errors.phone1 && <p className="error-message">{errors.phone1}</p>}

            <div className="input-group">
                <label className="label">Telefone 2</label>
                <input 
                    type="tel" 
                    name="phone2" 
                    value={phone2} 
                    onChange={e => setPhone2(e.target.value)} />
            </div>
            <div className="input-group">
                <label className="label">Rua</label>
                <input 
                    type="text" 
                    name="street" 
                    value={street} 
                    onChange={e => setStreet(e.target.value)} />
            </div>
            {errors.street && <p className="error-message">{errors.street}</p>}

            <div className="input-group">
                <label className="label">Número</label>
                <input 
                    type="text" 
                    name="number" 
                    value={number} 
                    onChange={e => setNumber(e.target.value)} />
            </div>
            {errors.number && <p className="error-message">{errors.number}</p>}

            <div className="input-group">
                <label className="label">CEP</label>
                <input 
                    type="text" 
                    name="cep" 
                    value={cep} 
                    onChange={e => setCep(e.target.value)} />
            </div>
            {errors.cep && <p className="error-message">{errors.cep}</p>}

            <div className="input-group">
                <label className="label">Bairro</label>
                <input 
                    type="text" 
                    name="district" 
                    value={district} 
                    onChange={e => setDistrict(e.target.value)} />
            </div>
            {errors.district && <p className="error-message">{errors.district}</p>}

            <div className="input-group">
                <label className="label">Cidade</label>
                <input 
                    type="text" 
                    name="city" 
                    value={city} 
                    onChange={e => setCity(e.target.value)} />
            </div>
            {errors.city && <p className="error-message">{errors.city}</p>}

            <div className="input-group">
                <label className="label">Estado</label>
                <input 
                    type="text" 
                    name="state" 
                    value={state} 
                    onChange={e => setState(e.target.value)} />
            </div>
            {errors.state && <p className="error-message">{errors.state}</p>}

            <div className="input-group">
                <label className="label">E-mail</label>
                <input 
                    type="email" 
                    name="email" 
                    value={email} 
                    onChange={e => setEmail(e.target.value)} />
            </div>

            <div className="checkboxes">
                <label htmlFor="" className="lbFuncao">Função</label>
                <div className="function-checkboxes">
                    <label>
                        <input
                        type="checkbox"
                        value="Atendente"
                        checked={selectedFunctions.includes("Atendente")}
                        onChange={handleFunctionChange}
                        />
                        Atendente
                    </label>
                </div>
                <div className="function-checkboxes">
                    <label>
                        <input
                        type="checkbox"
                        value="Caixa"
                        checked={selectedFunctions.includes("Caixa")}
                        onChange={handleFunctionChange}
                        />
                        Caixa
                    </label>
                </div>
                <div className="function-checkboxes">
                    <label>
                        <input
                        type="checkbox"
                        value="Estoquista"
                        checked={selectedFunctions.includes("Estoquista")}
                        onChange={handleFunctionChange}
                        />
                        Estoquista
                    </label>
                </div>
                <div className="function-checkboxes">
                    <label>
                        <input
                        type="checkbox"
                        value="Gerente"
                        checked={selectedFunctions.includes("Gerente")}
                        onChange={handleFunctionChange}
                        />
                        Gerente
                    </label>
                </div>
          </div>
            {errors.selectedFunctions && <p className="error-message">{errors.selectedFunctions}</p>}

            <button onClick={handleSave} className="submit-button">Editar Funcionário</button>
        </div> 
        </div>
    );
}

export default EditFuncionarios;