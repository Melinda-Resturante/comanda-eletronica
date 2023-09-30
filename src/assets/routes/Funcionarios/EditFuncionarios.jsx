import React, { useState, useEffect } from 'react';
import useFuncionarioStore from "../../../store/funcionario";
import { useLocation } from 'react-router-dom';

function EditFuncionarios({ onClose }) {
    const location = useLocation();
    const authToken = location.state && location.state.authToken;

    const updateFuncionario = useFuncionarioStore(state => state.updateFuncionario);
    const funcionarioEdit = useFuncionarioStore(state => state.funcionarioEdit);
    
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
    const [selectedFunction, setSelectedFunction] = useState(''); 
    const [errors, setErrors] = useState({});

    useEffect(() => {
        setName(funcionarioEdit.nome || '');
        setLastName(funcionarioEdit.sobrenome || '');
        setCpf(funcionarioEdit.cpf || '');
        setBirthDate(funcionarioEdit.data_nascimento || '');
        setPhone1(funcionarioEdit.telefone_01 || '');
        setPhone2(funcionarioEdit.telefone_02 || '');
        setStreet(funcionarioEdit.rua || '');
        setNumber(funcionarioEdit.numero || '');
        setCep(funcionarioEdit.cep || '');
        setDistrict(funcionarioEdit.bairro || '');
        setCity(funcionarioEdit.cidade || '');
        setState(funcionarioEdit.estado || '');
        setEmail(funcionarioEdit.email || '');
        setSelectedFunction(funcionarioEdit.cargo || ''); 
    }, [funcionarioEdit]);

    const handleFunctionChange = (e) => {
        const selectedValue = e.target.value;
        setSelectedFunction(selectedValue); 
    };

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
        if (!selectedFunction) {
            newErrors.selectedFunction = "Selecione uma função";
        }
    
        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleSave = async () => {
        if (validateForm()) {
            const updatedFuncionario = {
                ...funcionarioEdit,
                nome: name,
                sobrenome: lastName,
                cpf,
                data_nascimento: birthDate,
                telefone_01: phone1,
                telefone_02: phone2,
                rua: street,
                numero: number,
                cep,
                bairro: district,
                cidade: city,
                estado: state,
                email,
                cargo: selectedFunction,
            };

            console.log('Funcionário editado:', updatedFuncionario);

            try {
                if (!authToken) {
                    console.error("Token de autenticação ausente.");
                    return;
                }

                const id = updatedFuncionario.id; 

                if (!id) {
                    console.error("ID do funcionário ausente.");
                    return;
                }

                const response = await fetch(`https://comanda-eletronica-api.vercel.app/funcionarios/${id}`, {
                    method: "PUT",
                    headers: {
                        Authorization: `Bearer ${authToken}`,
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify(updatedFuncionario),
                });

                if (response.ok) {
                    console.log("Funcionário atualizado com sucesso.");
                    onClose(); 
                } else {
                    console.error("Erro ao atualizar o funcionário:", response.status);
                }
            } catch (error) {
                console.error("Erro ao atualizar o funcionário:", error);
            }
        }
    }

    return (
       
        <div className="employee-form">
         <div className="fieldset">
            <h2 className="titleH2">Editar Funcionário</h2>

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

            <div className="input-group">
                    <label className="label">Função</label>
                    <select
                        value={selectedFunction}
                        onChange={handleFunctionChange}
                        name="cargo"
                    >
                        <option value="">Selecione um cargo</option>
                        <option value="Atendente">Atendente</option>
                        <option value="Caixa">Caixa</option>
                        <option value="Estoquista">Estoquista</option>
                        <option value="Gerente">Gerente</option>
                    </select>
                </div>
                {errors.selectedFunction && <p className="error-message">{errors.selectedFunction}</p>}


            <button onClick={handleSave} className="submit-button">Editar Funcionário</button>
        </div> 
        </div>
    );
}

export default EditFuncionarios;