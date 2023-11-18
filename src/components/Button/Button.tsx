import { type } from "os";
import styles from "./Button.module.css";

type ButtonProps = {
	
}

interface Props {}

export const Button = (props: Props) => {
  return (
		<div className='p-3'>
			<button className="relative z-10 inline-block uppercase text-center bg-transparent transition duration-300 border border-solid border-white border-1/8 border-gradient-90 text-gradient-90 hover:after:w-2/1 after:content after:absolute after:transition after:w-0 after:bottom--px after:h-12 after:bg-gradient-90 after:h-2/1 after:left--10 after:skew-x-15 after:z-1">
				Your Button Text
			</button>
		</div>
	)
};