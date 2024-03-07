import { Hint, Scooter, Search, Star } from "../../../../assets/svg";
import styles from "./index.module.css";
type Props = {};

export const About = (_props: Props) => {
  return (
    <div className={styles.Wrapper}>
      <div className={styles.Header}>
        <div className={styles.Title}>
          <h1>Food Co. UK</h1>
          <div>
            {" "}
            <p>4.5</p>
            <Star />
            <p>(100+ ratings)</p>
          </div>
        </div>
        <div>
          <Scooter />
          <p>15 - 20 min</p>
        </div>
      </div>
      <div className={styles.Content}>
        <p style={{ color: "#828282" }}>
          Fast Food, Burger, Biryani, Desserts, Beverages
        </p>
        <p style={{ color: "#5C4848" }}>
          Shobha City Mall, Puzhakkal, Thrissur
        </p>
        <p style={{ color: "#428A39" }}>
          Open now 11:30Am to 4:00pm <Hint />
        </p>
      </div>
      <div className={styles.SearchBar}>
        <div>
          <Search colors={"#AA9D9D"} />
          <input type="text" placeholder="What would you like to eat ?" />
        </div>
        <button>
          <Search colors={"#FFFFFF"} />
          <p>Find Food</p>
        </button>
      </div>
    </div>
  );
};
