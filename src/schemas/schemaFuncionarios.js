import { z } from "zod";



export const schemaFuncionarios = z.object({
    nome: z.string().min(1, 'O campo Nome não pode ser vazio.'),

    sobrenome: z.string().min(1, 'O campo Sobrenome não pode ser vazio.'),

    cpf: z.string().min(11, 'O campo CPF não pode ser vazio.').max(11, 'CPF inválido'),

    data_nascimento: z.string().min(1, 'O campo Data Nascimento não pode ser vazio.'),

    telefone1: z.string().min(1, 'O campo Telefone 1 não pode ser vazio').max(11, 'Número inválido'),

    telefone2: z.string().min(1, 'O campo Telefone 2 não pode ser vazio').max(11, 'Número inválido'),

    rua: z.string().min(1, 'O campo Rua não pode ser vazio'),

    numero: z.string().min(1, 'O campo Número não pode ser vazio'),

    bairro: z.string().min(1, 'O campo Bairro não pode ser vazio'),

    cidade: z.string().min(1 , 'O campo Cidade não pode ser vazio'),

    estado: z.string().min(1, 'O campo Estado não pode ser vazio'),

    cep: z.string().min(1, 'O campo Cep não pode ser vazio'),

    email: z.string().min(1, 'O campo Email não pode ser vazio'),

    cargo: z.string().min(1, 'O campo Cargo não pode ser vazio')
})