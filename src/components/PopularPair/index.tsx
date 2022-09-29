import React from "react";

interface IProps {
	pairImg: string[];
}

function PopularPair({ pairImg }: IProps) {
	return (
		<div className='flex justify-center mt-5 bg-pill-color rounded-full p-2 mx-20'>
			{pairImg.map((img, index) => (
				<img
					key={index}
					src={img}
					alt='sol'
					className={`${index === 2 ? "" : "mr-3"}`}
				/>
			))}
		</div>
	);
}

export default PopularPair;
