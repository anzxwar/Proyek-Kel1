import React from 'react';

const CardDua = ({ status1, status2, status3 }) => {
  return (
    <div className="border rounded-lg p-5 bg-white">
      <div className="font-bold text-blue-700 text-lg mb-4">Current Status</div>
      <div className="flex items-center mb-2">
        <div className="text-xl mr-2">{status1 === 'SOS' ? 'SOS' : '✔️'}</div>
        <div className="text-sm">{status1 === 'SOS' ? 'Fall' : 'Normal'} - {new Date().toLocaleString()}</div>
      </div>
      <div className="flex items-center mb-2">
        <div className="text-xl mr-2">{status2 === 'SOS' ? 'SOS' : '✔️'}</div>
        <div className="text-sm">{status2 === 'SOS' ? 'Fall' : 'Normal'} - {new Date().toLocaleString()}</div>
      </div>
      <div className="flex items-center">
        <div className="text-xl mr-2">{status3 === 'SOS' ? 'SOS' : '✔️'}</div>
        <div className="text-sm">{status3 === 'SOS' ? 'Fall' : 'Normal'} - {new Date().toLocaleString()}</div>
      </div>
    </div>
  );
};

export default CardDua;
