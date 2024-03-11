import styles from "./index.module.css";
import { FaInstagram, FaFacebook, FaTwitter } from "react-icons/fa";
import iphone from "./iPhone.png";
import vector from './Vector.png'
type Props = {};

export const Footer = (_props: Props) => {
  return (
    <div className={styles.Wrapper}>
      <div className={styles.Contact}>
        <p>Contact</p>
        <div>
          <a href="">Help & Support</a>
          <a href="">Partner with us</a>
          <a href="">Ride with us</a>
        </div>
      </div>
      <div className={styles.working}>
        <h3>WORKING HOURS</h3>
        <div>
          <p>
            <span className="colorText">Mon - Fri</span>:7.00am - 6.00pm
          </p>
          <p>
            <span className="colorText">Sat</span>:7.00am - 6.00pm
          </p>{" "}
          <p>
            <span className="colorText">Sun</span>:8.00am - 6.00pm
          </p>
        </div>
      </div>
      <div className={styles.Online}>
        <div>
          <h2>Online ordering is supported on the mobile app</h2>
          <button>download the app</button>
        </div>
        <img src={iphone} alt="" />
      </div>
      <div className={styles.Social}>
        <p>Follow Us</p>
        <div>
          <a href="">
            <FaInstagram />
          </a>
          <a href="">
            <FaFacebook />
          </a>
          <a href="">
            <FaTwitter />
          </a>
        </div>
      </div>
      <img src={vector} alt="" />
    </div>
  );
};
