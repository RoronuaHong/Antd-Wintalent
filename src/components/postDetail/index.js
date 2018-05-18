import React, { Component } from "react";
import PositionDetail from "../positionDetail";
import {Icon, Popover} from 'antd';

import "./styles";

class PostDetail extends Component {
	constructor(props) {
        super(props);
		
		this.state = {
            detailsStyle:{display:"none"},
            iconName:"展开",
            iconType: "down"
        };
		
		this.detailsToggle = this.detailsToggle.bind(this);
    }
	
	detailsToggle = ()=>{
		if(this.state.iconType === "down"){
			this.setState(prevState => ({
		      iconType: "up",
		      iconName:"收起",
		      detailsStyle:{display:"block"}
		    }));
		}else{
			this.setState(prevState => ({
		      iconType: "down",
		      iconName:"展开",
		      detailsStyle:{display:"none"}
		    }));
		}
	}
	
	render(){
		return (
			<div>
				<div className="block_frame-position position_detail">
					<h1>{this.props.positionDetail.postName}</h1>
					<span className="font_middle high_light">{this.props.positionDetail.workingTreatment.split("-")[0]} ~ {this.props.positionDetail.workingTreatment.split("-")[1]}</span>
					<span className="font_small">{this.props.positionDetail.workPlace} &nbsp;|</span>  
					<span className="font_small">{this.props.positionDetail.orgName} &nbsp;|</span>  
					<span className="font_small">{this.props.positionDetail.education} &nbsp;|</span>  
					<span className="font_small">招聘{this.props.positionDetail.recruitNum} &nbsp;|</span>  
					<span className="font_small">招聘负责人: {this.props.positionDetail.recruiterName} &nbsp;|</span>  
					<span className="font_small">发布时间: {this.props.positionDetail.publishDate}</span>
					<a onClick={this.detailsToggle}>{this.state.iconName} <Icon type={this.state.iconType} /></a>
				</div>
				<div className="position-detail-outer" style={this.state.detailsStyle}>
					<PositionDetail positionListArr={this.props.positionDetail} showBtn="none"></PositionDetail>
				</div>
			</div>
		);
	}
}
export default PostDetail;