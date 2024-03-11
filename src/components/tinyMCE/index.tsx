import React from "react";
import { Editor } from "@tinymce/tinymce-react";

// Define a type for the props that TinymceEditor accepts
interface TinymceEditorProps {
	initialValue?: string;
	plugins?: string;
	toolbar?: string;
	[key: string]: any; // To accept any other props dynamically
}

const TinymceEditor: React.FC<TinymceEditorProps> = ({
	initialValue,
	plugins,
	toolbar,
	...otherProps
}) => {
	const TinymceKey = import.meta.env.VITE_TINY_MCE_KEY!;
	return (
		<>
			<Editor
				apiKey={TinymceKey}
				init={{
					plugins:
						"anchor autolink charmap codesample emoticons image link lists media searchreplace table visualblocks wordcount checklist mediaembed casechange export formatpainter pageembed linkchecker a11ychecker tinymcespellchecker permanentpen powerpaste advtable advcode editimage advtemplate mentions tinycomments tableofcontents footnotes mergetags autocorrect typography inlinecss",
					toolbar:
						"undo redo | blocks fontfamily fontsize | bold italic underline strikethrough | link image media table mergetags | addcomment showcomments | spellcheckdialog a11ycheck typography | align lineheight | checklist numlist bullist indent outdent | emoticons charmap | removeformat",
					tinycomments_mode: "embedded",
					mergetags_list: [
						{ value: "First.Name", title: "First Name" },
						{ value: "Email", title: "Email" },
					],
					directionality: "ltr",
					...otherProps.init, // Allow overriding default init options
				}}
				initialValue={initialValue}
				{...otherProps}
			/>
		</>
	);
};

export default TinymceEditor;
