import React, { Component } from "react";
import { Spin } from "antd";

class positionContent extends Component {
    state = {
        hovers: false,
        isLoading: true
    }

    onMouseEnter = () => {
        this.setState({
            hovers: true
        });
    }

    onMouseLeave = () => {
        this.setState({
            hovers: false
        });
    }

    componentDidMount() {
        setTimeout(() => {
            this.setState({
                isLoading: false
            });
        }, 5000);
    }

    render() {
        return (
            <div className="position-content-box">
                {
                    this.state.isLoading ?
                        <Spin size="large" />
                        :
                        <div className="position-content-list clearfix">
                            <div className="left-box">
                                <a href="">
                                    <p className="post-name">
                                        Java资深开发工程师（供应链）
                                <i></i>
                                    </p>
                                </a>
                                <div className="post-detail clearfix">
                                    <strong className="salary">
                                        10K~15K
                            </strong>
                                    <div className="post-mes">
                                        <span>上海</span>
                                        <span>西威路易威斯布鲁科技有限公司</span>
                                        <span>本科</span>
                                        <span>招聘10人</span>
                                    </div>
                                </div>
                                <div className="post-time">
                                    <span className="release-time">
                                        发布时间：2018-12-20
                            </span>
                                    <span className="duty-time">
                                        期望到岗时间：2018-12-20
                            </span>
                                </div>
                            </div>
                            <ul className="center-box">
                                <li>
                                    <strong>90</strong>
                                    <span>已推荐</span>
                                </li>
                                <li>
                                    <strong>67</strong>
                                    <span>面试</span>
                                </li>
                                <li>
                                    <strong>23</strong>
                                    <span>offer</span>
                                </li>
                                <li>
                                    <strong>16</strong>
                                    <span>入职</span>
                                </li>
                            </ul>
                            <div className="right-box">
                                <ul className="bussiness-card">
                                    <li className="name">
                                        <span>赵美玲</span>
                                        <span>招聘负责人</span>
                                    </li>
                                    <li className="tel">
                                        18606977713
                                    </li>
                                    <li className="mail">
                                        7896325889wangjia@qq.com
                                    </li>
                                </ul>
                                <div
                                    className="recommend-resume"
                                    onMouseEnter={this.onMouseEnter}
                                    onMouseLeave={this.onMouseLeave}
                                >
                                    <span>
                                        <i
                                            style={{
                                                display: this.state.hovers ? "block" : "none"
                                            }}
                                        >
                                            推荐简历
                                        </i>
                                    </span>
                                </div>
                            </div>
                        </div>
                }
            </div>
        )
    }
}

export default positionContent;
