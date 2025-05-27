import { h } from 'preact';
import { useState, useRef } from 'preact/hooks';
import { uploadImage, uploadFromDataURL } from '../services/cloudinaryService';
import { dataURLtoBlob } from '../utils/imageUtils';

/**
 * CloudinaryUploader Component
 * 
 * A reusable component for uploading images to Cloudinary.
 * Supports drag and drop, file selection, and preview.
 */
const CloudinaryUploader = ({ 
  onUploadSuccess, 
  onUploadError, 
  folder = 'photobooth',
  allowedFormats = ['jpg', 'jpeg', 'png', 'gif', 'webp'],
  maxFileSize = 10485760, // 10MB
  multiple = false,
  className = ''
}) => {
  const [isDragging, setIsDragging] = useState(false);
  const [isUploading, setIsUploading] = useState(false);
  const [uploadProgress, setUploadProgress] = useState(0);
  const [previewUrl, setPreviewUrl] = useState(null);
  const fileInputRef = useRef(null);
  
  // Handle drag events
  const handleDragEnter = (e) => {
    e.preventDefault();
    e.stopPropagation();
    setIsDragging(true);
  };
  
  const handleDragLeave = (e) => {
    e.preventDefault();
    e.stopPropagation();
    setIsDragging(false);
  };
  
  const handleDragOver = (e) => {
    e.preventDefault();
    e.stopPropagation();
    if (!isDragging) {
      setIsDragging(true);
    }
  };
  
  // Handle file drop
  const handleDrop = (e) => {
    e.preventDefault();
    e.stopPropagation();
    setIsDragging(false);
    
    if (e.dataTransfer.files && e.dataTransfer.files.length > 0) {
      const files = multiple ? Array.from(e.dataTransfer.files) : [e.dataTransfer.files[0]];
      handleFiles(files);
    }
  };
  
  // Handle file input change
  const handleFileInputChange = (e) => {
    if (e.target.files && e.target.files.length > 0) {
      const files = multiple ? Array.from(e.target.files) : [e.target.files[0]];
      handleFiles(files);
    }
  };
  
  // Handle files (validation and preview)
  const handleFiles = (files) => {
    // Validate files
    const validFiles = files.filter(file => {
      // Check file type
      const fileExtension = file.name.split('.').pop().toLowerCase();
      const isValidFormat = allowedFormats.includes(fileExtension);
      
      // Check file size
      const isValidSize = file.size <= maxFileSize;
      
      return isValidFormat && isValidSize;
    });
    
    if (validFiles.length === 0) {
      onUploadError && onUploadError({
        message: `Invalid file(s). Please upload ${allowedFormats.join(', ')} files under ${maxFileSize / 1048576}MB.`
      });
      return;
    }
    
    // Create preview for the first file
    const file = validFiles[0];
    const reader = new FileReader();
    reader.onload = (e) => {
      setPreviewUrl(e.target.result);
    };
    reader.readAsDataURL(file);
    
    // Upload files
    uploadFiles(validFiles);
  };
  
  // Upload files to Cloudinary
  const uploadFiles = async (files) => {
    setIsUploading(true);
    setUploadProgress(0);
    
    try {
      const uploadPromises = files.map(async (file) => {
        // Create upload options
        const options = {
          folder,
          tags: ['photobooth', 'upload'],
          resource_type: 'image'
        };
        
        // Upload file
        const result = await uploadImage(file, options);
        
        // Update progress
        setUploadProgress(prev => prev + (100 / files.length));
        
        return result;
      });
      
      const results = await Promise.all(uploadPromises);
      
      // Call success callback
      onUploadSuccess && onUploadSuccess(multiple ? results : results[0]);
      
      // Reset state
      setIsUploading(false);
      setUploadProgress(0);
      
      // Clear file input
      if (fileInputRef.current) {
        fileInputRef.current.value = '';
      }
    } catch (error) {
      console.error('Error uploading to Cloudinary:', error);
      onUploadError && onUploadError(error);
      setIsUploading(false);
    }
  };
  
  // Upload from data URL (useful for camera captures or edited images)
  const uploadFromDataUrl = async (dataUrl) => {
    if (!dataUrl) return;
    
    setIsUploading(true);
    setUploadProgress(0);
    
    try {
      // Create upload options
      const options = {
        folder,
        tags: ['photobooth', 'upload'],
        resource_type: 'image'
      };
      
      // Upload data URL
      const result = await uploadFromDataURL(dataUrl, options);
      
      // Call success callback
      onUploadSuccess && onUploadSuccess(result);
      
      // Reset state
      setIsUploading(false);
      setUploadProgress(100);
      
      return result;
    } catch (error) {
      console.error('Error uploading to Cloudinary:', error);
      onUploadError && onUploadError(error);
      setIsUploading(false);
      return null;
    }
  };
  
  // Trigger file input click
  const triggerFileInput = () => {
    fileInputRef.current && fileInputRef.current.click();
  };
  
  return (
    <div className={`cloudinary-uploader ${className}`}>
      {/* Drag and drop area */}
      <div 
        className={`border-2 border-dashed rounded-lg p-6 text-center cursor-pointer transition-colors ${
          isDragging 
            ? 'border-blue-500 bg-blue-50' 
            : 'border-gray-300 hover:border-blue-400 hover:bg-gray-50'
        }`}
        onDragEnter={handleDragEnter}
        onDragLeave={handleDragLeave}
        onDragOver={handleDragOver}
        onDrop={handleDrop}
        onClick={triggerFileInput}
      >
        {/* Preview */}
        {previewUrl && !isUploading && (
          <div className="mb-4">
            <img 
              src={previewUrl} 
              alt="Upload preview" 
              className="max-h-48 mx-auto rounded-lg shadow-sm"
            />
          </div>
        )}
        
        {/* Icon */}
        {!previewUrl && (
          <div className="mb-4">
            <svg 
              xmlns="http://www.w3.org/2000/svg" 
              className="h-12 w-12 mx-auto text-gray-400"
              fill="none" 
              viewBox="0 0 24 24" 
              stroke="currentColor"
            >
              <path 
                strokeLinecap="round" 
                strokeLinejoin="round" 
                strokeWidth={1.5} 
                d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12" 
              />
            </svg>
          </div>
        )}
        
        {/* Text */}
        <p className="text-gray-700 mb-2">
          {isUploading ? 'Uploading...' : 'Drag and drop your image here'}
        </p>
        <p className="text-sm text-gray-500">
          or <span className="text-blue-500">click to browse</span>
        </p>
        
        {/* File types */}
        <p className="text-xs text-gray-400 mt-2">
          Accepted formats: {allowedFormats.join(', ')}
        </p>
        
        {/* Progress bar */}
        {isUploading && (
          <div className="w-full h-2 bg-gray-200 rounded-full mt-4 overflow-hidden">
            <div 
              className="h-full bg-blue-500 rounded-full transition-all duration-300"
              style={{ width: `${uploadProgress}%` }}
            ></div>
          </div>
        )}
      </div>
      
      {/* Hidden file input */}
      <input 
        type="file" 
        ref={fileInputRef}
        className="hidden"
        accept={allowedFormats.map(format => `.${format}`).join(',')}
        multiple={multiple}
        onChange={handleFileInputChange}
      />
    </div>
  );
};

export default CloudinaryUploader;
