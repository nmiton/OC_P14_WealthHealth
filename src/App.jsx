import { Link, useLocation } from "react-router-dom"
/**
 * Function to render app wrapper
 * @param {JSX.Element} children - JSX Element to show
 * @returns {JSX.Element}
 */
// eslint-disable-next-line react/prop-types
export default function App({ children }) {
	const location = useLocation()

	return (
		<>
			<header>
				<h1>
					<Link to="/">HRnet</Link>
				</h1>
				<nav>
					<ul>
						<li className={location.pathname === "/new-employee" ? "active" : undefined}>
							<Link to="/new-employee">New employee</Link>
						</li>
						<li className={location.pathname === "/employees-list" ? "active" : undefined}>
							<Link to="/employees-list">Employees List</Link>
						</li>
					</ul>
				</nav>
			</header>
			<div id="app-content">{children}</div>
		</>
	)
}
