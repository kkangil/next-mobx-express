import { Component } from 'react'
import { Provider } from 'mobx-react'
import { initStore } from 'stores'

export default ComposedComponent => {
  return class WithData extends Component {
    static async getInitialProps(props) {
      let composedInitialProps
      const isServer = !!props.req
      if (ComposedComponent.getInitialProps) {
        composedInitialProps = await ComposedComponent.getInitialProps(props)
      }
      return { isServer, ...composedInitialProps }
    }

    constructor(props) {
      super(props)
      this.store = initStore(props.isServer)
    }

    render() {
      return (
        <Provider store={this.store}>
          <ComposedComponent {...this.props} />
        </Provider>
      )
    }
  }
}
