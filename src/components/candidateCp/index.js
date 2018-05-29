import React, { Component } from "react";
import { Select, Input, Tag, Popover } from "antd";
import { Scrollbars } from "react-custom-scrollbars";

import "./styles";
import moreIcon from "../../images/icons/moremes-icon.png";
import replayIcon from "../../images/icons/reply_icon.png";

const Option = Select.Option;

const CandidateCp = ({ 
    states,
    handleShowReply,
    handleShowbtnbox,
    handleTime
}) => {
    const handleChange = value => {
        console.log(`selected ${value}`);
    }

    return (
        <div className="candidate-box clearfix">
            <div className="candidate-left-box">
                <Select 
                    defaultValue="大中华区销售总监" 
                    style={{ 
                        width: 172,
                        height: 36,
                        borderRadius: 0
                    }} 
                    onChange={ handleChange }
                >
                    <Option value="销售经理">销售经理</Option>
                    <Option value="市场经理">市场经理</Option>
                    <Option value="销售人员">销售人员</Option>
                </Select>
                <ul className="classify">
                    <li className="li-sel">
                        全部
                        <span className="num num-sel">367</span>
                    </li>
                    <li>
                        复筛
                        <span className="num">15</span>
                    </li>
                    <li>
                        面试
                        <span className="num">1</span>
                    </li>
                    <li>
                        offer
                        <span className="num">151</span>
                    </li>
                    <li>
                        入职
                        <span className="num">2222</span>
                    </li>
                    <li>
                        待处理
                        <span className="num">3</span>
                    </li>
                    <li>
                        进入人才库
                        <span className="num">249</span>
                    </li>
                </ul>
            </div>
            <div className="candidate-right-box">
                <div className="candidate-title clearfix">
                    <Input.Search
                        placeholder="输入姓名"
                        onSearch={ value => console.log(value) }
                        style={{
                            float: "left",
                            width: 275,
                            height: 36,
                            border: "1px solid #d9d9d9"
                        }}
                    />
                    <ul className="select-time-box">
                        <li 
                            className={
                                states.handleTimeStatus == 0 ? 
                                    "" 
                                    :
                                    states.handleTimeStatus == 1 ? 
                                        "top-li"
                                        :
                                        "bottom-li"
                            }
                            onClick={ () => handleTime("handleTimeStatus", states.handleTimeStatus) }
                        >
                            发布时间
                        </li>
                        <li 
                            className={
                                states.handleUpdateTimeStatus == 0 ?
                                    "time-li"
                                    :
                                    states.handleUpdateTimeStatus == 1 ?
                                        "time-li top-li"
                                        :
                                        "time-li bottom-li"
                            }
                            onClick={() => handleTime("handleUpdateTimeStatus", states.handleUpdateTimeStatus)}
                        >
                            状态更新时间
                        </li>    
                    </ul>
                </div>
                <div className="candidate-content">
                    <div 
                        className="candidate-li"
                        onClick={e => {
                            e.nativeEvent.stopImmediatePropagation();
                        }}
                    >
                        <div className="can-title">
                            <span className="name">祺梦缘</span>
                            <span className="pendings">待处理-待处理</span>
                            <span className="position">大中华区销售总监-华南</span>
                            <span className="reply">
                                HR：
                                <span className="substance">
                                    这个简历还是不错的，可以继续沟通那这个简历还是不错的，可以继续沟通那
                                </span>
                                <img 
                                    src={ moreIcon } alt=""
                                    onClick={e => {
                                        e.stopPropagation();
                                        e.nativeEvent.stopImmediatePropagation();
                                    }}
                                    onMouseEnter={ e => handleShowReply(e, states.showReply) }
                                    onMouseLeave={ e => handleShowReply(e, states.showReply) }
                                />
                                <div 
                                    className="show-box"
                                    style={{
                                        visibility: states.showReply ? "visible" : "hidden",
                                        opacity: states.showReply ? "1" : "0"
                                    }}
                                    onMouseEnter={ e => handleShowReply(e, states.showReply) }
                                    onMouseLeave={ e => handleShowReply(e, states.showReply) }
                                    onClick={e => {
                                        e.stopPropagation();
                                        e.nativeEvent.stopImmediatePropagation();
                                    }}
                                >
                                    <Scrollbars
                                        style={{
                                            width: "100%",
                                            height: "100%"
                                        }}
                                    >
                                        工作积极热情，为人随和谦卑。勤恳务实，善于学习，对本职工作兢兢业业，注重个人成长；工作成绩进步大，业绩发展迅速。从而在工作中收到良好效果；悟性较强。
                                        工作积极热情，为人随和谦卑。勤恳务实，善于学习，对本职工作兢兢业业，注重个人成长；工作成绩进步大，业绩发展迅速。从而在工作中收到良好效果；悟性较强。
                                    </Scrollbars>
                                </div>
                            </span>
                            <span 
                                className="reply-btn"
                                onClick={ e => handleShowbtnbox(e, states.handleShowbtnbox) }
                            >
                                <img src={ replayIcon } alt=""/>
                                回复
                            </span>
                            <div 
                                className="reply-box"
                                style={{
                                    visibility: states.showbtnbox ? "visible" : "hidden",
                                    opacity: states.showbtnbox ? "1" : "0"
                                }}
                            >
                                <textarea 
                                    id="replytext"
                                    placeholder="请输入回复信息"
                                >
                                </textarea>
                                <div className="btnbox">
                                    <span className="send">
                                        发送
                                    </span>
                                    |
                                    <span 
                                        className="close"
                                        onClick={ e => handleShowbtnbox(e, handleShowbtnbox) }
                                    >
                                        关闭
                                    </span>
                                </div>
                            </div>
                        </div>
                        <div className="can-detail">
                            <span className="grey-mal">上海</span>
                            <span className="grey-mal">35岁</span>
                            <span className="grey-mal">3年工作经验</span>
                            <span className="grey-mal">推荐时间：2018-02-08</span>
                            <span className="grey-mal">环节变更时间：2018-03-09</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CandidateCp;