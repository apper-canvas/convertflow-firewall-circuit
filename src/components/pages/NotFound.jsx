import Button from "@/components/atoms/Button";
import ApperIcon from "@/components/ApperIcon";
import { useNavigate } from "react-router-dom";

const NotFound = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-background to-purple-50 p-6">
      <div className="text-center space-y-8 max-w-md">
        <div className="space-y-4">
          <div className="w-24 h-24 bg-gradient-to-br from-primary/20 to-secondary/30 rounded-full flex items-center justify-center mx-auto">
            <ApperIcon name="FileX" size={40} className="text-primary" />
          </div>
          <div className="space-y-2">
            <h1 className="text-4xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              404
            </h1>
            <h2 className="text-xl font-semibold text-gray-800">
              Page Not Found
            </h2>
            <p className="text-gray-600">
              The page you're looking for doesn't exist or has been moved.
            </p>
          </div>
        </div>
        
        <div className="space-y-4">
          <Button 
            onClick={() => navigate("/")}
            variant="primary"
            size="lg"
            className="w-full"
          >
            <ApperIcon name="Home" size={16} className="mr-2" />
            Back to Converter
          </Button>
          
          <Button 
            onClick={() => navigate(-1)}
            variant="secondary"
            size="md"
            className="w-full"
          >
            <ApperIcon name="ArrowLeft" size={16} className="mr-2" />
            Go Back
          </Button>
        </div>
      </div>
    </div>
  );
};

export default NotFound;