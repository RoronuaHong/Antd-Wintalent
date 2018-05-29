import React, { Component } from "react";
import Resumedetail from "./subPages/resumedetail";
import Recommend from "./subPages/recommend";
import { Tabs } from 'antd';

import "./styles";

const { TabPane } = Tabs;

const CandidateContent = ({ 
    messageNum, 
    showReplyBox, 
    handleReplyBox,
    showCon,
    handleCon
}) => {
    return (
        <div className="candidate-content-box">
            <Tabs
                closable={ false }
                animated={ false }
                defaultActiveKey="1"
                size="large"
            >
                <TabPane
                    tab="简历信息"
                    key="1"
                >
                    <Resumedetail 
                        messageNum={ messageNum }
                        showReplyBox={ showReplyBox }
                        handleReplyBox={ handleReplyBox }
                        showCon={ showCon }
                        handleCon={ handleCon }
                    />
                </TabPane>
                <TabPane
                    tab="推荐评语"
                    key="2"
                >
                    <Recommend />
                </TabPane>
            </Tabs>
        </div>
    )
}

export default CandidateContent;