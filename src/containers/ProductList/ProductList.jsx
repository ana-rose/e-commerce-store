import styles from "./ProductList.module.scss";
import ProductCard from "../../components/ProductCard/ProductCard";
import { useState, useEffect } from "react";

const ProductList = ({ products, toggleFave, cartItems, onAdd }) => {
    return (
        <div className={styles.ProductList}>
            <h2>OUR PRODUCTS</h2>
            <div className={styles.ProductsGrid}>
                {products.map((product) => {
                    return (
                        <ProductCard
                            key={product.id}
                            product={product}
                            toggleFave={toggleFave}
                            cartItems={cartItems}
                            onAdd={onAdd}></ProductCard>
                    );
                })}
            </div>
        </div>
    );
};
export default ProductList;
