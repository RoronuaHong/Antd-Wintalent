import React, { Component } from "react";
import { message } from "antd";
import { setCookie, deleteCookie, getQueryString } from "../../../utils/common";
import { WrappedNormalLoginForm } from "../../../components/signInCp";
import {
    getLogin
} from "../../../fetch/signin";

import ScanImg from "../../../images/icons/scan_icon";

class Index extends Component {
    state = {
        changeLoginMode: true,
        currentBgIndex: 0,
        isRemind: false,
        isRemindAccount: "isnotremind",
        bgArr: ["signin-small-bg1", "signin-small-bg2", "signin-small-bg3", "signin-small-bg4"]
    }

    componentDidMount() {

    }

    handleSignIn = values => {
        //登录判断
        const loginResult = getLogin({
            "userName": values.userName,
            "password": values.password
        });

        if(values.remember) {
            setCookie("username", values.userName, 1);
        } else {
            deleteCookie("username");
        }

        loginResult
            .then(res => res.json())
            .then(data => {
                if(data.state == 200) {
                    const redirects = getQueryString(window.location.href);

                    //登录跳转判断
                    if(redirects.redirect) {
                        window.location.href = redirects.redirect;
                    } else {
                        window.location.href = "/home.html";
                    }
                }

                if(data.state == 500) {
                    message.error(data.data);
                }
            });
    }

    //切换登录方式
    handleLoginMode = () => {
        this.setState(prevState => ({
            changeLoginMode: !prevState.changeLoginMode
        }));
    }

    render() {
        const currentBg = "signin-box " + this.state.bgArr[this.state.currentBgIndex];
            // currentRemind = "remind-account " + this.state.isRemindAccount;

        return (
            <div className="bg-box">
                <div className={ currentBg }>
                    <div className="inner-box">
                        <h1>大易猎头系统</h1>
                        <div
                            style={{
                                display: this.state.changeLoginMode ? "block" : "none"
                            }}
                        >
                            <WrappedNormalLoginForm 
                                userClass="username"
                                pwdClass="password"
                                userPlaceHolder="请输入账号"
                                pwdPlaceHolder="请输入账号密码"
                                handleSignIn={ this.handleSignIn }
                            />
                            {/* <label htmlFor="">
                                <input 
                                    ref="userInput"
                                    className="username"
                                    type="text"
                                    placeholder="请输入账号"
                                />
                            </label>
                            <label htmlFor="">
                                <input
                                    ref="pwdInput"
                                    className="password"
                                    type="text"
                                    placeholder="请输入账号密码"
                                />
                                <a className="forgetpwd">忘记密码？</a>
                            </label>
                            <div className="btn-box clearfix">
                                <div 
                                    className={ currentRemind }
                                    onClick={ () => this.handleRemind(this.state.isRemind) }
                                >
                                    记住账号
                                </div>
                                <button
                                    onClick={ this.handleSignIn }
                                >
                                    登&nbsp;&nbsp;&nbsp;&nbsp;录
                                </button>
                            </div> */}
                        </div>
                        <div 
                            className="qrcode-box clearfix"
                            style={{
                                display: !this.state.changeLoginMode ? "block" : "none"
                            }}
                        >
                            <div className="qrcode">
                                <img src="" alt=""/>
                            </div>
                            <div className="right-box">
                                <img src={ ScanImg } alt=""/>
                                <span>
                                    请使用微信 <br/>
                                    扫描二维码登录
                                </span>
                            </div>
                        </div>
                    </div>
                    <div
                        onClick={ this.handleLoginMode }
                    >
                        <span 
                            className="scavenge"
                            style={{
                                display: this.state.changeLoginMode ? "block" : "none"
                            }}
                        >
                            扫一扫
                        </span>
                        <span 
                            className="account"
                            style={{
                                display: !this.state.changeLoginMode ? "block" : "none"
                            }}
                        >
                            账号
                        </span>
                    </div>
                </div>
            </div>
        )
    }
}

export default Index;
