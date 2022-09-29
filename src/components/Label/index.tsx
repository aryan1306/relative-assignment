import { ReactNode } from "react";

interface IProps {
	extraClass?: string;
	children: ReactNode;
}

function Label({ children, extraClass }: IProps) {
	return (
		<p className={`text-xs text-label-color text-center ${extraClass}`}>
			{children}
		</p>
	);
}

export default Label;
