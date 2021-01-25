/** @jsxRuntime classic */
import 'react-app-polyfill/ie11'
import 'react-app-polyfill/stable'

import React from 'react'
import ReactDom from 'react-dom'

import './App.scss'

const App = () => {
  return <h1>React boilerplate</h1>
}

ReactDom.render(<App />, document.getElementById('root') as HTMLElement)
