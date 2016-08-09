import React, { Component, PropTypes } from 'react'
// components
import Helmet from 'react-helmet'
import { Link } from 'react-router'
// utils
import _ from 'lodash'
// styles
import styles from './OurWorks.scss'

export default class OurWorks extends Component {

  render() {
    return (
      <div className={styles['portfolio-wrapper']}>
        <Helmet title="Our works"/>
        <div className={styles['portfolio-header']}>
          <div className={styles['promo']}>
            <div className="container">
              <h2 className={styles['title']}>Our Work</h2>
              <p className={styles['intro']}>
                Our approach to lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi in leo turpis. Ut ex
                neque, cursus vulputate facilisis sed, tempor quis ligula.
              </p>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

