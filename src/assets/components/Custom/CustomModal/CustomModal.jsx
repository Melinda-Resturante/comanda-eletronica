import React from 'react';
import PropTypes from 'prop-types';
import './CustomModal.css';

const CustomModal = ({ isOpen, onClose, children }) => {
  if (!isOpen) {
    return null;
  }

  return (
    <div className="custom-modal-overlay">
      <div className="custom-modal">
        <div className="modal-content">
          {children}
          <button className="close-button" onClick={onClose}>
            Fechar
          </button>
        </div>
      </div>
    </div>
  );
};

CustomModal.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
  children: PropTypes.node.isRequired,
};

export default CustomModal;
