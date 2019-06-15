import { Card, Icon, Avatar, Button } from 'antd'
import { NumberFormat } from './NumberFormat'
import { getDetail } from '../actions/detail'
import React, { Component } from 'react'
import { BoxShadow } from './'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'

const { Meta } = Card

class CardComponent extends Component {
  constructor(props) {
    super(props)
  }

  onClickDetail(data) {
    const { getDetail } = this.props
    getDetail(this.props.data)
    this.props.history.push('/detail')
  }

  render() {
    const { title, image, description, avatar, price } = this.props.data
    return (
      <div>
        <BoxShadow>
          <Card
            style={{ maxHeight: 500 }}
            cover={<img width="150" height="250" src={image} />}
          >
            <Meta
              avatar={<Avatar src={avatar} />}
              title={title}
              description=""
            />
            <div class="text-2line">
              <span class="text-concat">{description}</span>
            </div>
            <div class="text-red" style={{ textAlign: 'right' }}>
              {NumberFormat(price)}
            </div>
            <div style={{ textAlign: 'center' }}>
              <Button
                style={{ width: '100%' }}
                onClick={this.onClickDetail.bind(this)}
                type="primary"
              >
                Detail
              </Button>
            </div>
          </Card>
        </BoxShadow>
      </div>
    )
  }
}

const mapStateToProps = state => ({
  detail: state
})

export default connect(
  mapStateToProps,
  { getDetail }
)(withRouter(CardComponent))
