import React, { Component } from "react";
import { Spin } from "antd";

const positionContent = ({ isLoading, states, hovers, positionListArr, onMouseEnter, onMouseLeave }) => {
    return (
        <div className="position-content-box">
            {
                isLoading ?
                    <Spin 
                        size="large"
                        className="position-list-spin"
                    />
                    :
                    <React.Fragment>
                        {
                            positionListArr && positionListArr.map((item, index) => {
                                return(
                                    <div 
                                        className="position-content-list clearfix"
                                        key={ index }
                                    >
                                        <div className="left-box">
                                            <a href="">
                                                <p className="post-name">
                                                    { item.postName || "暂无" }
                                                    <i
                                                        style={{
                                                            display: "none"
                                                        }}
                                                    >
                                                    </i>
                                                </p>
                                            </a>
                                            <div className="post-detail clearfix">
                                                <strong className="salary">
                                                    { item.workingTreatment || "暂无" }
                                                </strong>
                                                <div className="post-mes">
                                                    <span>{ item.workPlace || "暂无" }</span>
                                                    <span>{ item.orgName || "暂无" }</span>
                                                    <span>{ item.education || "暂无" }</span>
                                                    <span>招聘{ item.recruitNum || 0 }人</span>
                                                </div>
                                            </div>
                                            <div className="post-time">
                                                <span className="release-time">
                                                    发布时间：{ item.publishDate || "暂无" }
                                                </span>
                                                <span className="duty-time">
                                                    期望到岗时间：{ item.expectEntryDate || "暂无" }
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
                                                    <span>{ item.recruiterName || "暂无" }</span>
                                                    <span>招聘负责人</span>
                                                </li>
                                                <li className="tel">
                                                    { item.recruiterPhone || "暂无" }
                                                </li>
                                                <li className="mail">
                                                    { item.recruiterEmail || "暂无" }
                                                </li>
                                            </ul>
                                            <div
                                                className="recommend-resume"
                                                onMouseEnter={ onMouseEnter }
                                                onMouseLeave={ onMouseLeave }
                                            >
                                                <span>
                                                    <i>
                                                        推荐简历
                                                    </i>
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                )
                            })
                        }
                    </React.Fragment>
            }
        </div>
    )
}

export default positionContent;
