import styles from "./index.module.css";
import { FaStar } from "react-icons/fa";
import demp from "./assets/demo.png";

export const Reviews = () => {
  const data = [
    {
      image: demp,
      name: "John Doe",
      verified: true,
      star: 5,
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.",
    },
    {
      image: demp,
      name: "John Doe",
      verified: false,
      star: 5,
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.",
    },
    {
      image: demp,
      name: "John Doe",
      verified: true,
      star: 2,
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.",
    },
    {
      image: demp,
      name: "John Doe",
      verified: true,
      star: 3,
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.",
    },
  ];

  return (
    <div className={styles.Wrapper}>
      {data.map((item, index) => (
        <div key={index} className={styles.ReviewItem}>
          <img src={item.image} alt={item.name} className={styles.UserImage} />
          <div className={styles.ContentSegment}>
            <div>
              <div className={styles.UserName}>
                <h3> {item.name}</h3> {item.verified && <p>Verified User</p>}
              </div>
              <div className={styles.StarRating}>
                {[...Array(5)].map((_, i) =>
                  i < item.star ? (
                    <FaStar key={i} className={styles.Star} />
                  ) : (
                    <FaStar key={i} className={styles.Stars} />
                  )
                )}
              </div>
            </div>
            <p className={styles.ReviewDescription}>{item.description}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Reviews;
