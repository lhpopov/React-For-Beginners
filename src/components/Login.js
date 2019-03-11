import React from 'react';
import PropTypes from 'prop-types';

class Login extends React.Component {
    render() {
        return (
            <nav className="login">
            	<h2>Inventory Login</h2>
            	<p>Sign in to manage your store's inventory.</p>
            	<button className="facebook" onClick={ () => this.props.authenticate('Facebook')}>Log In with Facebook</button>
            	<button className="github" onClick={ () => this.props.authenticate('Github')}>Log In with Github</button>

            </nav>
        )
    }
}

Login.propTypes = {
	authenticate: PropTypes.func
};

export default Login;