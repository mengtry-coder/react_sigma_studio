import React, { Component } from "react";
import { Form, Input, Button, Checkbox, Layout } from "antd";

export class Login extends Component {
	render() {
		const onFinish = (value) => {
			console.log("Succces: ", value);
		};
		const onFinishFailed = (value) => {
			console.log("Failed: ", value);
		};
		return (
			<div>
				<form
					{...Layout}
					name="bassic"
					initalValues={{ rember: true }}
					onFinish={onFinish}
					onFinishFailed={onFinishFailed}
				>
					Usernamea: <input placeholder="Username" />
					Passworda: <input placeholder="Password" />
				</form>
				<Button type="primary" style={{ marginLeft: 8 }}>
					Login
				</Button>
			</div>
		);
	}
}

export default Login;
