import { useState, useContext } from "react"
import DataTable from "react-data-table-component"
import { Link } from "react-router-dom"
import { EmployeesContext } from "../contexts/EmployeesContext"
/**
 * Function to render employees list
 * @returns {JSX.Element}
 */
// eslint-disable-next-line react/prop-types, react-refresh/only-export-components
export default function ListEmployees() {
	const employeesCtxt = useContext(EmployeesContext)
	const [searchTerm, setSearchTerm] = useState("")

	/**
	 * Function to filter employees based on searchTerm
	 */
	const filteredData = employeesCtxt.employees.filter((employee) => {
		return Object.values(employee).some((value) => (value ? value.toString().toLowerCase().includes(searchTerm.toLowerCase()) : false))
	})

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
	]

	return (
		<div className="container">
			<h2>Current Employees</h2>

			<div className="search-wrapper">
				<label htmlFor="input-search-employee">Search</label>
				<input
					type="text"
					id="input-search-employee"
					placeholder="Search for employees"
					value={searchTerm}
					onChange={(e) => setSearchTerm(e.target.value)}
				/>
			</div>

			<DataTable title="Employee List:" columns={columns} data={filteredData} pagination noDataComponent="None employee found" />

			<Link to="/">Home</Link>
		</div>
	)
}
