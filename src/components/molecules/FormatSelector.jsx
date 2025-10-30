import Select from "@/components/atoms/Select";
import ApperIcon from "@/components/ApperIcon";

const FormatSelector = ({ value, onChange, disabled, currentFormat }) => {
  const formatOptions = [
    { value: "", label: "Select target format", disabled: true },
    { value: "PDF", label: "PDF Document", category: "Documents" },
    { value: "DOCX", label: "Word Document", category: "Documents" },
    { value: "JPG", label: "JPEG Image", category: "Images" },
    { value: "PNG", label: "PNG Image", category: "Images" },
    { value: "MP3", label: "MP3 Audio", category: "Audio" },
    { value: "MP4", label: "MP4 Video", category: "Video" }
  ];

  // Filter out the current format to prevent same-format conversion
  const availableFormats = formatOptions.filter(option => 
    option.value === "" || option.value !== currentFormat
  );

  return (
    <div className="space-y-2">
      <label className="block text-sm font-medium text-gray-700">
        Convert to Format
      </label>
      <div className="relative">
        <Select
          value={value}
          onChange={(e) => onChange(e.target.value)}
          disabled={disabled}
          className="appearance-none pr-10"
        >
          {availableFormats.map((option) => (
            <option
              key={option.value}
              value={option.value}
              disabled={option.disabled}
              className={option.disabled ? "text-gray-400" : ""}
            >
              {option.label}
            </option>
          ))}
        </Select>
        <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
          <ApperIcon name="ChevronDown" size={16} className="text-gray-400" />
        </div>
      </div>
      {currentFormat && (
        <p className="text-xs text-gray-500">
          Current format: <span className="font-medium">{currentFormat}</span>
        </p>
      )}
    </div>
  );
};

export default FormatSelector;