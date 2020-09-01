import React from 'react';
import { useAuth0, Auth0Provider } from '@auth0/auth0-react';
import './authButton.scss';
const LoginButton = () => {
	const { loginWithRedirect } = useAuth0();

	return (
		<div class="wrapper">
			<div class="link_wrapper">
				<button onClick={() => loginWithRedirect()}>Authenticate</button>
				<div class="icon" />
			</div>
		</div>
	);
};

export default LoginButton;
