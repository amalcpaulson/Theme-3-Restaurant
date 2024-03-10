import styles from "./index.module.css";
import Logo from "../../assets/Logo.png";
import Cart from "../popups/cart";
import { useNavigate } from "react-router-dom";
// import { Cart } from "../../assets/svg";
type Props = {};

export const Navbar = (_props: Props) => {
  const navigate = useNavigate();
  const dandleClick = () => {
    navigate("/");
  };
  return (
    <div className={styles.Wrapper}>
      <button className={styles.Logo} onClick={dandleClick}>
        <img src={Logo} alt="" />
      </button>
      <div className={styles.ButtonWrapper}>
        <Cart />
        <button className={styles.LoginBtn}>Login</button>
      </div>
    </div>
  );
};
