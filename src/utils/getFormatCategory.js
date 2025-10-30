export const getFormatCategory = (format) => {
  const categories = {
    documents: ["PDF", "DOCX", "DOC", "TXT", "RTF"],
    images: ["JPG", "JPEG", "PNG", "GIF", "BMP", "WEBP"],
    audio: ["MP3", "WAV", "AAC", "OGG", "FLAC"],
    video: ["MP4", "AVI", "MOV", "WMV", "MKV", "WEBM"]
  };
  
  const upperFormat = format.toUpperCase();
  
  for (const [category, formats] of Object.entries(categories)) {
    if (formats.includes(upperFormat)) {
      return category;
    }
  }
  
  return "documents";
};