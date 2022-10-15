import CartIcon from "../cart/CartIcon";
import styles from './HeaderCartButton.module.css'
import {useContext, useEffect, useState} from "react";
import CartContext from "../../store/CartContext";

const HeaderCartButton = (props) => {
    const [buttonAnimated, setButtonAnimated] = useState(false)

    const cartContext = useContext(CartContext)
    const cartItemsNumber = cartContext.items.reduce((currentValue, item) => {
        // console.log('currentValue: ' + currentValue)
        // console.log('isInteger: ' + Number.isInteger(item.amount))
        return currentValue + item.amount
    }, 0)

    const buttonClasses = `${styles.button} ${buttonAnimated ? styles.bump : ''}`

    useEffect(() => {
        if (cartItemsNumber > 0) {
            setButtonAnimated(true)
        }
        const timer = setTimeout(() => setButtonAnimated(false), 500)
        return () => {
            clearTimeout(timer)
        }
    }, [cartItemsNumber])

    return <button className={buttonClasses} onClick={props.onClick}>
        <span className={styles.icon}>
            <CartIcon/>
        </span>
        <span>Cart</span>
        <span className={styles.badge}>
            {cartItemsNumber}
        </span>
    </button>
}

export default HeaderCartButton