import conversionHistoryData from "@/services/mockData/conversionHistory.json";

class ConversionService {
  constructor() {
    this.history = [...conversionHistoryData];
  }

  async convertFile(file, targetFormat) {
    // Simulate network delay
    await new Promise(resolve => setTimeout(resolve, 500));
    
    try {
      // Get file extension
      const originalFormat = file.name.split(".").pop()?.toUpperCase() || "UNKNOWN";
      
      // Simulate conversion by creating a new blob
      const convertedBlob = new Blob([file], { 
        type: this.getMimeType(targetFormat) 
      });
      
      // Generate new filename
      const baseName = file.name.substring(0, file.name.lastIndexOf("."));
      const newFileName = `${baseName}_converted.${targetFormat.toLowerCase()}`;
      
      // Create conversion record
      const conversionRecord = {
        Id: this.getNextId(),
        originalName: file.name,
        fromFormat: originalFormat,
        toFormat: targetFormat,
        completedAt: new Date().toISOString(),
        downloadUrl: URL.createObjectURL(convertedBlob)
      };
      
      // Add to history
      this.history.unshift(conversionRecord);
      
      // Keep only last 10 conversions
      if (this.history.length > 10) {
        this.history = this.history.slice(0, 10);
      }
      
      return {
        blob: convertedBlob,
        fileName: newFileName,
        size: file.size,
        originalFormat,
        targetFormat,
        conversionId: conversionRecord.Id
      };
    } catch (error) {
      throw new Error("Conversion failed. Please try again.");
    }
  }

  async getConversionHistory() {
    // Simulate network delay
    await new Promise(resolve => setTimeout(resolve, 200));
    return [...this.history];
  }

  getNextId() {
    const maxId = this.history.reduce((max, item) => 
      Math.max(max, item.Id), 0
    );
    return maxId + 1;
  }

  getMimeType(format) {
    const mimeTypes = {
      "PDF": "application/pdf",
      "DOCX": "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
      "DOC": "application/msword",
      "JPG": "image/jpeg",
      "JPEG": "image/jpeg", 
      "PNG": "image/png",
      "GIF": "image/gif",
      "MP3": "audio/mpeg",
      "WAV": "audio/wav",
      "MP4": "video/mp4",
      "AVI": "video/x-msvideo"
    };
    
    return mimeTypes[format.toUpperCase()] || "application/octet-stream";
  }

  getSupportedFormats() {
    return [
      { format: "PDF", category: "documents", label: "PDF Document" },
      { format: "DOCX", category: "documents", label: "Word Document" },
      { format: "JPG", category: "images", label: "JPEG Image" },
      { format: "PNG", category: "images", label: "PNG Image" },
      { format: "MP3", category: "audio", label: "MP3 Audio" },
      { format: "MP4", category: "video", label: "MP4 Video" }
    ];
  }
}

export const conversionService = new ConversionService();