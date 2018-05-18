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
    getLogout,
    getSearchComponent
} from "../../fetch/home";

import "../../styles/reset";
import "../../styles/home";

class App extends Component {
    state = {
        getNames: "",
        isShow: false
    }

    changeJumperPage = () => {
        const jumperDOM = document.querySelector(".ant-pagination-options-quick-jumper");

        //使用正则进行匹配
        jumperDOM && (jumperDOM.firstChild.data = "跳至");
        jumperDOM && (jumperDOM.lastChild.data = "页");
    }

    /* 退出登录 */
    handleLogout() {
        const logoutResult = getLogout();

        logoutResult
            .then(response => response.json())
            .then(data => {
                if(data.state == 200) {
                    window.location.href = "/signin.html";
                }
            });
    }

    componentWillMount() {
        // /* 首页登陆 */
        // const loginResult = getLogin({
        //     "userName": "xfl_4",
        //     "password": "1"
        // });

        // loginResult
        //     .then(res => res.json())
        //     .then(data => {
        //         if (data.state == 200) {
        //             this.setState({
        //                 isShow: true
        //             });
        //         }
        //         if (data.state == 500) {
        //             window.location.href = "/signin.html";
        //         }
        //     });
    }

    componentDidMount() {
        this.changeJumperPage();

        /* 获取用户信息 */
        const getNameResult = getName({}, data => {
            this.setState({
                getNames: data.data,
                isShow: true
            });
        });
    }

    render() {
        return (
            <div className="wrap">
                {/* <ShowMessage /> */}
                <IndexHeader 
                    getNames={ this.state.getNames }
                    handleLogout={ this.handleLogout }
                />
                { this.props.children }
            </div>
        )
    }
}

export default App;
