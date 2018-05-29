import React, { Component } from "react";
import ApplyEdit from "../../applyEdit";
import {Icon,Table , Pagination , Popover , Modal ,Button ,Input ,Spin ,message} from 'antd';
import {
    getResumeList,
    editApplyLetter,
    positionDetail,
    analyze
} from "../../../fetch/home/resolve";

import "../styles";

class AfterResolved extends Component {
	constructor(props) {
        super(props);

        // 设置 initial state
        this.state = {
        	resumeTitle: [{
			  title: '姓名',
			  dataIndex: 'userName',
			  render: (text, record, index) => {
			  	let str = record.canApply?"该简历已经完整适合投递！":"该简历不完整无法投递！";
			  	return <div>
			  			<span>{text}</span><div className="block_canApply">{str}</div>
			  		   </div>;
			  },
			}, {
			  title: '性别',
			  dataIndex: 'gender',
			}, {
			  title: '年龄',
			  dataIndex: 'age',
			  render: (text, record, index) => {
			  	return text+"岁";
			  },
			}, {
			  title: '简历完整度',
			  dataIndex: 'finish',
			  render: (text, record, index) => {
			  	let cnStr = "",enStr = "" ,cnStrClass="",enStrClass="";
	        	cnStr = text.split("-")[0]==="true"?"完整":"未完整";
	        	enStr = text.split("-")[1]==="true"?"完整":"未完整";
	        	cnStrClass = text.split("-")[0]==="true"?"":"not-finish";
	        	enStrClass = text.split("-")[1]==="true"?"":"not-finish";
			  	return  <span>
			  				<span>中文简历：</span>
			  				<span className={cnStrClass}>{cnStr}</span>
			  				<span className="en-resume">英文简历：</span>
			  				<span className={enStrClass}>{enStr}</span>
		  				</span>;
			  },
			}, {
			  title: '推荐理由',
			  dataIndex: 'applyLetter',
			  render: (text, record, index) => {
			  	let show = "inline" , showText = "none"
			  	let chargeFinish = record.finish.split("-");
			  	if(text==""){
			  		if(chargeFinish[0]==="false" || chargeFinish[1]==="false"){
				  		return  <span>
				  					<span className="grey_font">简历不完整,无法编辑</span>
				  					<span className="grey_font">|</span>
				  					<a className="finish_btn"><Icon type="file-text" /><span>立即完善</span></a>
				  				</span>
				  	}
			  	}
			  	return 	<span>
			  				<ApplyEdit text={text} resumeId={record.resumeId} subApply={(resumeId,text) => this.subApply(resumeId,text)}></ApplyEdit>
		  				</span>
			  },
			}],
			resumeList:[],
			rowCount:0,
            rowSize:10,
			pageCount:0,
			currentPage:1,
			confirmVisible:false,
			confirmVisibleEn:false,
			confirmText:"",
			cnUnfinish:[],
			enUnfinish:[],
			selectedRows:[],
			keyWord:"",
			loading:false
        };
		
    }
	paginationOpt = {
		showQuickJumper:true,
		defaultCurrent:1,
		total:100,
		onChange:(pageNumber)=>{
			this.setState({
				currentPage:pageNumber
			});
			this.resumeList(pageNumber,this.state.keyWord);
		}
	}
	rowSelection = {
		onChange: (selectedRowKeys, selectedRows) => {
		    this.setState(prevState =>({
		    	selectedRows:selectedRows
		    }));
		},
		getCheckboxProps: record => ({
		    disabled: record.name === 'Disabled User', // Column configuration not to be checked
		    name: record.name,
		}),
	}
	changeJumperPage = () => {
        const jumperDOM = document.querySelector(".ant-pagination-options-quick-jumper");

        //使用正则进行匹配
        jumperDOM && (jumperDOM.firstChild.data = "跳至");
        jumperDOM && (jumperDOM.lastChild.data = "页");
    }
	
	//立即推荐按钮
	submitResume = ()=>{
		let data = [];
		data = this.state.selectedRows
		let cnArr = [] , enArr = [];
		for(let i = 0;i<data.length;i++ ){
			if(data[i].finish.split("-")[0] === "false"){
				cnArr.push(data[i]);
			}
			if(data[i].finish.split("-")[1] === "false"){
				enArr.push(data[i]);
			}
		}
		if(cnArr.length > 0){
			this.setState({
		      confirmVisible: true
		    });
		}else if(enArr.length > 0){
			this.setState({
		      confirmVisibleEn: true
		    });
		}else{
			this.props.openDialog();
		}
		this.setState({
	      cnUnfinish:cnArr,
	      enUnfinish:enArr
	    });
	}
	//中文简历未完整-确认框-确认按钮
	confirmHandleOk = ()=>{
		let arr = [];
		arr = this.state.selectedRows;
		for(let j = 0;j<this.state.cnUnfinish.length;j++){
			arr.splice(arr.indexOf(this.state.cnUnfinish[j]),1);
		}
	    if(this.state.enUnfinish.length > 0){
			this.setState({
			  confirmVisible: false,
			  selectedRows:arr,
		      confirmVisibleEn: true
		    });
		}else{
			this.setState({
		      confirmVisible: false,
		      selectedRows:arr
		    },()=>{
		    	this.props.openDialog();
		    });
		}
	}
	//英文简历未完整-确认框-确认按钮
	confirmHandleOkEn = ()=>{
		let arr = [];
		arr = this.state.selectedRows;
		for(let j = 0;j<this.state.enUnfinish.length;j++){
			arr.splice(arr.indexOf(this.state.enUnfinish[j]),1);
		}
		this.setState({
	      confirmVisibleEn: false,
	      selectedRows:arr
	    },()=>{
	    	this.props.openDialog();
	    });
	}
	//中文简历未完整-确认框-取消按钮
	confirmHandleCancel = ()=>{
		this.setState({
	      confirmVisible: false
	    });
	}
	//英文简历未完整-确认框-取消按钮
	confirmHandleCancelEn = ()=>{
		this.setState({
	      confirmVisibleEn: false
	    });
	}
	
	//职位列表
	resumeList = (currentPage,keyWord)=>{
		this.setState({
			loading:true
		});
		const result = getResumeList({
			"resumeCondition.postId":this.props.postId,
			"resumeCondition.showType":0,
			"resumeCondition.keyWord":keyWord,
			"pageCondition.rowSize":this.state.rowSize,
			"pageCondition.currentPage":currentPage
		});
		result
        .then(response => response.json())
        .then(data => {
            let resumeArr = [] , rowData = data.data.rowList;
            for(let i = 0;i<rowData.length;i++){
            	let dom = {
            		userName:rowData[i].userName,
            		resumeId:rowData[i].resumeId,
            		gender:rowData[i].gender,
            		age:rowData[i].age,
            		email:rowData[i].email,
            		mobilePhone:rowData[i].mobilePhone,
            		addDate:rowData[i].addDate,
            		lanType:rowData[i].lanType,
            		isQuickResume:rowData[i].isQuickResume,
            		finish:rowData[i].cnResumeFinish+"-"+rowData[i].enResumeFinish,
            		applyLetter:rowData[i].applyLetter == null?"":rowData[i].applyLetter,
            		isQuickResume:rowData[i].isQuickResume,
            		finishPercentCh:rowData[i].finishPercentCh,
            		finishPercentEn:rowData[i].finishPercentEn,
            		canApply:rowData[i].canApply,
            		canUpdate:rowData[i].canUpdate
            	}
            	resumeArr.push(dom);
            }
            this.paginationOpt.total = data.data.rowCount;
            this.setState({
                resumeList:resumeArr,
                pageCount:data.data.pageCount,
                rowCount:data.data.rowCount,
                loading:false
            });
            this.changeJumperPage();
        });
	}
	tableEmpty=()=>{
		let emptyHtml = `<img src=""/><br/>
						 <p class="empty_text"><span>暂无简历,去“<a class="font_link">推荐新简历</a>”开始推荐吧!</span></p>
						`
		document.getElementsByClassName("ant-table-placeholder")[0].innerHTML = emptyHtml; 
	}
	
	getResolved=(id,type)=>{
		const result = getResumeList({resumeTempIds:id,postType:type});
		result.then(response => response.json())
        .then(data => {
        	if(data.state === 200){
        		return data.data;
        	}
        });
	}
	
	subApply(resumeId,text){
		const result = editApplyLetter({
			"letterCondition.postId":this.props.postId,
			"letterCondition.resumeId":resumeId,
			"letterCondition.applyLetter":text
		});
		result
        .then(response => response.json())
        .then(data => {
        	if(data.state === 200){
        		message.success(data.data, 10);
//      		this.resumeList(this.state.currentPage,this.state.keyword);
        	}else{
        		message.error('编辑失败',10);
        	}
        });
		
	}
	componentDidMount(){
		this.tableEmpty();
//		this.resumeList(1,"");
		const _this = this;
		let arr = this.props.dataArr;
		let data = [];
		for(let i = 0;i<arr.length;i++){
			data.push(_this.getResolved(arr[i]),"");
		}
		this.setState({
			resumeList:data
		});
	}
	
	render() {
		return (
			<div className="tab_inner">
	    		<div className="title_tip">
	    			<Icon type="exclamation-circle-o" style={{fontSize: 25, color: '#EC2222' }} />
	    			<span> 请先【完善好简历】【填写完评语】之后进行推荐哦~~</span>
	    		</div>
	    		<a className="recommend_btn" onClick={this.submitResume}>立刻推荐</a><br/>
	    		<Table loading={this.state.loading} rowKey="resumeId" pagination={this.paginationOpt} rowSelection={this.rowSelection} columns={this.state.resumeTitle} dataSource={this.state.resumeList} />
	    		<Modal title="提醒" wrapClassName="tab_dialog" width={500} visible={this.state.confirmVisible} onOk={this.confirmHandleOk} onCancel={this.confirmHandleCancel} okText="是,跳过" cancelText="否,去完善" >
		          <p>如下候选人中文简历未完整不能投递,是否确认直接跳过!</p>
		          <ul className="unfinish_name">
		          {
		          	this.state.cnUnfinish.map(function(item){
		          		return <li key={item.resumeId}>{item.userName}</li>
		          	})
		          }
		          </ul>
		        </Modal>
				<Modal title="提醒" wrapClassName="tab_dialog" visible={this.state.confirmVisibleEn} width={500} onOk={this.confirmHandleOkEn} onCancel={this.confirmHandleCancelEn} okText="是,跳过" cancelText="否,去完善" >
		          <p>如下候选人英文简历未完整不能投递,是否确认直接跳过!</p>
		          <ul className="unfinish_name">
		          {
		          	this.state.enUnfinish.map(function(item){
		          		return <li key={item.resumeId}>{item.userName}</li>
		          	})
		          }
		          </ul>
		        </Modal>
	    	</div>
		);
	}
}

export default AfterResolved;