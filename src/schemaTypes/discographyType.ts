import { defineField, defineType } from 'sanity'

export const discographyType = defineType({
  name: 'discography',
  title: 'Discography',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      type: 'string',
    }),
    defineField({
      name: 'artist',
      type: 'string',
    }),
    defineField({
      name: 'image',
      type: 'image',
    }),
    defineField({
      name: 'category',
      type: 'string',
      options: {
        list: [
          { title: 'Album', value: 'album' },
          { title: 'EP', value: 'extendedPlay' },
          { title: 'Single', value: 'single' },
        ],
        layout: 'radio',
      },
      validation: (rule) =>
        rule.required().error(`Must select a catagory for this release.`),
    }),
    defineField({
      title: 'Role',
      name: 'role',
      type: 'array',
      of: [{ type: 'string' }],
      options: {
        list: [
          { title: 'Produced', value: 'album' },
          { title: 'Mastered', value: 'mastered' },
          { title: 'Mixed', value: 'mixed' },
          { title: 'Engineered', value: 'Engineered' },
          { title: 'Performed', value: 'performed' },
        ],
      },
      validation: (Rule) => Rule.unique(),
    }),
    defineField({
      name: 'link',
      type: 'url',
    }),
    defineField({
      title: 'Release Date',
      name: 'date',
      type: 'date',
    }),
  ],
})
