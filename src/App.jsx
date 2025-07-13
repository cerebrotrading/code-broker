import React from 'react';

const App = () => {
  return (
    <div className="min-h-screen bg-gray-900 text-white p-4">
      <h1 className="text-2xl font-bold mb-4">CODE BROKER</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="bg-gray-800 rounded-2xl p-2 shadow">META</div>
        <div className="bg-gray-800 rounded-2xl p-2 shadow">NVDA</div>
        <div className="bg-gray-800 rounded-2xl p-2 shadow">AMD</div>
      </div>
    </div>
  );
};

export default App;
