const UploadImg = ({imageHandle}) => {
  return (
    <div className="flex flex-col">
      <label className="text-3xl font-extrabold mt-2 text-white mb-4" htmlFor="file_input">
        Upload file
      </label>
      <input
        aria-describedby="file_input_help"
        className="w-full mt-1 text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400"
        id="file_input"
        type="file"
        onChange={imageHandle}
      />
      <p className="mt-1 text-sm text-gray-500 dark:text-gray-300" id="file_input_help">
        PNG, JPG, GIF up to 10MB
      </p>
    </div>
  )
}

export default UploadImg
