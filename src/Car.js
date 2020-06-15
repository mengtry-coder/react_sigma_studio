import React, { Component } from "react";
import { Button, DatePicker, version, message, Alert } from "antd";
import "../node_modules/antd/dist/antd.css";

export class Car extends Component {
	constructor(props) {
		super(props);
		this.state = { color: "red" };
	}
	render() {
		return (
			<div>
				<DatePicker />
				<version></version>
				
			</div>
		);
	}
}

export default Car;
