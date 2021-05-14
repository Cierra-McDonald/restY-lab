import React from 'react'
import PropTypes from 'prop-types';
import styles from './Presentations.module.css'


function Results({results}) {
    console.log(results);
    return (
        <div>
            <h3>Results!</h3>
           <p>{JSON.stringify(results)}</p>
        </div>
    )
}

Results.propTypes = { 
    results: PropTypes.any.isRequired
}

export default Results;
