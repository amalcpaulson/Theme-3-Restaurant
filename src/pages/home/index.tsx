import { useSelector } from "react-redux";
import { Footer } from "../../components/footer";
import EditorComponent from "../../components/hoc";
import Navbar from "../../components/navbar";
import { About } from "./components/about";
import { Landing } from "./components/landing";
import { OnlineOders } from "./components/onlineOder";
import styles from "./index.module.css";

const Home = () => {
	const isEditorVisible = useSelector((state: any) => state.editor.isEditorVisible);
	return (
		<EditorComponent isEditorVisible={isEditorVisible}>
			<div className={styles.Wrapper}>
				<Navbar />
				<Landing />
				<About />
				<OnlineOders />
				<Footer />
			</div>
		</EditorComponent>
	);
};

export default Home;
