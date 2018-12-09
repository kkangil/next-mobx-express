import React from 'react'
import { inject, observer } from 'mobx-react'
import withData from '@/components/hoc/with-data'

import Head from 'components/head'
import Footer from 'components/footer'
import PostComponent from '@/components/posts'

@withData
@inject('store')
@observer
export default class Post extends React.Component {
  static getInitialProps(props) {
    let { query } = props
    return { query }
  }
  render() {
    const { post } = this.props.query
    return [
      <Head key="head" />,
      <PostComponent key="body" post={post} />,
      <Footer key="footer" />
    ]
  }
}