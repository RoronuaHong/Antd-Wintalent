import React, { Component } from "react";
import ApplyEdit from "../../../components/applyEdit";
import PostDetail from "../../../components/postDetail";
import TabOne from "../../../components/resolveTab/tabOne";
import TabTwo from "../../../components/resolveTab/tabTwo";
import {Icon , Tabs , Modal ,Input } from 'antd';
import { positionDetail } from "../../../fetch/home/resolve";

import '../../../styles/resolve';

class Resolve extends Component {
	state = {
		positionDetail : {
			postId:118101,//职位ID
			postName:"运维工程师",//职位名称
			workingTreatment:"4001-6000",//薪资情况
			education:"高中",//学历
			recruitNum:6,//招聘人数
			workPlace:"苏州市",//工作地点
			orgName:"仪表盘测试",//职位机构名称
			recruiterName:"陈小琴",//招聘负责人姓名
			recruiterPhone:"12345611",//招聘负责人手机号
			recruiterEmail:"xufeilin@dayee.com",//招聘负责人邮箱
			publishDate:"2017-09-05",//发布时间
			expectEntryDate:"2017-05-31",//期望到岗时间
			workContent:"",//工作职责
			serviceCondition:"",//任职资格
			workYears:""//职位需要的工作经验
		},
		dialogVisible:false
	}
	
	getPositionDetail = (postId)=>{
		const result = positionDetail({"positionCondition.postId":postId});
		result.then(response => response.json()).then(data => {
			let pd = data.data;
			if(pd.workingTreatment == null){
				pd.workingTreatment = ""
			}
            this.setState({
            	positionDetail:pd
            });
        });
	}
	openDialog(){
		this.setState({
        	dialogVisible:true
        });
	}
	dialogCancel = ()=>{
		this.setState({
        	dialogVisible:false
        });
	}
	
	componentDidMount(){
		const u = window.location.href;
		const len = u.split("/").length;
		const id = u.split("/")[len-1];
		this.getPositionDetail(id);
	}
	
	render(){
		return (
			<div>
				<PostDetail positionDetail={this.state.positionDetail}></PostDetail>
				<div className="block_frame-position">
					<Tabs defaultActiveKey="1">
					    <Tabs.TabPane tab="推荐新简历" key="1">
					    	<TabOne postId={this.state.positionDetail.postId}></TabOne>
					    </Tabs.TabPane>
					    <Tabs.TabPane tab="已有简历" key="2">
					    	<TabTwo postId={this.state.positionDetail.postId} openDialog={()=>{this.openDialog}}></TabTwo>
					    </Tabs.TabPane>
					</Tabs>
				</div>
				<Modal title="推荐完成" wrapClassName="tab_dialog" width={500} visible={this.state.dialogVisible} onCancel={this.dialogCancel} footer={null} >
		          <div className="logo-success"></div>
		          <p style={{fontSize:"16px",textAlign:"center",marginBottom:"15px"}}>推荐完成 , 您可以后续在系统<a className="font_link">推荐记录</a>中查看结果</p>
		          <p style={{fontSize:"13px",textAlign:"center"}}>系统也会推送结果消息给到您~~</p>
		        </Modal>
			</div>
		)
	}
}

export default Resolve;