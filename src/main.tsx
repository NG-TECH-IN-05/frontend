import React from 'react'
import ReactDOM from 'react-dom/client'
import { RouterProvider } from 'react-router-dom'
import { Toaster } from '@/components/ui/toaster'
import { ThemeProvider } from '@/components/theme-provider'
import router from '@/router'
import '@/css/blue.css'

import { store } from '@/store/store'
import { Provider } from 'react-redux'
ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Provider store={store}>
      <ThemeProvider defaultTheme='light' storageKey='vite-ui-theme'>
        <RouterProvider router={router} />
        <Toaster />
      </ThemeProvider>
    </Provider>
  </React.StrictMode>
)
