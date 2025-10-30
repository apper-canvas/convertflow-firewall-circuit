import React, { useState, useEffect } from "react";
import Card from "@/components/atoms/Card";
import Badge from "@/components/atoms/Badge";
import ApperIcon from "@/components/ApperIcon";
import { formatFileSize } from "@/utils/formatFileSize";
import { getFormatCategory } from "@/utils/getFormatCategory";
import { getFormatIcon } from "@/utils/getFormatIcon";

const PreviewPanel = ({ file, className = "" }) => {
  const [previewUrl, setPreviewUrl] = useState(null);
  const [imageError, setImageError] = useState(false);

  useEffect(() => {
    if (!file) {
      setPreviewUrl(null);
      setImageError(false);
      return;
    }

    // Create object URL for image preview
    const fileExtension = file.name.split(".").pop().toLowerCase();
    const imageFormats = ["jpg", "jpeg", "png", "gif", "webp", "svg", "bmp"];

    if (imageFormats.includes(fileExtension)) {
      const url = URL.createObjectURL(file);
      setPreviewUrl(url);

      // Cleanup function to revoke object URL
      return () => {
        URL.revokeObjectURL(url);
      };
    }
  }, [file]);

  if (!file) {
    return null;
  }

  const fileExtension = file.name.split(".").pop().toLowerCase();
  const formatCategory = getFormatCategory(fileExtension);
  const formatIcon = getFormatIcon(fileExtension);
  const isImage = previewUrl !== null;

  const handleImageError = () => {
    setImageError(true);
  };

  return (
    <Card className={`p-6 ${className}`}>
      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <h3 className="text-lg font-semibold text-gray-900">File Preview</h3>
          <Badge variant="outline" className="capitalize">
            {formatCategory}
          </Badge>
        </div>

        <div className="relative bg-gradient-to-br from-gray-50 to-gray-100 rounded-lg border-2 border-dashed border-gray-300 overflow-hidden">
          {isImage && !imageError ? (
            <div className="flex items-center justify-center min-h-[300px] max-h-[400px] p-4">
              <img
                src={previewUrl}
                alt={file.name}
                className="max-w-full max-h-[380px] object-contain rounded"
                onError={handleImageError}
              />
            </div>
          ) : (
            <div className="flex flex-col items-center justify-center min-h-[300px] p-8">
              <div className="w-24 h-24 rounded-full bg-gradient-to-br from-primary/10 to-secondary/10 flex items-center justify-center mb-4">
                <ApperIcon
                  name={imageError ? "AlertCircle" : formatIcon}
                  size={48}
                  className={imageError ? "text-warning" : "text-primary"}
                />
              </div>
              <p className="text-sm font-medium text-gray-900 mb-1">
                {imageError ? "Preview Unavailable" : "Document File"}
              </p>
              <p className="text-xs text-gray-500">
                {imageError
                  ? "Unable to display image preview"
                  : "Preview not available for this file type"}
              </p>
            </div>
          )}
        </div>

        <div className="flex items-center justify-between text-sm">
          <span className="text-gray-600 truncate flex-1 mr-4">{file.name}</span>
          <span className="text-gray-500 font-medium whitespace-nowrap">
            {formatFileSize(file.size)}
          </span>
        </div>
      </div>
    </Card>
  );
};

export default PreviewPanel;