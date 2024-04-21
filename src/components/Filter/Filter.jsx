const Filter = ({ onChange }) => {
	return (
		<input
			onChange={onChange}
			className="bg-zinc-200 text-zinc-600 font-mono ring-1 ring-zinc-400 focus:ring-2 focus:ring-teal-300 outline-none duration-300 placeholder:text-zinc-600 placeholder:opacity-50 rounded-full px-4 py-1 shadow-md w-80 focus:shadow-lg focus:shadow-teal-400"
			type="text"
			placeholder="Find contact"
		/>
	);
};

export default Filter;
