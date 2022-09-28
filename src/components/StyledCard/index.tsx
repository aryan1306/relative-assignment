import React from "react";
import "./StyledCard.css";

interface IStyledProps {
	children?: React.ReactNode;
}

function StyledCard({ children }: IStyledProps) {
	return (
		<div
			className='card-clip w-[399px] h-[399px] mt-10 from-light-gray to-dark-gray'
			style={{
				background:
					"linear-gradient(180deg, var(--tw-gradient-from) 0%, var(--tw-gradient-to) 107.43%)",
			}}>
			<div className='mt-[4.6rem] w-[290px] flex flex-col justify-center'>
				<p className='text-xs text-label-color text-center'>Ethereum</p>
				<div
					id='pill-value'
					className='mt-4 bg-gradient-to-br from-border-light to-border-dark rounded-full mx-5'>
					<div className='bg-pill-color p-2 rounded-full m-[0.45px] flex items-center'>
						<p className='text-base text-white text-center flex-grow ml-10'>
							$1,466.50
						</p>
						<p className='text-xs text-red-600 text-center pr-1'>-1.09%</p>
					</div>
				</div>
				<p className='text-xs text-label-color text-center mt-4'>Price</p>
				<div
					id='pill-value'
					className='mt-3 bg-gradient-to-br from-border-light to-border-dark rounded-full mx-5'>
					<div className='bg-pill-color p-2 rounded-full m-[0.5px]'>
						<p className='text-base text-white text-center'>$60,466</p>
					</div>
				</div>
				<p className='text-xs text-label-color text-center mt-4'>TVL</p>
			</div>
		</div>
	);
}

export default StyledCard;
