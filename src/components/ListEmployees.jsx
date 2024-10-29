import { connect } from "react-redux";
import DataTable from "react-data-table-component";
import { Link } from "react-router-dom";

// eslint-disable-next-line react/prop-types, react-refresh/only-export-components
const ListEmployees = ({ employees }) => {
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
			<h1>Current Employees</h1>
			<DataTable title="Employee List" columns={columns} data={employees} pagination />
			<Link to="/">Home</Link>
		</div>
	);
};

const mapStateToProps = (state) => ({
	employees: state.employees.employees,
});

// eslint-disable-next-line react-refresh/only-export-components
export default connect(mapStateToProps)(ListEmployees);
