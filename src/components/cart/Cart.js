import styles from './Cart.module.css'
import Modal from "../UI/Modal";
import {useContext} from "react";
import CartContext from "../../store/CartContext";
import CartItem from "./CartItem";

const Cart = (props) => {

    const cartContext = useContext(CartContext)

    const totalAmount = `$${Math.abs(cartContext.totalAmount).toFixed(2)}`

    const hasItems = cartContext.items.length > 0

    const increaseAmountHandler = (item) => {
        cartContext.addItem({...item, amount: 1})
    }

    const decreaseAmountHandler = (id) => {
        cartContext.removeItem(id)
    }

    const cartItems = cartContext.items.map(item => <CartItem
        key={item.id}
        name={item.name}
        price={item.price}
        amount={item.amount}
        onAdd={() => increaseAmountHandler(item)}
        onRemove={() => decreaseAmountHandler(item.id)}
    />)

    return (
        <Modal onHideCart={props.onHideCart}>
            <ul className={styles['cart-items']}>
                {cartItems}
            </ul>
            <div className={styles.total}>
                <span>Total</span>
                <span>{totalAmount}</span>
            </div>
            <div className={styles.actions}>
                <button className={styles['button--alt']} onClick={props.onHideCart}>Close</button>
                {hasItems && <button className={styles.button}>Order</button>}
            </div>
        </Modal>
    )
}

export default Cart