import styles from './MyMealItem.module.css'

const MyMealItem = (props) => {
    return (
        <li>
            <div className={styles.main}>
                <div className={styles.info}>
                    <div className={styles.name}>{props.meal.name}</div>
                    <div className={styles.description}>{props.meal.description}</div>
                    <div className={styles.price}>${props.meal.price}</div>
                </div>
                <div className={styles.order}>
                    <div>
                        <label htmlFor="number">Number</label>
                        <input id="number" value="1"/>
                    </div>
                    <button>Add</button>
                </div>
            </div>
        </li>
    )
}

export default MyMealItem