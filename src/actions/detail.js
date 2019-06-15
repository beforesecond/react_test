/*
 * action types
 */

export const GET_DETAIL = '[DETAIL] Get Detail'
export const GET_DETAIL_SUCCESS = '[DETAIL] GET Detail Success'
export const GET_DETAIL_FAILED = '[DETAIL] GET Detail Failed'

export const getDetail = payload => {
  return { type: GET_DETAIL, payload }
}

export const getDetailSuccess = payload => {
  return { type: GET_DETAIL_SUCCESS, payload }
}

export const getDetailFailed = payload => {
  return { type: GET_DETAIL_FAILED, payload }
}
