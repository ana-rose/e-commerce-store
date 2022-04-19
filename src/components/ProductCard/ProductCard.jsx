import styles from "./ProductCard.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import { faCheck } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
import { Link } from "react-router-dom";

const ProductCard = ({ product, toggleFave, onAdd }) => {
    const faveIcon = product.isFave ? faCheck : faStar;
    const favouriteStyle = product.isFave
        ? styles.FaveIcon__On
        : styles.FaveIcon__Off;
    let [counter, setCounter] = useState(0);

    const handleFave = () => {
        toggleFave(product);
    };

    const handleAdd = () => {
        setCounter(++counter);
        if (counter > product.availQuantity) {
            return alert("Apologies, this item is out of stock.");
        } else {
            onAdd(product);
        }
    };

    const path = `/our-products/${product.id}`;

    return (
        <div>
            <div className={styles.Card}>
                <p className={styles.AddToFaves}>Add to Favourites</p>
                <FontAwesomeIcon
                    className={favouriteStyle}
                    icon={faveIcon}
                    onClick={handleFave}></FontAwesomeIcon>
                <h5>{product.name}</h5>

                <img src={product.image} alt={product.name} />
                <p> {product.price}</p>
                <select>
                    {product.variants.map((variant) => {
                        return <option value={variant}>{variant}</option>;
                    })}
                </select>
                <Link to={path}>
                    <p className={styles.ParaLink}>Click here for more info</p>
                </Link>
                <button className={styles.AddToCart} onClick={handleAdd}>
                    Add to Cart
                </button>
            </div>
        </div>
    );
};

export default ProductCard;
