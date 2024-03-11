import { useSelector } from "react-redux";
import { Footer } from "../../components/footer";
import EditorComponent from "../../components/hoc";
import Navbar from "../../components/navbar";
import { About } from "./components/about";
import { Landing } from "./components/landing";
import { OnlineOders } from "./components/onlineOder";
import styles from "./index.module.css";
import { Reviews } from "./components/reviews";
import { Photos } from "./components/photos";
import { useState } from "react";


const Home = () => {
  const isEditorVisible = useSelector(
    (state: any) => state.editor.isEditorVisible
  );
  const [activeSection, setActiveSection] = useState("OrderOnline");
  return (
    <EditorComponent isEditorVisible={isEditorVisible}>
      <div className={styles.Wrapper}>
        <Navbar />
        <Landing />
        <About />
        <div className={styles.ButtonNavigation}>
          <button
            className={activeSection === "OrderOnline" ? styles.activeBtn : ""}
            onClick={() => setActiveSection("OrderOnline")}
          >
            Order Online
          </button>
          <button
            className={activeSection === "Reviews" ? styles.activeBtn : ""}
            onClick={() => setActiveSection("Reviews")}
          >
            Reviews
          </button>
          <button
            className={activeSection === "Photos" ? styles.activeBtn : ""}
            onClick={() => setActiveSection("Photos")}
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
