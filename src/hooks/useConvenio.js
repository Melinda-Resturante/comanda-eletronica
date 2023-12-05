import { useState } from 'react';
import useConvenioStore from '../store/Convenio';
import { schemaConvenio } from '../schemas/schemaConvenio';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';

export const useConvenio = (method) => {
  const [openModal, setOpenModal] = useState(false);
  const { convenioEdit } = useConvenioStore();

  const closeModal = () => {
    setOpenModal(false);
  };

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    mode: 'onChange',
    resolver: zodResolver(schemaConvenio),
    defaultValues: {
      empresa: '',
      cnpj: '',
      nome: '',
      rua: '',
      cep: '',
      numero: '',
      complemento: '',
    },
    values: {
      empresa: convenioEdit?.index ? convenioEdit.empresa : '',
      cnpj: convenioEdit?.index ? convenioEdit.cnpj : '',
      nome: convenioEdit?.index ? convenioEdit?.nome : '',
      rua: convenioEdit?.index ? convenioEdit?.rua : '',
      cep: convenioEdit?.index ? convenioEdit.cep : '',
      numero: convenioEdit?.index ? convenioEdit?.numero : '',
      complemento: convenioEdit?.index ? convenioEdit?.complemento : '',
    },
  });

  const handleForm = (data) => {
    method(data);
    reset();
    closeModal();
  };

  return {
    register,
    closeModal,
    handleSubmit,
    handleForm,
    setOpenModal,
    openModal,
    errors,
  };
};
