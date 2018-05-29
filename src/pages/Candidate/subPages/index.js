import React, { Component } from "react";
import CandidateCp from "../../../components/CandidateCp";

class Candidate extends Component {
    state = {
        showReply: false,
        showbtnbox: false,
        handleTimeStatus: 0,
        handleUpdateTimeStatus: 0
    }

    handleShowReply = (e, showReply) => {
        e.stopPropagation();
        e.nativeEvent.stopImmediatePropagation();

        this.setState(prevState => ({
            showReply: !prevState.showReply
        }));
    }

    handleShowbtnbox = (e, showbtnbox) => {
        e.stopPropagation();
        e.nativeEvent.stopImmediatePropagation();
        this.setState(prevState => ({
            showbtnbox: !prevState.showbtnbox
        }));
    }

    //点击跳转到候选人详情页
    handleCandidate = e => {
        e.nativeEvent.stopImmediatePropagation();
    }

    //更改发布时间
    handleTime = (name, handleTimeStatus) => {
        handleTimeStatus++;

        if(handleTimeStatus > 2) {
            handleTimeStatus = 0; 
        }

        this.setState({
            [name]: handleTimeStatus
        });
    }

    render() {
        return(
            <div className="candidate-wrap">
                <CandidateCp 
                    states={ this.state }
                    handleShowReply={ this.handleShowReply }
                    handleShowbtnbox={ this.handleShowbtnbox }
                    handleTime={ this.handleTime }
                />
            </div>
        )
    }
}

export default Candidate;