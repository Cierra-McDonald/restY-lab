import React, { Component } from 'react'
import Controls from './Controls'
import HistoryList from '../presentations/HistoryList'
import Results from '../presentations/Results'
import { makeARequest } from '../../../apiUtils'


export default class Container extends Component {
    state = { 
        url: '',
        method: 'GET', 
        rawJSON: '', 
        history: [
            {
                id: '4ubi38hidsf',
                hmethod: 'GET',
                URL: 'http://imthebomb.com'
            },
            {
                id: 'vjioner930',
                hmethod: 'POST',
                URL: 'http://imthebomb.com'
            },
            {
                id: '6987yvdfe',
                hmethod: 'PUT',
                URL: 'http://imthebomb.com'
            },
            {
                id: '09u3f0fjif',
                hmethod: 'DELETE',
                URL: 'http://imthebomb.com'
            },
        ],
        endResult: '[{fake: but real to me}]'
    }

    handleChange = (e) => {
        const { name, value } = e.target;
        console.log(name, 'name');
        console.log(value, 'target')
        this.setState({ [name]: value })
      }


    handleFormSubmit = async (e) => { 
        e.preventDefault();
        let result;
        try { 
            result = await makeARequest(this.state.method, this.state.url, this.state.rawJSON);
        } catch(err) { 
            result = `Mayday mayday, abort mission ${err}!`
        }
    }

    render() {
        return (
            <div>
              <Controls
                onChange={this.handleChange}
                submitChange={this.handleFormSubmit}
                url={this.state.url}
                json={this.state.rawJSON}
                method={this.state.method}
              />  
              <Results
                results={this.state.endResult}/>
              <HistoryList
                history={this.state.history}/>
            </div>
        )
    }
}
