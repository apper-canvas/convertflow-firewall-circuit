export const getFormatIcon = (format) => {
  const upperFormat = format.toUpperCase();
  
  const iconMap = {
    // Documents
    PDF: "FileText",
    DOCX: "FileText",
    DOC: "FileText",
    TXT: "FileText",
    RTF: "FileText",
    
    // Images
    JPG: "Image",
    JPEG: "Image", 
    PNG: "Image",
    GIF: "Image",
    BMP: "Image",
    WEBP: "Image",
    
    // Audio
    MP3: "Music",
    WAV: "Music",
    AAC: "Music",
    OGG: "Music",
    FLAC: "Music",
    
    // Video
    MP4: "Video",
    AVI: "Video",
    MOV: "Video",
    WMV: "Video",
    MKV: "Video",
    WEBM: "Video"
  };
  
  return iconMap[upperFormat] || "File";
};