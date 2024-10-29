import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./App";
import ListEmployees from "./components/ListEmployees";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import { store, persistor } from "./redux/store";

const path = createBrowserRouter([
	{
		path: "/",
		element: <App />,
	},
	{
		path: "/employees-list",
		element: <ListEmployees />,
	},
]);

const root = document.getElementById("root");

ReactDOM.createRoot(root).render(
	<React.StrictMode>
		<Provider store={store}>
			<PersistGate loading={null} persistor={persistor}>
				<RouterProvider router={path} />
			</PersistGate>
		</Provider>
	</React.StrictMode>
);
