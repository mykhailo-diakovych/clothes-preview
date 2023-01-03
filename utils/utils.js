import { fabric } from 'fabric'
import domtoimage from 'dom-to-image'
import { IMAGE_SCALE_TO_HEIGHT, IMAGE_SCALE_TO_WIDTH } from '~/constants/default'

export const canvasItems = []

export const updateTshirtImage = (canvas, imageURL) => {
  fabric.Image.fromURL(imageURL, (img) => {
    settingImage(canvas, img)
  })
}
export const uploadImage = (e, canvas) => {
  const reader = new FileReader()

  reader.onload = (event) => {
    const imgObj = new Image()
    imgObj.src = event.target.result

    // When the picture loads, create the image in Fabric.js
    imgObj.onload = () => {
      const img = new fabric.Image(imgObj)
      settingImage(canvas, img)
    }
  }

  // If the user selected a picture, load it
  if (e.target.files[0]) {
    reader.readAsDataURL(e.target.files[0])
  }
}
export const saveImage = async (node) => {
  const result = await domtoimage.toPng(node)
  const link = document.createElement('a')
  link.download = 'my-image-name.png'
  link.href = result
  link.click()
}
const settingImage = (canvas, img) => {
  img.scaleToHeight(IMAGE_SCALE_TO_HEIGHT)
  img.scaleToWidth(IMAGE_SCALE_TO_WIDTH)
  canvas.centerObject(img)
  canvas.add(img)
  canvas.renderAll()

  canvasItems.push(img)
}
