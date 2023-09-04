import React, { useState } from "react";
import useFuncionarioStore from "../../../store/funcionario";

function AddFuncionarios({ isClose }) {
  const addFuncionario = useFuncionarioStore(state => state.addFuncionario);

  const [selectedFunctions, setSelectedFunctions] = useState([]);
  const [errors, setErrors] = useState({});


  const handleFunctionChange = (e) => {
    const value = e.target.value;
    if (selectedFunctions.includes(value)) {
      setSelectedFunctions(selectedFunctions.filter((func) => func !== value));
    } else {
      setSelectedFunctions([...selectedFunctions, value]);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if(validateForm(e)) {

      const register = e.target.register.value;
      const name = e.target.name.value;
      const lastName = e.target.lastName.value;
      const cpf = e.target.cpf.value;
      const birthDate = e.target.birthDate.value;
      const phone1 = e.target.phone1.value;
      const phone2 = e.target.phone2.value;
      const street = e.target.street.value;
      const number = e.target.number.value;
      const cep = e.target.cep.value;
      const district = e.target.district.value;
      const city = e.target.city.value;
      const state = e.target.state.value;
      const password = e.target.password.value;
      const email = e.target.email.value;
  
      addFuncionario({
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
        password,
        email,
        jobFunction: selectedFunctions.join(", "),
      });
  
      setSelectedFunctions([]);
      isClose();
    }
  };

  const validateForm = (e) => {
    const newErrors = {};
  
    if (!e.target.name.value) {
      newErrors.name = "Campo obrigatório";
    }
    if (!e.target.lastName.value) {
      newErrors.lastName = "Campo obrigatório";
    }
    if (!e.target.cpf.value) {
      newErrors.cpf = "Campo obrigatório";
    }
    if (!e.target.birthDate.value) {
      newErrors.birthDate = "Campo obrigatório";
    }
    if (!e.target.phone1.value) {
      newErrors.phone1 = "Campo obrigatório";
    }
    if (!e.target.street.value) {
      newErrors.street = "Campo obrigatório";
    }
    if (!e.target.number.value) {
      newErrors.number = "Campo obrigatório";
    }
    if (!e.target.cep.value) {
      newErrors.cep = "Campo obrigatório";
    }
    if (!e.target.district.value) {
      newErrors.district = "Campo obrigatório";
    }
    if (!e.target.city.value) {
      newErrors.city = "Campo obrigatório";
    }
    if (!e.target.state.value) {
      newErrors.state = "Campo obrigatório";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };
  

  return (
    <>
      <form onSubmit={handleSubmit} className="employee-form">
        <fieldset className="fieldset">
          <h2 className="titleH2">Adicionar Funcionario</h2>
          <div className="input-group">
            <label htmlFor="" className="label">Registro</label>
            <input type="number" placeholder="Registro" name="register" disabled />
          </div>  
            
          <div className="input-group">
            <label htmlFor="" className="label">Nome</label>
            <input type="text" placeholder="Nome" name="name" />
          </div>
          {errors.name && <p className="error-message">{errors.name}</p>}

          <div className="input-group">
            <label htmlFor="" className="label">Sobrenome</label>
            <input type="text" placeholder="Sobrenome" name="lastName" />
          </div>
          {errors.lastName && <p className="error-message">{errors.lastName}</p>}

          <div className="input-group">
            <label htmlFor="" className="label">CPF</label>
            <input type="text" placeholder="CPF" name="cpf" />
          </div>
          {errors.cpf && <p className="error-message">{errors.cpf}</p>}

          <div className="input-group">
            <label htmlFor="" className="label">Data de Nascimento</label>
            <input type="date" name="birthDate" />
          </div>
          {errors.birthDate && <p className="error-message">{errors.birthDate}</p>}

          <div className="input-group">
            <label htmlFor="" className="label">Telefone 1</label>
            <input type="tel" placeholder="Telefone 1" name="phone1" />
          </div>
          {errors.phone1 && <p className="error-message">{errors.phone1}</p>}

          <div className="input-group">
            <label htmlFor="" className="label">Telefone 2</label>
            <input type="tel" placeholder="Telefone 2" name="phone2" />
          </div>
          <div className="input-group">
            <label htmlFor="" className="label">Rua</label>
            <input type="text" placeholder="Rua" name="street" />
          </div>
          {errors.street && <p className="error-message">{errors.street}</p>}

          <div className="input-group">
            <label htmlFor="" className="label">Número</label>
            <input type="text" placeholder="Número" name="number" />
          </div>
          {errors.number && <p className="error-message">{errors.number}</p>}

          <div className="input-group">
            <label htmlFor="" className="label">CEP</label>
            <input type="text" placeholder="CEP" name="cep" />
          </div>
          {errors.cep && <p className="error-message">{errors.cep}</p>}

          <div className="input-group">
            <label htmlFor="" className="label">Bairro</label>
            <input type="text" placeholder="Bairro" name="district" />
          </div>
          {errors.district && <p className="error-message">{errors.district}</p>}

          <div className="input-group">
            <label htmlFor="" className="label">Cidade</label>
            <input type="text" placeholder="Cidade" name="city" />
          </div>
          {errors.city && <p className="error-message">{errors.city}</p>}

          <div className="input-group">
            <label htmlFor="" className="label">Estado</label>
            <input type="text" placeholder="Estado" name="state" />
          </div>
          {errors.state && <p className="error-message">{errors.state}</p>}

          <div className="input-group">
            <label htmlFor="" className="label">E-mail</label>
            <input type="email" placeholder="E-mail" name="email" />
          </div>

          <div className="input-group">
            <label htmlFor="" className="label">Senha</label>
            <input type="password" placeholder="Senha" name="password" />
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

        <button type="submit" className="submit-button">Adicionar Funcionario</button>
        </fieldset>

      </form>
    </>
  );

}

export default AddFuncionarios;
