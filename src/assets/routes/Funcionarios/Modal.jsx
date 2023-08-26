import Modal from 'react-modal';

Modal.setAppElement('#root'); // Define o elemento raiz do app para o modal

const CustomModal = ({isOpen, onClose, children}) => {
  

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onClose}
      className="modal"
    >
      {children}
      <button className="modal-close" onClick={onClose}>Fechar</button>
    </Modal>
  );
};

export default CustomModal;
