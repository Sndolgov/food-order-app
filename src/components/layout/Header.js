import styles from './Header.module.css'
import sushiImage from '../../assets/sushi.jpg'
import HeaderCartButton from "./HeaderCartButton";

const Header = (props) => {
    return (
        <>
            <header className={styles.header}>
                <div>
                    <h1>Japanese cuisine</h1>
                    <HeaderCartButton onClick={props.onCartClick}/>
                </div>
            </header>
            <div className={styles['main-image']}>
                <img src={sushiImage} alt='Sushi menu'/>
            </div>
        </>
    )
}

export default Header