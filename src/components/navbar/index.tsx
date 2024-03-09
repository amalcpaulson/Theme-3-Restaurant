import styles from "./index.module.css";
import Logo from "../../assets/Logo.png";
import Cart from "../popups/cart";
// import { Cart } from "../../assets/svg";
type Props = {};

export const Navbar = (_props: Props) => {
  return (
    <div className={styles.Wrapper}>
      <button className={styles.Logo}>
        <img src={Logo} alt="" />
      </button>
      <div className={styles.ButtonWrapper}>
        {/* <button className={styles.CartBtn}>
          <Cart /> <p>4 items</p>
        </button> */}
		<Cart />
        <button className={styles.LoginBtn}>Login</button>
      </div>
    </div>
  );
};
