import "bootstrap/dist/css/bootstrap.css";
import Carousel from "react-bootstrap/Carousel";
import styles from "./MyCarousel.module.scss";

const MyCarousel = ({ products }) => {
    const featuredProducts = products.filter((product) => product.featured);

    return (
        <Carousel className={styles.Carousel}>
            {featuredProducts.map((product, index) => (
                <Carousel.Item interval={2500} key={index}>
                    <img
                        className={styles.Img}
                        src={product.image}
                        alt={product.name}
                    />
                    <Carousel.Caption>
                        <h3>{product.name}</h3>
                    </Carousel.Caption>
                </Carousel.Item>
            ))}
        </Carousel>
    );
};
export default MyCarousel;
