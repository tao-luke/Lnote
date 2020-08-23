import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';
import Home from './landing/home';
import navBar from './navBar';
import Base from './main/base';
import NotFound from './notFound';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import './theme.css';
function App() {
	return (
		<div className="App">
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
		</div>
	);
}

ReactDOM.render(
	<BrowserRouter>
		<App />
	</BrowserRouter>,
	document.getElementById('app')
);
