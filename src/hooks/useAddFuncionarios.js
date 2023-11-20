import { useForm } from 'react-hook-form'
import { useDecryptUser } from '../security/userDecrypt';
import { zodResolver } from '@hookform/resolvers/zod'
import { useMutation } from '@tanstack/react-query'
import { schemaFuncionarios } from '../schemas/schemaFuncionarios';
import { funcionariosServices } from '../services/funcionariosServices';

const useAddFuncionarios = (isClose) => {
    const { decryptUser } = useDecryptUser()
    const { createFuncionario } = funcionariosServices()

    const { register, handleSubmit, reset, formState: { errors }, } = useForm({
        mode: 'onSubmit',
        resolver: zodResolver(schemaFuncionarios),
        defaultValues: {
           nome: '',
           sobrenome: '',
           cpf: '',
           data_nascimento: '',
           telefone1: '',
           telefone2: '',
           rua: '',
           numero: '',
           bairro: '',
           cidade: '',
           estado: '',
           cep: '',
           email: '',
           cargo: '',
        }
    })

 
    const handleForm = async (data) => {

        try {
          const response =  await createFuncionario(data)
          console.log(response)
         
            reset()
            isClose()
        } catch (error) {
            
            console.log(error)
        }
    }

    const authToken = decryptUser.acssesToken;
    
    const Funcao = async () => {
        const headers = {
            Authorization: `Bearer ${authToken}`,
            "Content-Type": "application/json",
          };
    
          const requestOptions = {
            method: "POST",
            headers: headers,
            body: JSON.stringify(form_Data),
          };
    
          try {
            const response = await fetch(
              "https://comanda-eletronica-api.vercel.app/funcionarios",
              requestOptions
            );
    
            if (response.ok) {
              const responseData = await response.json();
              console.log("Resposta da API:", responseData);
              const id = responseData.id;
              console.log("ID recuperado:", id);
    
              setSelectedFunctions([]);
              isClose();
    
              console.log("Funcionário cadastrado com sucesso!");
            } else {
              console.log("Status da resposta:", response.status);
              try {
                const errorResponse = await response.json();
                console.log("Mensagem de erro:", errorResponse);
              } catch (error) {
                console.log("Erro ao analisar a resposta JSON:", error);
              }
    
              console.log("Erro ao cadastrar funcionário");
            }
          } catch (error) {
            console.error(error);
          }
        }
        
        return {
            register,
            handleSubmit,
            handleForm,
            errors
        }
}

export default useAddFuncionarios