import { fabric } from 'fabric'
import domtoimage from 'dom-to-image'
import { IMAGE_SCALE_TO_HEIGHT, IMAGE_SCALE_TO_WIDTH } from '~/utils/constants'

export const canvasItems = []

export function updateTshirtImage(canvas, imageURL) {
  fabric.Image.fromURL(imageURL, (img) => {
    settingImage(canvas, img)
  })
}
export function uploadImage(e, canvas) {
  const reader = new FileReader()

  reader.onload = function (event) {
    const imgObj = new Image()
    imgObj.src = event.target.result

    // When the picture loads, create the image in Fabric.js
    imgObj.onload = function () {
      const img = new fabric.Image(imgObj)
      settingImage(canvas, img)
    }
  }

  // If the user selected a picture, load it
  if (e.target.files[0]) {
    reader.readAsDataURL(e.target.files[0])
  }
}
export async function saveImage(node) {
  const result = await domtoimage.toPng(node)
  const link = document.createElement('a')
  link.download = 'my-image-name.png'
  link.href = result
  link.click()
}
function settingImage(canvas, img) {
  img.scaleToHeight(IMAGE_SCALE_TO_HEIGHT)
  img.scaleToWidth(IMAGE_SCALE_TO_WIDTH)
  canvas.centerObject(img)
  canvas.add(img)
  canvas.renderAll()

  canvasItems.push(img)
}
