import { Link } from "react-router-dom"

export default function Home() {
	return (
		<div className="container" id="home-wrapper">
			<h2>Welcome to HRnet</h2>

			<ul>
				<li>
					<Link to="/new-employee">
						<button>New employee</button>
					</Link>
				</li>
				<li>
					<Link to="/employees-list">
						<button>Employees list</button>
					</Link>
				</li>
			</ul>
		</div>
	)
}
