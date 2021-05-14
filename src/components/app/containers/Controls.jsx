import React, { Component } from 'react'
import styles from './Containers.module.css'



const Controls = ({ handleURLChange }) => {
        return (
            <div className={styles.bigDiv}>
                <form className={styles.form}>
                    <input type="text" placeholder="URL" className={styles.url}
                        onChange={handleURLChange}/>
                    <section className={styles.gatherButtons}>
                        <div className={styles.radios}>
                            <input className={styles.radioButton} type="radio" id="get" name="method" value="GET"/>
                            <label className={styles.formLabels}>GET</label>
                            <input className={styles.radioButton} type="radio" id="post" name="method" value="POST"/>
                            <label className={styles.formLabels}>POST</label>
                            <input className={styles.radioButton} type="radio" id="put" name="method" value="PUT"/>
                            <label className={styles.formLabels}>PUT</label>
                            <input className={styles.radioButton} type="radio" id="delete" name="method" value="DELETE"/>
                            <label className={styles.formLabels}>DELETE</label>
                        </div>
                        <button className={styles.goButton}>Go!</button>
                    </section>
                    <textarea className={styles.textArea}placeholder="Raw JSON Body"></textarea>
                </form>
                
            </div>
        )
}

export default Controls;