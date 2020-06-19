import React, { Component } from "react";
import "../theme.css";
import "./home.css";
class Home extends Component {
    render() {
        return (
            <div className="animate">
                <ul
                    onClick={() => {
                        this.props.history.push("/log");
                    }}
                    className="heartBox"
                >
                    <li className="heart">
                        <p></p>
                    </li>
                    <li className="heart">
                        <p></p>
                    </li>
                    <li className="heart">
                        <p></p>
                    </li>
                    <li className="heart">
                        <p></p>
                    </li>
                    <li className="heart">
                        <p></p>
                    </li>
                    <li className="heart">
                        <p></p>
                    </li>
                    <li className="heart">
                        <p></p>
                    </li>
                    <li className="heart">
                        <p></p>
                    </li>
                    <li className="heart">
                        <p></p>
                    </li>
                </ul>
            </div>
        );
    }
}

export default Home;
