import ApperIcon from "@/components/ApperIcon";

const Header = () => {
  return (
    <header className="bg-white border-b border-gray-100">
      <div className="max-w-4xl mx-auto px-6 py-4">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 bg-gradient-to-br from-primary to-secondary rounded-lg flex items-center justify-center">
            <ApperIcon name="RefreshCw" size={20} className="text-white" />
          </div>
          <div>
            <h1 className="text-xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              ConvertFlow
            </h1>
            <p className="text-sm text-gray-600">Universal File Converter</p>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;