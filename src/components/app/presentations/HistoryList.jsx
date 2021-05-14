import React from 'react'
import styles from './Presentations.module.css'
import HistoryItem from './HistoryItem'
import PropTypes from 'prop-types';


function HistoryList({history}) {
    return (
       <ul aria-label="history-list">
           {history.map((item) => (
               <li key={item.id}>
                    <HistoryItem
                   method={item.hmethod}
                   URL={item.URL}
                   />
               </li>
           ))}
       </ul>
    )
}

HistoryList.propTypes = { 
    history: PropTypes.array.isRequired
}


export default HistoryList;
