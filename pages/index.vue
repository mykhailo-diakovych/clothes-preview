<template>
  <div>
    <DesignerClothes />
    <b-form-group class='mb-2'>
      <ShareNetwork
        network='twitter'
        url='https://res.cloudinary.com/dniafpygj/image/upload/v1650203926/Screen_Shot_2022-04-17_at_4.57.34_PM_er0o3f.png'
        title='Ttl'
        description='Desc'
        twitter-user='youyuxi'
      >
        <i class='fab fah fa-lg fa-twitter'></i>
        <span>Share on Twitter 1</span>
      </ShareNetwork>
    </b-form-group>

    <b-form-group class='mb-2'>
      <a class='twitter-share-button' href='https://twitter.com/intent/tweet?url=https://res.cloudinary.com/dniafpygj/image/upload/v1650203926/Screen_Shot_2022-04-17_at_4.57.34_PM_er0o3f.png' data-size='large'>Tweet 1</a>
    </b-form-group>
    <b-form-group class='mb-2'>
      <a
        href='https://twitter.com/intent/tweet'
        target='_blank'>Tweet target="_blank"</a>
    </b-form-group>
  </div>
</template>

<script>
import DesignerClothes from '~/components/DesignerClothes'

export default {
  name: 'IndexPage',
  components: {
    DesignerClothes
  },
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
        content: '/image_1.png'
      },
      {
        hid: 'og:type',
        property: 'og:type',
        content: 'website'
      },
      {
        hid: 'og:url',
        property: 'og:url',
        content: 'https://dev.cryptaine.com/launchpads/top'
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
        content: '/image_1.png'
      },
      {
        hid: 'og:image:width',
        property: 'og:image:width',
        content: '200'
      },
      {
        hid: 'og:image:height',
        property: 'og:image:height',
        content: '200'
      },
      {
        hid: 'twitter:card',
        name: 'twitter:card',
        content: 'summary_large_image'
      },
      {
        hid: 'twitter:url',
        name: 'twitter:url',
        content: 'https://dev.cryptaine.com/launchpads/top'
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
        content: '/image_1.png'
      }
    ]
  })
}
</script>
