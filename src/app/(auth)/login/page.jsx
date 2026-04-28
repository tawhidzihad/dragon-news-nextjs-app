"use client";

import { authClient } from "@/lib/auth-client";
import Link from "next/link";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { FaEye } from "react-icons/fa";
import { LuEyeClosed } from "react-icons/lu";

const LoginPage = () => {
	const [isShowPass, setIsShowPass] = useState(false);

	const {
		register,
		handleSubmit,
		watch,
		formState: { errors, touchedFields, dirtyFields, isValid },
	} = useForm({
		mode: "onChange",
	});

	const onSubmit = async (onSubmitData) => {
		const { email, password } = onSubmitData;

		const { data, error } = await authClient.signIn.email({
			email: email,
			password: password,
			rememberMe: true,
			callbackURL: "/",
		});

		console.log(data, error);

		if (error) {
			alert(error.message);
		}

		if (data) {
			alert("Login Successful");
		}
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
					className="fieldset rounded-box space-y-1"
					onSubmit={handleSubmit(onSubmit)}
				>
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
						<span
							className="absolute right-4 top-9 text-xl"
							onClick={() => setIsShowPass(!isShowPass)}
						>
							{isShowPass ? <FaEye></FaEye> : <LuEyeClosed />}
						</span>
						{errors.password && (
							<p className="text-red-500">{errors.password.message}</p>
						)}
					</fieldset>

					<button
						className="btn mt-4 py-6 bg-zinc-700 text-white"
						type="submit"
						// disabled={!isValid}
					>
						Login
					</button>

					<p className="text-xs font-medium text-center mt-4">
						Dont’t Have An Account ?{" "}
						<Link href={"/register"} className="text-orange-600">
							Register
						</Link>{" "}
					</p>
				</form>
			</div>
		</div>
	);
};

export default LoginPage;
