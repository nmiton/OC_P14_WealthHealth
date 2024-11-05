import { Link } from "react-router-dom";
/**
 * Function to render error page
 * @returns {JSX.Element}
 */
export default function ErrorPage() {
	return (
		<div id="error-page" className="container">
			<p>Error Page</p>
			<Link to="/">Home</Link>
		</div>
	);
}
