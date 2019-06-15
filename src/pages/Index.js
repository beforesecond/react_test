import React, { Component } from 'react'
import { connect } from 'react-redux'
import { getProduct, getProductSuccess } from '../actions/products'
import { CardComponent, GridComponent } from '../components'

class IndexPage extends Component {
  componentDidMount() {
    const { getProduct } = this.props
    getProduct({})
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
    console.log(product)

    return <GridComponent data={gridData} />
  }
}

const mapStateToProps = state => ({
  products: state
})

export default connect(
  mapStateToProps,
  { getProduct }
)(IndexPage)
