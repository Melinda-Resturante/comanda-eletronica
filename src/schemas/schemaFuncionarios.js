import { z } from 'zod';

export const defaultValues = {
  nome: '',
  sobrenome: '',
  cpf: '',
  data_nascimento: '',
  telefone_01: '',
  telefone_02: '',
  rua: '',
  numero: '',
  bairro: '',
  cidade: '',
  estado: '',
  cep: '',
  email: '',
  cargo: '',
};

export const valuesInputFuncionario = (funcionarioEdit) => {
  return {
    nome: funcionarioEdit.nome,
    sobrenome: funcionarioEdit.sobrenome,
    cpf: funcionarioEdit.cpf,
    data_nascimento: funcionarioEdit.data_nascimento,
    telefone_01: funcionarioEdit.telefone_01,
    telefone_02: funcionarioEdit.telefone_02,
    rua: funcionarioEdit.rua,
    numero: funcionarioEdit.numero.toString(),
    bairro: funcionarioEdit.bairro,
    cidade: funcionarioEdit.cidade,
    estado: funcionarioEdit.estado,
    cep: funcionarioEdit.cep,
    email: funcionarioEdit.email,
    cargo: funcionarioEdit.cargo.toString(),
  };
};

export const schemaRegisterPassword = z.object({
  cpf: z.string().min(1, 'O campo CPF não pode ser vazio'),
  senha: z.string().min(4, 'O minimo é quatro caracteres'),
});

export const schemaFuncionarios = z.object({
  nome: z.string().min(1, 'O campo Nome não pode ser vazio.'),

  sobrenome: z.string().min(1, 'O campo Sobrenome não pode ser vazio.'),

  cpf: z
    .string()
    .min(1, 'O campo CPF não pode ser vazio.')
    .max(11, 'CPF inválido'),

  data_nascimento: z
    .string()
    .min(1, 'O campo Data Nascimento não pode ser vazio.'),

  telefone_01: z
    .string()
    .min(1, 'O campo Telefone 1 não pode ser vazio')
    .max(11, 'Telefone inválido'),

  telefone_02: z
    .string()
    .min(1, 'O campo Telefone 2 não pode ser vazio')
    .max(11, 'Telefone inválido'),

  rua: z.string().min(1, 'O campo Rua não pode ser vazio'),

  numero: z.string().min(1, 'O campo Número não pode ser vazio'),

  bairro: z.string().min(1, 'O campo Bairro não pode ser vazio'),

  cidade: z.string().min(1, 'O campo Cidade não pode ser vazio'),

  estado: z
    .string()
    .min(1, 'O campo Estado não pode ser vazio')
    .max(2, 'Apenas as inicias'),

  cep: z
    .string()
    .min(1, 'O campo CEP não pode ser vazio')
    .max(8, 'CEP Inválido'),

  email: z.string().min(1, 'O campo Email não pode ser vazio'),

  cargo: z.string().min(1, 'O campo Cargo não pode ser vazio'),
});
