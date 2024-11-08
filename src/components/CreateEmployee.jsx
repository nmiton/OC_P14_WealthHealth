import { Link } from "react-router-dom"
import SelectState from "./SelectState"
import { useContext, useRef, useState } from "react"
import { Modal } from "@nmiton/modal"
import { EmployeesContext } from "../contexts/EmployeesContext"

// Initial state for a new employee with empty values
const initialEmployeeState = {
	firstName: "",
	lastName: "",
	dateOfBirth: "",
	startDate: "",
	department: "Sales",
	street: "",
	city: "",
	state: "Alabama",
	zipCode: "",
}

/**
 * Function to render form for create a new employee
 * @returns {JSX.Element}
 */
// eslint-disable-next-line react-refresh/only-export-components, react/prop-types
export default function CreateEmployee() {
	const employeesCtxt = useContext(EmployeesContext)
	const formRef = useRef()
	const [employeeData, setEmployeeData] = useState(initialEmployeeState)
	const [showModal, setShowModal] = useState(false)
	const today = new Date()

	/**
	 * Updates the employee state for a specific field.
	 * @param {String} field - The name of the field to update.
	 * @param {*} value - The new value.
	 */
	const updateEmployeeData = (field, value) => {
		setEmployeeData((prevData) => ({ ...prevData, [field]: value }))
	}

	/**
	 * Saves the employee data and resets the form.
	 * @param {Event} e - The form submit event.
	 */
	const handleSubmit = (e) => {
		e.preventDefault()
		if (validateFieldsNewEmployee()) {
			employeesCtxt.addEmployee(employeeData)
			formRef.current.reset()
			setEmployeeData(initialEmployeeState)
			setShowModal(true)
		} else {
			alert("Form error validation...")
		}
	}

	/**
	 * Function to validate fields new employee
	 * @returns {Boolean}
	 */
	const validateFieldsNewEmployee = () => {
		const date = new Date()
		if (!employeeData.firstName) return false
		if (!employeeData.lastName) return false
		if (!employeeData.dateOfBirth || employeeData.dateOfBirth > date) return false
		if (!employeeData.startDate || employeeData.startDate > date) return false
		if (!employeeData.street) return false
		if (!employeeData.city) return false
		if (!employeeData.zipCode) return false
		if (!employeeData.state) return false
		if (!employeeData.department) return false
		return true
	}

	return (
		<>
			<div className="container">
				<Link to="/employees-list">View Current Employees</Link>

				<h2>Create Employee</h2>
				<form onSubmit={handleSubmit} id="create-employee" ref={formRef}>
					<label htmlFor="first-name">First Name</label>
					<input
						type="text"
						id="first-name"
						value={employeeData.firstName}
						onChange={(e) => updateEmployeeData("firstName", e.target.value)}
						required
						placeholder="Firstname"
						autoComplete="off"
					/>

					<label htmlFor="last-name">Last Name</label>
					<input
						type="text"
						id="last-name"
						value={employeeData.lastName}
						onChange={(e) => updateEmployeeData("lastName", e.target.value)}
						required
						placeholder="Lastname"
						autoComplete="off"
					/>

					<label htmlFor="date-of-birth">Date of Birth</label>
					<input
						id="date-of-birth"
						type="date"
						value={employeeData.dateOfBirth}
						onChange={(e) => updateEmployeeData("dateOfBirth", e.target.value)}
						required
						placeholder="Date of birth"
						max={today.toISOString().split("T")[0]}
					/>

					<label htmlFor="start-date">Start Date</label>
					<input
						id="start-date"
						type="date"
						value={employeeData.startDate}
						onChange={(e) => updateEmployeeData("startDate", e.target.value)}
						required
						placeholder="Start date"
						max={today.toISOString().split("T")[0]}
					/>

					<fieldset className="address">
						<legend>Address</legend>

						<label htmlFor="street">Street</label>
						<input
							id="street"
							type="text"
							value={employeeData.street}
							onChange={(e) => updateEmployeeData("street", e.target.value)}
							required
							placeholder="Street"
						/>

						<label htmlFor="city">City</label>
						<input
							id="city"
							type="text"
							value={employeeData.city}
							onChange={(e) => updateEmployeeData("city", e.target.value)}
							required
							placeholder="City"
						/>

						<SelectState state="state" setState={updateEmployeeData} value={employeeData.state} />

						<label htmlFor="zip-code">Zip Code</label>
						<input
							id="zip-code"
							type="number"
							value={employeeData.zipCode}
							onChange={(e) => updateEmployeeData("zipCode", e.target.value)}
							required
							placeholder="Zip code"
						/>
					</fieldset>

					<label htmlFor="department">Department</label>
					<select
						name="department"
						id="department"
						value={employeeData.department}
						onChange={(e) => updateEmployeeData("department", e.target.value)}
					>
						<option value="Sales">Sales</option>
						<option value="Marketing">Marketing</option>
						<option value="Engineering">Engineering</option>
						<option value="Human Resources">Human Resources</option>
						<option value="Legal">Legal</option>
					</select>
					<button type="submit">Save</button>
				</form>
			</div>

			{showModal && (
				<Modal title={<h3>Information :</h3>} closeModal={() => setShowModal(false)}>
					<p>Employee Created</p>
				</Modal>
			)}
		</>
	)
}
