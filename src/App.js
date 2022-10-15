import Header from "./components/layout/Header";
import Meal from './components/meal/Meal'
import Cart from "./components/cart/Cart";
import {useState} from "react";
import CartContextProvider from "./store/CartContextProvider";

function App() {
    const [cartVisible, setCartVisible] = useState(false)

    const cartVisibilityHandler = (visible) => {
        setCartVisible(visible);
    }

    return (
        <CartContextProvider>
            {cartVisible && <Cart onHideCart={() => cartVisibilityHandler(false)}/>}
            <Header onCartClick={() => cartVisibilityHandler(true)}/>
            <main>
                <Meal/>
            </main>
        </CartContextProvider>
    );
}

export default App;
