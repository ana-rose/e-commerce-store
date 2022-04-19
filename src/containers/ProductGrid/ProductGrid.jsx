import styles from "./ProductGrid.module.scss";

const ProductGrid = ({ products }) => {
    return (
        <div className={styles.ProductGrid}>
            {products.map((product) => {
                return (
                    <div>
                        <img src={product.image} alt="candle" />
                        <p>{product.name}</p>
                    </div>
                );
            })}
        </div>
    );
};
export default ProductGrid;
