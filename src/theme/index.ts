import { extendTheme } from '@chakra-ui/react'

const theme = extendTheme({
  fonts: {
    heading: 'Inter, system-ui, -apple-system, "Segoe UI", Roboto, "Helvetica Neue", Arial',
    body: 'Inter, system-ui, -apple-system, "Segoe UI", Roboto, "Helvetica Neue", Arial',
  },
  styles: {
    global: {
      body: {
        bg: 'gray.50',
      },
    },
  },
})

export default theme
