import styles from "./ProductInfo.module.scss";
import { useParams } from "react-router";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const ProductInfo = ({ products }) => {
    const { productId } = useParams();
    let params = useParams();
    const [prod, setProd] = useState({});

    useEffect(() => {
        setProd(products.find((product) => product.id == params.productId));
    }, [products]);

    let navigate = useNavigate();

    return prod ? (
        <div className={styles.ProductInfo}>
            <h5 className={styles.ProductInfo__Title}>{prod.name}</h5>
            <img src={prod.image} alt={prod.name} />
            <p> {prod.price}</p>
            <p className={styles.ProductInfo__Info}>{prod.info}</p>
            <p className={styles.ProductInfo__Dimensions}>
                Dimensions: {prod.dimensions}
            </p>
            <Link to="/our-products">
                <button className={styles.ProductInfo__Btn}>GO BACK</button>
            </Link>
        </div>
    ) : (
        navigate("/our-products")
    );
};

export default ProductInfo;
