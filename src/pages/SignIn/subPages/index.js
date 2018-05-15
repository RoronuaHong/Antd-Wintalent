import React, { Component } from "react";

class Index extends Component {
    state = {
        currentBgIndex: 0,
        bgArr: ["signin-small-bg1", "signin-small-bg2", "signin-small-bg3", "signin-small-bg4"]
    }

    render() {
        const currentBg = "signin-box " + this.state.bgArr[this.state.currentBgIndex];

        return (
            <div
                className={ currentBg }
            >

            </div>
        )
    }
}

export default Index;
