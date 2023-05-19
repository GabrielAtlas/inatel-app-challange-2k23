import { MantineProvider } from '@mantine/core'
import ReactDOM from 'react-dom/client'
import { RouterProvider } from 'react-router-dom'

import { router } from './routes'

import './styles/globals.css'

// import i18n (needs to be bundled ;))
import './i18n'

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement)

root.render(
  <MantineProvider>
    <RouterProvider router={router} />
  </MantineProvider>
)
