import React, { useEffect, useState } from "react";
import "./StyledCard.css";
import SOL from "../../assets/svg/SOL-small.svg";
import BNB from "../../assets/svg/BNB-small.svg";
import ETH from "../../assets/svg/ETH-small.svg";
import BTC from "../../assets/svg/BTC-small.svg";
import BTC_BIG from "../../assets/svg/BTC.svg";
import SOL_BIG from "../../assets/svg/SOL.svg";
import BNB_BIG from "../../assets/svg/BNB.svg";
import SHIB from "../../assets/svg/SHIB.svg";
import ETH_BIG from "../../assets/svg/ETH.svg";
import PopularPair from "../PopularPair";
import Label from "../Label";

type CoinType = "ETH" | "BTC" | "SHIB" | "SOL" | "BNB";
interface IStyledProps {
	name: string;
	price: string;
	profitOrLoss: string;
	tvl: string;
	coin?: CoinType;
	pairs?: string[];
}

function StyledCard({
	name,
	price,
	profitOrLoss,
	tvl,
	pairs,
	coin,
}: IStyledProps) {
	const [coinType, setCoinType] = useState("");
	const [pairImg, setPairImg] = useState<string[]>([]);

	useEffect(() => {
		if (coin === "BNB") {
			setCoinType(BNB_BIG);
			setPairImg([SOL, ETH, BNB]);
		} else if (coin === "BTC") {
			setCoinType(BTC_BIG);
			setPairImg([SOL, ETH, BNB]);
		} else if (coin === "ETH") {
			setCoinType(ETH_BIG);
			setPairImg([SOL, BTC, BNB]);
		} else if (coin === "SHIB") {
			setCoinType(SHIB);
			setPairImg([SOL, ETH, BNB]);
		} else {
			setCoinType(SOL_BIG);
			setPairImg([BTC, ETH, BNB]);
		}
	}, []);

	return (
		<div>
			<img
				src={coinType}
				alt=''
				className='relative w-8 top-[261px] left-[135px]'
			/>
			<img
				src={coinType}
				alt=''
				className='relative left-[121px] top-[202px] z-[1]'
			/>
			<div className='bg-dark-gray backdrop-blur-2xl rounded-full h-[100px] w-[100px] relative top-[128px] bottom-[5px] left-[96px] '></div>
			<div
				className='card-clip w-[399px] h-[399px] mt-10 from-light-gray to-dark-gray backdrop-blur-2xl'
				style={{
					background:
						"linear-gradient(180deg, var(--tw-gradient-from) 0%, var(--tw-gradient-to) 107.43%)",
				}}>
				<div className='mt-[4.6rem] w-[290px] flex flex-col justify-center'>
					<Label extraClass='mt-[4.5rem]'>{name}</Label>
					<div
						id='pill-value'
						className='mt-4 bg-gradient-to-b from-border-light to-border-dark rounded-full mx-5'>
						<div className='bg-pill-color p-2 rounded-full m-[0.45px] flex items-center'>
							<p className='text-base text-white text-center flex-grow ml-10'>
								${price}
							</p>
							<p
								className={`text-xs ${
									parseFloat(profitOrLoss) > 0
										? "text-green-500"
										: "text-red-600"
								} text-center pr-1`}>
								{profitOrLoss}%
							</p>
						</div>
					</div>
					<Label extraClass='mt-4'>Price</Label>

					<div
						id='pill-value'
						className='mt-3 bg-gradient-to-b from-border-light to-border-dark rounded-full mx-5'>
						<div className='bg-pill-color p-2 rounded-full m-[0.5px]'>
							<p className='text-base text-white text-center'>{tvl}</p>
						</div>
					</div>
					<Label extraClass='mt-2'>TVL</Label>
					<PopularPair pairImg={pairImg} />
					<Label extraClass='mt-2'>Popular pairs</Label>
				</div>
			</div>
		</div>
	);
}

export default StyledCard;
