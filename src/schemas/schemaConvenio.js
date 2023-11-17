import { z } from "zod";

const cnpjRegex = /^\d{2}\.\d{3}\.\d{3}\/\d{4}-\d{2}$/;

const isCnpjValid = (cnpj) => cnpjRegex.test(cnpj)

export const schemaConvenio = z.object({
    empresa: z.string().min(1, 'Campo Empresa não pode ser vazio'),
    cnpj: z.string().refine((cnpj) => isCnpjValid(cnpj), 'O CNPJ não é válido'),
    nome: z.string().min(1, 'O campo Nome não pode ser vazio'),
    rua: z.string().min(1, 'O campo Rua não pode ser vazio'),
    cep: z.string().min(9, 'O campo CEP não é valido'),
    numero: z.string().min(1, 'O campo Numero não pode ser vazio'),
    complemento: z.string()
})