import React from 'react'
import { inject, observer } from 'mobx-react'
import withData from '@/components/hoc/with-data'

@withData
@inject('store')
@observer
export default class Post extends React.Component {
  static getInitialProps(props) {
    let { query } = props
    return { query }
  }
  render() {
    console.log(this.props)
    return (
      <div>post1</div>
    )
  }
}