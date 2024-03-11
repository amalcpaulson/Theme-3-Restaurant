import React from "react";
import LandingPageEditor from "./components";

type EditorComponentProps = {
	isEditorVisible: boolean;
	children: React.ReactNode;
};

const EditorComponent: React.FC<EditorComponentProps> = ({
	isEditorVisible,
	children,
}) => {
	return (
		<div>
			{isEditorVisible && (
				<div
					style={{
						width: "300px",
						backgroundColor: "#f0f0f0",
						position: "fixed",
						top: 0,
						left: 0,
					}}
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
