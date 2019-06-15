import { List, Card } from 'antd'
import { CardComponent } from './'
import React from 'react'

const GridComponent = props => {
  const { data } = props
  return (
    <List
      grid={{ gutter: 16, column: 4 }}
      dataSource={data}
      renderItem={item => (
        <List.Item>
          <CardComponent data={item} />
        </List.Item>
      )}
    />
  )
}

export default GridComponent
