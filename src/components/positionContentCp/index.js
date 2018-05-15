import React, { Component } from "react";
import { Spin } from "antd";

import "./styles";

const positionContentCp = ({ positionListArr }) => {
    return (
        <div className="positioncp-content-box">
            <div className="position-content-list clearfix">
                <div className="left-box">
                    <a href="">
                        <p className="post-name">
                            {positionListArr.postName || "暂无"}
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
                            {positionListArr.workingTreatment || "暂无"}
                        </strong>
                        <div className="post-mes">
                            <span>{positionListArr.workPlace || "暂无"}</span>
                            <span>{positionListArr.orgName || "暂无"}</span>
                            <span>{positionListArr.education || "暂无"}</span>
                            <span>招聘{positionListArr.recruitNum || 0}人</span>
                        </div>
                    </div>
                    <div className="post-time">
                        <span className="release-time">
                            发布时间：{positionListArr.publishDate || "暂无"}
                        </span>
                        <span className="duty-time">
                            期望到岗时间：{positionListArr.expectEntryDate || "暂无"}
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
                            <span>{positionListArr.recruiterName || "暂无"}</span>
                            <span>招聘负责人</span>
                        </li>
                        <li className="tel">
                            {positionListArr.recruiterPhone || "暂无"}
                        </li>
                        <li className="mail">
                            {positionListArr.recruiterEmail || "暂无"}
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default positionContentCp;
