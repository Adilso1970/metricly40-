import React from 'react';

export default function UploadScreen({ onFileSelect }) {
  return (
    <div>
      <h1>Envie seu arquivo</h1>
      <input
        type="file"
        onChange={e => onFileSelect && onFileSelect(e.target.files[0])}
      />
    </div>
  );
}
