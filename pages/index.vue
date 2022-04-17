<template>
  <div>
    <DesignerClothes />
    <b-form-group class='mb-2'>
      <ShareNetwork
        network='twitter'
        url='https://res.cloudinary.com/dniafpygj/image/upload/w_1000,ar_16:9,c_fill,g_auto,e_sharpen/v1650203926/Screen_Shot_2022-04-17_at_4.57.34_PM_er0o3f.png'
        title='Ttl'
        description='Desc'
        twitter-user='youyuxi'
      >
        <i class='fab fah fa-lg fa-twitter'></i>
        <span>Share on Twitter 1</span>
      </ShareNetwork>
    </b-form-group>

    <b-form-group class='mb-2'>
      <a class='twitter-share-button' href='https://twitter.com/intent/tweet' data-size='large'>Tweet 1</a>
    </b-form-group>
    <b-form-group class='mb-2'>
      <a
        href='https://twitter.com/intent/tweet?text=optional%20promo%20text%20http://example.com/foo.htm?bar=123&baz=456'
        target='_blank'>Tweet target="_blank"</a>
    </b-form-group>

    <blockquote class='twitter-tweet'>
      <p lang='en' dir='ltr'>Sunsets don&#39;t get much better than this one over <a
        href='https://twitter.com/GrandTetonNPS?ref_src=twsrc%5Etfw'>@GrandTetonNPS</a>. <a
        href='https://twitter.com/hashtag/nature?src=hash&amp;ref_src=twsrc%5Etfw'>#nature</a> <a
        href='https://twitter.com/hashtag/sunset?src=hash&amp;ref_src=twsrc%5Etfw'>#sunset</a> <a
        href='http://t.co/YuKy2rcjyU'>pic.twitter.com/YuKy2rcjyU</a></p>&mdash; US Department of the Interior
      (@Interior) <a href='https://twitter.com/Interior/status/463440424141459456?ref_src=twsrc%5Etfw'>May 5, 2014</a>
    </blockquote>
    <script async src='https://platform.twitter.com/widgets.js' charset='utf-8'></script>
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
        content: '/image.png'
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
        content: '/image.png'
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
        content: '/image.png'
      }
    ]
  })
}
</script>
