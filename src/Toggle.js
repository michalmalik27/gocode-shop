
import {useState} from "react";

let Toggle = () => {

	const [isDivShown, setIsDivShown] = useState(true);

	function doToggle(){
		setIsDivShown(!isDivShown);
	}

	return (
		<>
			{isDivShown && <div> I am tired</div>}
			<button onClick={doToggle}>Toggle</button>
		</>
	);
};

export default Toggle;