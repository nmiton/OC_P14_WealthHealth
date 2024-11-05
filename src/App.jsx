/**
 * Function to render app wrapper
 * @param {JSX.Element} children - JSX Element to show
 * @returns {JSX.Element}
 */
// eslint-disable-next-line react/prop-types
export default function App({ children }) {
	return (
		<>
			<header>
				<h1>HRnet</h1>
			</header>
			<div id="app-content">{children}</div>
		</>
	);
}
