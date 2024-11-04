import { Link } from "react-router-dom";
import SelectState from "./SelectState";
import { useRef, useState } from "react";
import { addEmployee } from "../redux/actions";
import { connect } from "react-redux";
import Modal from "@nmiton/modal";

// eslint-disable-next-line react-refresh/only-export-components, react/prop-types
function CreateEmployee({ addEmployee }) {
	const formRef = useRef();
	const [statesNewEmployee, setStatesNewEmployee] = useState({
		firstName: null,
		lastName: null,
		dateOfBirth: null,
		startDate: null,
		department: "Sales",
		street: null,
		city: null,
		state: "Alabama",
		zipCode: null,
	});

	const [showModal, setShowModal] = useState(true);

	/**
	 * Function to update statesNewEmployee
	 * @param {String} state
	 * @param {*} value
	 * @returns
	 */
	const updateStatesEmployee = (state, value) => [setStatesNewEmployee((prevStates) => ({ ...prevStates, [state]: value }))];

	/**
	 * Function to save employee
	 * @param {Event} e
	 */
	const saveEmployee = (e) => {
		e.preventDefault();
		//TODO check states null
		addEmployee(statesNewEmployee);
		formRef.current.reset();
		setShowModal(true);
	};

	return (
		<>
			<div className="container">
				<Link to="/employees-list">View Current Employees</Link>

				<h2>Create Employee</h2>
				<form action="#" id="create-employee" ref={formRef}>
					<label htmlFor="first-name">First Name</label>
					<input type="text" id="first-name" defaultValue={statesNewEmployee.firstName} onChange={(e) => updateStatesEmployee("firstName", e.target.value)} required />

					<label htmlFor="last-name">Last Name</label>
					<input type="text" id="last-name" defaultValue={statesNewEmployee.lastName} onChange={(e) => updateStatesEmployee("lastName", e.target.value)} required />

					<label htmlFor="date-of-birth">Date of Birth</label>
					<input id="date-of-birth" type="date" defaultValue={statesNewEmployee.dateOfBirth} onChange={(e) => updateStatesEmployee("dateOfBirth", e.target.value)} required />

					<label htmlFor="start-date">Start Date</label>
					<input id="start-date" type="date" defaultValue={statesNewEmployee.startDate} onChange={(e) => updateStatesEmployee("startDate", e.target.value)} required />

					<fieldset className="address">
						<legend>Address</legend>

						<label htmlFor="street">Street</label>
						<input id="street" type="text" defaultValue={statesNewEmployee.street} onChange={(e) => updateStatesEmployee("street", e.target.value)} required />

						<label htmlFor="city">City</label>
						<input id="city" type="text" defaultValue={statesNewEmployee.city} onChange={(e) => updateStatesEmployee("city", e.target.value)} required />

						<SelectState state="state" setState={updateStatesEmployee} value={statesNewEmployee.state} />

						<label htmlFor="zip-code">Zip Code</label>
						<input id="zip-code" type="number" defaultValue={statesNewEmployee.zipCode} onChange={(e) => updateStatesEmployee("zipCode", e.target.value)} required />
					</fieldset>

					<label htmlFor="department">Department</label>
					<select name="department" id="department" onChange={(e) => updateStatesEmployee("department", e.target.value)}>
						<option value="Sales">Sales</option>
						<option value="Marketing">Marketing</option>
						<option value="Engineering">Engineering</option>
						<option value="Human Resources">Human Resources</option>
						<option value="Legal">Legal</option>
					</select>
				</form>

				<button onClick={saveEmployee}>Save</button>
			</div>

			{showModal && (
				<Modal id="confirmation" closeModal={() => setShowModal(false)}>
					<p>Employee Created</p>
				</Modal>
			)}
		</>
	);
}

const mapDispatchToProps = (dispatch) => ({
	addEmployee: (employee) => dispatch(addEmployee(employee)),
});

// eslint-disable-next-line react-refresh/only-export-components
export default connect(null, mapDispatchToProps)(CreateEmployee);
