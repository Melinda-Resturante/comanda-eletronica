export const useMapCargos = () => {
  function mapCargo(cargoNumber) {
    switch (cargoNumber) {
      case 1:
        return 'Gerente';
      case 2:
        return 'Atendente';
      case 3:
        return 'Estoquista';
      case 4:
        return 'Caixa';
      default:
        return 'Desconhecido';
    }
  }

  const columns = [
    { key: 'id', header: 'ID' },
    { key: 'nome', header: 'Nome' },
    { key: 'sobrenome', header: 'Sobrenome' },
    {
      key: 'cargo',
      header: 'Cargo',
      formatter: (cargoNumber) => mapCargo(cargoNumber),
    },
  ];

  return {
    mapCargo,
    columns,
  };
};
