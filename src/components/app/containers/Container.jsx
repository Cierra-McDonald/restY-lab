import React, { Component } from 'react'
import Controls from './Controls'
import { getRequest, postRequest, deleteRequest, putRequest } from '../../../apiUtils'

export default class Container extends Component {
    state = { 
        url: '',
        rawJSON: '', 
        method: ''
    }

    // handleURLChange = (e) => { 
    //     // e.preventDefault();
    //     // console.log(e.target.value)
    //     this.setState({ 
    //         url: e.target.value
    //     })
    // }
    handleChange = (e) => {
        const { name, value } = e.target;
        this.setState({ [name]: value })
      }

    handleSubmitChange = (e) => { 
        e.preventDefault();
        const { url, rawJSON, method } = this.state
        switch(method) { 
            case 'GET':
                getRequest(url)
                    .then(res => this.setState({ array: res }));
                break;
            case 'POST': 
                postRequest(url, rawJSON);
                break; 
            case 'DELETE':
                deleteRequest(url);
                break;
            case 'PUT':
                putRequest(url, rawJSON);   
                break;
                default: 
                    console.log('Please select a method');
                break;  
        }


    }

    render() {
        return (
            <div>
              <Controls
                onChange={this.handleChange}
                submitChange={this.handleSubmitChange}
                url={this.state.url}
                rawJSON={this.state.rawJSON}
              />  
            </div>
        )
    }
}
