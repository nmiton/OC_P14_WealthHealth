import DataTable from "react-data-table-component";
import { Link } from "react-router-dom";
import { EmployeesContext } from "../contexts/EmployeesContext";
import { useContext } from "react";
/**
 * Function to render employees list
 * @returns {JSX.Element}
 */
// eslint-disable-next-line react/prop-types, react-refresh/only-export-components
export default function ListEmployees() {
	const employeesCtxt = useContext(EmployeesContext);

	/**
	 * Variables to define table columns
	 */
	const columns = [
		{ name: "First Name", selector: "firstName", sortable: true },
		{ name: "Last Name", selector: "lastName", sortable: true },
		{ name: "Start Date", selector: "startDate", sortable: true },
		{ name: "Department", selector: "department", sortable: true },
		{ name: "Date of Birth", selector: "dateOfBirth", sortable: true },
		{ name: "Street", selector: "street", sortable: true },
		{ name: "City", selector: "city", sortable: true },
		{ name: "State", selector: "state", sortable: true },
		{ name: "Zip Code", selector: "zipCode", sortable: true },
	];

	return (
		<div className="container">
			<h2>Current Employees</h2>
			<DataTable title="Employee List :" columns={columns} data={employeesCtxt.employees} pagination noDataComponent="None employee" />
			<Link to="/">Home</Link>
		</div>
	);
}
