import type { Preview } from '@storybook/react'

const preview: Preview = {
  parameters: {
    actions: { argTypesRegex: '^on[A-Z].*' },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
  viewports: {
    huge: {
      name: 'Desktop - 1200px+',
      styles: {
        width: '1680px',
        height: '1050px',
      },
    },
    large: {
      name: 'Medium Devices - 992px',
      styles: {
        width: '992px',
        height: '768px',
      },
    },
    small: {
      name: 'Small Devices - 768px',
      styles: {
        width: '768px',
        height: '800px',
      },
    },
    cell: {
      name: 'iPhone 13 mini (as min)- 375px',
      styles: {
        width: '375px',
        height: '812px',
      },
    },
  },
}

export default preview
