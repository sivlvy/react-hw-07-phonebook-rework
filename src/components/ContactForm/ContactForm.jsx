import { Formik, Field, Form } from 'formik';
import * as Yup from 'yup';

const initialValues = {
	name: '',
	phone: '',
};

const schema = Yup.object().shape({
	name: Yup.string().required().min(3),
	phone: Yup.string()
		.min(7)
		.max(18)
		.required()
		.matches(
			/^\+?(\d{2}-?\d{3}-?\d{3}-?\d{2}-?\d{2})$|^\d{7}$|^\d{10}$|^\+?\d{12}$/,
			`Number must have 7, 10 or 12 digits`
		),
});

const ContactForm = ({ onSubmit }) => {
	const handleSubmit = (values, { resetForm }) => {
		onSubmit(values);
		resetForm();
	};

	return (
		<div>
			<Formik
				onSubmit={handleSubmit}
				initialValues={initialValues}
				validationSchema={schema}
			>
				<Form className="flex flex-col gap-20">
					<div className="flex gap-10">
						<Field
							className="bg-zinc-200 text-zinc-600 font-mono ring-1 ring-zinc-400 focus:ring-2 focus:ring-teal-300 outline-none duration-300 placeholder:text-zinc-600 placeholder:opacity-50 rounded-full px-4 py-1 shadow-md focus:shadow-lg focus:shadow-teal-400"
							placeholder="Name"
							type="text"
							name="name"
						/>

						<Field
							className="bg-zinc-200 text-zinc-600 font-mono ring-1 ring-zinc-400 focus:ring-2 focus:ring-teal-300 outline-none duration-300 placeholder:text-zinc-600 placeholder:opacity-50 rounded-full px-4 py-1 shadow-md focus:shadow-lg focus:shadow-teal-400"
							name="phone"
							placeholder="Phone"
						></Field>
					</div>
					<div className="mx-auto mt-10">
						<button className="border-2 border-slate-200 text-zinc-600 ml-4 px-3 rounded-md w-44 block relative px-8 py-2 rounded-md bg-zinc-200 isolation-auto z-10 border-2 border-teal-300 before:absolute before:w-full before:transition-all before:duration-700 before:hover:w-full before:-left-full before:hover:left-0 before:rounded-full before:bg-teal-300 before:-z-10 before:aspect-square before:hover:scale-150 overflow-hidden before:hover:duration-700">
							Add contact
						</button>
					</div>
				</Form>
			</Formik>
		</div>
	);
};

export default ContactForm;
