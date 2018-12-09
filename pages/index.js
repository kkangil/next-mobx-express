import React from 'react'
import { inject, observer } from 'mobx-react'
import withData from '@/components/hoc/with-data'

import Head from 'components/head'
import Footer from 'components/footer'
import MainComponent from '@/components/main'

@withData
@inject('store')
@observer
export default class Main extends React.Component {
  sampleStore = this.props.store.sampleStore
  static getInitialProps(props) {
    let { query } = props
    return { query }
  }

  componentWillMount() {
    this.sampleStore.setText('Hello! This is main page')
  }

  render() {
    console.log(this.props)
    const { posts } = this.props.query
    const { text } = this.sampleStore
    return [
      <Head key="head" />,
      <MainComponent key="body" text={text} posts={posts} />,
      <Footer key="footer" />
    ]
  }
}