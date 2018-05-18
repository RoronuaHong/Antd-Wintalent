import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Badge, Dropdown, Icon } from "antd";

class RightBox extends Component {
    state = {
        badgeShow: false
    }

    showBadge = (e) => {
        e.preventDefault();
        e.stopPropagation();
    }

    deleteBadge = (e) => {
        e.preventDefault();
        e.stopPropagation();
    }

    render() {
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
                            display: this.state.badgeShow ? "block" : "none"
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
            </div>
        );
    }
}

export default RightBox;