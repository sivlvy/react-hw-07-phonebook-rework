const Container = ({ children }) => {
	return (
		<div className="max-w-5xl mx-auto px-10 font-mono py-8 bg-gray-50 mt-56 min-h-96 rounded-xl shadow-md shadow-teal-200">
			{children}
		</div>
	);
};

export default Container;
