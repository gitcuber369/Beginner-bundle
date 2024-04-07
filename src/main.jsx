import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'
import Counter from './components/Counter.jsx'
import Github from './components/Github.jsx'
import Layout from './Layout.jsx'
import PasswordGenerator from './components/PasswordGenerator.jsx'

const router = createBrowserRouter (
  createRoutesFromElements(
    <Route path='/' element = {<Layout/>}>
      <Route path='' element = {<Counter/>} />
      <Route path="github" element = {<Github/>}/>
      <Route path="passwordgenerator" element = {<PasswordGenerator/>}/>
    </Route>
  )
)

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode >
    <RouterProvider router={router} />
  </React.StrictMode>,
)
