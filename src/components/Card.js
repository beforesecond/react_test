import { Card, Icon, Avatar, Button } from 'antd'
import React from 'react'

const { Meta } = Card

const CardComponent = props => {
  const { title, image, description } = props
  return (
    <Card
      style={{ width: 300 }}
      cover={
        <img
          alt="example"
          src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png"
        />
      }
    >
      <Meta
        avatar={
          <Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />
        }
        title="Card title"
        description="This is the description"
      />
      <div style={{ textAlign: 'center' }}>
        <Button style={{ width: '100%' }} type="primary">
          Detail
        </Button>
      </div>
    </Card>
  )
}

export default CardComponent
