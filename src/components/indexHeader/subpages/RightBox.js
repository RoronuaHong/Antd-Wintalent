import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Badge, Dropdown, Icon,Menu } from "antd";

class RightBox extends Component {
    state = {
        badgeShow: false,
        messageList:[
        	{
        		type:true,
        		title:"简历进展",
        		body:"您推荐的【赵美玲】已进入【候选人】环节啦！",
        		time:"2018-5-23 10:11"
        	},
        	{
        		type:true,
        		title:"新职位",
        		body:"您好！现有新的职位【产品经理】委托给您！",
        		time:"2018-5-23 10:11"
        	},
        	{
        		type:false,
        		title:"简历投递失败",
        		body:"职位【产品经理】投递失败！",
        		time:"2018-5-23 10:11"
        	}
        ]
    }

    showBadge = (e) => {
        e.preventDefault();
        e.stopPropagation();
        this.setState({
        	badgeShow:true
        });
    }
    hideBadge = (e) => {
        e.preventDefault();
        e.stopPropagation();
        this.setState({
        	badgeShow:false
        });
    }

    deleteBadge = (e) => {
        e.preventDefault();
        e.stopPropagation();
    }
    
    componentDidMount(){
    	
	}

    render() {
    	const menu = (
		  <Menu defaultSelectedKeys={["0"]}>
		    <Menu.Item key="0"> 全部 </Menu.Item>
		    <Menu.Item key="1"> 未读消息 </Menu.Item>
		    <Menu.Item key="3">已读消息</Menu.Item>
		  </Menu>
		);
		function chargeShowLink(flag){
			if(flag){
				return <div><span>标为已读</span></div>
			}else{
				return ""
			}
		}
        return(
            <div className="right-box">
                <div 
                    className="imgbox"
                    onClick={ this.showBadge }
                >
                    <img className="header-notify" src={this.props.headerNotify} alt="" />
                    <Badge
                        count={ 5 }
                        className="header-badge"
                    >
                    </Badge>
                    <ul 
                        className="show-badges-box"
                        style={{
                            display: "none"
                        }}
                    >
                        <li>
                            您推荐的【赵美玲】已进入【候选人】环节啦！
                            <span
                                onClick={ this.deleteBadge }
                            >
                            </span>
                        </li>
                        <li>
                            您推荐的【赵美玲】已进入【候选人】环节啦！
                            <span
                                onClick={ this.deleteBadge }
                            >
                            </span>
                        </li>
                    </ul>
                </div>
                <Dropdown 
                    overlay={ this.props.menu }
                    trigger={['click']}
                >
                    <span>
                        { 
                            this.props.getSubStringSum(this.props.getNames, 12)
                        }
                        <Icon type="down" />
                    </span>
                </Dropdown>
                <div className="block_message-right" style={{height:"100%",display: this.state.badgeShow ? "block" : "none"}}>
                	<div className="message_title">
                		<Dropdown overlay={menu} trigger={['click']}>
						      <span className="msg_title-text"><span>消息提醒</span> <Icon type="down" /></span>
						</Dropdown>
						<span style={{marginLeft:"170px"}}><Icon type="ellipsis" /></span>
						<span onClick={this.hideBadge}><Icon type="close" /></span>
                	</div>
                	<div className="message_body">
                		<ul>
                			{
	                			this.state.messageList.map(function(item, index){
	                				return (
                                        <li className="msg_list-item" key={ index }>
	                						<Badge status={item.type?"error":"default"} dot={true} />
	                						<b>{item.title}</b><span className="time-text">{item.time}</span><br/>
	                						<div className="msg-text">{item.body}</div>
	                						<div className="mark_readed">
	                							{chargeShowLink(item.type)}
	                						</div>
                						</li>
	                				)
	                			})
	                		}
                		</ul>
                	</div>
                </div>
            </div>
        );
    }
}

export default RightBox;