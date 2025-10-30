import React, { useState } from "react";
import { toast } from "react-toastify";
import FileUploadZone from "@/components/molecules/FileUploadZone";
import FileInfoCard from "@/components/molecules/FileInfoCard";
import FormatSelector from "@/components/molecules/FormatSelector";
import ConversionProgress from "@/components/molecules/ConversionProgress";
import DownloadButton from "@/components/molecules/DownloadButton";
import Button from "@/components/atoms/Button";
import ApperIcon from "@/components/ApperIcon";
import { conversionService } from "@/services/api/conversionService";

const FileConverter = () => {
  const [selectedFile, setSelectedFile] = useState(null);
  const [targetFormat, setTargetFormat] = useState("");
  const [isDragOver, setIsDragOver] = useState(false);
  const [isConverting, setIsConverting] = useState(false);
  const [conversionProgress, setConversionProgress] = useState(0);
  const [conversionStatus, setConversionStatus] = useState("");
  const [convertedFile, setConvertedFile] = useState(null);

  const handleFileSelect = (file) => {
    setSelectedFile(file);
    setTargetFormat("");
    setConvertedFile(null);
    setConversionProgress(0);
    toast.success(`File "${file.name}" uploaded successfully!`);
  };

  const handleConvert = async () => {
    if (!selectedFile || !targetFormat) {
      toast.error("Please select a file and target format");
      return;
    }

    setIsConverting(true);
    setConversionProgress(0);
    setConvertedFile(null);

    try {
      // Simulate conversion progress
      const progressSteps = [
        { progress: 20, status: "Analyzing file..." },
        { progress: 40, status: "Processing content..." },
        { progress: 60, status: "Converting format..." },
        { progress: 80, status: "Optimizing output..." },
        { progress: 100, status: "Conversion complete!" }
      ];

      for (const step of progressSteps) {
        setConversionProgress(step.progress);
        setConversionStatus(step.status);
        await new Promise(resolve => setTimeout(resolve, 800));
      }

      // Create converted file blob
      const result = await conversionService.convertFile(selectedFile, targetFormat);
      setConvertedFile(result);
      
      toast.success(`File converted to ${targetFormat} successfully!`);
    } catch (error) {
      toast.error("Conversion failed. Please try again.");
      setConversionProgress(0);
      setConversionStatus("");
    } finally {
      setIsConverting(false);
    }
  };

  const handleDownload = () => {
    if (!convertedFile) return;

    const url = URL.createObjectURL(convertedFile.blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = convertedFile.fileName;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);

    toast.success("File downloaded successfully!");
  };

  const handleReset = () => {
    setSelectedFile(null);
    setTargetFormat("");
    setConvertedFile(null);
    setConversionProgress(0);
    setConversionStatus("");
    setIsConverting(false);
    setIsDragOver(false);
  };

  const getCurrentFormat = () => {
    if (!selectedFile) return "";
    return selectedFile.name.split(".").pop()?.toUpperCase() || "";
  };

  const canConvert = selectedFile && targetFormat && !isConverting;

  return (
    <div className="space-y-6">
      {!selectedFile ? (
        <FileUploadZone
          onFileSelect={handleFileSelect}
          isDragOver={isDragOver}
          setIsDragOver={setIsDragOver}
          disabled={isConverting}
        />
      ) : (
        <div className="space-y-6">
          <FileInfoCard file={selectedFile} />
          
          <FormatSelector
            value={targetFormat}
            onChange={setTargetFormat}
            disabled={isConverting}
            currentFormat={getCurrentFormat()}
          />

          <ConversionProgress
            progress={conversionProgress}
            status={conversionStatus}
            isConverting={isConverting}
          />

          <div className="flex gap-3">
            <Button
              onClick={handleConvert}
              disabled={!canConvert}
              variant="primary"
              size="lg"
              className="flex-1"
            >
              {isConverting ? (
                <>
                  <ApperIcon name="Loader" size={16} className="mr-2 animate-spin" />
                  Converting...
                </>
              ) : (
                <>
                  <ApperIcon name="RefreshCw" size={16} className="mr-2" />
                  Convert File
                </>
              )}
            </Button>
            
            <Button
              onClick={handleReset}
              variant="secondary"
              size="lg"
              disabled={isConverting}
            >
              <ApperIcon name="X" size={16} className="mr-2" />
              Reset
            </Button>
          </div>

          {convertedFile && (
            <DownloadButton
              onDownload={handleDownload}
              fileName={convertedFile.fileName}
              fileSize={convertedFile.size}
            />
          )}
        </div>
      )}
    </div>
  );
};

export default FileConverter;