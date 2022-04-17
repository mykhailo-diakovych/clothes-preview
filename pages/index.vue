<template>
  <div>
    <DesignerClothes />
    <b-form-group class="mb-2">
      <ShareNetwork
        network="twitter"
        url="https://res.cloudinary.com/dniafpygj/image/upload/w_1000,ar_16:9,c_fill,g_auto,e_sharpen/v1650203926/Screen_Shot_2022-04-17_at_4.57.34_PM_er0o3f.png"
        title="Ttl"
        description="Desc"
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
  </div>
</template>

<script>
import DesignerClothes from '~/components/DesignerClothes'

export default {
  name: 'IndexPage',
  components: {
    DesignerClothes,
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
        content: 'https://clothes-preview.vercel.app',
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
        content: 'https://clothes-preview.vercel.app',
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
      },
      {
        hid: 'twitter:image:alt',
        name: 'twitter:image:alt',
        content: 'https://res.cloudinary.com/dniafpygj/image/upload/w_1000,ar_16:9,c_fill,g_auto,e_sharpen/v1650203926/Screen_Shot_2022-04-17_at_4.57.34_PM_er0o3f.png'
      }
    ]
  }),
}
</script>
