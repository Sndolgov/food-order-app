import styles from './MealItem.module.css'
import MealIemForm from "./MealIemForm";

const MealItem = (props) => {
    const formattedPrice = `$${props.meal.price.toFixed(2)}`


    return (
        <li className={styles.meal}>
            <div>
                <div><h3>{props.meal.name}</h3></div>
                <div className={styles.description}>{props.meal.description}</div>
                <div className={styles.price}>{formattedPrice}</div>
            </div>
            <div><MealIemForm meal={props.meal}/></div>
        </li>
    )
}

export default MealItem