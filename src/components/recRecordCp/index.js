import React, { Component } from "react";
import { Tabs } from 'antd';
import Recdetail from "./subPages/recdetail";
import Failrecdetail from "./subPages/failrecdetail";

import "./styles";

const { TabPane } = Tabs;

class RecRecordCp extends Component {
    state = {
        chooseMonth: "",
        chooseYear: "", 
        timestamp: [
            {
                year: 2013,
                month: [
                    "12月",
                    "11月",
                    "10月",
                    "9月"
                ],
                isChoose: false
            },
            {
                year: 2012,
                month: [
                    "12月",
                    "11月",
                    "10月",
                    "9月"
                ],
                isChoose: false
            }
        ],
        failtimestamp: [
            {
                year: 2013,
                month: [
                    "12月",
                    "11月",
                    "10月",
                    "9月"
                ],
                isChoose: false
            },
            {
                year: 2012,
                month: [
                    "12月",
                    "11月",
                    "10月",
                    "9月"
                ],
                isChoose: false
            }
        ],
        process: {
            currentProcess: 4,
            steps: [
                {
                    title: ''
                }, 
                {
                    title: ''
                }, 
                {
                    title: '面试',
                    description: '02-01'
                }, 
                {
                    title: '测评',
                    description: '02-02'
                }, 
                {
                    title: '笔试',
                    description: '02-21'
                },
                {
                    title: 'offer'
                },
                {
                    title: '待入职'
                },
                {
                    title: ''
                },
                {
                    title: ''
                },
                {
                    title: ''
                },
                {
                    title: ''
                },
                {
                    title: ''
                },
                {
                    title: ''
                }
            ]
        }
    }

    /* 选择月份 */
    changeMonth = indexs => {
        this.setState({
            chooseMonth: indexs
        });
    }

    /* 显示月份 */
    showMonth = index => {
        if(this.state.chooseYear !== index) {
            this.setState({
                chooseYear: index,
                chooseMonth: ""
            });
        }
    }

    render() {
        return (
            <div className="rec-record-box">
                <Tabs
                    closable={ false }
                    animated={ false }
                >
                    <TabPane 
                        tab="推荐成功"
                        key="0"
                        forceRender={ false }
                    >
                        <Recdetail 
                            changeMonth={ this.changeMonth }
                            timestamp={ this.state.timestamp }
                            showMonth={ this.showMonth }
                            stepsArr={ this.state.process.steps }
                            process={ this.state.process.currentProcess }
                            chooseMonth={ this.state.chooseMonth }
                            chooseYear={ this.state.chooseYear }
                        />
                    </TabPane>
                    <TabPane
                        tab="推荐失败"
                        key="1"
                        forceRender={ false }
                    >
                        <Failrecdetail 
                            timestamp={ this.state.failtimestamp }
                            showMonth={ this.showMonth }
                            stepsArr={ this.state.process.steps }
                            process={ this.state.process.currentProcess }
                        />
                    </TabPane>
                </Tabs>
            </div>
        )
    }
}

export default RecRecordCp;