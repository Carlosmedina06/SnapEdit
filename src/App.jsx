import Filter from './components/filter/Filter'
import Rotate from './components/rotate/Rotate'
import { Botones } from './components/buttonimg/Botones'
import CropImage from './components/cropImage/CropImage'
import useImage from './utils/hooks/useImage'
import Footer from './components/footer/footer'
function App() {
  const {
    filterElement,
    property,
    setProperty,
    setDetails,
    crop,
    setCrop,
    state,
    inputHandle,
    leftRotate,
    rightRotate,
    verticalFlip,
    horizentalFlip,
    reset,
    redo,
    undo,
    imageHandle,
    imageCrop,
    saveImage,
  } = useImage()

  return (
    <main className="bg-gradient-to-b from-gray-700 via-gray-900 to-black min-h-screen p-16">
      <section className="container flex justify-around flex-col md:flex-row mx-auto px-4 rounded-lg  bg-slate-600 ">
        <article className="flex flex-col justify-start py-6">
          <Filter
            filterElement={filterElement}
            inputHandle={inputHandle}
            property={property}
            setProperty={setProperty}
            state={state}
          />

          <Rotate
            horizontalFlip={horizentalFlip}
            leftRotate={leftRotate}
            rightRotate={rightRotate}
            verticalFlip={verticalFlip}
          />
        </article>

        <article className="flex flex-col justify-end py-6">
          <CropImage
            crop={crop}
            imageCrop={imageCrop}
            imageHandle={imageHandle}
            setCrop={setCrop}
            setDetails={setDetails}
            state={state}
          />
          <Botones redo={redo} reset={reset} saveImage={saveImage} undo={undo} />
        </article>
      </section>
      <Footer />
    </main>
  )
}

export default App
