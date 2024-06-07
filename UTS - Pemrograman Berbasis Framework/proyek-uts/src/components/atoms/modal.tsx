import React from 'react';

const Modal = ({ isOpen, onClose, onLogout }) => {
  if (!isOpen) return null;

  return (
    <div className="absolute right-0 bottom-full mb-2 w-48 bg-white border border-gray-200 rounded-lg shadow-lg z-100">
      <div className="p-4">
        <button onClick={onClose} className="absolute top-2 right-2 text-xl">&times;</button>
        <h2 className="text-lg font-bold mb-4">More Options</h2>
        <button
          onClick={onLogout}
          className="w-full text-left py-2 px-4 text-red-600 hover:bg-gray-100 rounded-lg"
        >
          Logout
        </button>
      </div>
    </div>
  );
};

export default Modal;
