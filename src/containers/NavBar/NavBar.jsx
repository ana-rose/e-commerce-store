import styles from "./NavBar.module.scss";
import { Link } from "react-router-dom";

const NavBar = ({ cartItems }) => {
    return (
        <nav className={styles.NavBar}>
            <ul>
                <li>
                    <Link to="/">HOME</Link>
                </li>

                <li>
                    <Link to="/our-products">OUR PRODUCTS</Link>
                </li>
                <li>
                    <Link to="/cart">CART {cartItems.length}</Link>
                </li>
            </ul>
        </nav>
    );
};
export default NavBar;
