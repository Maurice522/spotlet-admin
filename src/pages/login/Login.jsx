import React, { useState } from "react";
import "./login.scss";
import "../../components/Sidebar Files/datatable.scss";
import { IconButton, InputAdornment, TextField } from "@mui/material";
import Button from "@mui/material/Button";
import SendIcon from "@mui/icons-material/Send";
import { LockOutlined, Visibility, VisibilityOff } from "@mui/icons-material";
import { SignIn } from "../../services/api";
import { toast } from "react-toastify";

const Login = () => {
	const [showPassword, setShowPassword] = useState(false);
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");

	const handleSignIn = async () => {
		if (!email || !password) {
			console.log("Enter the details");
			toast.error("Enter the Details");
		}
		const info = {
			email,
			password,
		};
		try {
			const { data } = await SignIn(info);
			localStorage.setItem("admin", data.token);
			window.location.reload();
		} catch (error) {
			console.log(error);
			toast.error(error.message);
		}
	};

	return (
		<div className="login">
			<h1 className="heading">SPOTLET</h1>
			<div className="datatable fl container">
				<h2>SignIn</h2>
				<br />
				<h3>Email Id</h3>
				<TextField
					type="email"
					fullWidth
					id="fullWidth"
					style={{ fontSize: 20 }}
					onChange={(e) => setEmail(e.target.value)}
				/>
				<br />
				<h3>Password</h3>
				{/* <TextField type="password" fullWidth id="fullWidth" style={{ fontSize: 20 }} onChange={() => {}} /> */}
				<TextField
					className="authInput pass"
					type={!showPassword ? "password" : "text"}
					name="password"
					onChange={(e) => setPassword(e.target.value)}
					value={password}
					fullWidth
					size="small"
					InputProps={{
						startAdornment: (
							<InputAdornment position="start">
								<LockOutlined />
							</InputAdornment>
						),
						endAdornment: (
							<InputAdornment position="end">
								<IconButton
									aria-label="toggle password visibility"
									onClick={() => setShowPassword((prev) => !prev)}
									edge="end"
								>
									{!showPassword ? <VisibilityOff /> : <Visibility />}
								</IconButton>
							</InputAdornment>
						),
					}}
					required
				/>
				<span>Forgot Password?</span>
				<br />
				<Button
					variant="contained"
					endIcon={<SendIcon />}
					onClick={handleSignIn}
				>
					SignIn
				</Button>
				<br />
			</div>
		</div>
	);
};

export default Login;
