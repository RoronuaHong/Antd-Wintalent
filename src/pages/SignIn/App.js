import React, { Component } from "react";

class App extends Component {
    render() {
        return (
            <div className="wrap">
                { this.props.children }
            </div>
        )
    }
}

export default App;
