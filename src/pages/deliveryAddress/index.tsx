import { useEffect, useState } from "react";
import { Footer } from "../../components/footer";
import Navbar from "../../components/navbar";
import { DeliverySchedule } from "./components/deliverySchedule";
import { DeliveryAddresscomp } from "./components/deliveryaddresscomp";
import { Payments } from "./components/payments";
import { PersonalDetails } from "./components/personalDetails";
import styles from "./index.module.css";
import { FaArrowLeftLong } from "react-icons/fa6";
import { useNavigate } from "react-router-dom";
type Props = {};

export const DeliveryAddress = (_props: Props) => {
  const [nav, setNav] = useState(true);

  useEffect(() => {
    if (window.innerWidth <= 680) {
      setNav(false);
    } else {
      setNav(true);
    }
  }, []);
   
    const navigate = useNavigate();
    const handle = () => {
      navigate("/");
    };
  return (
    <div className={styles.Wrapper}>
      {nav ? (
        <Navbar />
      ) : (
        <button onClick={handle}>
          {" "}
          <FaArrowLeftLong />
        </button>
      )}
      <div className={styles.InnerWrapper}>
        <div>
          <DeliveryAddresscomp />
          <DeliverySchedule />
          <PersonalDetails />
          <Payments />
        </div>
        <div className={styles.Orders}>
          <div className={styles.Title}>
            {" "}
            <h1>Your Orders</h1>
            <div>
              <p>
                <span>4 X Hyderabad Chicken Biriyani</span>
                <p>₹160</p>
              </p>
              <p>
                <span>Subtotal</span>
                <p>₹2796</p>
              </p>
              <p>
                <span>Delivery fee</span>
                <p>Free</p>
              </p>
            </div>
          </div>
          <h1>
            <p>Total</p>
            <p>₹2796</p>
          </h1>
        </div>
      </div>
      <Footer />
    </div>
  );
};
