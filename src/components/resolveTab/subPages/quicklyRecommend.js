import React, { Component } from "react";
import {Icon , Modal ,Button ,Input ,message,Select,Form, Row, Col,Radio, Upload } from 'antd';

import "../styles";

class QuicklyRecommend extends Component {
	constructor(props) {
        super(props);
        
        this.state = {
        	showOne:"block",
        	showTwo:"none"
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
	handleSubmit = (e) => {
		e.preventDefault();
		this.props.form.validateFields((err, values) => {
	      if (!err) {
	        console.log('Received values of form: ', values);
	      }
	    });
	}
	normFile = (e) => {
	    console.log('Upload event:', e);
	    if (Array.isArray(e)) {
	      return e;
	    }
	    return e && e.fileList;
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
					<Form layout="inline" onSubmit={this.handleSubmit}>
						<Row>
					      <Col span={12}>
					      	<Form.Item label="姓名">
					          {getFieldDecorator('userName', {
					            rules: [{
					              required: true,
					              message: '姓名不能为空',
					            }],
					          })(
					            <Input placeholder="请输入姓名" />
					          )}
					        </Form.Item>
					      </Col>
					      <Col span={12}>
					      	<Form.Item label="性别">
						      	{getFieldDecorator('gender',{
						      		rules: [{
						              required: true,
						              message: '请选择性别',
						            }],
						      	})(
						          <Radio.Group>
							        <Radio value={1}>男</Radio>
							        <Radio value={2}>女</Radio>
							      </Radio.Group>
						        )}
					        </Form.Item>
					      </Col>
					    </Row>
					    <Row>
					      <Col span={12}>
					      	<Form.Item label="移动电话">
					          {getFieldDecorator('mobilePhone', {
					            rules: [{
						              required: true,
						              message: '电话号码不能为空',
						            }],
					          })(
					            <Input placeholder="请输入电话号码" />
					          )}
					        </Form.Item>
					      </Col>
					      <Col span={12}>
					      	<Form.Item label="电子邮箱">
						          {getFieldDecorator('email', {
						            rules: [{
						              type: 'email', message: '请输入正确的邮箱地址',
						            }, {
						              required: true, message: '电子邮箱不能为空',
						            }],
						          })(
						            <Input placeholder="请输入电子邮箱" />
						          )}
					        </Form.Item>
					      </Col>
				        </Row>
					    <Row>
					      <Col span={12}>
					      	<Form.Item label="毕业院校">
					          {getFieldDecorator('school')(
					            <Input placeholder="" />
					          )}
					        </Form.Item>
					      </Col>
					      <Col span={12}>
					      	<Form.Item label="身份证">
						          {getFieldDecorator('idNo')(
						            <Input placeholder="" />
						          )}
					        </Form.Item>
					      </Col>
				        </Row>
					    <Row>
					    	<Col span={24}>
					    		<Form.Item label="上传简历" extra="注：可上传格式为html、htm、pdf、doc、docx、txt、xls、xlsx、mht的文件" >
						          {getFieldDecorator('upload', {
						          	rules: [{
						              required: true,
						              message: '请上传简历',
						            }],
						            valuePropName: 'fileList',
						            getValueFromEvent: this.normFile,
						          })(
						            <Upload name="logo" action="/upload.do" listType="text">
						              <Button className="upload_file"> 选择文件 </Button>
						            </Upload>
						          )}
						        </Form.Item>
					    	</Col>
					    </Row>
					    <Row>
					    	<Col span={24}>
					    		<Form.Item label="推荐理由">
						          {getFieldDecorator('applyLetter')(
						            <textarea style={{minWidth:"1000px",height:"110px",resize:"none"}} placeholder="请输入候选人的推荐理由"></textarea>
						          )}
					        	</Form.Item>
					    	</Col>
					    </Row>
					    <Row>
					    	<Col span={24}>
					    		<div className="block_btn-footer">
					    			<Button className="form_button-cancel">取消</Button>
					    			<Button type="primary" htmlType="submit" className="form_button-submit">立即推荐</Button>
					    		</div>
					    	</Col>
					    </Row>
			    	</Form>
				</div>
				<div className="block_body" style={{display:this.state.showTwo}}></div>
			</div>
		);
	}
}

QuicklyRecommend = Form.create({})(QuicklyRecommend);
export default QuicklyRecommend;