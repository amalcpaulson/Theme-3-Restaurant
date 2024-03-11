import React from "react";
import LandingPageEditor from "./components";
import styles from './index.module.css'

type EditorComponentProps = {
	isEditorVisible: boolean;
	children: React.ReactNode;
};

const EditorComponent: React.FC<EditorComponentProps> = ({
	isEditorVisible,
	children,
}) => {
	return (
		<div className={styles.Wrapper}>
			{isEditorVisible && (
				<div
				className={styles.Editter}
				>
					{/* Sidebar content */}
					<h2>Editor</h2>
					<LandingPageEditor />
				</div>
			)}

			{/* Main content */}
			<div style={{ marginLeft: isEditorVisible ? "300px" : "0" }}>
				{children}
			</div>
		</div>
	);
};

export default EditorComponent;
