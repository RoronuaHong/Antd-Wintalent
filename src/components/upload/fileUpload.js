import React, { Component } from "react";
import FileItem from "./subpages/fileItem";
import { Icon,Progress,Button,Modal  } from 'antd';
import { upload,analyze } from "../../fetch/home/resolve";

import "./styles";

class FileUpload extends Component {
	constructor(props) {
        super(props);
		this.state = {
			fileList:[],
			startUpload:false,
			resolveReportAll:false,
			resolveFailList:[],
			resolveSuccessList:[],
        	resolveNot:[]
		}
    }
	dragover = (e)=>{
		e.preventDefault();
	}
	drop = (e)=>{
		e.preventDefault();
//		let types = ["html","pdf","doc","txt","xls","zip","rar","jpg","png","jpeg"];
		let f=e.dataTransfer.files;
		let arr = this.state.fileList;
		for(let i = 0;i<f.length;i++){
//			let type = f[i].type.split("/")[1];
//			if(types.indexOf(type)!=-1){
				arr.push(f[i]);
//			}
		}
		this.setState({
			fileList:arr
		})
	}
	//选择单个文件
	addOneFile=(e)=>{
//		let types = ["html","pdf","doc","txt","xls","zip","rar","jpg","png","jpeg"];
		let f=e.currentTarget.files[0];
		let arr = this.state.fileList;
//		if(types.indexOf(f.type.split("/")[1])!=-1){
			arr.push(f);
//		}
		this.setState({
			fileList:arr
		})
	}
	chooseFile=()=>{
		let btn = document.getElementById("fileChoose");
		btn.click();
	}
	//确定按钮
	submitFile=()=>{
		let _this = this;
		this.setState({
			startUpload:true
		},()=>{
			_this.setState({
				startUpload:false
			});
		})
	}
	chargeLength=()=>{
		const _this = this;
		let len = this.state.resolveFailList.length + this.state.resolveSuccessList.length + this.state.resolveNot.length;
		if(len === this.state.fileList.length){
			this.setState({
				resolveReportAll:true
			},()=>{
				_this.props.sendResume(_this.state.resolveSuccessList);
			});
		}
	}
	finish=(id,name)=>{
		const _this = this;
		let arr = this.state.resolveSuccessList;
		arr.push(name);
		this.setState({
			resolveSuccessList:arr
		},()=>{
			this.chargeLength();
		});
	}
	fail=(name)=>{
		const _this = this;
		let arr = this.state.resolveFailList;
		arr.push(name);
		this.setState({
			resolveFailList:arr
		},()=>{
			this.chargeLength();
		});
	}
	
	resolveReportAllOk = ()=>{
		this.setState({
			resolveReportAll:false
		});
	}
	resolveReportAllCancel = ()=>{
		this.setState({
			resolveReportAll:false
		});
	}
	
	close(index){
		let data = this.state.fileList;
		data.splice(index,1);
		this.setState({
			fileList:data
		});
	}
	
	
	render() {
		const _this = this;
		return (
			<div>
				<div className="block_fileinput" onDragOver={this.dragover} onDrop={this.drop}>
	    			<span tabIndex="0" className="upload" role="button">
		    			<input id="fileChoose" type="file" onChange={this.addOneFile} accept="html,pdf,doc,txt,xls,zip,rar,jpg,png,jpeg" style={{display: "none"}} />
		    			<div className="upload-drag-container">
			    			<p className="upload_text">将简历文件拖入这里或</p>
			    			<div className="upload_btn" onClick={this.chooseFile}>
				    			<Icon type="cloud-upload-o" />
				    			<span>选择简历</span>
			    			</div>
			    			<p>可以上传一份或多份html、pdf、doc、txt、xls、zip、rar、jpg、png等格式文件解析后继续填写</p>
			    			<p style={{marginTop: "10px",color:"#EA0F0F"}}>单个文件大小不超过5M</p>
		    			</div>
	    			</span>
	    		</div>
	    		{
	    			this.state.fileList.map(function(item,index){
	    				return <FileItem files={item} index={index} key={'key'+index} start={_this.state.startUpload} close={(index)=>{_this.close(index)}} finish={(id,name)=>{_this.finish(id,name)}} fail={(name)=>{_this.fail(name)}}></FileItem>
	    			})
	    		}
	    		<div className="block_btn-footer" style={{marginTop:"80px"}}>
	    			<Button className="form_button-cancel">取消</Button>
	    			<Button type="primary" className="form_button-submit" onClick={this.submitFile}>确定</Button>
	    		</div>
	    		<Modal title="解析报告" wrapClassName="tab_dialog" width={500} visible={this.state.resolveReportAll} onOk={this.resolveReportAllOk} onCancel={this.resolveReportAllCancel} okText="确定" cancelText="取消" >
		          <div style={{ paddingBottom: "50px" }}>
		          	<div className="resolve-success">
		          		<Icon type="check" style={{ fontSize: 18, color: '#1EC2A6',verticalAlign: "middle" }} />&nbsp;&nbsp;
		          		<span style={{ verticalAlign: "middle" }}>
		          			解析成功{this.state.resolveSuccessList.length}个：
		          			{	
					          	this.state.resolveSuccessList.map(function(item,index){
					          		if(index===(_this.state.resolveSuccessList.length-1)){
					          			return `${item}`;
					          		}else{
					          			return `${item}、`;
					          		}
						      	})
					        }
		          		</span>
		          	</div><br/>
		          	<div className="resolve-fail">
		          		<span>
		          			解析失败{this.state.resolveFailList.length}个
		          		</span>
		          	</div>
		          	<div className="resolve-not">
		          		<span>
		          			不是简历{this.state.resolveNot.length}个
		          		</span>
		          	</div>
	          	  </div>
		        </Modal>
	    	</div>
		);
	}
}

export default FileUpload;