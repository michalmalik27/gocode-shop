
 import {useState} from "react";
 import './Select.css';

 const Select  = ({title, list, onSelected}) => {
	
	const [selected, setSelected] = useState('');

	let selectedChanged = (event) => {
		setSelected(event.target.value);
		onSelected(event.target.value);
		//onSelected(selected);
	};

	return (
		<div className="collection-sort">
		<label>{title}:</label>
 		<select onChange={selectedChanged}>
		 	<option value="">All...</option>
 			{
 				list.map(val => <option value={val}>{val}</option>)
 			}
 		</select>
 	</div>
	);
 };
	

 export default Select;
