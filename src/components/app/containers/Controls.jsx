import React from 'react'
import styles from './Containers.module.css'


const Controls = ({ onChange, submitChange, rawJSON, url}) => {
    // console.log(onChange)
        return (
            <div className={styles.bigDiv}>
                <form className={styles.form}
                    onSubmit={submitChange}>

                    <input 
                        type="text"
                        // value={url}
                        placeholder="URL" 
                        className={styles.url}
                        onChange={onChange}
                        />

                    <section className={styles.gatherButtons}>
                        <div className={styles.radios}>
                            <input className={styles.radioButton} type="radio" name="method" value="GET" onChange={onChange}/>
                            <label className={styles.formLabels}>GET</label>

                            <input className={styles.radioButton} type="radio" name="method" value="POST" onChange={onChange}/>
                            <label className={styles.formLabels}>POST</label>

                            <input className={styles.radioButton} type="radio" name="method" value="PUT" onChange={onChange}/>
                            <label className={styles.formLabels}>PUT</label>

                            <input className={styles.radioButton} type="radio" name="method" value="DELETE" onChange={onChange}/>
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