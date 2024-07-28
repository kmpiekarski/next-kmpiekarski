import { defineField, defineType } from 'sanity'

export const seoType = defineType({
  name: 'seoMetadata',
  title: 'SEO Metadata',
  type: 'document',
  fields: [
    defineField({
      name: 'seoTitle',
      type: 'string',
    }),
    defineField({
      name: 'Description',
      type: 'string',
    }),
    defineField({
      name: 'openGraphImage',
      type: 'image',
    }),
  ],
})
