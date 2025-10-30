import Card from "@/components/atoms/Card";
import ProgressBar from "@/components/atoms/ProgressBar";
import ApperIcon from "@/components/ApperIcon";

const ConversionProgress = ({ progress, status, isConverting }) => {
  if (!isConverting) return null;

  const getStatusIcon = () => {
    if (progress === 100) return "CheckCircle";
    return "Loader";
  };

  const getStatusColor = () => {
    if (progress === 100) return "text-success";
    return "text-primary";
  };

  return (
    <Card className="p-6">
      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <h3 className="font-medium text-gray-900">Converting File</h3>
          <div className="flex items-center gap-2">
            <ApperIcon 
              name={getStatusIcon()} 
              size={16} 
              className={`${getStatusColor()} ${progress < 100 ? "animate-spin" : ""}`} 
            />
            <span className="text-sm text-gray-600">{status}</span>
          </div>
        </div>
        <ProgressBar value={progress} max={100} showLabel={true} />
        <p className="text-xs text-gray-500 text-center">
          {progress < 100 
            ? "Please wait while we convert your file..." 
            : "Conversion completed successfully!"
          }
        </p>
      </div>
    </Card>
  );
};

export default ConversionProgress;