import { Oval } from 'react-loader-spinner';

const Loader = () => {
	return (
		<div className="flex items-center justify-center mt-10">
			<Oval
				visible={true}
				height="40"
				width="40"
				color="#5EEAD4"
				ariaLabel="oval-loading"
				wrapperStyle={{}}
				wrapperClass=""
			/>
		</div>
	);
};

export default Loader;
