import React, { useState } from "react";
import useFuncionarioStore from "../../../store/funcionario";

function AddFuncionarios({ isClose }) {
  const addFuncionario = useFuncionarioStore(state => state.addFuncionario);

  const [selectedFunctions, setSelectedFunctions] = useState([]);

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
  };

  return (
    <>

      <form onSubmit={handleSubmit} className="employee-form">
        <fieldset className="fieldset">
          <h2 className="titleH2">Adicionar Funcionario</h2>
          <div className="input-group">
            <label htmlFor="" className="label">Registro</label>
            <input type="number" placeholder="Registro" name="register" />
          </div>
          <div className="input-group">
            <label htmlFor="" className="label">Nome</label>
            <input type="text" placeholder="Nome" name="name" />
          </div>
          <div className="input-group">
            <label htmlFor="" className="label">Sobrenome</label>
            <input type="text" placeholder="Sobrenome" name="lastName" />
          </div>
          <div className="input-group">
            <label htmlFor="" className="label">CPF</label>
            <input type="text" placeholder="CPF" name="cpf" />
          </div>
          <div className="input-group">
            <label htmlFor="" className="label">Data de Nascimento</label>
            <input type="date" name="birthDate" />
          </div>
          <div className="input-group">
            <label htmlFor="" className="label">Telefone 1</label>
            <input type="tel" placeholder="Telefone 1" name="phone1" />
          </div>
          <div className="input-group">
            <label htmlFor="" className="label">Telefone 2</label>
            <input type="tel" placeholder="Telefone 2" name="phone2" />
          </div>
          <div className="input-group">
            <label htmlFor="" className="label">Rua</label>
            <input type="text" placeholder="Rua" name="street" />
          </div>
          <div className="input-group">
            <label htmlFor="" className="label">Número</label>
            <input type="text" placeholder="Número" name="number" />
          </div>
          <div className="input-group">
            <label htmlFor="" className="label">CEP</label>
            <input type="text" placeholder="CEP" name="cep" />
          </div>
          <div className="input-group">
            <label htmlFor="" className="label">Bairro</label>
            <input type="text" placeholder="Bairro" name="district" />
          </div>
          <div className="input-group">
            <label htmlFor="" className="label">Cidade</label>
            <input type="text" placeholder="Cidade" name="city" />
          </div>
          <div className="input-group">
            <label htmlFor="" className="label">Estado</label>
            <input type="text" placeholder="Estado" name="state" />
          </div>
          <div className="input-group">
            <label htmlFor="" className="label">E-mail</label>
            <input type="email" placeholder="E-mail" name="email" />
          </div>
          <div className="input-group">
            <label htmlFor="" className="label">Senha</label>
            <input type="password" placeholder="Senha" name="password" />
          </div>
          <div className="input-group">
            <label htmlFor="" className="label">Confirmar Senha</label>
            <input type="password" placeholder="Confirmar Senha" name="password" />
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
        <button type="submit" className="submit-button">Adicionar Funcionario</button>
        </fieldset>

      </form>
    </>
  );
}

export default AddFuncionarios;
