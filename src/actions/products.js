/*
 * action types
 */

export const GET_PRODUCT = '[PRODUCT] Get Product'
export const GET_PRODUCT_SUCCESS = '[PRODUCT] GET Product Success'
export const GET_PRODUCT_FAILED = '[PRODUCT] GET Product Failed'

export const getProduct = payload => {
  return { type: GET_PRODUCT, payload }
}

export const getProductSuccess = payload => {
  return { type: GET_PRODUCT_SUCCESS, payload }
}

export const getProductFailed = payload => {
  return { type: GET_PRODUCT_FAILED, payload }
}
