import styles from './PromoText.module.css'

const PromoText = () => {
    return(
        <section className={styles['promo-text']}>
            <h2>Online Sushi Restaurant Japanese Cuisine</h2>
            <p>
                Japan Cuisine is an online sushi restaurant where your favorite sushi and sashimi,
                rolls and other national Japanese dishes are made by a team of professional chefs.
            </p>
            <p>
                Fast work and high-quality products, as well as the most genuine ingredients,
                give a good taste to dishes, give pleasure from a meal.
            </p>
        </section>
    )
}

export default PromoText