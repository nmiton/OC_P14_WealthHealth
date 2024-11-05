import { createContext, useState } from "react";

export const EmployeesContext = createContext();

// eslint-disable-next-line react/prop-types
export const EmployeesProvider = ({ children }) => {
	const [employees, setEmployees] = useState([]);

	/**
	 * Function to add an employee
	 * @param {Object} employee - Employee object
	 */
	const addEmployee = (employee) => {
		setEmployees([...employees, employee]);
	};

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
	);
};
