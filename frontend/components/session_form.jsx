import React from 'react';
import { Link, withRouter } from 'react-router';

class SessionForm extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			username: "",
			FirstName: "",
			LastName: "",
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
			return <div>
				<h1>Sign Up</h1>
				<label>
				<input type="text"
					placeholder="First Name"
					value={this.state.FirstName}
					onChange={this.update("FirstName")}
					className="login-input" />
			</label>
			<label>
				<input type="text"
					placeholder="Last Name"
					value={this.state.LastName}
					onChange={this.update("LastName")}
					className="login-input" />
			</label>
			</div>;
		} else {
			return <h1>Sign In</h1>;
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
					<div className="login-form">
						{this.nameField()}
						<label>
							<input type="text"
								placeholder="Username"
								value={this.state.username}
								onChange={this.update("username")}
								className="login-input" />
						</label>
						<label>
							<input type="password"
								placeholder="Password"
								value={this.state.password}
								onChange={this.update("password")}
								className="login-input" />
						</label>
						<h4 className="errors"> {this.renderErrors()} </h4>
						<button className="signinupbutton">Submit</button>
						<Link to ="/" onClick={this.handleGuest}>Sign in as a Guest</Link>
					</div>
				</form>
			</div>
		);
	}

}
// <input type="button" onClick={this.props.guestLogin}/>

export default withRouter(SessionForm);
