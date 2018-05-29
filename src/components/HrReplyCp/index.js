import React, { Component } from "react";
import { Badge, Icon } from "antd";

import "./styles";

class HrReplyCp extends Component {
    //点击发送功能
    changeSend = e => {
        e.nativeEvent.stopImmediatePropagation();

        console.log(this.refs.sendVal.value);
    }

    render() {
        const {
            messageNum,
            showReplyBox,
            handleReplyBox,
            showCon,
            handleCon
        } = this.props;

        return(
            <div 
                className="hr-replay-big-wrap"
                onClick={e => {
                    e.nativeEvent.stopImmediatePropagation();
                }}
            >
                <div 
                    className="reply-receive-box"
                    style={{
                        display: showReplyBox ? "block" : "none" 
                    }}
                >
                    <p>
                        <span className="replay-con">
                            这个简历还是不错的，可以继续沟通那 ~~~
                        </span>
                        <span 
                            className="reply-btn"
                            onClick={ e => handleCon(e, showCon) }
                        >
                            回复 <Icon type="double-left" />
                        </span>
                    </p>
                    <div 
                        className="reply-input-box"
                        style={{
                            display: showCon ? "block" : "none"
                        }}
                    >
                        <input 
                            ref="sendVal"
                            className="reply-input"
                            placeholder="请输入回复消息"
                        />
                        <span 
                            className="send"
                            onClick={ this.changeSend }
                        >
                            发送
                        </span>
                    </div>
                </div>
                <ul 
                    className="reply-content"
                    style={{
                        display : showCon ? "block" : "none"
                    }}
                >
                    <li className="con-li clearfix">
                        <div className="person-hr">HR</div>
                        <span className="hour">
                            2015-01-08&nbsp;&nbsp;&nbsp;&nbsp;15:15:15
                        </span>
                        <span className="texts">
                            期待面谈
                        </span>
                    </li>
                    <li className="con-li clearfix">
                        <div className="person-me">我</div>
                        <span className="hour">
                            2015-01-08&nbsp;&nbsp;&nbsp;&nbsp;15:15:15
                        </span>
                        <span className="texts">
                            很高兴收到你的回复，我已经收到面试邀请了很高兴收到你的回复，我已经收到面试邀请了很高兴收到你的回复，我已经收到面试邀请了
                        </span>
                    </li>
                </ul>
                <div 
                    className="hr-reply-box"
                    onClick={ e => handleReplyBox(e, true) }
                >
                    HR
                    <Badge 
                        // dot={ messageNum > 0 ? true : false }
                        count={ messageNum }
                    ></Badge>
                </div>
            </div>
        )
    }
}

export default HrReplyCp;