import React, { Component } from "react";
import { Row, Col ,Select,Anchor,Icon,Input,Radio ,DatePicker,AutoComplete,Upload,Affix } from 'antd';

class Intention extends Component {
	constructor(props) {
		super(props);
		this.state = {
			intention:{
				workType:this.props.intention.workType,
				province:this.props.intention.province,
				city:this.props.intention.city,
				funcOne:this.props.intention.funcOne,
				funcTwo:this.props.intention.funcTwo,
				industry:this.props.intention.industry,
				expect:this.props.intention.expect,
				dutyTime:this.props.intention.dutyTime,
				purpose:this.props.intention.purpose,
				salary:this.props.intention.salary,
				industryNow:this.props.intention.industryNow,
				funcNow:this.props.intention.funcNow
			}
		}
	}
	changeResumeDetail = (name,value)=>{
		let data = this.state.intention;
		data[name] = value;
		return data;
	}
	handleData = (name,value)=>{
		let _this = this;
		let data = this.changeResumeDetail(name,value);
		this.setState({
			intention:data
		},()=>{
			_this.props.handleChangeIntention(_this.state.intention);
		});
	}
	
	handleWorkType = (value)=>{
		this.handleData("workType",value);
	}
	handleProvince = (value)=>{
		this.handleData("province",value);
	}
	handleCity = (value)=>{
		this.handleData("city",value);
	}
	handleFuncOne = (value)=>{
		this.handleData("funcOne",value);
	}
	handleFuncTwo = (value)=>{
		this.handleData("funcTwo",value);
	}
	handleIndustry = (event)=>{
		this.handleData("industry",event.target.value);
	}
	handleExpect = (value)=>{
		this.handleData("expect",value);
	}
	handlePurpose = (value)=>{
		this.handleData("purpose",value);
	}
	handleDutyTime = (value)=>{
		this.handleData("dutyTime",value);
	}
	handleSalary = (value)=>{
		this.handleData("salary",value);
	}
	handleIndustryNow = (value)=>{
		this.handleData("industryNow",value);
	}
	handleFuncNow = (value)=>{
		this.handleData("funcNow",value);
	}
	
	render() {
		return (
			<div className="main_block-input basicInfo_input">
				<Row>
  					<Col span={12}>
  						<div className="label"><span>期望工作性质</span></div>
  						<Select style={{ width: 250 }} value={this.state.intention.workType} onChange={this.handleWorkType}>
					      <Select.Option value="1">全职</Select.Option>
					    </Select>
  					</Col>
  					<Col span={12}>
  						<div className="label"><span>期望工作地点</span></div>
  						<Select style={{ width: 115 }} value={this.state.intention.province} onChange={this.handleProvince}>
					      <Select.Option value="1">上海</Select.Option>
					    </Select>
					    <div className="place-hold"></div>
  						<Select style={{ width: 115 }} value={this.state.intention.city} onChange={this.handleCity}>
					      <Select.Option value="1">上海</Select.Option>
					    </Select>
  					</Col>
				</Row>
				<Row>
  					<Col span={12}>
  						<div className="label"><span>期望职能</span></div>
  						<Select style={{ width: 115 }} value={this.state.intention.funcOne} onChange={this.handleFuncOne}>
					      <Select.Option value="1">上海</Select.Option>
					    </Select>
					    <div className="place-hold"></div>
  						<Select style={{ width: 115 }} value={this.state.intention.funcTwo} onChange={this.handleFuncTwo}>
					      <Select.Option value="1">上海</Select.Option>
					    </Select>
  					</Col>
  					<Col span={12}>
  						<div className="label"><span>期望行业</span></div>
  						<input className="input_form" value={this.state.intention.industry} onChange={this.handleIndustry} />
  					</Col>
				</Row>
				<Row>
  					<Col span={12}>
  						<div className="label"><span>期望年薪</span></div>
  						<Select style={{ width: 250 }} value={this.state.intention.expect} onChange={this.handleExpect}>
					      <Select.Option value="1"></Select.Option>
					    </Select>
  					</Col>
  					<Col span={12}>
  						<div className="label"><span>目的薪酬</span></div>
  						<Select style={{ width: 250 }} value={this.state.intention.purpose} onChange={this.handlePurpose}>
					      <Select.Option value="1"></Select.Option>
					    </Select>
  					</Col>
				</Row>
				<Row>
  					<Col span={12}>
  						<div className="label"><span>到岗时间</span></div>
  						<Select style={{ width: 250 }} value={this.state.intention.dutyTime} onChange={this.handleDutyTime}>
					      <Select.Option value="1">立即到岗</Select.Option>
					      <Select.Option value="2">一周内</Select.Option>
					      <Select.Option value="3">一个月内</Select.Option>
					    </Select>
  					</Col>
  					<Col span={12}>
  						<div className="label"><span>期望薪酬</span></div>
  						<Select style={{ width: 250 }} value={this.state.intention.salary} onChange={this.handleSalary}>
					      <Select.Option value="1">1</Select.Option>
					    </Select>
  					</Col>
				</Row>
				<Row>
  					<Col span={12}>
  						<div className="label"><span>当前行业</span></div>
  						<Select style={{ width: 250 }} value={this.state.intention.industryNow} onChange={this.handleIndustryNow}>
					      <Select.Option value="1">立即到岗</Select.Option>
					    </Select>
  					</Col>
  					<Col span={12}>
  						<div className="label"><span>当前职能</span></div>
  						<Select style={{ width: 250 }} value={this.state.intention.funcNow} onChange={this.handleFuncNow}>
					      <Select.Option value="1">1</Select.Option>
					    </Select>
  					</Col>
				</Row>
			</div>
		)
	}
}

export default Intention;