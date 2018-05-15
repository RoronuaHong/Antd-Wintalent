import React, { Component } from "react";

import "../../styles/reset";
import "../../styles/signin";

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
