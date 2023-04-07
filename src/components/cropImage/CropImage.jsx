import ReactCrop from 'react-image-crop'

const CropImage = (
  {imageCrop, crop, state, setDetails, setCrop}, // crop is a boolean value
) => {
  return (
    <>
      {crop && (
        <button
          className="rounded-lg px-4 py-2 capitalize text-white text-sm bg-violet-500 hover:bg-violet-600 active:bg-violet-700 focus:outline-none focus:ring focus:ring-violet-300"
          onClick={imageCrop}
        >
          Crop Image
        </button>
      )}

      <div>
        {state.image ? (
          <ReactCrop crop={crop} onChange={(c) => setCrop(c)}>
            <img
              alt="imagen selected"
              className="w-80 object-cover rounded-lg"
              src={state.image}
              style={{
                filter: `brightness(${state.brightness}%) brightness(${state.brightness}%) sepia(${state.sepia}%) saturate(${state.saturate}%) contrast(${state.contrast}%) grayscale(${state.grayscale}%) hue-rotate(${state.hueRotate}deg)`,
                transform: `rotate(${state.rotate}deg) scale(${state.vertical},${state.horizental})`,
              }}
              onLoad={(e) => setDetails(e.currentTarget)}
            />
          </ReactCrop>
        ) : (
          <label htmlFor="choose">
            <span>Choose Image</span>
          </label>
        )}
      </div>
    </>
  )
}

export default CropImage
