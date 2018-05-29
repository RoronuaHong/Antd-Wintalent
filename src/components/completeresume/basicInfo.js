import React, { Component } from "react";
import moment from 'moment';
import { Row, Col ,Select,Anchor,Icon,Input,Radio ,DatePicker,AutoComplete,Upload,Affix } from 'antd';

class BasicInfo extends Component {
	constructor(props) {
		super(props);
		this.state = {
			autoResult:[],
			basicInfo:{
				userName:this.props.basicInfo.userName,
				gender:this.props.basicInfo.gender,
				defBirthday:this.props.basicInfo.defBirthday,
				birthday:this.props.basicInfo.birthday,
				mobilePhone:this.props.basicInfo.mobilePhone,
				email:this.props.basicInfo.email,
				marriage:this.props.basicInfo.marriage,
				locationCity:this.props.basicInfo.locationCity,
				accountCity:this.props.basicInfo.accountCity,
				education:this.props.basicInfo.education,
				defEduday:this.props.basicInfo.defEduday,
				eduday:this.props.basicInfo.eduday,
				year:this.props.basicInfo.year,
				college:this.props.basicInfo.college,
				major:this.props.basicInfo.major,
				picFileList:this.props.basicInfo.picFileList,
				proFileList:this.props.basicInfo.proFileList
			}
		}
	}
	changeResumeDetail = (name,value)=>{
		let data = this.state.basicInfo;
		data[name] = value;
		return data;
	}
	handleData = (name,value)=>{
		let _this = this;
		let data = this.changeResumeDetail(name,value);
		this.setState({
			basicInfo:data
		},()=>{
			_this.props.handleChangeInfo(_this.state.basicInfo);
		});
	}
	
	handleuserName = (event)=>{
		this.handleData("userName",event.target.value);
	}
	handlegender = (event)=>{
		this.handleData("gender",event.target.value);
	}
	handlebirthday = (date,dateString)=>{
		this.handleData("birthday",dateString);
	}
	handlemobilePhone = (event)=>{
		this.handleData("mobilePhone",event.target.value);
	}
	handleemail = (value)=>{
		let _this = this;
		let result = !value || value.indexOf('@') >= 0 ? [] : [
	        `${value}@gmail.com`,
	        `${value}@163.com`,
	        `${value}@qq.com`,
	        `${value}@yahoo.com`,
	        `${value}@163.net`,
	        `${value}@msn.com`,
	        `${value}@hotmail.com`,
	      ];
		let data = this.changeResumeDetail("email",value);
		this.setState({
			basicInfo:data,
			autoResult:result
		},()=>{
			_this.props.handleChangeInfo(_this.state.basicInfo);
		});
	}
	handlemarriage = (value)=>{
		this.handleData("marriage",value);
	}
	handlelocationCity = (event)=>{
		this.handleData("locationCity",event.target.value);
	}
	handleaccountCity = (event)=>{
		this.handleData("accountCity",event.target.value);
	}
	handleeducation = (value)=>{
		this.handleData("education",value);
	}
	handleeduday = (date,dateString)=>{
		this.handleData("eduday",dateString);
	}
	handleyear = (value)=>{
		this.handleData("year",value);
	}
	handlecollege = (event)=>{
		this.handleData("college",event.target.value);
	}
	handlemajor = (event)=>{
		this.handleData("major",event.target.value);
	}
	handlepicFileList = (event)=>{
		
	}
	handleproFileList = (event)=>{
		
	}
	
	render() {
		const { MonthPicker, RangePicker, WeekPicker } = DatePicker;
		const birthday = this.state.basicInfo.birthday;
		const eduday = this.state.basicInfo.eduday;
		function chargeDate(param,type){
			if(param.trim().length==0){
				return "";
			}else{
				return moment(param, type)
			}
		}
		return (
			<div>
				<Row>
  					<Col span={12}>
  						<div className="label"><i className="icon_tip">*</i> <span>姓名</span></div>
  						<input className="input_form" value={this.state.basicInfo.userName} onChange={this.handleuserName} />
  					</Col>
  					<Col span={12}>
  						<div className="label"><i className="icon_tip">*</i> <span>性别</span></div>
  						<Radio.Group onChange={this.handlegender} value={this.state.basicInfo.gender}>
					        <Radio value={1}>男性</Radio>
					        <Radio value={2}>女性</Radio>
					    </Radio.Group>
  					</Col>
				</Row>
  				<Row>
  					<Col span={12}>
  						<div className="label"><i className="icon_tip">*</i> <span>出生日期</span></div>
  						<DatePicker defaultValue={chargeDate(birthday,'YYYY-MM-DD')} onChange={this.handlebirthday} />
  					</Col>
  					<Col span={12}>
  						<div className="label"><i className="icon_tip">*</i> <span>移动电话</span></div>
  						<input className="input_form" value={this.state.basicInfo.mobilePhone} onChange={this.handlemobilePhone} />
  					</Col>
				</Row>
  				<Row>
  					<Col span={12}>
  						<div className="label"><i className="icon_tip">*</i> <span>电子邮箱</span></div>
  						<AutoComplete
				            dataSource={this.state.autoResult}
				            style={{ width: 250 }}
				            onChange={this.handleemail}
				            value={this.state.basicInfo.email}
				        />
  					</Col>
  					<Col span={12}>
  						<div className="label"><span>婚姻状况</span></div>
  						<Select style={{ width: 250 }} onChange={this.handlemarriage} value={this.state.basicInfo.marriage}>
					      <Select.Option value="yes">已婚</Select.Option>
					      <Select.Option value="no">未婚</Select.Option>
					    </Select>
  					</Col>
				</Row>
  				<Row>
  					<Col span={12}>
  						<div className="label"><span>现居住地</span></div>
  						<input className="input_form" value={this.state.basicInfo.locationCity} onChange={this.handlelocationCity} />
  					</Col>
  					<Col span={12}>
  						<div className="label"><span>户口所在地</span></div>
  						<input className="input_form" value={this.state.basicInfo.accountCity} onChange={this.handleaccountCity} />
  					</Col>
				</Row>
  				<Row>
  					<Col span={12}>
  						<div className="label"><span>学历</span></div>
  						<Select style={{ width: 250 }} onChange={this.handleeducation} value={this.state.basicInfo.education}>
					      <Select.Option value="1">硕士及以上</Select.Option>
					      <Select.Option value="2">本科</Select.Option>
					      <Select.Option value="3">大专</Select.Option>
					      <Select.Option value="4">高中</Select.Option>
					      <Select.Option value="5">初中以下</Select.Option>
					    </Select>
  					</Col>
  					<Col span={12}>
  						<div className="label"><span>毕业时间</span></div>
  						<MonthPicker size={{ width: 250 }} defaultValue={chargeDate(eduday, 'YYYY-MM')} onChange={this.handleeduday} />
  					</Col>
				</Row>
				<Row>
  					<Col span={12}>
  						<div className="label"><span>毕业院校</span></div>
  						<input className="input_form" value={this.state.basicInfo.college} onChange={this.handlecollege} />
  					</Col>
  					<Col span={12}>
  						<div className="label"><span>工作年限</span></div>
  						<Select style={{ width: 250 }} onChange={this.handleyear} value={this.state.basicInfo.year}>
					      <Select.Option value="1">5年及以上</Select.Option>
					      <Select.Option value="2">3~5年</Select.Option>
					      <Select.Option value="3">1~3年</Select.Option>
					      <Select.Option value="4">1年以下</Select.Option>
					    </Select>
  					</Col>
				</Row>
				<Row>
  					<Col span={12}>
  						<div className="label"><span>专业</span></div>
  						<input className="input_form" value={this.state.basicInfo.major} onChange={this.handlemajor} />
  					</Col>
  					<Col span={12}>
  						<div className="label"><span>照片</span></div>
  						<Upload defaultFileList={this.state.basicInfo.picFileList} action='//jsonplaceholder.typicode.com/posts/' onChange={this.handlepicFileList}>
						    <a className="upload_link" accept="image/png, image/jpeg, image/jpg">
						      <Icon type="picture" /> <span>上传照片</span>
						    </a>
						</Upload>
  					</Col>
				</Row>
				<Row>
  					<Col span={24}>
  						<div className="label"><span>个人作品</span></div>
  						<Upload defaultFileList={this.state.basicInfo.proFileList} action='//jsonplaceholder.typicode.com/posts/' onChange={this.handleproFileList}>
						    <a className="upload_link">
						      <Icon type="paper-clip" /> <span>添加附件</span>
						    </a>
						</Upload>
  					</Col>
				</Row>
				<Row>
  					<Col span={24}>
  						<div className="label"><span></span></div>
  						<div className="form_button-submit input_btn-save" style={{marginTop:"0px"}}>保存</div>
  					</Col>
				</Row>
			</div>
		)
	}
}

export default BasicInfo;