import { useDispatch, useSelector } from "react-redux";
import { Footer } from "../../components/footer";
import EditorComponent from "../../components/hoc";
import Navbar from "../../components/navbar";
import { About } from "./components/about";
import { Landing } from "./components/landing";
import { OnlineOders } from "./components/onlineOder";
import styles from "./index.module.css";
import { Reviews } from "./components/reviews";
import { Photos } from "./components/photos";
import { RootState } from "../../store/store";
import { addTab } from "../../store/items/itemSlice";

const Home = () => {
  const isEditorVisible = useSelector(
    (state: any) => state.editor.isEditorVisible
  );
	
	const dispatch = useDispatch();
	const activeSection = useSelector((state: RootState) => state.item.tab);
  return (
		<EditorComponent isEditorVisible={isEditorVisible}>
			<div className={styles.Wrapper}>
				<Navbar />
				<Landing />
				<About />
				<div className={styles.ButtonNavigation}>
					<button
						className={
							activeSection === "OrderOnline"
								? styles.activeBtn
								: ""
						}
						onClick={() => dispatch(addTab("OrderOnline"))}
					>
						Order Online
					</button>
					<button
						className={
							activeSection === "Reviews" ? styles.activeBtn : ""
						}
						onClick={() => dispatch(addTab("Reviews"))}
					>
						Reviews
					</button>
					<button
						className={
							activeSection === "Photos" ? styles.activeBtn : ""
						}
						onClick={() => dispatch(addTab("Photos"))}
					>
						Photos
					</button>
				</div>
				{activeSection === "OrderOnline" && <OnlineOders />}
				{activeSection === "Reviews" && <Reviews />}
				{activeSection === "Photos" && <Photos />}

				<Footer />
			</div>
		</EditorComponent>
  );
};

export default Home;
