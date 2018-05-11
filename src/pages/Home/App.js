/*
    Created By SlimHong at 2018/5/3
*/
import React, { Component } from "react";
import IndexHeader from "../../components/indexHeader";
import IndexSearch from "../../components/indexSearch";
import PositionList from "../../components/positionList";
import IndexFooter from "../../components/indexFooter";
// import ShowMessage from "../../components/showMessage";
import {
    getName,
    getLogin,
    getSearchComponent
} from "../../fetch/home";

import "../../styles/reset";
import "../../styles/home";

class App extends Component {
    state = {
        getNames: ""
    }

    componentDidMount() {
        /* 获取用户信息 */
        const getNameResult = getName();

        getNameResult
            .then(response => response.json())
            .then(data => {
                this.setState({
                    getNames: data.data
                });
            });

        /* 首页登陆判断 */
        const loginResult = getLogin({
            "userName": "xfl_4",
            "password": "1"
        });

        loginResult
            .then(response => response.json())
            .then(data => {
                console.log(data);
            });
    }

    render() {
        return (
            <div className="wrap">
                {/* <ShowMessage /> */}
                <IndexHeader 
                    getNames={ this.state.getNames }
                />
                { this.props.children }
            </div>
        )
    }
}

export default App;
