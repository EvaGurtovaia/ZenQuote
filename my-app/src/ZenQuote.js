import React, { Component } from "react";
import axios from "axios";
import "./ZenQuote.css";

class ZenQuote extends Component {
    constructor(props) {
        super(props);
        this.state = { quote: "", isLoaded: false };
    }

    componentDidMount() {
        axios.get("https://api.github.com/zen").then((responce) =>
            setTimeout(
                function () {
                    this.setState({ quote: responce.data, isLoaded: true });
                }.bind(this),
                3000
            )
        );
    }

    render() {
        return (
            <div>
                {this.state.isLoaded ? (
                    <div>
                        <h1>Always remember...</h1>
                        <p>{this.state.quote}</p>
                    </div>
                ) : (
                    <div className="zenQuote">
                        <div className="loader">
                            <div className="blobOne"></div>
                            <div className="blobTwo"></div>
                        </div>
                    </div>
                )}
            </div>
        );
    }
}

export default ZenQuote;
