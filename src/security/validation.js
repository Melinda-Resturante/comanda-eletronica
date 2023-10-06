import { z } from 'zod'

export const schema = z
.object({
  register: z.string().min(4, 'Campo Registro precisa de 4 números').max(4, 'Só aceita 4 numeros'),
  password: z.string().min(1, 'O campo Senha é obrigatório')
})