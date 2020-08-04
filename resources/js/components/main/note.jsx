import React, { Component } from "react";
import "../theme.css";
import "./note.scss";
import "font-awesome/css/font-awesome.css";
class Note extends Component {
    render() {
        return (
            <div className="side">
                <div className="blockText">
                    <header></header>
                    <span>{this.props.content}</span>
                </div>
                <button className="btn btn-info btn-lg ">
                    <i className="fa fa-folder"></i>next
                </button>
            </div>
        );
    }
}

export default Note;
