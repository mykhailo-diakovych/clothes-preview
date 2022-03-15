<template>
  <b-container>
    <b-row class="mt-5">
      <b-col cols="5">
        <div
          id="tshirt-div"
          ref="TShirtDiv"
          class="d-flex justify-content-center position-relative"
        >
          <b-img
            id="tshirt-backgroundpicture"
            class="w-100 h-auto"
            :src="require(`~/assets/images/${selectedDesign}`)"
            alt="tshirt"
          />
          <div id="drawingArea" class="drawing-area">
            <canvas
              ref="TShirtCanvas"
              :width="CANVAS_WIDTH"
              :height="CANVAS_HEIGHT"
            ></canvas>
          </div>
        </div>
      </b-col>
      <b-col cols="5" offset="1">
        <b-form-group class="mb-2">
          <h4>Clothes Design:</h4>
          <b-form-select
            v-model="selectedDesign"
            :options="$options.options.designOptions"
          />
        </b-form-group>
        <b-form-group class="mb-2">
          <h4>Clothes Color:</h4>
          <input
            v-model="designColor"
            type="color"
            @input="onChangeTShirtColor"
          />
        </b-form-group>
        <b-form-group class="mb-2">
          <h4>Upload your own design:</h4>
          <b-form-file class="d-block" type="file" @change="onUploadImage" />
          <small>
            <span style="color: red">*</span>
            To remove loaded design on the T-Shirt select it and press the Del
            key
          </small>
        </b-form-group>
        <b-form-group class="mb-2">
          <b-button variant="warning" @click="onSaveImage">Save Image</b-button>
          <b-button variant="danger" @click="onGetJSON">Get JSON</b-button>
        </b-form-group>
      </b-col>
    </b-row>
  </b-container>
</template>

<script>
import { fabric } from 'fabric'
import {
  canvasItems,
  saveImage,
  updateTshirtImage,
  uploadImage,
} from '~/utils/utils'
import { CANVAS_HEIGHT, CANVAS_WIDTH } from '~/utils/constants'

export default {
  name: 'DesignerClothes',
  options: {
    designOptions: [
      {
        text: 'T-Shirt',
        value: 'tshirt.png',
      },
      {
        text: 'SweetShot',
        value: 'sweetshot.png',
      },
      {
        text: 'New shirt',
        value: 'testshirt.png',
      },
      {
        text: 'New shirt',
        value: '18500_front.png',
      },
    ],
  },
  data: () => ({
    canvas: null,
    uploadedFile: null,
    selectedDesign: 'tshirt.png',
    designColor: '#ffffff',
    CANVAS_WIDTH,
    CANVAS_HEIGHT,
  }),
  mounted() {
    const TShirtCanvas = this.$refs.TShirtCanvas
    if (TShirtCanvas) {
      this.canvas = new fabric.Canvas(TShirtCanvas)
    }
    document.addEventListener('keydown', this.onDeleteActiveObject)
  },
  beforeDestroy() {
    document.removeEventListener('keydown', this.onDeleteActiveObject)
  },
  methods: {
    onChangeTShirtDesign(value) {
      updateTshirtImage(this.canvas, value)
    },
    onChangeTShirtColor(event) {
      const TShirtDiv = this.$refs.TShirtDiv
      TShirtDiv.style.backgroundColor = event.target.value
    },
    onUploadImage(e) {
      uploadImage(e, this.canvas)
    },
    async onSaveImage() {
      const TShirtDiv = this.$refs.TShirtDiv
      await saveImage(TShirtDiv)
    },
    onGetJSON() {
      alert(JSON.stringify(canvasItems))
    },
    onDeleteActiveObject({ key }) {
      if (key.toLowerCase() === 'delete') {
        this.canvas.remove(this.canvas.getActiveObject())
      }
    },
  },
}
</script>

<style scoped>
.drawing-area {
  position: absolute;
  top: 60px;
  left: 122px;
  z-index: 10;
}
#tshirt-div {
  width: 452px;
  height: 548px;
  position: relative;
  background-color: #fff;
}
</style>
