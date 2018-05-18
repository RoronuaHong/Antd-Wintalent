import React, { Component } from "react";
import {Icon, Popover} from 'antd';

import "./styles";

class ApplyEdit extends Component {
	constructor(props) {
        super(props);

        // 设置 initial state
        this.state = {
            show:"inline",
			showText:"none",
			applyText:props.text,
			resumeId:props.resumeId
        };

        // ES6 类中函数必须手动绑定
        this.showEditText = this.showEditText.bind(this);
        this.closeText = this.closeText.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }
	
	showEditText=(e)=>{
		this.setState(prevState => ({
	      show: "none",
	      showText:"block"
	    }));
	}
	closeText = ()=>{
		this.setState(prevState => ({
	      show: "inline",
	      showText:"none"
	    }));
	}
	
	handleChange=(e)=>{
		this.setState({
            applyText: e.target.value
        });
	}
	
	submitApply=()=>{
		this.setState(prevState => ({
	      show: "inline",
	      showText:"none"
	    }));
		this.props.subApply(this.state.resumeId,this.state.applyText);
	}
	
	render() {
		return (
			<div>
				<span style={{'display':this.state.show}}>
					<Popover placement="bottom" content={this.props.text}>
						<span className="apply_letter">{this.props.text}</span>
					</Popover>
					<a className="finish_btn" onClick={(e)=>this.showEditText(e)}><Icon type="edit" /><span>编辑</span></a>
				</span>
				<div style={{'display':this.state.showText}} className="block_text-frame">
					<textarea onChange={this.handleChange} value={this.state.applyText} placeholder="请输入推荐理由"></textarea>
					<div>
						<a className="high_light" onClick={this.submitApply}>保存</a> 
						<i>|</i> 
						<a style={{color: '#B6B6B6' }} onClick={this.closeText}>关闭</a>
					</div>
				</div>
			</div>
		);
	}
}

export default ApplyEdit;