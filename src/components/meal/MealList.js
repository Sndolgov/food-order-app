import DUMMY_MEALS from "./dummy-meals";
import styles from './MealList.module.css'
import Card from "../UI/Card";
import MealItem from "./mealItem/MealItem";

const MealList = (props) => {
    const mealList = DUMMY_MEALS.map((meal, index) => {
        return (
            // index < DUMMY_MEALS.length - 1
            //     ? <>
            //         <MyMealItem key={index} meal={meal}/>
            //         <hr/>
            //     </>
            //     : <MyMealItem key={index} meal={meal}/>
            <MealItem key={meal.id} meal={meal}/>
        )
    })

    return (
        <section className={styles.meals}>
            <Card>
                <ul>
                    {mealList}
                </ul>
            </Card>
        </section>
    )

}

export default MealList