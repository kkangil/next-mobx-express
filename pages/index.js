import React from 'react'
import { inject, observer } from 'mobx-react'
import withData from '@/components/hoc/with-data'

@withData
@inject('store')
@observer
export default class Main extends React.Component {
  static getInitialProps(props) {
    let { query } = props
    return { query }
  }
  render() {
    console.log(this.props)
    return (
      <div>test</div>
    )
  }
}