import React, { Component } from 'react'
import Controls from './Controls'
import HistoryList from '../presentations/HistoryList'
import Results from '../presentations/Results'
import { makeARequest } from '../../../apiUtils'
import styles from './Containers.module.css'



export default class Container extends Component {
    state = { 
        url: '',
        method: 'GET', 
        rawJSON: '', 
        history: [
            {
                id: '4ubi38hidsf',
                hmethod: 'GET',
                URL: 'https://alchemeetings.alchemycodelab.io/?'
            },
            {
                id: 'vjioner930',
                hmethod: 'POST',
                URL: 'http://codethebomb.com'
            },
            {
                id: '6987yvdfe',
                hmethod: 'PUT',
                URL: 'https://github.com/'
            },
            {
                id: '09u3f0fjif',
                hmethod: 'DELETE',
                URL: 'https://rickandmortyapi.com/documentation'
            },
        ],
        endResult: '[{fake: but real to me}]'
    }

    handleChange = (e) => {
        const { name, value } = e.target;
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
            <div className={styles.container}>
              <Controls
                onChange={this.handleChange}
                submitChange={this.handleFormSubmit}
                url={this.state.url}
                json={this.state.rawJSON}
                method={this.state.method}
              />  
              <HistoryList
                history={this.state.history}/>
              <Results
                results={this.state.endResult}/>
            </div>
        )
    }
}
