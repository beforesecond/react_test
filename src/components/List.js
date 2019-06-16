import { List, Button, Row, Col } from 'antd'
import { NumberFormat } from './NumberFormat'
import React from 'react'
import { BoxShadow } from './'
import { withRouter } from 'react-router-dom'
import { connect } from 'react-redux'
import { getDetail } from '../actions/detail'

const ListComponent = props => {
  const { data } = props

  const onClickDetail = (e, data) => {
    const { getDetail } = props
    getDetail(data)
    props.history.push('/detail')
  }

  return (
    <div className="container">
      <List
        dataSource={data}
        renderItem={item => (
          <div>
            <p />
            <BoxShadow>
              <Row>
                <Col span={16}>
                  {/* <List.Item.Meta
                    //  avatar={<Avatar src={item.image} />}
                    avatar={<img width="100" height="100" src={item.image} />}
                    title={<a href="https://ant.design">{item.title}</a>}
                    description={item.description}
                  /> */}
                  <Row>
                    <Col span={6}>
                      <img width="200" height="200" src={item.image} />
                    </Col>
                    <Col span={18}>
                      <Row>
                        <h1>{item.title}</h1>
                      </Row>
                      <Row>{item.description}</Row>
                    </Col>
                  </Row>
                </Col>

                <Col offset={4} span={2} height="100%">
                  <div class="list-right">
                    <div class="text-red list-right-child">
                      {NumberFormat(item.price)}
                      <br />
                      <Button
                        style={{ width: '100%' }}
                        onClick={e => onClickDetail(e, item)}
                        type="primary"
                      >
                        Detail
                      </Button>
                    </div>
                  </div>
                </Col>
              </Row>
            </BoxShadow>
            <p />
          </div>
        )}
      />
    </div>
  )
}

const mapStateToProps = state => ({
  detail: state
})

export default connect(
  mapStateToProps,
  { getDetail }
)(withRouter(ListComponent))
