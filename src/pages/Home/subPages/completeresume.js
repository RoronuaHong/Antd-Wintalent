import React, { Component } from "react";
import moment from 'moment';
import ShowMoreBtn from "../../../components/completeresume/showMoreBtn";
import BasicInfo from "../../../components/completeresume/basicInfo";
import Intention from "../../../components/completeresume/intention";
import Education from "../../../components/completeresume/education";
import Work from "../../../components/completeresume/work";
import { Row, Col ,Select,Anchor,Icon,Input,Radio ,DatePicker,AutoComplete,Upload,Affix,Tooltip } from 'antd';

import '../../../styles/completeresume';

class Completeresume extends Component {
	state = {
		defaultResume:"one",
		showapplyLetter:"block",
		showbasicInfo:"block",
		showselfEvaluation:"block",
		showintention:"block",
		showwork:"block",
		showedu:"block",
		showlanguage:"block",
		tooltipShow:true,
		resumeDetail:{
			applyLetter:"",
			basicInfo:{
				userName:"张三",
				gender:1,
				birthday:"2015-06-06",
				mobilePhone:"",
				email:"",
				marriage:"",
				locationCity:"",
				accountCity:"",
				education:"2",
				eduday:"2015-06",
				year:"1",
				college:"",
				major:"",
				picFileList:[{
				    uid: 1,
				    name: 'xxx.png',
				    status: 'done',
				    reponse: 'Server Error 500', // custom error message to show
				    url: 'http://www.baidu.com/xxx.png',
				}],
				proFileList:[]
			},
			selfEvaluation:"",
			intention:{
				workType:"",
				province:"",
				city:"",
				funcOne:"",
				funcTwo:"",
				industry:"",
				Expect:"",
				purpose:"",
				dutyTime:"",
				salary:"",
				industryNow:"",
				funcNow:""
			},
			education:[{
				degree:"",
				educate:"",
				time:"2012-9~2016-6",
				college:"",
				city:"",
				major:"",
				majorDescribe:""
			}],
			work:[{
				startTime:"",
				endTime:"",
				companyName:"",
				workType:"",
				companySize:"",
				companyType:"",
				job:"",
				industry:"",
				salaryYear:"",
				department:"",
				describe:"",
				reason:""
			}]
		}
	}
	
	handleChangeLan = ()=>{
		
	}
	changeResumeDetail = (type,name,value)=>{
		let data = this.state.resumeDetail;
		if(type){
			data[type][name] = value;
		}else{
			data[name] = value;
		}
		return data;
	}
	//监测 基本信息 填写内容的变化
	handleChangeInfo(data){
		let info = this.state.resumeDetail;
		info.basicInfo = data;
		this.setState({
			resumeDetail:info
		},()=>{
			this.chargeRequired();
		});
	}
	handleChangeIntention(data){
		let info = this.state.resumeDetail;
		info.intention = data;
		this.setState({
			resumeDetail:info
		},()=>{
			this.chargeRequired();
		});
	}
	handleChangeEducation(data,index){
		let info = this.state.resumeDetail;
		info.education[index] = data;
		this.setState({
			resumeDetail:info
		},()=>{
			this.chargeRequired();
		});
	}
	handleChangeWork(data,index){
		let info = this.state.resumeDetail;
		info.work[index] = data;
		this.setState({
			resumeDetail:info
		},()=>{
			this.chargeRequired();
		});
	}
	chargeRequired=()=>{
		if(this.state.resumeDetail.applyLetter.trim().length === 0){
			this.setState({tooltipShow:true});
		}else if(this.state.resumeDetail.basicInfo.userName.toString().trim().length === 0){
			this.setState({tooltipShow:true});
		}else if(this.state.resumeDetail.basicInfo.gender.toString().trim().length === 0){
			this.setState({tooltipShow:true});
		}else if(this.state.resumeDetail.basicInfo.birthday.toString().trim().length === 0){
			this.setState({tooltipShow:true});
		}else if(this.state.resumeDetail.basicInfo.mobilePhone.toString().trim().length === 0){
			this.setState({tooltipShow:true});
		}else if(this.state.resumeDetail.basicInfo.email.toString().trim().length === 0){
			this.setState({tooltipShow:true});
		}else if(this.state.resumeDetail.selfEvaluation.toString().trim().length === 0){
			this.setState({tooltipShow:true});
		}else{
			this.setState({tooltipShow:false});
		}
	}
	
	handleApplyLetter = (event)=>{
		let data = this.changeResumeDetail(false,"applyLetter",event.target.value);
		this.setState({
			resumeDetail:data
		},()=>{
			this.chargeRequired();
		});
	}
	handleSelfEvaluation = (event)=>{
		let data = this.changeResumeDetail(false,"selfEvaluation",event.target.value);
		this.setState({
			resumeDetail:data
		},()=>{
			this.chargeRequired();
		});
	}
	
	showMore(name,type){
		let data = {};
		data["show"+name] = type;
		this.setState(data);
	}
	addEdu=()=>{
		let data = this.state.resumeDetail.education;
		let dom = {degree:"",
			educate:"",
			time:"",
			college:"",
			city:"",
			major:"",
			majorDescribe:""
		}
		data.push(dom);
		let result = this.changeResumeDetail(false,"education",data);
		this.setState({
			resumeDetail:result
		});
	}
	addWork=()=>{
		let data = this.state.resumeDetail.work;
		let dom = {
			startTime:"",
			endTime:"",
			companyName:"",
			workType:"",
			companySize:"",
			companyType:"",
			job:"",
			industry:"",
			salaryYear:"",
			department:"",
			describe:"",
			reason:""
		}
		data.push(dom);
		let result = this.changeResumeDetail(false,"work",data);
		this.setState({
			resumeDetail:result
		});
	}
	deleteEdu(index){
		let data = this.state.resumeDetail.education;
		data.splice(index,1);
		let result = this.changeResumeDetail(false,"education",data);
		this.setState({
			resumeDetail:result
		});
	}
	deleteWork(index){
		let data = this.state.resumeDetail.work;
		data.splice(index,1);
		let result = this.changeResumeDetail(false,"work",data);
		this.setState({
			resumeDetail:result
		});
	}
	componentDidMount(){
		
	}
	
	render(){
		const { Link } = Anchor;
		const _this = this;
		const content = (
			<div className="foot_tip">
			    <Icon type="bulb" /><span>还有必填项未完成哦~</span>
			</div>
		)
		return (
			<div className="comp_outer">
				<Row>
			      <Col span={5} style={{paddingRight:"15px"}}>
				    <Affix>
				      	<div className="block_left">
				      		<Select defaultValue={this.state.defaultResume} style={{ width: 175 }} onChange={this.handleChangeLan}>
						      <Select.Option value="one">中文简历</Select.Option>
						      <Select.Option value="two">英文简历</Select.Option>
						    </Select>
						    <div className="block_anchor">
						    	<Anchor affix={false} offsetTop={150}>
								    <Link href="javascript:;#applyLetter" title="推荐评语" />
								    <Link href="javascript:;#basicInfo" title="基本信息" />
								    <Link href="javascript:;#selfEvaluation" title="自我评价"/>
								    <Link href="javascript:;#work" title="工作经历"/>
								    <Link href="javascript:;#edu" title="教育经历"/>
								    <Link href="javascript:;#language" title="语言能力"/>
								</Anchor>
						    </div>
						    <div className="block_btn">
						    	<div className="form_button-submit">下一步</div>
						    	<div className="form_button-cancel">暂存并退出</div>
						    </div>
				      	</div>
			      	</Affix>
			      </Col>
			      <Col span={19}>
			      	<div className="block_right">
			      		<div id="applyLetter">
			      			<h1><span>推荐评语</span><div className="divider"></div><ShowMoreBtn name="applyLetter" showMore={(name,type) => this.showMore(name,type)}></ShowMoreBtn></h1>
			      			<div style={{display:this.state.showapplyLetter}}>
			      				<div className="main_block-input apply_input">
			      					<div>
			      						<i className="icon_tip">*</i> <span>推荐内容</span>
			      						<textarea placeholder="可以详细描述候选人的亮点，以及核心竞争力，不少于20字" value={this.state.resumeDetail.applyLetter} onChange={this.handleApplyLetter}></textarea><br/>
			      						<div className="form_button-submit input_btn-save">保存</div>
			      					</div>
			      				</div>
			      				<div className="tip_important">
			      					注：只有【中英文简历必填项必须完整】才可以推荐！！
			      				</div>
			      			</div>
			      		</div>
			      		<div id="basicInfo">
			      			<h1><span>基本信息</span><div className="divider"></div><ShowMoreBtn name="basicInfo" showMore={(name,type) => this.showMore(name,type)}></ShowMoreBtn></h1>
			      			<p className="tip_noborder">注：1、手机和邮箱会作为后续笔试、面试通知的唯一联系方式，请谨慎填写。2、别忘了填写注册码。3、测试备注。</p>
			      			<div className="main_block-input basicInfo_input" style={{display:this.state.showbasicInfo}}>
			      				<BasicInfo basicInfo={this.state.resumeDetail.basicInfo} handleChangeInfo={(data)=>{this.handleChangeInfo(data)}}></BasicInfo>
			      			</div>
			      		</div>
			      		<div id="selfEvaluation">
			      			<h1><span>自我评价</span><div className="divider"></div><ShowMoreBtn name="selfEvaluation" showMore={(name,type) => this.showMore(name,type)}></ShowMoreBtn></h1>
			      			<p className="tip_noborder">注：自我评价一定要填写哦！</p>
			      			<div style={{display:this.state.showselfEvaluation}}>
			      				<div className="main_block-input apply_input">
			      					<div>
			      						<i className="icon_tip">*</i> <span>评价内容</span>
			      						<textarea value={this.state.resumeDetail.selfEvaluation} onChange={this.handleSelfEvaluation}></textarea><br/>
			      						<div className="form_button-submit input_btn-save">保存</div>
			      					</div>
			      				</div>
			      			</div>
			      		</div>
			      		<div id="intention">
			      			<h1><span>求职意向</span><div className="divider"></div><ShowMoreBtn name="intention" showMore={(name,type) => this.showMore(name,type)}></ShowMoreBtn></h1>
			      			<div style={{display:this.state.showintention}}>
			      				<Intention intention={this.state.resumeDetail.intention} handleChangeIntention={(data)=>{this.handleChangeIntention(data)}}></Intention>
			      			</div>
			      		</div>
			      		<div id="work">
			      			<h1><span>工作经历</span><div className="divider"></div><ShowMoreBtn name="work" showMore={(name,type) => this.showMore(name,type)}></ShowMoreBtn></h1>
			      			<div style={{display:this.state.showwork}}>
			      				<div className="main_block-input basicInfo_input">
			      					{
							          	this.state.resumeDetail.work.map(function(item,index){
							          		return <Work key={'edu'+index} work={item} index={index} handleChangeWork={(data,index)=>{_this.handleChangeWork(data,index)}} deleteWork={(index)=>{_this.deleteWork(index)}} ></Work>
							          	})
							        }
			      				</div>
			      				<div className="add_edu-btn" onClick={this.addWork}>
									<Icon type="plus-circle-o" /><span>增加更多工作经历</span>
								</div>
			      			</div>
			      		</div>
			      		<div id="edu">
			      			<h1><span>教育经历</span><div className="divider"></div><ShowMoreBtn name="edu" showMore={(name,type) => this.showMore(name,type)}></ShowMoreBtn></h1>
			      			<div style={{display:this.state.showintention}}>
				      			<div className="main_block-input basicInfo_input">
									{
							          	this.state.resumeDetail.education.map(function(item,index){
							          		return <Education key={'edu'+index} education={item} index={index} handleChangeEducation={(data,index)=>{_this.handleChangeEducation(data,index)}} deleteEdu={(index)=>{_this.deleteEdu(index)}} ></Education>
							          	})
							        }
								</div>
								<div className="add_edu-btn" onClick={this.addEdu}>
									<Icon type="plus-circle-o" /><span>增加更多教育经历</span>
								</div>
			      			</div>
			      		</div>
			      		<div id="language">
			      			<h1><span>语言能力</span><div className="divider"></div><ShowMoreBtn name="language" showMore={(name,type) => this.showMore(name,type)}></ShowMoreBtn></h1>
			      		</div>
			      		<div className="footer_btn">
					    	<div className="form_button-cancel foot_btn">暂存并退出</div>
					    	<Tooltip visible={this.state.tooltipShow} placement="topRight" overlayClassName="block_tooltip" arrowPointAtCenter={true} title={content}>
					    		<div className="form_button-submit foot_btn" style={{marginLeft:"10px"}}>立即推荐</div>
				    		</Tooltip>
					    </div>
			      	</div>
			      </Col>
			    </Row>
			</div>
		)
	}
}

export default Completeresume;