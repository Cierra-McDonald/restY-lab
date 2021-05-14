import React, { Component } from 'react'
import Header from '../app/presentations/Header'
import Controls from '../../components/app/containers/Controls'

export default class App extends Component {
  render() {
    return (
      <div>
        <Header/>
        <Controls/>
      </div>
    )
  }
}
