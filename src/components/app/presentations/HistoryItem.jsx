import React from 'react'
import PropTypes from 'prop-types';
import styles from './Presentations.module.css'


function HistoryItem({method, URL}) {
   
    return (
    <div>
        {method} {URL}
    </div>
  
    )
}

HistoryItem.propTypes = { 
    method: PropTypes.string.isRequired,
    URL: PropTypes.string.isRequired
}

export default HistoryItem;
