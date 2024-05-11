import { visionTool } from '@sanity/vision'
import { defineConfig } from 'sanity'
import { structureTool } from 'sanity/structure'

import { schemaTypes } from './src/schemaTypes'
import { defaultDocumentNode, structure } from './src/structure'

export default defineConfig({
  name: 'default',
  title: 'Kenneth M. Piekarski Portfolio Site',

  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || '',
  dataset: 'production',

  plugins: [structureTool({ structure, defaultDocumentNode }), visionTool()],

  schema: {
    types: schemaTypes,
  },
})
