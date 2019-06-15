import React from 'react'
// eslint-disable-next-line
import logo from './logo.svg'
import './App.css'
import 'antd/dist/antd.css'
import { CardComponent, GridComponent } from './components'
import { DatePicker } from 'antd'

function App() {
  return (
    <div>
      <GridComponent
        data={[
          {
            title: 'Title 1'
          },
          {
            title: 'Title 2'
          },
          {
            title: 'Title 3'
          },
          {
            title: 'Title 4'
          }
        ]}
      />
    </div>
  )
}

export default App
