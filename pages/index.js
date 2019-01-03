import React from 'react'
import { inject, observer } from 'mobx-react'
import withData from '@/components/hoc/with-data'

import PostActions from '@/actions/posts'

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

  state = {
    posts: []
  }

  async componentWillMount() {
    if (this.props.isServer) {
      this.setState({
        posts: this.props.query.posts
      })
    } else {
      try {
        const posts = await PostActions.getPosts()
        this.setState({
          posts
        })

      } catch (err) {
        alert(err.errorMessage)
      }
    }
    this.sampleStore.setText('Hello! This is main page')
  }

  render() {
    const { posts } = this.state
    const { text } = this.sampleStore
    return [
      <Head key="head" />,
      <MainComponent key="body" text={text} posts={posts} />,
      <Footer key="footer" />
    ]
  }
}