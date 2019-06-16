import React, { Component } from 'react'
import { connect } from 'react-redux'
import { getProduct, getProductSuccess } from '../actions/products'
import { Layout, Button } from 'antd'
import {
  CardComponent,
  GridComponent,
  ListComponent,
  ContentComponent,
  FooterComponent
} from '../components'
const { Header, Footer, Sider, Content } = Layout
const ButtonGroup = Button.Group

class IndexPage extends Component {
  constructor(props) {
    super(props)
    this.state = {
      grid: true,
      list: false
    }
  }

  componentDidMount() {
    const { getProduct } = this.props
    getProduct({})
  }

  onClickGrid() {
    this.setState({
      grid: true,
      list: false
    })
  }

  onClickList() {
    this.setState({
      grid: false,
      list: true
    })
  }

  render() {
    const { products } = this.props
    const { product } = products
    const { data } = product
    let gridData = []

    if (product.hasData) {
      data.list.map(items => {
        gridData.push({
          title: items.name,
          image: items.image_url,
          avatar: items.brand_info.url,
          price: items.price,
          description: items.description
        })
      })
    }

    //  return <GridComponent data={gridData} />
    if (this.state.list == true) {
      return (
        <Layout>
          <Header style={{ textAlign: 'right' }}>
            <ButtonGroup>
              <Button
                type="primary"
                onClick={this.onClickGrid.bind(this)}
                icon="appstore"
              />
              <Button
                type="primary"
                onClick={this.onClickList.bind(this)}
                icon="unordered-list"
              />
            </ButtonGroup>
          </Header>
          <ContentComponent>
            <Content>
              <ListComponent data={gridData} />
            </Content>
          </ContentComponent>

          <FooterComponent />
        </Layout>
      )
    }
    if (this.state.grid == true) {
      return (
        <Layout>
          <Header style={{ textAlign: 'right' }}>
            <ButtonGroup>
              <Button
                type="primary"
                onClick={this.onClickGrid.bind(this)}
                icon="appstore"
              />
              <Button
                type="primary"
                onClick={this.onClickList.bind(this)}
                icon="unordered-list"
              />
            </ButtonGroup>
          </Header>
          <ContentComponent>
            <Content>
              <GridComponent data={gridData} />
            </Content>
          </ContentComponent>

          <FooterComponent />
        </Layout>
      )
    }
  }
}

const mapStateToProps = state => ({
  products: state
})

export default connect(
  mapStateToProps,
  { getProduct }
)(IndexPage)
