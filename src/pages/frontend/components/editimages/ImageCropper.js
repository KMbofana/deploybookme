import React, { useCallback, useState } from "react";
import Cropper from 'react-easy-crop'
import getCroppedImg from './cropImage'


function ImageCropper(props) {
  const [crop, setCrop] = useState({ x: 0, y: 0 })
  const [rotation, setRotation] = useState(0)
  const [zoom, setZoom] = useState(1)
  const [image, setImage] = useState("")
  const [imagekey, setImagekey] = useState(0)
  const [croppedAreaPixels, setCroppedAreaPixels] = useState(null)
  const [croppedImage, setCroppedImage] = useState(null)
  const [cropped, setCropped] = useState([])
  const [CropComplete, setCropComplete] = useState(true)
  console.log("image")
  console.log(image)
  console.log("imagekey")
  console.log(imagekey)
  const onCropComplete = useCallback((croppedArea, croppedAreaPixels) => {
    setCroppedAreaPixels(croppedAreaPixels)
  }, [])
  const changeImage = (key) => {
    const length = props.image.length

    console.log(imagekey)
    console.log(imagekey >= 0)

    if (length == 1) {
      setImage(props.image[0])
      setImagekey(0)
    } else if (length > 1 && imagekey + key < length && imagekey + key >= 0) {

      setImage(props.image[imagekey + key])
      setImagekey(imagekey + key)

    }

  }
  const alreadycropped = () => {

    if (!cropped.includes(image != "" ? image : props.image[0])) {
      setCropped([...cropped, image != "" ? image : props.image[0]])
      showCroppedImage()

    } else {
      alert("Image Already Cropped")
    }
  }

  const showCroppedImage = useCallback(async () => {

    try {
      setCropComplete(false)
      const croppedImage = await getCroppedImg(
        image != "" ? image : props.image[0],
        croppedAreaPixels,
        rotation
      )

      props.saveCrop(croppedImage)

      setCropComplete(true)
      console.log(croppedImage)
      setCroppedImage(croppedImage)
    } catch (e) {
      console.error(e)
    }
  }, [croppedAreaPixels, rotation])

  const onClose = useCallback(() => {
    setCroppedImage(null)
  }, [])


  return (
    <>

      <Cropper
        image={image != "" ? image : props.image[0]}
        crop={crop}
        rotation={rotation}
        zoom={zoom}
        aspect={props.aspect}
        onCropChange={setCrop}
        onRotationChange={setRotation}
        onCropComplete={onCropComplete}
        onZoomChange={setZoom}
      />
      {imagekey > 0 && (<button className="btn btn-primary" style={{ position: "absolute", bottom: "5%", left: "5%" }} onClick={() => { changeImage(-1) }}>previous</button>)}
      {CropComplete && props.image.length > 0 &&
        <button className="btn btn-primary"
          style={{ position: "absolute", bottom: "5%", left: "45%" }}
          onClick={
            alreadycropped}>crop
        </button>}
      {imagekey < props.image.length - 1 && (<button className="btn btn-primary" style={{ position: "absolute", bottom: "5%", right: "5%" }} onClick={() => { changeImage(+1) }}>next</button>)}
    </>
  )

}
export default ImageCropper