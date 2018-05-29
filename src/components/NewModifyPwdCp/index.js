import React, { Component } from "react";
import { Tabs, Icon } from 'antd';
const TabPane = Tabs.TabPane;

import "./styles";

class NewModifyPwdCp extends Component {
    render() {
        return (
            <div className="newmodify-password-box">
                <Tabs
                    className="pwd-tab"
                    defaultActiveKey="1"
                    size="large"
                >
                    <TabPane
                        tab="修改密码"
                        key="1"
                    >
                        <div className="changepwd-box">
                            <label htmlFor="mail">
                                <span>电子邮箱：</span>
                                <input
                                    ref="mailValue"
                                    id="mail"
                                    placeholder="请输入邮箱"
                                />
                                <strong className="warning-box">
                                    请填写您注册时的电子邮箱
                                </strong>
                            </label>
                            <label htmlFor="veri">
                                <span>验证码：</span>
                                <input
                                    ref="veriValue"
                                    id="veri"
                                    placeholder="请输入验证码"
                                />
                                <div className="imgbox">
                                    <img src="" alt=""/>
                                </div>
                                <i>看不清，换一张</i>
                                <strong className="warning-box">
                                    验证码错误
                                </strong>
                            </label>
                            <div className="btn-box">
                                <button className="cancel">重置</button>
                                <button className="save">确认</button>
                            </div>
                        </div>
                    </TabPane>
                </Tabs>
            </div>
        )
    }
}

export default NewModifyPwdCp;