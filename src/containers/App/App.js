import React, { Component, PropTypes, Children, cloneElement } from 'react'
// components
import Helmet from 'react-helmet'
import { MainLayoutHeader, MainLayoutFooter } from 'components'
import { asyncConnect } from 'redux-async-connect'
// utils
import config from '../../config'
// styles
import styles from './App.scss'

@asyncConnect([{
  promise: () => Promise.resolve()
}])

export default class App extends Component {
  static propTypes = {
    children: PropTypes.object.isRequired,
    route: PropTypes.object.isRequired
  };

  static childContextTypes = {
    client: PropTypes.object
  };

  getChildContext() {
    return { client: this.props.route.client }
  }

  render() {
    return (
      <div className={styles['app']}>
        <Helmet {...config.app.head}/>
        <MainLayoutHeader />
        <div>
          {this.props.children}
        </div>
        <MainLayoutFooter />
      </div>
    )
  }
}
