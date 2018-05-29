import React, { Component } from "react";
import CandidateResDelCp from "../../../components/candidateResDelCp";
import CandidateContent from "../../../components/candidateContent";

import "../../../styles/candidateresdel";

class CandidateResDel extends Component {
    state = {
        messageNum: 1,
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
                }
            ]
        },
        showReplyBox: false,
        showCon: false
    }

    //显示/隐藏内容和回复
    handleCon = (e, booleans) => {
        e.preventDefault();
        e.nativeEvent.stopImmediatePropagation();
        
        if(booleans) {
            this.setState(prevState => ({
                showCon: !booleans
            }));

            return;
        }
        this.setState(prevState => ({
            showCon: !prevState.showCon
        }));
    }

    //显示/隐藏回复页面
    handleReplyBox = (e, booleans) => {
        e.preventDefault();
        e.nativeEvent.stopImmediatePropagation();

        this.setState(prevState => ({
            showReplyBox: !prevState.showReplyBox
        }));

        this.handleCon(e, booleans);
    }

    handleHideAll = e => {
        this.setState({
            showCon: false,
            showReplyBox: false
        });
    }

    componentDidMount() {
        document.addEventListener("click", this.handleHideAll, false);
    }

    render() {
        return (
            <div className="candidate-res-del-wrap">
                <CandidateResDelCp 
                    stepsArr={ this.state.process.steps }
                    process={ this.state.process.currentProcess }
                />
                <CandidateContent 
                    messageNum={ this.state.messageNum }
                    showReplyBox={ this.state.showReplyBox }
                    handleReplyBox={ this.handleReplyBox }
                    showCon={ this.state.showCon }
                    handleCon={ this.handleCon }
                />
            </div>
        )
    }
}

export default CandidateResDel;