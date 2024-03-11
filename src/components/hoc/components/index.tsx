import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../../../store/store";
import {
	changeLandingAddress,
	changeLandingDescription,
	changeLandingRating,
	changeLandingRatingCount,
	changeLandingTiming,
	changeLandingTitle,
} from "../../../store/landing/landingSlice";
import styles from './index.module.css'

const LandingPageEditor = () => {
	const landing = useSelector((state: RootState) => state.landing);
	const dispatch = useDispatch();

	return (
    <div>
      <h2>Landing Page</h2>
      <div className={styles.Landing}>
        <div>
          <label htmlFor="title">Title</label>
          <input
            type="text"
            id="title"
            value={landing.title}
            onChange={(e) => dispatch(changeLandingTitle(e.target.value))}
          />
        </div>
        <div>
          <label htmlFor="rating">Rating</label>
          <input
            type="string"
            id="rating"
            value={landing.rating}
            onChange={(e) => dispatch(changeLandingRating(e.target.value))}
          />
        </div>
        <div>
          <label htmlFor="ratingCount">Rating Count</label>
          <input
            type="string"
            id="ratingCount"
            value={landing.ratingCount}
            onChange={(e) => dispatch(changeLandingRatingCount(e.target.value))}
          />
        </div>
        <div>
          <label htmlFor="description">Description</label>
          <textarea
            id="description"
            value={landing.description}
            onChange={(e) => dispatch(changeLandingDescription(e.target.value))}
          />
        </div>
        <div>
          <label htmlFor="address">Address</label>
          <textarea
            id="address"
            value={landing.address}
            onChange={(e) => dispatch(changeLandingAddress(e.target.value))}
          />
        </div>
        <div>
          <label htmlFor="timing">Timing</label>
          <textarea
            id="timing"
            value={landing.timing}
            onChange={(e) => dispatch(changeLandingTiming(e.target.value))}
          />
        </div>
      </div>
    </div>
  );
};

export default LandingPageEditor;
