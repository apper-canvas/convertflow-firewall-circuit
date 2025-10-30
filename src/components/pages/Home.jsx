import FileConverter from "@/components/organisms/FileConverter";

const Home = () => {
  return (
    <div className="space-y-8">
      <div className="text-center space-y-4">
        <h2 className="text-3xl font-bold text-gray-900">
          Convert Files Instantly
        </h2>
        <p className="text-lg text-gray-600 max-w-md mx-auto">
          Transform your documents, images, audio, and video files between different formats with ease.
        </p>
      </div>
      
      <FileConverter />
      
      <div className="mt-12 pt-8 border-t border-gray-200">
        <div className="text-center space-y-4">
          <h3 className="text-lg font-semibold text-gray-800">
            Supported Formats
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm text-gray-600">
            <div className="space-y-1">
              <div className="font-medium text-blue-600">Documents</div>
              <div>PDF, DOCX</div>
            </div>
            <div className="space-y-1">
              <div className="font-medium text-purple-600">Images</div>
              <div>JPG, PNG</div>
            </div>
            <div className="space-y-1">
              <div className="font-medium text-green-600">Audio</div>
              <div>MP3, WAV</div>
            </div>
            <div className="space-y-1">
              <div className="font-medium text-orange-600">Video</div>
              <div>MP4, AVI</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;