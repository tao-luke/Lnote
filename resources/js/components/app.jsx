import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';
import Home from './landing/home';
import { Auth0Provider, useAuth0 } from '@auth0/auth0-react';
import Base from './main/base';
import NotFound from './notFound';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import AuthButton from './authComp/authButton';
import './theme.css';

function App() {
	const { user, isAuthenticated } = useAuth0();

	var authed;
	if (isAuthenticated && (user.email === 'luke4827@gmail.com' || user.email === 'fionayang101@gmail.com')) {
		authed = true;
	} else {
		authed = false;
	}

	return (
		<div className="App">
			{!authed && <AuthButton />}
			{authed && (
				<Route
					path="/"
					render={({ location }) => {
						return (
							<TransitionGroup>
								<CSSTransition key={location.key} timeout={500} classNames="fade" unmountOnExit>
									<Switch location={location}>
										<Route path="/log" component={Base} />
										<Route exact path="/" render={(props) => <Home {...props} />} />
										<Route path="/not-found" component={NotFound} />
										<Redirect to="/not-found" />
									</Switch>
								</CSSTransition>
							</TransitionGroup>
						);
					}}
				/>
			)}
		</div>
	);
}

ReactDOM.render(
	<Auth0Provider
		domain="ltmoney.us.auth0.com"
		clientId="i9u0n8kkY4UAAKHYBRAEE4kaWhaLD5BP"
		redirectUri={window.location.origin}
	>
		<BrowserRouter>
			<App />
		</BrowserRouter>
	</Auth0Provider>,
	document.getElementById('app')
);
