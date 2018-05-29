import React, { Component } from "react";
import moment from 'moment';
import { Row, Col ,Select,Anchor,Icon,Input,Radio ,DatePicker,AutoComplete,Upload,Affix } from 'antd';

class Education extends Component {
	constructor(props) {
		super(props);
		this.state = {
			mode:["month","month"],
			education:{
				degree:this.props.education.degree,
				educate:this.props.education.educate,
				time:this.props.education.time,
				college:this.props.education.college,
				city:this.props.education.city,
				major:this.props.education.major,
				majorDescribe:this.props.education.majorDescribe
			}
		}
	}
	changeResumeDetail = (name,value)=>{
		let data = this.state.education;
		data[name] = value;
		return data;
	}
	handleData = (name,value)=>{
		let _this = this;
		let data = this.changeResumeDetail(name,value);
		this.setState({
			education:data
		},()=>{
			_this.props.handleChangeEducation(_this.state.education,_this.props.index);
		});
	}
	handlePanelChange = (value, mode) => {
		let start = value[0]._d.getFullYear()+"-"+(value[0]._d.getMonth()+1);
		let end = value[1]._d.getFullYear()+"-"+(value[1]._d.getMonth()+1);
		this.handleData("time",start+"~"+end);
	    this.setState({
	      mode: [
	        mode[0] === 'date' ? 'month' : mode[0],
	        mode[1] === 'date' ? 'month' : mode[1],
	      ],
	    });
   }
	deleteEdu=()=>{
		let _this = this;
		this.props.deleteEdu(_this.props.index);
	}
	
	handleDegree=(value)=>{
		this.handleData("degree",value);
	}
	handleEducate=(value)=>{
		this.handleData("educate",value);
	}
	handleCollege=(event)=>{
		this.handleData("college",event.target.value);
	}
	handleCity=(event)=>{
		this.handleData("city",event.target.value);
	}
	handleMajor=(event)=>{
		this.handleData("major",event.target.value);
	}
	handleMajorDescribe=(event)=>{
		this.handleData("majorDescribe",event.target.value);
	}
	
	render(){
		const { RangePicker } = DatePicker;
		const _this = this;
		let yearNow = new Date().getFullYear();
		let monthNow = new Date().getMonth()+1;
		let dateTime = yearNow+"-"+monthNow+"~"+yearNow+"-"+(monthNow+1);
		let time = this.state.education.time.length>0?this.state.education.time:dateTime;
		let startTime = time.split("~")[0];
		let endTime = time.split("~")[1];
		function chargedeleteBtn(index){
			if(index === 0){
				return {display:"none"};
			}else{
				return {display:"block"};
			}
		}
		
		function chargeDate(param,type){
			if(param.trim().length==0){
				return "";
			}else{
				return moment(param, type)
			}
		}
		return (
			<div className="apply_input">
				<span className="delete_edu-btn" onClick={this.deleteEdu} style={chargedeleteBtn(_this.props.index)}>
					<Icon type="minus-circle-o"/>
				</span>
				<Row>
  					<Col span={12}>
  						<div className="label"><span>学位</span></div>
  						<Select style={{ width: 250 }} onChange={this.handleDegree} value={this.state.education.degree}>
					      <Select.Option value="1">博士</Select.Option>
					      <Select.Option value="2">硕士</Select.Option>
					      <Select.Option value="3">学士</Select.Option>
					    </Select>
  					</Col>
  					<Col span={12}>
  						<div className="label"><span>学历</span></div>
  						<Select style={{ width: 250 }} onChange={this.handleEducate} value={this.state.education.educate}>
					      <Select.Option value="1">研究生</Select.Option>
					      <Select.Option value="2">本科</Select.Option>
					      <Select.Option value="3">大专</Select.Option>
					      <Select.Option value="4">高中</Select.Option>
					      <Select.Option value="5">高中以下</Select.Option>
					    </Select>
  					</Col>
				</Row>
				<Row>
  					<Col span={12}>
  						<div className="label"><span>时间</span></div>
  						<RangePicker
					        placeholder={['开始日期', '结束日期']}
					        format="YYYY-MM"
					        value={[chargeDate(startTime, 'YYYY-MM'),chargeDate(endTime, 'YYYY-MM')]}
					        mode={this.state.mode}
					        onPanelChange={this.handlePanelChange}
					    />
  					</Col>
  					<Col span={12}>
  						<div className="label"><span>学校</span></div>
  						<input className="input_form" value={this.state.education.college} onChange={this.handleCollege} />
  					</Col>
				</Row>
				<Row>
  					<Col span={12}>
  						<div className="label"><span>城市</span></div>
  						<input className="input_form" value={this.state.education.city} onChange={this.handleCity} />
  					</Col>
  					<Col span={12}>
  						<div className="label"><span>专业</span></div>
  						<input className="input_form" value={this.state.education.major} onChange={this.handleMajor} />
  					</Col>
				</Row>
				<Row>
  					<Col span={24}>
  						<div className="label"><span>专业描述</span></div>
  						<textarea style={{width: "650px",marginLeft:"0"}} value={this.state.education.majorDescribe} onChange={this.handleMajorDescribe}></textarea>
  					</Col>
				</Row>
			</div>
		)
	}
}

export default Education;