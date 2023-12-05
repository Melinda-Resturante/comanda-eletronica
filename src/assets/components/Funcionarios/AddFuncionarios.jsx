import useAddFuncionarios from '../../../hooks/useAddFuncionarios';

function AddFuncionarios({ isClose }) {
  const { register, handleSubmit, handleForm, errors } =
    useAddFuncionarios(isClose);

  return (
    <>
      <form onSubmit={handleSubmit(handleForm)} className="employee-form">
        <h2 className="titleH2">Adicionar Funcionario</h2>
        <div>
          <label htmlFor="" className="label">
            Nome
          </label>
          <input
            type="text"
            placeholder="Nome"
            name="name"
            className="input-group"
            {...register('nome')}
          />
        </div>

        {errors.nome?.message && (
          <p className="error-message">{errors.nome.message}</p>
        )}

        <div>
          <label htmlFor="" className="label">
            Sobrenome
          </label>
          <input
            type="text"
            placeholder="Sobrenome"
            name="lastName"
            className="input-group"
            {...register('sobrenome')}
          />
        </div>

        {errors.sobrenome?.message && (
          <p className="error-message">{errors.sobrenome.message}</p>
        )}

        <div>
          <label htmlFor="" className="label">
            CPF
          </label>
          <input
            type="text"
            maxLength={12}
            placeholder="CPF"
            name="cpf"
            className="input-group"
            {...register('cpf')}
          />
        </div>

        {errors.cpf?.message && (
          <p className="error-message">{errors.cpf.message}</p>
        )}

        <div>
          <label htmlFor="" className="label">
            Data de Nascimento
          </label>
          <input
            type="date"
            name="birthDate"
            className="input-group"
            {...register('data_nascimento')}
          />
        </div>

        {errors.data_nascimento?.message && (
          <p className="error-message">{errors.data_nascimento.message}</p>
        )}

        <div>
          <label htmlFor="" className="label">
            Telefone 1
          </label>
          <input
            type="tel"
            placeholder="Telefone 1"
            name="phone1"
            className="input-group"
            {...register('telefone_01')}
          />
        </div>

        {errors.telefone_01?.message && (
          <p className="error-message">{errors.telefone_01.message}</p>
        )}

        <div>
          <label htmlFor="" className="label">
            Telefone 2
          </label>
          <input
            type="tel"
            placeholder="Telefone 2"
            name="phone2"
            className="input-group"
            {...register('telefone_02')}
          />
        </div>

        {errors.telefone_02?.message && (
          <p className="error-message">{errors.telefone_02.message}</p>
        )}

        <div>
          <label htmlFor="" className="label">
            Rua
          </label>
          <input
            type="text"
            placeholder="Rua"
            name="street"
            className="input-group"
            {...register('rua')}
          />
        </div>

        {errors.rua?.message && (
          <p className="error-message">{errors.rua.message}</p>
        )}

        <div>
          <label htmlFor="" className="label">
            Número
          </label>
          <input
            type="text"
            placeholder="Número"
            name="number"
            className="input-group"
            {...register('numero')}
          />
        </div>

        {errors.numero?.message && (
          <p className="error-message">{errors.numero.message}</p>
        )}

        <div>
          <label htmlFor="" className="label">
            CEP
          </label>
          <input
            type="text"
            placeholder="CEP"
            name="cep"
            className="input-group"
            {...register('cep')}
          />
        </div>

        {errors.cep?.message && (
          <p className="error-message">{errors.cep.message}</p>
        )}

        <div>
          <label htmlFor="" className="label">
            Bairro
          </label>
          <input
            type="text"
            placeholder="Bairro"
            name="district"
            className="input-group"
            {...register('bairro')}
          />
        </div>

        {errors.bairro?.message && (
          <p className="error-message">{errors.bairro.message}</p>
        )}

        <div>
          <label htmlFor="" className="label">
            Cidade
          </label>
          <input
            type="text"
            placeholder="Cidade"
            name="city"
            className="input-group"
            {...register('cidade')}
          />
        </div>

        {errors.cidade?.message && (
          <p className="error-message">{errors.cidade.message}</p>
        )}

        <div>
          <label htmlFor="" className="label">
            Estado
          </label>
          <input
            type="text"
            placeholder="Estado"
            maxLength={3}
            name="state"
            className="input-group"
            {...register('estado')}
          />
        </div>

        {errors.estado?.message && (
          <p className="error-message">{errors.estado.message}</p>
        )}

        <div>
          <label htmlFor="" className="label">
            E-mail
          </label>
          <input
            type="email"
            placeholder="E-mail"
            name="email"
            className="input-group"
            {...register('email')}
          />
        </div>

        {errors.email?.message && (
          <p className="error-message">{errors.email.message}</p>
        )}

        <div className="checkboxes">
          <label htmlFor="" className="lbFuncao">
            Função
          </label>
          <select name="cargo" {...register('cargo')} className="input-group">
            <option value="">Selecione um cargo</option>
            <option value="1">Gerente</option>
            <option value="2">Atendente</option>
            <option value="3">Estoquista</option>
            <option value="4">Caixa</option>
          </select>
        </div>

        {errors.cargo?.message && (
          <p className="error-message">{errors.cargo.message}</p>
        )}

        <button type="submit" className="btn2 btAdd">
          Adicionar Funcionario
        </button>
      </form>
    </>
  );
}

export default AddFuncionarios;
