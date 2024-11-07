import { createContext, useState, useEffect } from "react"

export const EmployeesContext = createContext()
// eslint-disable-next-line react/prop-types
export const EmployeesProvider = ({ children }) => {
	const [employees, setEmployees] = useState(JSON.parse(localStorage.getItem("employees")) || [])

	/**
	 * UEF to persist the employees data to localStorage
	 */
	useEffect(() => {
		if (employees.length > 0) localStorage.setItem("employees", JSON.stringify(employees))
	}, [employees])

	/**
	 * Function to add an employee
	 * @param {Object} employee - Employee object
	 */
	const addEmployee = (employee) => setEmployees([...employees, employee])

	return (
		<EmployeesContext.Provider
			value={{
				// States
				employees,
				setEmployees,
				// Functions
				addEmployee,
			}}
		>
			{children}
		</EmployeesContext.Provider>
	)
}
