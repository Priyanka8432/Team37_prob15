import React, { useCallback, useState } from 'react';

const DragDropUpload = ({ onFileUpload }) => {
  const [isDragging, setIsDragging] = useState(false);

  const handleDrag = useCallback((e) => {
    e.preventDefault();
    e.stopPropagation();
    if (e.type === 'dragenter' || e.type === 'dragover') {
      setIsDragging(true);
    } else {
      setIsDragging(false);
    }
  }, []);

  const handleDrop = useCallback((e) => {
    e.preventDefault();
    e.stopPropagation();
    setIsDragging(false);
    const file = e.dataTransfer.files[0];
    if (file && file.type.startsWith('image/')) {
      onFileUpload(file);
    }
  }, [onFileUpload]);

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file && file.type.startsWith('image/')) {
      onFileUpload(file);
    }
  };

  return (
    <div
      className={`border-2 border-dashed rounded-lg p-8 text-center ${
        isDragging ? 'border-blue-500 bg-blue-50' : 'border-gray-300'
      }`}
      onDragEnter={handleDrag}
      onDragOver={handleDrag}
      onDragLeave={handleDrag}
      onDrop={handleDrop}
    >
      <input
        type="file"
        id="drag-drop-input"
        accept="image/*"
        onChange={handleFileChange}
        className="hidden"
      />
      <label htmlFor="drag-drop-input" className="cursor-pointer">
        <p className="text-gray-600 mb-2">Drag & drop your product image here</p>
        <p className="text-gray-500 mb-4">or</p>
        <button className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded">
          Select Image
        </button>
      </label>
    </div>
  );
};

export default DragDropUpload;