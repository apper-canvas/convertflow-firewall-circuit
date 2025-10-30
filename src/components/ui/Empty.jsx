import Button from "@/components/atoms/Button";
import ApperIcon from "@/components/ApperIcon";

const Empty = ({ 
  title = "No files uploaded yet", 
  description = "Drop a file or click browse to get started with your first conversion",
  actionText = "Browse Files",
  onAction,
  icon = "Upload"
}) => {
  return (
    <div className="text-center space-y-6 p-8">
      <div className="w-20 h-20 bg-gradient-to-br from-blue-100 to-purple-200 rounded-full flex items-center justify-center mx-auto">
        <ApperIcon name={icon} size={32} className="text-primary" />
      </div>
      <div className="space-y-2">
        <h3 className="text-lg font-semibold text-gray-800">{title}</h3>
        <p className="text-gray-600 max-w-md mx-auto">{description}</p>
      </div>
      {onAction && (
        <Button onClick={onAction} variant="primary" className="mx-auto">
          <ApperIcon name="Upload" size={16} className="mr-2" />
          {actionText}
        </Button>
      )}
    </div>
  );
};

export default Empty;