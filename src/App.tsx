import "./App.css";
import Card from "./assets/svg/Vector.svg";
import StyledCard from "./components/StyledCard";

function App() {
	return (
		<div className='flex mt-40'>
			<StyledCard
				name='Bitcoin (BTC)'
				price='31,812.80'
				tvl='60000'
				coin='BTC'
				profitOrLoss='10'
			/>
			<StyledCard
				name='Solana (SOL)'
				price='32.83'
				tvl='60000'
				coin='SOL'
				profitOrLoss='-12.32'
			/>
			<StyledCard
				name='Ethereum (ETH)'
				price='1,466.45'
				tvl='60000'
				coin='ETH'
				profitOrLoss='-11.93'
			/>
			<StyledCard
				name='Binance USD (BUSD)'
				price='32.28'
				coin='BNB'
				tvl='60000'
				profitOrLoss='0.26'
			/>
			<StyledCard
				name='Shiba Inu (SHIB)'
				price='0.00000001948'
				coin='SHIB'
				tvl='60000'
				profitOrLoss='-2.57'
			/>
		</div>
	);
}

export default App;
