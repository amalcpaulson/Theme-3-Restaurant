interface EditorState {
	isEditorVisible: boolean;
}

interface LandingState {
	title: string;
	rating: string;
	ratingCount: string;
	description: string;
	address: string;
	timing: string;
}

interface Items {
	search: string;
	sort: string;
	filter: string;
	tab: string;
}

interface Product {
	img: string;
	rate: number;
	quantity: number;
	name: string;
	id: string;
	rating: string;
	tags: string[];
	veg: boolean;
}