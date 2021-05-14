import React, { Component } from 'react'
import Header from '../app/presentations/Header'
// import Controls from '../../components/app/containers/Controls'
import Container from '../../components/app/containers/Container'

export default class App extends Component {
  render() {
    return (
      <div>
        <Header/>
        <Container/>
      </div>
    )
  }
}
