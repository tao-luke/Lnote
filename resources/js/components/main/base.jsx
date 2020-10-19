import React, { Component } from 'react';
import axios from 'axios';
import '../theme.css';
import Note from './note';
class Base extends Component {
	constructor() {
		super();
		this.state = {
			note: [], //all the data
			value: '1',
			current: '',
			content: ''
		};
	}
	async componentDidMount() {
		const note = await axios.get('/api/log');
		this.setState({ note: note.data });
	}
	handleChange = ({ currentTarget }) => {
		const numer = currentTarget.value.substring(4, currentTarget.value.length);
		this.setState({ value: numer });
	};
	handleSubmit = (e) => {
		e.preventDefault();
		this.getContent();
	};
	async getContent() {
		this.setState({ current: this.state.value });
		const data = axios.get('/api/log/' + this.state.value).then((response) => {
			this.setState({ content: response.data });
		});
	}
	handleNext = () => {
		let val = parseInt(this.state.value, 10) + 1;
		if (val > this.state.note.length) val--;
		this.setState({ value: val });
	};
	render() {
		return (
			<div className={this.state.current == '' ? 'dateContainer1' : 'dateContainer2'}>
				<form onSubmit={this.handleSubmit} className="dateUI">
					<div className="field">
						<label className="label" htmlFor="date">
							The Time We Weren't Together
						</label>
						<div className="control">
							<select
								id="date"
								name="date"
								className="input form-control form-control-lg"
								value={'day ' + this.state.value}
								onChange={this.handleChange}
							>
								{this.state.note.map((elem) => {
									return <option key={elem}>day {elem}</option>;
								})}
							</select>
						</div>
					</div>
					<button type="submit" className="btn-success mb-2">
						Click Me
					</button>
					<div className="changingArea">
						{this.state.current != '' && <Note content={this.state.content} onNext={this.handleNext} />}
					</div>
				</form>
			</div>
		);
	}
}

export default Base;
