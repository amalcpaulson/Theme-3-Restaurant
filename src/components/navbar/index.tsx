import styles from "./index.module.css";
import Logo from "../../assets/Logo.png";
import Cart from "../popups/cart";
import { toggleEditor } from "../../store/editor/editorSlice";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import {  HomeSvg } from "./svg";

const Navbar = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const handle = () => {
    navigate("/");
  };
  const isEditable = useSelector((state: any) => state.editor.isEditorVisible);
  return (
    <>
      <div
        className={styles.Wrapper}
        style={{ width: isEditable ? "calc(100% - 300px)" : "100%" }}
      >
        <button className={styles.Logo} onClick={handle}>
          <img src={Logo} alt="Logo" />
        </button>
        <div className={styles.ButtonWrapper}>
          <Cart />
          <button className={styles.LoginBtn}>Login</button>
          <button
            onClick={() => {
              dispatch(toggleEditor());
            }}
            style={{ color: "#428A39" }}
            className={styles.EditBtn}
          >
            Edit
          </button>
        </div>
      </div>
      <div className={styles.MobNav}>
        <button onClick={handle}>
          <p>
            {" "}
            <HomeSvg colors="#337934" /> Home
          </p>
        </button>
        <Cart />
      </div>
    </>
  );
};

export default Navbar;
