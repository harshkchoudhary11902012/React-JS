import { useState } from "react";
import "./App.css";

function App() {
	let [counter, setCounter] = useState(15);

	// let counter = 15;
	const addValue = () => {
		// counter = counter + 1;
		setCounter(counter + 1);
	};

	const removeValue = () => {
		setCounter(counter - 1);
	};
	return (
		<>
			<h1>Hello Vite + React!</h1>
			<h2>Counter Value: {counter}</h2>
			<button onClick={addValue}>Add Value : {counter}</button>
			<br />
			<button onClick={removeValue}>Remove Value : {counter}</button>
			<p>Footer: {counter}</p>
		</>
	);
}

export default App;
