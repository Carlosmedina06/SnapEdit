import ReactCrop from 'react-image-crop'

import UploadImg from '../uploadImg/UploadImg'
import { Button } from '../Button/Button'

const CropImage = ({ imageCrop, crop, state, setDetails, setCrop, imageHandle }) => {
  return (
    <div className="flex flex-col justify-center items-center">
      <div className="flex flex-col justify-center  w-64 sm:w-96 min-h-[350px] items-center border-dashed rounded-lg border-2 mb-5">
        {state.image ? (
          <ReactCrop crop={crop} onChange={(c) => setCrop(c)}>
            <img
              alt="imagen selected"
              className="w-64  sm:w-96  object-cover rounded-lg"
              src={state.image}
              style={{
                filter: `brightness(${state.brightness}%) brightness(${state.brightness}%) sepia(${state.sepia}%) saturate(${state.saturate}%) contrast(${state.contrast}%) grayscale(${state.grayscale}%) hue-rotate(${state.hueRotate}deg)`,
                transform: `rotate(${state.rotate}deg) scale(${state.vertical},${state.horizental})`,
              }}
              onLoad={(e) => setDetails(e.currentTarget)}
            />
          </ReactCrop>
        ) : (
          <UploadImg imageHandle={imageHandle} />
        )}
      </div>
      <div className="mb-2">{crop && <Button onClick={imageCrop}>Crop Image</Button>}</div>
    </div>
  )
}

export default CropImage
