import styles from "./index.module.css";
import { Locations } from "./svg";
type Props = {};

export const DeliveryAddresscomp = (_props: Props) => {
  return (
    <div className={styles.Wrapper}>
      <h1>Delivery Address</h1>
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15781.875982873382!2d76.88361485!3d8.55081845!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3b05bf85c7a9420b%3A0x4b62172385c8bc1c!2sTechini%20Fine%20Dine!5e0!3m2!1sen!2sin!4v1709845915445!5m2!1sen!2sin"
        width="100%"
        height="300"
        style={{ border: 0 }}
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      ></iframe>
      <div className={styles.Locations}>
        <div className={styles.Top}>
          <div>
            {" "}
            <Locations />
            <p>Petron Kap. Ponso St</p>
          </div>
          <button>Edit</button>
        </div>
        <div className={styles.InputSect}>
          <p>Address</p>
          <textarea name="" id="" placeholder="Enter  your address"></textarea>
        </div>
        <div className={styles.InputSect}>
          <p>Pincode</p>
          <input type="text" placeholder="Pin" />
        </div>
        <button>Submit</button>
      </div>
    </div>
  );
};
