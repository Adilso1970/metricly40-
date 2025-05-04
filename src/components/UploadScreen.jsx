import React from 'react';

export default function UploadScreen({ onFileSelect }) {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-md text-center max-w-sm w-full">
        <h2 className="text-xl font-semibold mb-4">Envie seu arquivo</h2>
        <input
          type="file"
          accept=".csv, .xlsx"
          onChange={e => onFileSelect(e.target.files)}
          className="
            block w-full text-sm text-gray-700
            file:mr-4 file:py-2 file:px-4 file:rounded file:border-0
            file:text-sm file:font-semibold file:bg-teal-600 file:text-white
            hover:file:bg-teal-700 focus:outline-none
          "
        />
      </div>
    </div>
  );
}
