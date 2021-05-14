import React, { Component } from 'react'
import Controls from './Controls'

export default class Container extends Component {
    state = { 
        url: '',
        rawJSON: '', 
    }

    handleURLChange = (e) => { 
        e.preventDefault();
        console.log(e.target.value)
        this.setState({ 
            url: e.target.value
        })
    }

    handleSubmitChange = () => { 


    }

    render() {
        return (
            <div>
              <Controls
              onChange={this.handleURLChange}
              />  
            </div>
        )
    }
}
