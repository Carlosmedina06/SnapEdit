import { useState } from 'react'
import 'react-image-crop/dist/ReactCrop.css'

import storeData from '../functions/createList'

const useImage = () => {
  const filterElement = [
    {
      name: 'brightness',
      maxValue: 200,
    },
    {
      name: 'grayscale',
      maxValue: 200,
    },
    {
      name: 'sepia',
      maxValue: 200,
    },
    {
      name: 'saturate',
      maxValue: 200,
    },
    {
      name: 'contrast',
      maxValue: 200,
    },
    {
      name: 'hueRotate',
    },
  ]
  const [property, setProperty] = useState({
    name: 'brightness',
    maxValue: 200,
  })
  const [details, setDetails] = useState('')
  const [crop, setCrop] = useState('')
  const [state, setState] = useState({
    image: '',
    brightness: 100,
    grayscale: 0,
    sepia: 0,
    saturate: 100,
    contrast: 100,
    hueRotate: 0,
    rotate: 0,
    vertical: 1,
    horizental: 1,
  })

  const inputHandle = (e) => {
    setState({
      ...state,
      [e.target.name]: e.target.value,
    })
    const stateData = state

    stateData[e.target.name] = e.target.value
    storeData.insert(stateData)
  }

  const leftRotate = () => {
    setState({
      ...state,
      rotate: state.rotate - 90,
    })

    const stateData = state

    stateData.rotate = state.rotate - 90
    storeData.insert(stateData)
  }

  const rightRotate = () => {
    setState({
      ...state,
      rotate: state.rotate + 90,
    })
    const stateData = state

    stateData.rotate = state.rotate + 90
    storeData.insert(stateData)
  }
  const verticalFlip = () => {
    setState({
      ...state,
      vertical: state.vertical === 1 ? -1 : 1,
    })
    const stateData = state

    stateData.vertical = state.vertical === 1 ? -1 : 1
    storeData.insert(stateData)
  }

  const horizentalFlip = () => {
    setState({
      ...state,
      horizental: state.horizental === 1 ? -1 : 1,
    })
    const stateData = state

    stateData.horizental = state.horizental === 1 ? -1 : 1
    storeData.insert(stateData)
  }

  const reset = () => {
    setState({
      ...state,
      brightness: 100,
      grayscale: 0,
      sepia: 0,
      saturate: 100,
      contrast: 100,
      hueRotate: 0,
      rotate: 0,
      vertical: 1,
      horizental: 1,
    })
  }

  const redo = () => {
    const data = storeData.redoEdit()

    if (data) {
      setState(data)
    }
  }
  const undo = () => {
    const data = storeData.undoEdit()

    if (data) {
      setState(data)
    }
  }
  const imageHandle = (e) => {
    if (e.target.files.length !== 0) {
      const reader = new FileReader()

      reader.onload = () => {
        setState({
          ...state,
          image: reader.result,
        })

        const stateData = {
          image: reader.result,
          brightness: 100,
          grayscale: 0,
          sepia: 0,
          saturate: 100,
          contrast: 100,
          hueRotate: 0,
          rotate: 0,
          vertical: 1,
          horizental: 1,
        }

        storeData.insert(stateData)
      }
      reader.readAsDataURL(e.target.files[0])
    }
  }

  const imageCrop = () => {
    const canvas = document.createElement('canvas')
    const scaleX = details.naturalWidth / details.width
    const scaleY = details.naturalHeight / details.height

    canvas.width = crop.width
    canvas.height = crop.height
    const ctx = canvas.getContext('2d')

    ctx.drawImage(
      details,
      crop.x * scaleX,
      crop.y * scaleY,
      crop.width * scaleX,
      crop.height * scaleY,
      0,
      0,
      crop.width,
      crop.height,
    )

    const base64Url = canvas.toDataURL('image/jpg')

    setState({
      ...state,
      image: base64Url,
    })
  }
  const saveImage = () => {
    const canvas = document.createElement('canvas')

    canvas.width = details.naturalHeight
    canvas.height = details.naturalHeight
    const ctx = canvas.getContext('2d')

    ctx.filter = `brightness(${state.brightness}%) brightness(${state.brightness}%) sepia(${state.sepia}%) saturate(${state.saturate}%) contrast(${state.contrast}%) grayscale(${state.grayscale}%) hue-rotate(${state.hueRotate}deg)`

    ctx.translate(canvas.width / 2, canvas.height / 2)
    ctx.rotate((state.rotate * Math.PI) / 180)
    ctx.scale(state.horizental, state.vertical)

    ctx.drawImage(details, -canvas.width / 2, -canvas.height / 2, canvas.width, canvas.height)

    const link = document.createElement('a')

    link.download = 'image_edit.jpg'
    link.href = canvas.toDataURL()
    link.click()
  }

  return {
    filterElement,
    property,
    setProperty,
    details,
    setDetails,
    crop,
    setCrop,
    state,
    setState,
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
  }
}

export default useImage
