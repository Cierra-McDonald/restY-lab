import React from 'react'
import PropTypes from 'prop-types'
import styles from './Presentations.module.css'


function Header() {

    return (
        <div className={styles.divheader}>
            <h1 className={styles.appheader}>RESTless</h1>
        </div>
    )
}


export default Header;
