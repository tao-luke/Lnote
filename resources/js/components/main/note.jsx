import React, { Component } from 'react';
import '../theme.css';
import './note.scss';
import 'font-awesome/css/font-awesome.css';
class Note extends Component {
	render() {
		return (
			<div className={this.props.content.pic ? 'side' : 'side2'}>
				{this.props.content.pic && <img src={require(`./image/${this.props.content.pic}.jpg`)} />}
				<div className="blockText">
					<header />
					<span className="text-left">{this.props.content.note}</span>
				</div>
				<button className="btn btn-info btn-lg " onClick={this.props.onNext}>
					<i className="fa fa-folder" />next
				</button>
			</div>
		);
	}
}

export default Note;
