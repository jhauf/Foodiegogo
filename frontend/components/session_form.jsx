import React from 'react';
import { Link, withRouter } from 'react-router';

class SessionForm extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			username: "",
			fname: "",
			lname: "",
			password: ""
		};
		this.handleSubmit = this.handleSubmit.bind(this);
		this.handleGuest = this.handleGuest.bind(this);
		this.renderErrors = this.renderErrors.bind(this);
	}

	componentDidUpdate() {
		this.redirectIfLoggedIn();
	}

	redirectIfLoggedIn() {
		if (this.props.loggedIn) {
			this.props.router.push("/home");
		}
	}

	update(field) {
		return e => this.setState({
			[field]: e.currentTarget.value
		});
	}

	handleSubmit(e) {
		e.preventDefault();
		const user = this.state;
		this.props.processForm({user});
	}


	nameField() {
		if (this.props.type === false) {
			return <div> <label> First Name:
				<input type="text"
					value={this.state.fname}
					onChange={this.update("fname")}
					className="login-input" />
			</label>
			<label> Last Name:
				<input type="text"
					value={this.state.lname}
					onChange={this.update("lname")}
					className="login-input" />
			</label>
			</div>;
		}
	}

	renderErrors() {
		return(
			<ul>
				{this.props.errors.map((error, i) => (
					<li key={`error-${i}`}>
						{error}
					</li>
				))}
			</ul>
		);
	}

	handleGuest(e) {
		e.preventDefault();
		this.props.guestLogin();
	}

	render() {
		return (
			<div className="login-form-container">
				<form onSubmit={this.handleSubmit} className="login-form-box">
					{this.renderErrors()}
					<div className="login-form">
						{this.nameField()}
						<label> Username:
							<input type="text"
								value={this.state.username}
								onChange={this.update("username")}
								className="login-input" />
						</label>
						<label> Password:
							<input type="password"
								value={this.state.password}
								onChange={this.update("password")}
								className="login-input" />
						</label>
						<input type="submit" value="Submit"/>
						<button onClick={this.handleGuest}>Guest Login</button>
					</div>
				</form>
			</div>
		);
	}

}
// <input type="button" onClick={this.props.guestLogin}/>

export default withRouter(SessionForm);
