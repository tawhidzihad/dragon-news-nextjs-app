"use client";

import { useForm } from "react-hook-form";

const RegisterPage = () => {
	const {
		register,
		handleSubmit,
		watch,
		formState: { errors, touchedFields, dirtyFields, isValid },
	} = useForm({
		mode: "onChange",
	});

	const onSubmit = (data) => {
      console.log(data);
	};

	// const passwordLength = watch("password")?.length || 0;

	return (
		<div className="container mx-auto min-h-[80vh] flex justify-center items-center">
			<div className="space-y-8 bg-base-200 py-8 px-8 w-lg">
				<h1 className="text-3xl font-semibold text-center">
					Login your account
				</h1>

				<div className="divider"></div>

				<form
					className="fieldset rounded-box space-y-2"
					onSubmit={handleSubmit(onSubmit)}
				>

               <p className="text-lg font-medium">
						Your Name <span className="text-red-500">*</span>
					</p>
					<input
						type="text"
						// name="email"
						// required
						{...register("name", {
							required: "Name field is required",
						})}
						className="input w-full mb-3"
						placeholder="Enter your Name"
					/>
               {errors.name && (
						<p className="text-red-500">{errors.name.message}</p>
					)}

               <p className="text-lg font-medium">
						Photo URL <span className="text-red-500">*</span>
					</p>
					<input
						type="text"
						// name="email"
						// required
						{...register("photo", {
							required: "Photo field is required",
						})}
						className="input w-full mb-3"
						placeholder="Enter your photo url"
					/>
               {errors.photo && (
						<p className="text-red-500">{errors.photo.message}</p>
					)}


					<p className="text-lg font-medium">
						Email address <span className="text-red-500">*</span>
					</p>
					<input
						type="email"
						// name="email"
						// required
						{...register("email", {
							required: "Email field is required",
						})}
						className="input w-full mb-3"
						placeholder="Enter your email"
					/>
					{errors.email && (
						<p className="text-red-500">{errors.email.message}</p>
					)}

					<p className="text-lg font-medium">
						Password <span className="text-red-500">*</span>
					</p>
					<input
						type="password"
						// name="password"
						// required
						{...register("password", {
							required: "Password field is required",
							minLength: {
								value: 8,
								message: "Password must be at least 8 characters",
							},
						})}
						className="input w-full"
						placeholder="Enter your password"
					/>

					{/* {dirtyFields.password && passwordLength < 8 && (
                  <p>Password atleast 8 charecter</p>
               )}
               {isValid && <p>Password atleast 8 charecter</p>} */}

					{errors.password && (
						<p className="text-red-500">{errors.password.message}</p>
					)}

					<button
						className="btn mt-4 py-6 bg-zinc-700 text-white"
						type="submit"
						// disabled={!isValid}
					>
						Login
					</button>
				</form>
			</div>
		</div>
	);
};

export default RegisterPage;
