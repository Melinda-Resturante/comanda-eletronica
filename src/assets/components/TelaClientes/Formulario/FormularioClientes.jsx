import React from 'react';
import { useForm, Controller } from 'react-hook-form';

function FormularioClientes({ onSubmit }) {
    const {
        control,
        handleSubmit,
        setValue,
        formState: { errors },
      } = useForm();

    const buscarEnderecoPorCep = async (cep) => {
      try {
        const response = await fetch(`https://viacep.com.br/ws/${cep}/json/`);
        const data = await response.json();
  
        // Preencher os campos com os dados do endereço
        setValue('endereco.rua', data.logradouro || '');
        setValue('endereco.complemento', data.complemento || '');
        setValue('endereco.bairro', data.bairro || '');
        setValue('endereco.cidade', data.localidade || '');
        setValue('endereco.estado', data.uf || '');
      } catch (error) {
        console.error('Erro ao buscar o endereço:', error);
      }
    };
  
    const handleCEPChange = (cep) => {
      // Remover caracteres não numéricos do CEP
      const cleanCEP = cep.replace(/\D/g, '');
      if (cleanCEP.length === 8) {
        buscarEnderecoPorCep(cleanCEP);
      }
    };

  return (
    <form className="formulario-clientes" onSubmit={handleSubmit(onSubmit)}>
      <div>
        <label>Nome</label>
        <Controller
          name="nome"
          control={control}
          defaultValue=""
          rules={{ required: 'Campo obrigatório' }}
          render={({ field }) => <input {...field} />}
        />
        {errors.nome && <span className="error-message">{errors.nome.message}</span>}
      </div>
      <div>
        <label>Sobrenome</label>
        <Controller
          name="sobrenome"
          control={control}
          defaultValue=""
          rules={{ required: 'Campo obrigatório' }}
          render={({ field }) => <input {...field} />}
        />
        {errors.sobrenome && <span className="error-message">{errors.sobrenome.message}</span>}
      </div>
      <div>
        <label>Telefone</label>
        <Controller
          name="telefone"
          control={control}
          defaultValue=""
          rules={{ required: 'Campo obrigatório' }}
          render={({ field }) => <input {...field} />}
        />
        {errors.telefone && <span className="error-message">{errors.telefone.message}</span>}
      </div>
      <div>
        <label>Endereço</label>
        <div>
          <label>CEP</label>
          <Controller
          name="endereco.cep"
          control={control}
          defaultValue=""
          rules={{ required: 'Campo obrigatório' }}
          render={({ field }) => <input {...field} onBlur={(e) => handleCEPChange(e.target.value)} />}
        />
        {errors.cep && <span className="error-message">{errors.cep.message}</span>}
        </div>
        <div>
          <label>Rua</label>
          <Controller
            name="endereco.rua"
            control={control}
            defaultValue=""
            rules={{ required: 'Campo obrigatório' }}
            render={({ field }) => <input {...field} />}
          />
          {errors.rua && <span className="error-message">{errors.rua.message}</span>}
        </div>
        <div>
          <label>Número</label>
          <Controller
            name="endereco.numero"
            control={control}
            defaultValue=""
            rules={{ required: 'Campo obrigatório' }}
            render={({ field }) => <input {...field} />}
          />
          {errors.numero && <span className="error-message">{errors.numero.message}</span>}
        </div>
        <div>
          <label>Complemento</label>
          <Controller
            name="endereco.complemento"
            control={control}
            defaultValue=""
            render={({ field }) => <input {...field} />}
          />
        </div>
        <div>
          <label>Bairro</label>
          <Controller
            name="endereco.bairro"
            control={control}
            defaultValue=""
            rules={{ required: 'Campo obrigatório' }}
            render={({ field }) => <input {...field} />}
          />
          {errors.bairro && <span className="error-message">{errors.bairro.message}</span>}
        </div>
        <div>
          <label>Cidade</label>
          <Controller
            name="endereco.cidade"
            control={control}
            defaultValue=""
            rules={{ required: 'Campo obrigatório' }}
            render={({ field }) => <input {...field} />}
          />
          {errors.cidade && <span className="error-message">{errors.cidade.message}</span>}
        </div>
        <div>
          <label>Estado</label>
          <Controller
            name="endereco.estado"
            control={control}
            defaultValue=""
            rules={{ required: 'Campo obrigatório' }}
            render={({ field }) => <input {...field} />}
          />
          {errors.estado && <span className="error-message">{errors.estado.message}</span>}
        </div>
      </div>
      <button type="submit">Cadastrar</button>
    </form>
  );
}

export default FormularioClientes;
