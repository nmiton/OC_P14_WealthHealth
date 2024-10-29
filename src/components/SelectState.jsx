import states from "../data/states";

// eslint-disable-next-line react/prop-types
export default function SelectState({ state, setState, value }) {
	return (
		<>
			<label htmlFor="state">State</label>
			<select name="state" id="state" onChange={(e) => setState(state, e.target.value)}>
				{states.map((stateItem, index) => (
					<option value={stateItem.abbreviation} key={index} selected={value === stateItem.name}>
						{stateItem.name}
					</option>
				))}
			</select>
		</>
	);
}
