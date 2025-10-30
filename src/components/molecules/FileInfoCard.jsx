import Card from "@/components/atoms/Card";
import Badge from "@/components/atoms/Badge";
import ApperIcon from "@/components/ApperIcon";
import { formatFileSize } from "@/utils/formatFileSize";
import { getFormatCategory } from "@/utils/getFormatCategory";
import { getFormatIcon } from "@/utils/getFormatIcon";

const FileInfoCard = ({ file }) => {
  if (!file) return null;

  const fileExtension = file.name.split(".").pop()?.toUpperCase() || "UNKNOWN";
  const category = getFormatCategory(fileExtension);
  const iconName = getFormatIcon(fileExtension);

  return (
    <Card className="p-6">
      <div className="flex items-start gap-4">
        <div className="w-12 h-12 bg-gradient-to-br from-primary/10 to-secondary/20 rounded-lg flex items-center justify-center flex-shrink-0">
          <ApperIcon name={iconName} size={24} className="text-primary" />
        </div>
        <div className="flex-1 min-w-0">
          <div className="flex items-start justify-between gap-2">
            <div className="min-w-0 flex-1">
              <h3 className="font-medium text-gray-900 truncate" title={file.name}>
                {file.name}
              </h3>
              <p className="text-sm text-gray-600 mt-1">
                {formatFileSize(file.size)}
              </p>
            </div>
            <Badge variant={category} className="flex-shrink-0">
              {fileExtension}
            </Badge>
          </div>
          <div className="mt-3 flex items-center gap-2 text-xs text-gray-500">
            <ApperIcon name="Calendar" size={14} />
            <span>Uploaded {new Date().toLocaleDateString()}</span>
          </div>
        </div>
      </div>
    </Card>
  );
};

export default FileInfoCard;