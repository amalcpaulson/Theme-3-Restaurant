import styles from "./index.module.css";
import Logo from "../../assets/Logo.png";
import Cart from "../popups/cart";
import { toggleEditor } from "../../store/editor/editorSlice";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const handle = () => {
    navigate("/");
  };
  return (
    <div className={styles.Wrapper}>
      <button className={styles.Logo} onClick={handle}>
        <img src={Logo} alt="" />
      </button>
      <div className={styles.ButtonWrapper}>
     
        <Cart />
        <button className={styles.LoginBtn}>Login</button>
        <button
          onClick={() => dispatch(toggleEditor())}
          style={{ color: "#428A39" }}
        >
          Edit
        </button>
      </div>
    </div>
  );
};

export default Navbar;
