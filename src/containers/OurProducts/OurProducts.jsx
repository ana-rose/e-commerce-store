import ProductList from "./../ProductList";

const OurProducts = ({ products, toggleFave, cartItems, onAdd }) => {
    return (
        <div>
            <ProductList
                products={products}
                toggleFave={toggleFave}
                cartItems={cartItems}
                onAdd={onAdd}></ProductList>
        </div>
    );
};

export default OurProducts;
