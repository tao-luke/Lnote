import React, { Component } from "react";
import axios from "axios";
import "../theme.css";

class Base extends Component {
    constructor() {
        super();
        this.state = {
            note: [],
            value: "1"
        };
    }
    async componentDidMount() {
        const note = await axios.get("/api/log");
        this.setState({ note: note.data });
    }
    handleChange = ({ currentTarget }) => {
        const numer = currentTarget.value.substring(4, 5);
        this.setState({ value: numer });
    };
    handleSubmit = e => {
        e.preventDefault();
        this.props.history.push("/log/" + this.state.value);
    };
    render() {
        return (
            <div className="dateContainer">
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
                                value={"day " + this.state.value}
                                onChange={this.handleChange}
                            >
                                {this.state.note.map(elem => {
                                    return (
                                        <option key={elem}>day {elem}</option>
                                    );
                                })}
                            </select>
                        </div>
                    </div>
                    <button type="submit" className="btn btn-primary mb-2">
                        Click Me
                    </button>
                </form>
            </div>
        );
    }
}

export default Base;
