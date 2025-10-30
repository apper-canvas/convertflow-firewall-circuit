import Button from "@/components/atoms/Button";
import ApperIcon from "@/components/ApperIcon";
import { formatFileSize } from "@/utils/formatFileSize";

const DownloadButton = ({ 
  onDownload, 
  fileName, 
  fileSize, 
  disabled = false,
  className = ""
}) => {
  return (
    <Button 
      onClick={onDownload}
      disabled={disabled}
      variant="success"
      size="lg"
      className={`w-full ${className}`}
    >
      <ApperIcon name="Download" size={20} className="mr-3" />
      <div className="flex flex-col items-start">
        <span className="font-medium">Download Converted File</span>
        <span className="text-xs opacity-90">
          {fileName} • {formatFileSize(fileSize)}
        </span>
      </div>
    </Button>
  );
};

export default DownloadButton;