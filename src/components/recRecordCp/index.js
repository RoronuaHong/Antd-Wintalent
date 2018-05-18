import React, { Component } from "react";
import { Tabs } from 'antd';
import Recdetail from "./subPages/recdetail";

import "./styles";

const { TabPane } = Tabs;

class RecRecordCp extends Component {
    state = {
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
        process: {
            currentProcess: 8,
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

    showMonth = (item, index) => {
        const isChoose = item.isChoose;

        this.setState({
            timestamp: [
                ...this.state.timestamp.slice(0, index),
                {
                    ...item,
                    isChoose: true
                },
                ...this.state.timestamp.slice(index + 1)
            ]
        });

        console.log(this.state.timestamp);
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
                            timestamp={ this.state.timestamp }
                            showMonth={ this.showMonth }
                            stepsArr={ this.state.process.steps }
                            process={ this.state.process.currentProcess }
                        />
                    </TabPane>
                    <TabPane
                        tab="推荐失败"
                        key="1"
                        forceRender={ false }
                    >
                        2
                    </TabPane>
                </Tabs>
            </div>
        )
    }
}

export default RecRecordCp;