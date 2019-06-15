import { Card, Icon, Avatar, Button } from 'antd'
import { NumberFormat } from './NumberFormat'
import React from 'react'

const { Meta } = Card

const CardComponent = props => {
  const { title, image, description, avatar, price } = props.data

  return (
    <div class="shrink">
      <Card
        style={{ width: 300, maxHeight: 500 }}
        cover={<img width="150" height="250" src={image} />}
      >
        <Meta avatar={<Avatar src={avatar} />} title={title} description="" />
        <div class="text-2line">
          <span class="text-concat">{description}</span>
        </div>
        <div class="text-red" style={{ textAlign: 'right' }}>
          {NumberFormat(price)}
        </div>
        <div style={{ textAlign: 'center' }}>
          <Button style={{ width: '100%' }} type="primary">
            Detail
          </Button>
        </div>
      </Card>
    </div>
  )
}

export default CardComponent
