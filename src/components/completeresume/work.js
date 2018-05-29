import React, { Component } from "react";
import moment from 'moment';
import { Row, Col ,Select,Anchor,Icon,Input,Radio ,DatePicker,AutoComplete,Upload,Affix } from 'antd';

class Work extends Component {
	constructor(props) {
		super(props);
		this.state = {
			work:{
				startTime:this.props.work.startTime,
				endTime:this.props.work.endTime,
				companyName:this.props.work.companyName,
				workType:this.props.work.workType,
				companySize:this.props.work.companySize,
				companyType:this.props.work.companyType,
				job:this.props.work.job,
				industry:this.props.work.industry,
				salaryYear:this.props.work.salaryYear,
				department:this.props.work.department,
				describe:this.props.work.describe,
				reason:this.props.work.reason
			}
		}
	}
	changeResumeDetail = (name,value)=>{
		let data = this.state.work;
		data[name] = value;
		return data;
	}
	handleData = (name,value)=>{
		let _this = this;
		let data = this.changeResumeDetail(name,value);
		this.setState({
			work:data
		},()=>{
			_this.props.handleChangeWork(_this.state.work,_this.props.index);
		});
	}
	deleteWork=()=>{
		let _this = this;
		this.props.deleteWork(_this.props.index);
	}
	
	handleStartTime=(date,dateString)=>{
		this.handleData("startTime",dateString);
	}
	handleEndTime=(date,dateString)=>{
		this.handleData("endTime",dateString);
	}
	handleCompanyName=(event)=>{
		this.handleData("companyName",event.target.value);
	}
	handleWorkType=(value)=>{
		this.handleData("workType",value);
	}
	handleCompanySize=(value)=>{
		this.handleData("companySize",value);
	}
	handleCompanyType=(value)=>{
		this.handleData("companyType",value);
	}
	handleJob=(event)=>{
		this.handleData("job",event.target.value);
	}
	handleIndustry=(value)=>{
		this.handleData("industry",value);
	}
	handleSalaryYear=(value)=>{
		this.handleData("salaryYear",value);
	}
	handleDepartment=(event)=>{
		this.handleData("department",event.target.value);
	}
	handleDescribe=(event)=>{
		this.handleData("describe",event.target.value);
	}
	handleReason=(event)=>{
		this.handleData("reason",event.target.value);
	}
	
	render(){
		const _this = this;
		const { MonthPicker, RangePicker, WeekPicker } = DatePicker;
		let startTime = this.state.work.startTime;
		let endTime = this.state.work.endTime;
		function chargeDate(param,type){
			if(param.trim().length==0){
				return "";
			}else{
				return moment(param, type);
			}
		}
		function chargedeleteBtn(index){
			if(index === 0){
				return {display:"none"};
			}else{
				return {display:"block"};
			}
		}
		return (
			<div className="apply_input">
				<span className="delete_edu-btn" onClick={this.deleteWork} style={chargedeleteBtn(_this.props.index)}>
					<Icon type="minus-circle-o"/>
				</span>
				<Row>
  					<Col span={12}>
  						<div className="label"><span>开始时间</span></div>
  						<MonthPicker size={{ width: 250 }} defaultValue={chargeDate(_this.state.work.startTime,'YYYY-MM')} onChange={this.handleStartTime} />
  					</Col>
  					<Col span={12}>
  						<div className="label"><span>结束时间</span></div>
  						<MonthPicker size={{ width: 250 }} defaultValue={chargeDate(_this.state.work.endTime,'YYYY-MM')} onChange={this.handleEndTime} />
  					</Col>
				</Row>
				<Row>
  					<Col span={12}>
  						<div className="label"><span>企业名称</span></div>
  						<input className="input_form" value={this.state.work.companyName} onChange={this.handleCompanyName} />
  					</Col>
  					<Col span={12}>
  						<div className="label"><span>工作性质</span></div>
  						<Select style={{ width: 250 }} onChange={this.handleWorkType} value={this.state.work.workType}>
					      <Select.Option value="1"></Select.Option>
					    </Select>
  					</Col>
				</Row>
				<Row>
  					<Col span={12}>
  						<div className="label"><span>企业规模</span></div>
  						<Select style={{ width: 250 }} onChange={this.handleCompanySize} value={this.state.work.companySize}>
					      <Select.Option value="1"></Select.Option>
					    </Select>
  					</Col>
  					<Col span={12}>
  						<div className="label"><span>企业性质</span></div>
  						<Select style={{ width: 250 }} onChange={this.handleCompanyType} value={this.state.work.companyType}>
					      <Select.Option value="1"></Select.Option>
					    </Select>
  					</Col>
				</Row>
				<Row>
  					<Col span={12}>
  						<div className="label"><span>职位名称</span></div>
  						<input className="input_form" value={this.state.work.job} onChange={this.handleJob} />
  					</Col>
  					<Col span={12}>
  						<div className="label"><span>行业类别</span></div>
  						<Select style={{ width: 250 }} onChange={this.handleIndustry} value={this.state.work.industry}>
					      <Select.Option value="1"></Select.Option>
					    </Select>
  					</Col>
				</Row>
				<Row>
  					<Col span={12}>
  						<div className="label"><span>职位年薪</span></div>
  						<Select style={{ width: 250 }} onChange={this.handleSalaryYear} value={this.state.work.salaryYear}>
					      <Select.Option value="1"></Select.Option>
					    </Select>
  					</Col>
  					<Col span={12}>
  						<div className="label"><span>所在部门</span></div>
  						<input className="input_form" value={this.state.work.department} onChange={this.handleDepartment} />
  					</Col>
				</Row>
				<Row>
  					<Col span={24}>
  						<div className="label"><span>工作描述</span></div>
  						<textarea style={{width: "650px",marginLeft:"0"}} value={this.state.work.describe} onChange={this.handleDescribe}></textarea>
  					</Col>
				</Row>
				<Row>
  					<Col span={24}>
  						<div className="label"><span>离职原因</span></div>
  						<textarea style={{width: "650px",marginLeft:"0"}} value={this.state.work.reason} onChange={this.handleReason}></textarea>
  					</Col>
				</Row>
			</div>
		)
	}
	
}

export default Work;