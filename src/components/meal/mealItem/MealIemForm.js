import styles from './MealIemForm.module.css'
import Input from "../../UI/Input";
import {useContext, useRef, useState} from "react";
import CartContext from "../../../store/CartContext";


const MealIemForm = (props) => {
    const [amountValid, setAmountValid] = useState(true)

    const cartContext = useContext(CartContext);

    const amountInputRef = useRef()

    const addItemHandler = (amount) => {
        const meal = {...props.meal}
        const item = {id: meal.id, name: meal.name, price: meal.price, amount: amount}
        cartContext.addItem(item)
    }


    const submitHandler = (e) => {
        e.preventDefault()
        const inputAmount = amountInputRef.current.value
        if (inputAmount.trim().length === 0 || +inputAmount < 1 || +inputAmount > 10) {
            setAmountValid(false)
            return
        }
        addItemHandler(+inputAmount)
    }

    return <form className={styles.form} onSubmit={submitHandler}>
        <Input
            ref={amountInputRef}
            label='Amount'
            input={{
                id: props.meal.id,
                type: 'number',
                min: '1',
                max: '10',
                step: '1',
                defaultValue: '1',
                // onChange: (e) => {
                //     setItemAmount(e.target.value)
                // }
            }}
        />
        <button>Add</button>
        {!amountValid && <p>Amount must be from 1 to 10</p>}
    </form>
}

export default MealIemForm