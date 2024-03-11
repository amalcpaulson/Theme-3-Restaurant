import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import NotFound from "./pages/notFound";
import { DeliveryAddress } from "./pages/deliveryAddress";
import { useSelector } from "react-redux";
import Home from "./pages/home";

function App() {
	const isEditable = useSelector(
		(state: any) => state.editor.isEditorVisible
	);
	console.log(isEditable);
	const router = createBrowserRouter([
		{
			path: "*",
			element: <NotFound />,
		},
		{
			path: "/404",
			element: <NotFound />,
		},
		{
			path: "/",
			element: <Home />,
		},
		{
			path: "/deliveryaddress",
			element: <DeliveryAddress />,
		},
	]);
	return (
		<>
			<RouterProvider router={router} />
		</>
	);
}

export default App;
