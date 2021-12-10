import React, { Component } from "react";
import axios from "axios";
import "./ZenQuote.css";

class ZenQuote extends Component {
    constructor(props) {
        super(props);
        this.state = { quote: "" };
    }

    componentDidMount() {
        axios
            .get("https://api.github.com/zen")
            .then((responce) => this.setState({ quote: responce.data }));
    }
    render() {
        return (
            <div className="zenQuote">
                <div className="loader">
                    <div className="blobOne"></div>
                    <div className="blobTwo"></div>
                </div>
                <h1>Always remember...</h1>
                {this.state.quote}
            </div>
        );
    }
}

export default ZenQuote;
