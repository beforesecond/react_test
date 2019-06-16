import React, { Component } from 'react'
import {
  DetailComponent,
  ContentComponent,
  FooterComponent
} from '../components'
import { Layout, Button } from 'antd'
const { Header, Footer, Sider, Content } = Layout

class DetailPage extends Component {
  constructor(props) {
    super(props)
  }
  componentDidMount() {}

  render() {
    return (
      <Layout>
        <Header style={{ textAlign: 'right' }} />
        <ContentComponent>
          <DetailComponent />
        </ContentComponent>
        <FooterComponent />
      </Layout>
    )
  }
}

export default DetailPage
