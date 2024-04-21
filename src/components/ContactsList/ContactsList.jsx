import React from 'react';
const ContactsList = ({ contacts, onDeleteContact }) => {
	return (
		<ul className="mt-10">
			{contacts.map(({ id, name, phone }) => (
				<li
					className="border-2 border-slate-400 w-80 h-16 flex justify-between px-5 items-center bg-gray-200 border-teal-300 mb-2 rounded-lg"
					key={id}
				>
					<div className="flex flex-col">
						<span>{name}</span>
						<span>{phone}</span>
					</div>
					<button onClick={() => onDeleteContact(id)}>
						<svg className="icon icon-delete-1-svgrepo-com w-10 h-10 fill-slate-100 border-2 border-teal-300 hover:border-red-600 hover:bg-red-600  transition-colors duration-500 rounded-md">
							<svg
								viewBox="0 0 1024 1024"
								className="icon"
								version="1.1"
								xmlns="http://www.w3.org/2000/svg"
							>
								<g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
								<g
									id="SVGRepo_tracerCarrier"
									strokeLinecap="round"
									strokeLinejoin="round"
								></g>
								<g id="SVGRepo_iconCarrier">
									<path
										d="M512 897.6c-108 0-209.6-42.4-285.6-118.4-76-76-118.4-177.6-118.4-285.6 0-108 42.4-209.6 118.4-285.6 76-76 177.6-118.4 285.6-118.4 108 0 209.6 42.4 285.6 118.4 157.6 157.6 157.6 413.6 0 571.2-76 76-177.6 118.4-285.6 118.4z m0-760c-95.2 0-184.8 36.8-252 104-67.2 67.2-104 156.8-104 252s36.8 184.8 104 252c67.2 67.2 156.8 104 252 104 95.2 0 184.8-36.8 252-104 139.2-139.2 139.2-364.8 0-504-67.2-67.2-156.8-104-252-104z"
										fill=""
									></path>
									<path
										d="M707.872 329.392L348.096 689.16l-31.68-31.68 359.776-359.768z"
										fill=""
									></path>
									<path d="M328 340.8l32-31.2 348 348-32 32z" fill=""></path>
								</g>
							</svg>
						</svg>
					</button>
				</li>
			))}
		</ul>
	);
};

export default ContactsList;
