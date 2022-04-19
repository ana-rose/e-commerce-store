import styles from "./Cart.module.scss";

const Cart = ({ cartItems, onAdd, onRemove }) => {
    return (
        <div className={styles.Cart}>
            <h2>My Cart</h2>
            <p className={styles.Cart__Subtitle}>
                Items in Cart:{cartItems.length}
            </p>
            <div className={styles.CartItems}>
                {cartItems.map((item) => (
                    <div className={styles.CartItem} key={item.id}>
                        <p>{item.name}</p>

                        <img src={item.image} alt={item.name} />
                        <p>{item.quantity}</p>
                        <p> {item.price}</p>
                        <p>Change quantity:</p>
                        <div>
                            <button
                                className={styles.QtyBtn}
                                onClick={() => onAdd(item)}>
                                +
                            </button>
                            <button
                                className={styles.QtyBtn}
                                onClick={() => onRemove(item)}>
                                -
                            </button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Cart;
