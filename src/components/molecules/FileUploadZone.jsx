import React, { useCallback } from "react";
import { cn } from "@/utils/cn";
import ApperIcon from "@/components/ApperIcon";

const FileUploadZone = ({ onFileSelect, isDragOver, setIsDragOver, disabled }) => {
  const handleDrop = useCallback((e) => {
    e.preventDefault();
    e.stopPropagation();
    setIsDragOver(false);
    
    if (disabled) return;
    
    const files = Array.from(e.dataTransfer.files);
    if (files.length > 0) {
      onFileSelect(files[0]);
    }
  }, [onFileSelect, setIsDragOver, disabled]);

  const handleDragOver = useCallback((e) => {
    e.preventDefault();
    e.stopPropagation();
  }, []);

  const handleDragEnter = useCallback((e) => {
    e.preventDefault();
    e.stopPropagation();
    if (!disabled) {
      setIsDragOver(true);
    }
  }, [setIsDragOver, disabled]);

  const handleDragLeave = useCallback((e) => {
    e.preventDefault();
    e.stopPropagation();
    if (!e.currentTarget.contains(e.relatedTarget)) {
      setIsDragOver(false);
    }
  }, [setIsDragOver]);

  const handleClick = () => {
    if (disabled) return;
    const input = document.createElement("input");
    input.type = "file";
    input.accept = "*/*";
    input.onchange = (e) => {
      const file = e.target.files[0];
      if (file) {
        onFileSelect(file);
      }
    };
    input.click();
  };

  return (
    <div
      onDrop={handleDrop}
      onDragOver={handleDragOver}
      onDragEnter={handleDragEnter}
      onDragLeave={handleDragLeave}
      onClick={handleClick}
      className={cn(
        "relative border-2 border-dashed rounded-xl p-12 text-center cursor-pointer transition-all duration-200 min-h-[200px] flex flex-col items-center justify-center",
        isDragOver
          ? "border-primary bg-gradient-to-br from-primary/5 to-secondary/10 scale-102"
          : "border-gray-300 hover:border-primary hover:bg-gray-50",
        disabled && "opacity-50 cursor-not-allowed pointer-events-none"
      )}
    >
      <div className="space-y-4">
        <div className={cn(
          "w-16 h-16 mx-auto rounded-full flex items-center justify-center transition-all duration-200",
          isDragOver 
            ? "bg-gradient-to-br from-primary to-secondary animate-bounce-gentle" 
            : "bg-gradient-to-br from-gray-100 to-gray-200"
        )}>
          <ApperIcon 
            name="Upload" 
            size={28} 
            className={cn(
              "transition-colors duration-200",
              isDragOver ? "text-white" : "text-gray-600"
            )} 
          />
        </div>
        <div className="space-y-2">
          <h3 className="text-lg font-semibold text-gray-800">
            {isDragOver ? "Drop your file here" : "Drop your file here or click to browse"}
          </h3>
          <p className="text-gray-600">
            Supports PDF, DOCX, JPG, PNG, MP3, MP4 and more
          </p>
        </div>
      </div>
    </div>
  );
};

export default FileUploadZone;