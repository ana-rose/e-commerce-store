import styles from "./App.module.scss";
import Home from "./containers/Home";
import { useState, useEffect } from "react";
import { getProducts } from "./services/server";
import OurProducts from "./containers/OurProducts";
import NavBar from "./containers/NavBar";
import Cart from "./components/Cart";
import ProductInfo from "./components/ProductInfo";
import { BrowserRouter, Routes, Route } from "react-router-dom";

const App = () => {
    const [products, setProducts] = useState([]);

    const [cartItems, setCartItems] = useState([]);

    const getData = async () => {
        const data = await getProducts();
        setProducts(data);
    };

    // Selecting favourites:

    const selectFave = (selectedProduct) => {
        setProducts(
            products.map((product) => {
                return product.id !== selectedProduct.id
                    ? product
                    : { ...product, isFave: !product.isFave };
            }),
        );
    };

    // Adding to Cart
    const onAdd = (product) => {
        const isInCart = cartItems.find((item) => item.id === product.id);

        if (isInCart) {
            setCartItems(
                cartItems.map((item) =>
                    item.id === isInCart.id
                        ? { ...isInCart, quantity: isInCart.quantity + 1 }
                        : item,
                ),
            );
        } else {
            setCartItems([...cartItems, { ...product, quantity: 1 }]);
        }
    };

    // Removing from Cart:
    const onRemove = (product) => {
        const existing = cartItems.find((item) => item.id === product.id);

        if (existing.quantity === 1) {
            setCartItems(cartItems.filter((item) => item.id !== product.id));
        } else {
            setCartItems(
                cartItems.map((item) =>
                    item.id === product.id
                        ? { ...existing, quantity: existing.quantity - 1 }
                        : item,
                ),
            );
        }
    };

    useEffect(() => {
        getData();
    }, []);

    return (
        <>
            <BrowserRouter>
                <NavBar cartItems={cartItems} />
                <Routes>
                    <Route
                        path="/"
                        element={<Home products={products}></Home>}></Route>
                    <Route
                        path="our-products"
                        element={
                            <OurProducts
                                products={products}
                                toggleFave={selectFave}
                                cartItems={cartItems}
                                onAdd={onAdd}></OurProducts>
                        }></Route>
                    <Route
                        path="/our-products/:productId"
                        element={<ProductInfo products={products} />}></Route>
                    <Route
                        path="/cart"
                        element={
                            <Cart
                                cartItems={cartItems}
                                onAdd={onAdd}
                                onRemove={onRemove}></Cart>
                        }></Route>
                </Routes>
            </BrowserRouter>
        </>
    );
};

export default App;
