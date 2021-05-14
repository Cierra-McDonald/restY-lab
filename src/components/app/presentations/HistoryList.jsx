import React from 'react'
import styles from './Presentations.module.css'
import HistoryItem from './HistoryItem'


function HistoryList({history}) {
    console.log('HISTRY', history)
    return (
       <ul>
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


export default HistoryList;
