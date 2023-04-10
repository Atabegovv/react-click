import { useState } from 'react';
import { genereteRandomNum } from '../utils/genereteRandomNum';

function RandomNumber(props) {
	const { maxNum } = props;

	const [randomNum, setRandomNum] = useState(genereteRandomNum(maxNum));

	const changeRandomNum = () => {
		setRandomNum(genereteRandomNum(maxNum));
	};

	return (
		<div className="random-number">
			<h1>{randomNum}</h1>
			<button onClick={changeRandomNum}>Generete Number</button>
		</div>
	);
}

export { RandomNumber };
