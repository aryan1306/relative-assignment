import "./App.css";
import Card from "./assets/svg/Vector.svg";
import StyledCard from "./components/StyledCard";

function App() {
	return (
		<div className='flex mt-40'>
			<StyledCard>
				<p className='text-center text-white'>hello</p>
			</StyledCard>
			<StyledCard>
				<p className='text-center text-white'>hello</p>
			</StyledCard>
		</div>
	);
}

export default App;
