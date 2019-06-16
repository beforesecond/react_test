import React, { Component } from 'react'
import { Col, Row, Button, Breadcrumb, Input } from 'antd'
import { connect } from 'react-redux'
import { NumberFormat } from './NumberFormat'
import { Link } from 'react-router-dom'
import { withRouter } from 'react-router-dom'

const ButtonGroup = Button.Group

class DetailComponent extends Component {
  constructor(props) {
    super(props)
  }

  state = {
    amount: 1
  }
  //   const { data } = props.detail
  //   const { value: amount, onClick: onChangeAmount } = useInput

  onClickPlus() {
    const amount = this.state.amount + 1
    this.setState({
      amount: amount
    })
  }

  onClickMinus() {
    if (this.state.amount > 0) {
      const amount = this.state.amount - 1
      this.setState({
        amount: amount
      })
    }
  }

  render() {
    const { data } = this.props.detail
    if (!data.title) {
      this.props.history.push('/')
    }

    return (
      <div>
        <Row>
          <Col offset={2} span={22}>
            <Breadcrumb style={{ margin: '16px 0' }}>
              <Breadcrumb.Item>
                <Link to="/">Home</Link>
              </Breadcrumb.Item>
              <Breadcrumb.Item>{data.title}</Breadcrumb.Item>
            </Breadcrumb>
          </Col>
        </Row>
        <Row>
          <Col span={8}>
            <div style={{ textAlign: 'center' }}>
              <img width={272} src={data.image} />
            </div>
          </Col>
          <Col span={16}>
            <Row>
              <h1>{data.title}</h1>
            </Row>
            <Row>{data.description}</Row>
            <Row>
              <div class="text-red" style={{ textAlign: 'left' }}>
                {NumberFormat(data.price)}
              </div>
            </Row>
            <p />
            <Row>
              <ButtonGroup>
                <Button
                  type="default"
                  onClick={this.onClickMinus.bind(this)}
                  icon="minus"
                />
                <Input
                  style={{ width: '20%' }}
                  value={this.state.amount}
                  //onChange={onChangeAmount}
                />
                <Button
                  type="default"
                  onClick={this.onClickPlus.bind(this)}
                  icon="plus"
                />
              </ButtonGroup>
            </Row>
            <p />
            <Row>
              <Button type="primary">Add to cart</Button>
            </Row>
          </Col>
        </Row>
        <p />
      </div>
    )
  }
}

const mapStateToProps = state => ({
  detail: state.detail
})

export default connect(mapStateToProps)(withRouter(DetailComponent))
