import React, { Component } from "react";
import { Tabs, Icon } from 'antd';
const TabPane = Tabs.TabPane;

import "./styles";

class ModifyPwdCp extends Component {
    render() {
        const { 
            oldState,
            newState,
            comState,
            handleCancel,
            handleSave
        } = this.props;

        return (
            <div className="modify-password-box">
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
                            <label htmlFor="pwd">
                                <span>原密码:</span>
                                <input
                                    ref="oldValue"
                                    id="pwd"
                                    type="password"
                                />
                                <strong className="warning-box">
                                    <Icon 
                                        type="check-circle" 
                                        style={{
                                            display: oldState.index == 0 ?
                                                "none"
                                                :
                                                oldState.index == 1 ?
                                                    "block"
                                                    :
                                                    "none"
                                        }}
                                    />
                                    <Icon 
                                        type="exclamation-circle"
                                        style={{
                                            display: oldState.index == 0 ?
                                                "none"
                                                :
                                                oldState.index == 1 ?
                                                    "none"
                                                    :
                                                    "block"
                                        }}
                                    >
                                        { oldState.mes }
                                    </Icon>
                                </strong>
                            </label>
                            <label htmlFor="newPwd">
                                <span>新密码:</span>
                                <input
                                    ref="newValue"
                                    id="newPwd"
                                    type="password"
                                />
                                <div className="warning-box">
                                    <Icon
                                        type="check-circle" 
                                        style={{
                                            display: newState.index == 0 ?
                                                "none"
                                                :
                                                newState.index == 1 ?
                                                "block"
                                                :
                                                "none"
                                            }}
                                    />
                                    <Icon
                                        type="exclamation-circle"
                                        style={{
                                            display: newState.index == 0 ?
                                                "none"
                                                :
                                                newState.index == 1 ?
                                                "none"
                                                :
                                                "block"
                                        }}
                                    >
                                        密码不符合要求，请重新输入
                                    </Icon>
                                </div>
                            </label>
                            <label htmlFor="comPwd">
                                <span>确认密码:</span>
                                <input
                                    ref="comValue"
                                    id="comPwd"
                                    type="password"
                                />
                                <div className="warning-box">
                                    <Icon
                                        type="check-circle" 
                                        style={{
                                            display: comState.index == 0 ?
                                                "none"
                                                :
                                                comState.index == 1 ?
                                                "block"
                                                :
                                                "none"
                                            }}
                                    />
                                    <Icon
                                        type="exclamation-circle"
                                        style={{
                                            display: comState.index == 0 ?
                                                "none"
                                                :
                                                comState.index == 1 ?
                                                "none"
                                                :
                                                "block"
                                        }}
                                    >
                                        密码不一致，请重新填写
                                    </Icon>
                                </div>
                            </label>
                            <p
                                className="notice"
                            >
                                { newState.describe }
                            </p>
                            <div className="button-box clearfix">
                                <button 
                                    className="cancel"
                                    onClick={ handleCancel }
                                >
                                    取消
                                </button>
                                <button
                                    className="save"
                                    onClick={() => 
                                        handleSave(
                                            this.refs.oldValue.value,
                                            this.refs.newValue.value,
                                            this.refs.comValue.value
                                        )
                                    }
                                >
                                    保存
                                </button>
                            </div>
                        </div>
                    </TabPane>
                </Tabs>
            </div>
        )
    }
}

export default ModifyPwdCp;