import { List, Button, Row, Col } from 'antd'
import { NumberFormat } from './NumberFormat'
import React from 'react'

const ListComponent = props => {
  const { data } = props
  return (
    <div className="demo-infinite-container">
      <List
        dataSource={data}
        renderItem={item => (
          <List.Item key={item.id}>
            <div class="shrink">
              <Row>
                <Col span={16}>
                  <List.Item.Meta
                    //  avatar={<Avatar src={item.image} />}
                    avatar={<img width="100" height="100" src={item.image} />}
                    title={<a href="https://ant.design">{item.title}</a>}
                    description={item.description}
                  />
                </Col>
                <Col offset={4} span={2}>
                  <div style={{ textAlign: 'center' }}>
                    {NumberFormat(item.price)}
                    <br />
                    <Button style={{ width: '100%' }} type="primary">
                      Detail
                    </Button>
                  </div>
                </Col>
              </Row>
            </div>
          </List.Item>
        )}
      />
    </div>
  )
}

export default ListComponent
