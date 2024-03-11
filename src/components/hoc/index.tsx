import React from "react";

// Define props types for withEditor HOC
type WithEditorProps = {
	isEditorVisible: boolean;
};

// Define the HOC
const withEditor = <P extends object>(
	WrappedComponent: React.ComponentType<P>
) => {
	const WithEditor: React.FC<P & WithEditorProps> = ({
		isEditorVisible,
		...props
	}) => {
		return (
			<div>
				{/* Conditionally render the Sidebar */}
				{isEditorVisible && <Sidebar />}

				{/* Render the wrapped component */}
				<WrappedComponent {...(props as P)} />
			</div>
		);
	};

	return WithEditor;
};

// Example Sidebar component
const Sidebar: React.FC = () => {
	return (
		<div
			style={{
				width: "300px",
				backgroundColor: "#f0f0f0",
				position: "fixed",
				top: 0,
				left: 0,
			}}
		>
			{/* Add editing tools/options here */}
			<h2>Editor Sidebar</h2>
		</div>
	);
};

export default withEditor;
