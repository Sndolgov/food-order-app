import styles from './Input.module.css'
import {forwardRef} from "react";

const Input = (props, ref) => {
    return(
        <div className={styles.input}>
            <label htmlFor={props.input.id}>{props.label}</label>
            <input ref={ref} id={props.input.id} {...props.input}/>
        </div>
    )
}

export default forwardRef(Input)