import states from "../data/states"
/**
 * Renders a select dropdown for U.S. states.
 * @param {Object} props - Component properties.
 * @param {String} props.state - State name.
 * @param {Function} props.setState - Function to update the selected state.
 * @param {String} props.value - Currently selected state abbreviation.
 * @returns {JSX.Element} The select dropdown component for states.
 */
// eslint-disable-next-line react/prop-types
export default function SelectState({ state, setState, value }) {
	return (
		<>
			<label htmlFor="state">State</label>
			<select name="state" id="state" onChange={(e) => setState(state, e.target.value)} defaultValue={value}>
				{states.map((stateItem, index) => (
					<option value={stateItem.abbreviation} key={index}>
						{stateItem.name}
					</option>
				))}
			</select>
		</>
	)
}
