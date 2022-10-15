import CartContext from "./CartContext";
import {useReducer} from "react";

const defaultCartState = {
    items: [],
    totalAmount: 0
}


const cartReducer = (state, action) => {
    if (action.type === ADD_ITEM) {
        const updatedTotalAmount = state.totalAmount + action.item.price * action.item.amount

        const existingItemIndex = state.items.findIndex(item => {
            return item.id === action.item.id
        })

        const existingItem = state.items[existingItemIndex]

        let updatedItems;

        if (existingItem){
            const updatedItem = {
                ...existingItem,
                amount: existingItem.amount + action.item.amount
            }
            updatedItems = [...state.items]
            updatedItems[existingItemIndex] = updatedItem
        } else {
            updatedItems = state.items.concat(action.item)
        }
        return {
            items: updatedItems,
            totalAmount: updatedTotalAmount
        }
    }
    if (action.type === REMOVE_ITEM) {
        const existingItemIndex = state.items.findIndex(item => {
            return item.id === action.id
        })
        const existingItem = state.items[existingItemIndex]

        if (existingItem){
            let updatedTotalAmount = state.totalAmount - existingItem.price
            let updatedItems = [...state.items];
            if (existingItem.amount > 1){
                updatedItems[existingItemIndex] = {...existingItem, amount: existingItem.amount - 1}
            } else {
                updatedItems.splice(existingItemIndex, 1)
            }
            return {
                items: updatedItems,
                totalAmount: updatedTotalAmount
            }
        }
    }
    return defaultCartState;
}

const ADD_ITEM = 'ADD_ITEM'
const REMOVE_ITEM = 'REMOVE_ITEM'

const CartContextProvider = (props) => {
    const [cartState, dispatchCartAction] = useReducer(cartReducer, defaultCartState)

    const addItemHandler = (item) => {
        dispatchCartAction({
            type: ADD_ITEM,
            item: item
        })
    }
    const removeItemHandler = (id) => {
        dispatchCartAction({
            type: REMOVE_ITEM,
            id: id
        })
    }

    const cartContext = {
        items: cartState.items,
        totalAmount: cartState.totalAmount,
        addItem: addItemHandler,
        removeItem: removeItemHandler
    }

    return <CartContext.Provider value={cartContext}>{props.children}</CartContext.Provider>
}

export default CartContextProvider