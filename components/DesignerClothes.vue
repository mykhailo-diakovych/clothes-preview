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

        <b-form-group class="mb-2">
          <ShareNetwork
            network="twitter"
            url="https://res.cloudinary.com/dniafpygj/image/upload/w_1000,ar_16:9,c_fill,g_auto,e_sharpen/v1650203926/Screen_Shot_2022-04-17_at_4.57.34_PM_er0o3f.png"
            title="Ttl"
            description="Desc"
            quote="The hot reload is so fast it\'s near instant. - Evan You"
            hashtags="vuejs,vite,javascript"
            twitter-user="youyuxi"
          >
            <i class="fab fah fa-lg fa-twitter"></i>
            <span>Share on Twitter 1</span>
          </ShareNetwork>
        </b-form-group>

        <b-form-group class="mb-2">
          <a class="twitter-share-button" href="https://twitter.com/intent/tweet" data-size="large">Tweet 1</a>
        </b-form-group>
        <b-form-group class="mb-2">
          <a href="https://twitter.com/intent/tweet?text=optional%20promo%20text%20http://example.com/foo.htm?bar=123&baz=456" target="_blank">Tweet target="_blank"</a>
        </b-form-group>
      </b-col>
    </b-row>
  </b-container>
</template>

<script>
import { fabric } from 'fabric'
// import getShareImage from '@jlengstorf/get-share-image';
import {
  canvasItems,
  saveImage,
  updateTshirtImage,
  uploadImage,
} from '~/utils/utils'
import { CANVAS_HEIGHT, CANVAS_WIDTH } from '~/utils/constants'

// const socialImage = getShareImage({
//   title: 'Deploy a Node.js App to DigitalOcean with SSL',
//   tagline: '#devops #nodejs #ssl',
//   cloudName: 'jlengstorf',
//   imagePublicID: '/share.png',
//   titleFont: 'futura',
//   taglineFont: 'futura',
//   textColor: '232129',
// });

export default {
  name: 'DesignerClothes',
  options: {
    designOptions: [
      {
        text: 'T-Shirt',
        value: 'tshirt.png',
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
  head: () => ({
    title: 'Designer Clothes',
    meta: [
      {
        hid: 'title',
        property: 'title',
        content: 'Clothes Design'
      },
      {
        hid: 'description',
        name: 'description',
        content: 'description'
      },
      {
        hid: 'image',
        property: 'image',
        content: 'https://res.cloudinary.com/dniafpygj/image/upload/w_1000,ar_16:9,c_fill,g_auto,e_sharpen/v1650203926/Screen_Shot_2022-04-17_at_4.57.34_PM_er0o3f.png'
      },
      {
        hid: 'og:type',
        property: 'og:type',
        content: 'website'
      },
      {
        hid: 'og:url',
        property: 'og:url',
        content: 'https://clothes-preview.vercel.app/',
      },
      {
        hid: 'og:title',
        property: 'og:title',
        content: 'Clothes Design'
      },
      {
        hid: 'og:description',
        property: 'og:description',
        content: 'description'
      },
      {
        hid: 'og:image',
        property: 'og:image',
        content: 'https://res.cloudinary.com/dniafpygj/image/upload/w_1000,ar_16:9,c_fill,g_auto,e_sharpen/v1650203926/Screen_Shot_2022-04-17_at_4.57.34_PM_er0o3f.png'
      },
      {
        hid: 'og:image:width',
        property: 'og:image:width',
        content: '200',
      },
      {
        hid: 'og:image:height',
        property: 'og:image:height',
        content: '200',
      },
      {
        hid: 'twitter:card',
        name: 'twitter:card',
        content: 'summary_large_image'
      },
      {
        hid: 'twitter:url',
        name: 'twitter:url',
        content: 'https://clothes-preview.vercel.app/',
      },
      {
        hid: 'twitter:title',
        name: 'twitter:title',
        content: 'Clothes Design'
      },
      {
        hid: 'twitter:description',
        name: 'twitter:description',
        content: 'description'
      },
      {
        hid: 'twitter:image',
        name: 'twitter:image',
        content: 'https://res.cloudinary.com/dniafpygj/image/upload/w_1000,ar_16:9,c_fill,g_auto,e_sharpen/v1650203926/Screen_Shot_2022-04-17_at_4.57.34_PM_er0o3f.png'
      }
    ]
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
