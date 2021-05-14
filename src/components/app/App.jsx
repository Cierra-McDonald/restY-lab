import React, { Component } from 'react'
import Header from '../app/presentations/Header'
import styles from  './App.css' 
import Container from '../../components/app/containers/Container'

export default class App extends Component {
  render() {
    return (
      <div className={styles.main}>
        <Header/>
        <Container/>
      </div>
    )
  }
}
