import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./App";
import ListEmployees from "./components/ListEmployees";
import { EmployeesProvider } from "./contexts/EmployeesContext";
import CreateEmployee from "./components/CreateEmployee";

const path = createBrowserRouter([
	{
		path: "/",
		element: (
			<EmployeesProvider>
				<App>
					<CreateEmployee />
				</App>
			</EmployeesProvider>
		),
	},
	{
		path: "/employees-list",
		element: (
			<EmployeesProvider>
				<App>
					<ListEmployees />
				</App>
			</EmployeesProvider>
		),
	},
]);

const root = document.getElementById("root");

ReactDOM.createRoot(root).render(
	<React.StrictMode>
		<RouterProvider router={path} />
	</React.StrictMode>
);
