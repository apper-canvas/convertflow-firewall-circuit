import Button from "@/components/atoms/Button";
import ApperIcon from "@/components/ApperIcon";

const Error = ({ message = "Something went wrong", onRetry, showRetry = true }) => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-background to-red-50 p-6">
      <div className="text-center space-y-6 max-w-md">
        <div className="w-20 h-20 bg-gradient-to-br from-red-100 to-red-200 rounded-full flex items-center justify-center mx-auto">
          <ApperIcon name="AlertTriangle" size={32} className="text-error" />
        </div>
        <div className="space-y-2">
          <h3 className="text-xl font-semibold text-gray-800">Oops! Something went wrong</h3>
          <p className="text-gray-600">{message}</p>
        </div>
        {showRetry && onRetry && (
          <div className="space-y-3">
            <Button onClick={onRetry} variant="primary">
              <ApperIcon name="RotateCcw" size={16} className="mr-2" />
              Try Again
            </Button>
            <p className="text-sm text-gray-500">
              If the problem persists, please check your internet connection and try again.
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Error;