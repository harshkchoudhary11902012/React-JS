import "./App.css";
import Card from "./components/Card";
function App() {
	return (
		<>
			<h1 className="bg-green-400 text-black p-4 rounded-xl mb-4">Tailwind Test</h1>
			<Card username="Johny" btnText="Buy" />
			<Card username="Walker" btnText="Purchase" />
		</>
	);
}

export default App;
