import styles from "./Home.module.scss";
import ProductGrid from "../ProductGrid/ProductGrid";
import MyCarousel from "./../../components/Carousel";
import { Link } from "react-router-dom";

const Home = ({ products }) => {
    return (
        <div className={styles.Home}>
            <div className={styles.Home__FirstBlock}>
                <h1>PRETTY CANDLES</h1>
                <p>
                    Pretty Candles was founded on the philosophy of creativity
                    and appreciation of art-history,transcending the craft of
                    candle making into functional statement decor pieces. Pretty
                    Candles will bring the timeless sculptural beauty of the
                    past to your home.
                </p>
            </div>
            <h3>OUR COLLECTION </h3>
            <div>
                <ProductGrid products={products}></ProductGrid>
            </div>
            <Link to="/our-products">
                <button className={styles.Home__Btn}>SHOP NOW</button>
            </Link>

            <div className={styles.CarouselBlock}>
                <div className={styles.CarouselBlock__Text}>
                    <h2>Featured Products</h2>
                    <p>
                        Explore our classic bestsellers which capture renowned
                        sculptures from antiquity curated into elegant home
                        decor.
                    </p>
                </div>
                <MyCarousel products={products}></MyCarousel>
            </div>
        </div>
    );
};
export default Home;
