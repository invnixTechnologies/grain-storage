const FileUpload = ({ label, onChange, preview, fileName }) => (
  <>
    <div className="mb-4">
      <label className="block text-sm font-medium text-gray-700 dark:text-gray-200 mb-1">
        {label}
      </label>
      <div className="flex items-center gap-4">
        <label className="cursor-pointer px-4 py-2 bg-blue-600 text-white text-sm rounded shadow hover:bg-blue-700 dark:bg-blue-700 dark:hover:bg-blue-800 transition border border-blue-600 dark:border-blue-700">
          Upload File
          <input
            type="file"
            accept="image/*"
            className="hidden"
            onChange={onChange}
          />
        </label>
        {fileName && (
          <span className="text-xs text-gray-600 dark:text-gray-300 truncate max-w-[120px]">
            {fileName}
          </span>
        )}
        {preview && (
          <img
            src={preview}
            alt="Preview"
            className="h-16 w-16 object-cover rounded border"
          />
        )}
      </div>
    </div>
  </>
);

export default FileUpload;
