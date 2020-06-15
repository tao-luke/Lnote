import React, { Component } from "react";
import axios from "axios";

class Log extends Component {
    state = { note: "" };
    async componentDidMount() {
        const id = this.props.match.params["id"];
        const { data } = await axios.get("/api/log/" + id);
        this.setState({ note: data });
    }
    render() {
        return <h1>{this.state.note}</h1>;
    }
}

export default Log;
