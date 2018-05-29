import React, { Component } from "react";
import ApplyEdit from "../applyEdit";
import AfterResolved from "./subpages/afterResolved";
import QuicklyRecommend from "./subpages/quicklyRecommend";
import {Icon,Table , Pagination , Popover , Modal ,Button ,Input ,Spin ,message} from 'antd';
import {
    getResumeList,
    editApplyLetter,
    positionDetail
} from "../../fetch/home/resolve";

import "./styles";

class TabOne extends Component {
	constructor(props) {
        super(props);
		
		this.state = {
			showResolveList:false,
			resolveIds:[]
		}
    }
	
	resolve(arr){
		if(arr.length>0){
			this.setState({
				showResolveList:true,
				resolveIds:arr
			});
		}
	}
	
	render() {
		return (
			<div>
				<div style={{display:this.state.showResolveList?"block":"none"}}>
					<AfterResolved dataArr={this.state.resolveIds}></AfterResolved>
				</div>
				<div style={{display:this.state.showResolveList?"none":"block"}}>
					<QuicklyRecommend resolveResume={(arr)=>{this.resolve(arr)}}></QuicklyRecommend>
				</div>
	    	</div>
		);
	}
}

export default TabOne;