"use client";

import { authClient } from "@/lib/auth-client";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { FaEye } from "react-icons/fa";
import { LuEyeClosed } from "react-icons/lu";

const RegisterPage = () => {
	const [isShowPass, setIsShowPass] = useState(false);
	const router = useRouter()

	const {
		register,
		handleSubmit,
		watch,
		formState: { errors, touchedFields, dirtyFields, isValid },
	} = useForm({
		mode: "onChange",
	});

	const onSubmit = async (onSubmitData) => {
		const { email, name, password, photo } = onSubmitData;

		const { data, error } = await authClient.signUp.email({
			name: name, // required
			email: email, // required
			password: password, // required
			image: photo,
			callbackURL: "/",
		});

		if (error) {
			alert(error.message);
		}
		if (data) {
			alert("Signup Successful");
			router.push("/")
		}
	};

	// const passwordLength = watch("password")?.length || 0;

	return (
		<div className="container mx-auto min-h-[80vh] flex justify-center items-center">
			<div className="space-y-8 bg-base-200 py-8 px-8 w-lg">
				<h1 className="text-3xl font-semibold text-center">
					Register your account
				</h1>

				<div className="divider"></div>

				<form
					className="fieldset rounded-box space-y-2"
					onSubmit={handleSubmit(onSubmit)}
				>
					<fieldset>
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
					</fieldset>

					<fieldset>
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
					</fieldset>

					<fieldset>
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
					</fieldset>

					<fieldset className="relative">
						<p className="text-lg font-medium">
							Password <span className="text-red-500">*</span>
						</p>
						<input
							type={isShowPass ? "text" : "password"}
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

						{errors.password && (
							<p className="text-red-500">{errors.password.message}</p>
						)}
						<span
							className="absolute right-4 top-9 text-xl"
							onClick={() => setIsShowPass(!isShowPass)}
						>
							{isShowPass ? <FaEye></FaEye> : <LuEyeClosed />}
						</span>
					</fieldset>

					<button
						className="btn mt-4 py-6 bg-zinc-700 text-white"
						type="submit"
					>
						Register
					</button>

					<p className="text-xs font-medium text-center mt-4">
						Already Have An Account ?{" "}
						<Link href={"/login"} className="text-orange-600">
							Login
						</Link>
					</p>
				</form>
			</div>
		</div>
	);
};

export default RegisterPage;
