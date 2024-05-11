import { defineField, defineType } from 'sanity'

import seoInput from './seoInput'

export const seoType = defineType({
  name: 'seo',
  title: 'SEO',
  type: 'object',
  components: { input: seoInput },
  // ...
})
