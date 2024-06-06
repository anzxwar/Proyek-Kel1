import React from 'react';

const CardDua = ({ status1, status2, status3 }) => {
  return (
    <div style={{ borderRight: '2px solid black' }} className=" p-5">
      <div style={{color : "#03045e"}} className="font-bold text-lg mb-4">Current Status</div>
      <div style={{color : "#03045e"}} className="flex items-center mb-2">
        <div className="text-xl mr-2">{status1 === 'SOS' ? '❌' : '✔️'}</div>
        <div className="text-sm">{status1 === 'SOS' ? 'Fall' : 'Normal'} - {new Date().toLocaleString()}</div>
      </div>
      <div style={{color : "#03045e"}} className="flex items-center mb-2">
        <div className="text-xl mr-2">{status2 === 'SOS' ? '❌' : '✔️'}</div>
        <div className="text-sm">{status2 === 'SOS' ? 'Fall' : 'Normal'} - {new Date().toLocaleString()}</div>
      </div>
    </div>
  );
};

export default CardDua;
