import styles from "./index.module.css";
import img1 from "./assets/img1.png";
import img2 from "./assets/img2.png";
import img3 from "./assets/img3.png";
import img4 from "./assets/img4.png";
import img5 from "./assets/img5.png";
import img6 from "./assets/img6.png";
import img7 from "./assets/img7.png";
import img8 from "./assets/img8.png";
import img9 from "./assets/img9.png";

export const Photos = () => {
  const data = [img1, img2, img3, img4, img5, img6, img7, img8, img9];
  return (
    <div className={styles.Wrapper} id="Photos">
      <div className={styles.ButtonWrapper}>
        <button className={styles.Active}>All(20)</button>
        <button>Ambience(45)</button>
        <button>Food(20)</button>
      </div>
      <div className={styles.PhotoGrid}>
        {" "}
        {data.map((item, index) => (
          <img
            src={item}
            alt={`Gallery item ${index + 1}`}
            className={styles.Photo}
          />
        ))}
      </div>
    </div>
  );
};

export default Photos;
