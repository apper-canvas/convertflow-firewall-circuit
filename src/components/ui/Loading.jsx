import ApperIcon from "@/components/ApperIcon";

const Loading = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-background to-indigo-50">
      <div className="text-center space-y-6">
        <div className="relative">
          <div className="w-16 h-16 border-4 border-primary/20 rounded-full animate-spin">
            <div className="absolute top-0 left-0 w-16 h-16 border-4 border-transparent border-t-primary rounded-full animate-spin" />
          </div>
        </div>
        <div className="space-y-2">
          <h3 className="text-lg font-semibold text-gray-800">Loading ConvertFlow</h3>
          <p className="text-gray-600">Preparing your file conversion experience...</p>
        </div>
        <div className="space-y-3 max-w-md">
          <div className="h-4 bg-gray-200 rounded-lg animate-pulse" />
          <div className="h-3 bg-gray-200 rounded-lg animate-pulse w-3/4 mx-auto" />
          <div className="h-3 bg-gray-200 rounded-lg animate-pulse w-1/2 mx-auto" />
        </div>
      </div>
    </div>
  );
};

export default Loading;