import React, { Component } from "react";
import {Icon , Modal ,Button ,Input ,message,Select,Form, Row, Col,Radio, Upload,Divider,notification   } from 'antd';
import FileUpload from "../../upload/fileUpload";
import {upload} from "../../../fetch/home/resolve";

import "../styles";

class QuicklyRecommend extends Component {
	constructor(props) {
        super(props);
        
        this.state = {
        	showOne:"block",
        	showTwo:"none",
        	resolveReportVisible:false,
        	fileList: [{
		      uid: -1,
		      name: 'xxx.png',
		      status: 'done',
		      url: 'http://www.baidu.com/xxx.png',
		    }],
		    fileName:"",
		    resumeForm:{
		    	userName:"",
		    	gender:1,
		    	mobilePhone:"",
		    	email:"",
		    	college:"",
		    	idNo:"",
		    	resumeTempIds:"",
		    	applyLetter:""
		    }
        }
        
	}
	
	handleChange = (value) => {
	  if(value === "one"){
	  	this.setState({
	  		showOne:"block",
        	showTwo:"none"
	  	});
	  }else{
	  	this.setState({
	  		showOne:"none",
        	showTwo:"block"
	  	});
	  }
	  
	}
	handleChangeInput=(param,value)=>{
		const _this = this;
		let data = this.state.resumeForm;
		data[param] = value;
		this.setState({
			resumeForm:data
		});
	}
	chargeForm=()=>{
		let data = this.state.resumeForm;
		if(data.userName.trim().length === 0){
			return false;
		}else if(data.gender.length === 0){
			return false;
		}else if(data.mobilePhone.trim().length === 0){
			return false;
		}else if(data.email.trim().length === 0){
			return false;
		}else{
			return true;
		}
	}
	handleSubmit = (e) => {
		let flag = this.chargeForm();
		if(flag){
			document.getElementById("btnSubmit").click();
		}
	}
	normFile = (e) => {
	    console.log('Upload event:', e);
	    if (Array.isArray(e)) {
	      return e;
	    }
	    return e && e.fileList;
	}
	
	resolveReportHandleOk = ()=>{
		this.setState({resolveReportVisible:false});
	}
	resolveReportHandleCancel = ()=>{
		this.setState({resolveReportVisible:false});
	}
	chooseFile=()=>{
		document.getElementById("file1").click();
	}
	addOneFile=(e)=>{
		let types = ["html","htm","pdf","doc","docx","txt","xls","xlsx","mht"];
		let f=e.currentTarget.files[0];
		let arr = this.state.fileList;
		this.setState({
			fileName:f.name
		})
	}
	submitFunc=(e)=>{
		e.preventDefault();
		var input = document.querySelector('#file1');
		var data = new FormData();
		data.append('file1', input.files[0]);
		const result = upload(data);
      	result.then(response => response.json())
		.then(data => {
			if(data.state === 200){
				notification.success({
				    message: data.data
				});
			}else{
				this.setState({resolveReportVisible:true});			
			}
		});
	}
	
	sendResume(arr){
		this.props.resolveResume(arr);
	}
	
	render() {
		const { getFieldDecorator, getFieldsError, getFieldError, isFieldTouched } = this.props.form;
		return (
			<div className="tab_inner tab_form">
				<div className="menu_drop-frame">
					<Select defaultValue="one" style={{ width: 130 }} onChange={this.handleChange}>
				      <Select.Option value="one">快速推荐简历</Select.Option>
				      <Select.Option value="two">上传简历</Select.Option>
				    </Select>
				</div>
				<div className="block_body" style={{display:this.state.showOne,width:"1110px",margin:"0 auto"}}>
					<Row>
					    <Col span={12}>
					    	<div className="ant-form-item-label"><label className="ant-form-item-required" title="姓名">姓名</label></div>
					    	<Input placeholder="请输入姓名" onChange={(e)=>{this.handleChangeInput("userName",e.target.value)}} />
					    </Col>
					    <Col span={12}>
					    	<div className="ant-form-item-label"><label className="ant-form-item-required" title="性别">性别</label></div>
					    	<Radio.Group onChange={(value)=>{this.handleChangeInput("gender",value)}} value={this.state.resumeForm.gender}>
						        <Radio value={1}>男</Radio>
						        <Radio value={2}>女</Radio>
						    </Radio.Group>
					    </Col>
				    </Row>
					<Row>
					    <Col span={12}>
					    	<div className="ant-form-item-label"><label className="ant-form-item-required" title="移动电话">移动电话</label></div>
					    	<Input placeholder="请输入电话号码" onChange={(e)=>{this.handleChangeInput("mobilePhone",e.target.value)}} />
					    </Col>
					    <Col span={12}>
					    	<div className="ant-form-item-label"><label className="ant-form-item-required" title="电子邮箱">电子邮箱</label></div>
					    	<Input placeholder="请输入电子邮箱" onChange={(e)=>{this.handleChangeInput("email",e.target.value)}} />
					    </Col>
				    </Row>
					<Row>
					    <Col span={12}>
					    	<div className="ant-form-item-label"><label title="毕业院校">毕业院校</label></div>
					    	<Input placeholder="请输入毕业院校" onChange={(e)=>{this.handleChangeInput("college",e.target.value)}} />
					    </Col>
					    <Col span={12}>
					    	<div className="ant-form-item-label"><label title="身份证">身份证</label></div>
					    	<Input placeholder="请输入身份证"  onChange={(e)=>{this.handleChangeInput("idNo",e.target.value)}}/>
					    </Col>
				    </Row>
				    <Row>
				    	<Col span={24}>
				    		<div className="ant-form-item-label"><label title="上传简历">上传简历</label></div>
				    		<div className="block_file-frame">
				    			<div className="btn_chooseFile" onClick={this.chooseFile}>选择文件</div>
								<span className="choosen">已选文件：{this.state.fileName}</span><Icon type="check-circle" />
								<span className="btn_more"><Icon type="solution" /><span>预览</span></span><Divider type="vertical" />
								<span className="btn_more"><Icon type="delete" /><span>删除</span></span><br/><br/>
								<p className="text-red">注：可上传格式为html、htm、pdf、doc、docx、txt、xls、xlsx、mht的文件</p>
				    		</div>
				    	</Col>
				    </Row>
				    <Row>
				    	<Col span={24} className="last_form-textarea">
				    		<div className="ant-form-item-label"><label title="推荐理由">推荐理由</label></div>
				    		<textarea onChange={(e)=>{this.handleChangeInput("applyLetter",e.target.value)}} style={{minWidth:"1000px",height:"110px",resize:"none"}} placeholder="请输入候选人的推荐理由"></textarea>
				    	</Col>
				    </Row>
				    <Row>
				    	<Col span={24}>
				    		<div className="block_btn-footer">
				    			<Button className="form_button-cancel">取消</Button>
				    			<Button type="primary" className="form_button-submit" onClick={this.handleSubmit}>立即推荐</Button>
				    		</div>
				    	</Col>
				    </Row>
			    	<form  id="fileForm" action="/wt/runner/hunter/auth/resume/upload" encType="multipart/form-data" method="post">
			    		<input type="file" name="file1" id="file1" onChange={this.addOneFile} style={{display:"none"}}/>
			    		<input type="button" id="btnSubmit" style={{display:"none"}} onClick={this.submitFunc}/>
			    	</form>
				</div>
				<div className="block_body" style={{display:this.state.showTwo,paddingTop:"20px"}}>
					<FileUpload sendResume={(arr)=>{this.sendResume(arr)}}></FileUpload>
				</div>
				<Modal title="解析报告" wrapClassName="tab_dialog" width={500} visible={this.state.resolveReportVisible} onOk={this.resolveReportHandleOk} onCancel={this.resolveReportHandleCancel} okText="继续上传" cancelText="关闭" >
		          <div className="textAlign-center" style={{height: "70px",paddingTop:"30px"}}>
		          	<Icon type="exclamation-circle" style={{ fontSize: 18, color: '#FF9421',verticalAlign: "middle" }} />&nbsp;&nbsp;
		          	<span style={{verticalAlign: "middle"}}>抱歉,该简历解析失败</span>
	          	  </div>
		        </Modal>
			</div>
		);
	}
}

QuicklyRecommend = Form.create({})(QuicklyRecommend);
export default QuicklyRecommend;