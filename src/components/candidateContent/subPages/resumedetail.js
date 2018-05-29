import React from "react";
import { Timeline } from 'antd';
import HrReplyCp from "../../HrReplyCp";

import Info from "../../../images/icons/personal_info_icon.png";
import Eval from "../../../images/icons/personal_evalution_icon.png";
import Work from "../../../images/icons/personal_work_icon.png";
import Expe from "../../../images/icons/personal_experience_icon.png";
import Educ from "../../../images/icons/perosonal_education_icon.png";
import Train from "../../../images/icons/personal_train_icon.png";
import Lang from "../../../images/icons/personal_language_icon.png";
import Addi from "../../../images/icons/personnal_addition_icon.png";

const Resumedetail = ({ 
    messageNum, 
    showReplyBox, 
    handleReplyBox,
    showCon,
    handleCon
}) => {
    return(
        <div className="resumedetail-box">
            <div className="resume-list">
                <h2>
                    <img src={ Info } alt=""/>个人信息
                </h2>
                <ul className="content-ul clearfix">
                    <li>
                        <span className="tit">基本信息：</span>
                        <span className="con">
                            男 | 已婚 | 32 | 广州 | 本科 | 6年
                        </span>
                    </li>
                    <li>
                        <span className="tit">电子邮箱：</span>
                        <span className="con">
                            huangpingping@dayee.com
                        </span>
                    </li>
                    <li>
                        <span className="tit">最高学历：</span>
                        <span className="con">
                            本科
                        </span>
                    </li>
                    <li>
                        <span className="tit">毕业时间：</span>
                        <span className="con">
                            2014-09
                        </span>
                    </li>
                    <li>
                        <span className="tit">毕业院校：</span>
                        <span className="con">
                            福建集美大学
                        </span>
                    </li>
                    <li>
                        <span className="tit">专业：</span>
                        <span className="con">
                            软件工程
                        </span>
                    </li>
                </ul>
            </div>
            <div className="resume-list">
                <h2>
                    <img src={ Eval } alt="" />自我评价
                </h2>
                <div className="evalution-con">
                    <p>1. 多年大型项目管理经验,持有PMP</p>
                    <p>2. 工作负责，责任心强</p>
                </div>
            </div>
            <div className="resume-list">
                <h2>
                    <img src={Work} alt="" />求职意向
                </h2>
                <ul className="content-ul clearfix">
                    <li>
                        <span className="tit">到岗时间：</span>
                        <span className="con">
                            1个月内
                        </span>
                    </li>
                    <li>
                        <span className="tit">期望工作性质：</span>
                        <span className="con">
                            全职
                        </span>
                    </li>
                    <li>
                        <span className="tit">当前职能：</span>
                        <span className="con">
                            项目经理(代项目总监)
                        </span>
                    </li>
                    <li>
                        <span className="tit">期望工作地点：</span>
                        <span className="con">
                            广东省-广州市
                        </span>
                    </li>
                    <li>
                        <span className="tit">当前行业：</span>
                        <span className="con">
                            互联网/电子商务
                        </span>
                    </li>
                    <li>
                        <span className="tit">期望职能：</span>
                        <span className="con">
                            计算机/互联网/通信/电子-IT-品管
                        </span>
                    </li>
                    <li>
                        <span className="tit">目前薪酬：</span>
                        <span className="con">
                            14 万元 (包含基本工资、补贴、奖金、股权收益等)
                        </span>
                    </li>
                    <li>
                        <span className="tit">期望薪酬：</span>
                        <span className="con">
                            15000-19999元/月
                        </span>
                    </li>
                </ul>
            </div>
            <div className="resume-list">
                <h2>
                    <img src={Expe} alt="" />工作经历
                </h2>
                <div className="time-expe-con">
                    <Timeline pending=" ">
                        <Timeline.Item>
                            <ul className="time-ul">
                                <li>
                                    2016-02-08  ~  2017-02-08  
                                </li>
                                <li>
                                    凯信壹立
                                </li>
                                <li>
                                    研发部
                                </li>
                                <li>
                                    项目经理(代项目总监)
                                </li>
                                <li>
                                    4年
                                </li>
                            </ul>
                            <div className="time-con clearfix">
                                <span className="description">工作描述：</span>
                                <ul className="des-con">
                                    <li>1. 负责制定公司新媒体及互联网整个产品\项目流程规范,包括需求调研、产品\项目立项、变更、收尾总结、沟通管理。</li>
                                    <li>2. 负责新媒体及互联网部包括产品、设计、前后端开发、测试资源(主要是人力及环境)的协调及管理.</li>
                                </ul>
                            </div>
                        </Timeline.Item>
                        <Timeline.Item>
                            <ul className="time-ul">
                                <li>
                                    2016-02-08  ~  2017-02-08
                                </li>
                                <li>
                                    凯信壹立
                                </li>
                                <li>
                                    研发部
                                </li>
                                <li>
                                    项目经理(代项目总监)
                                </li>
                                <li>
                                    4年
                                </li>
                            </ul>
                            <div className="time-con clearfix">
                                <span className="description">工作描述：</span>
                                <ul className="des-con">
                                    <li>1. 负责制定公司新媒体及互联网整个产品\项目流程规范,包括需求调研、产品\项目立项、变更、收尾总结、沟通管理。</li>
                                    <li>2. 负责新媒体及互联网部包括产品、设计、前后端开发、测试资源(主要是人力及环境)的协调及管理.</li>
                                </ul>
                            </div>
                        </Timeline.Item>
                        <Timeline.Item>
                            <ul className="time-ul">
                                <li>
                                    2016-02-08  ~  2017-02-08
                                </li>
                                <li>
                                    凯信壹立
                                </li>
                                <li>
                                    研发部
                                </li>
                                <li>
                                    项目经理(代项目总监)
                                </li>
                                <li>
                                    4年
                                </li>
                            </ul>
                            <div className="time-con clearfix">
                                <span className="description">工作描述：</span>
                                <ul className="des-con">
                                    <li>1. 负责制定公司新媒体及互联网整个产品\项目流程规范,包括需求调研、产品\项目立项、变更、收尾总结、沟通管理。</li>
                                    <li>2. 负责新媒体及互联网部包括产品、设计、前后端开发、测试资源(主要是人力及环境)的协调及管理.</li>
                                </ul>
                            </div>
                        </Timeline.Item>
                    </Timeline>
                </div>
            </div>
            <div className="resume-list">
                <h2>
                    <img src={ Expe } alt=""/>教育经历
                </h2>
                <div className="time-expe-con">
                    <Timeline pending=" ">
                        <Timeline.Item>
                            <ul className="time-ul">
                                <li>
                                    2016-02-08  ~  2017-02-08
                                </li>
                                <li>
                                    凯信壹立
                                </li>
                                <li>
                                    研发部
                                </li>
                                <li>
                                    项目经理(代项目总监)
                                </li>
                                <li>
                                    4年
                                </li>
                            </ul>
                            <div className="time-con clearfix">
                                <span className="description">工作描述：</span>
                                <ul className="des-con">
                                    <li>1. 负责制定公司新媒体及互联网整个产品\项目流程规范,包括需求调研、产品\项目立项、变更、收尾总结、沟通管理。</li>
                                    <li>2. 负责新媒体及互联网部包括产品、设计、前后端开发、测试资源(主要是人力及环境)的协调及管理.</li>
                                </ul>
                            </div>
                        </Timeline.Item>
                    </Timeline>
                </div>
            </div>
            <div className="resume-list">
                <h2>
                    <img src={Educ} alt="" />项目经验
                </h2>
                <div className="time-expe-con">
                    <Timeline pending=" ">
                        <Timeline.Item>
                            <ul className="time-ul">
                                <li>
                                    2016-02-08  ~  2017-02-08
                                    </li>
                                <li>
                                    凯信壹立
                                    </li>
                                <li>
                                    研发部
                                    </li>
                                <li>
                                    项目经理(代项目总监)
                                    </li>
                                <li>
                                    4年
                                    </li>
                            </ul>
                            <div className="time-con clearfix">
                                <span className="description">工作描述：</span>
                                <ul className="des-con">
                                    <li>1. 负责制定公司新媒体及互联网整个产品\项目流程规范,包括需求调研、产品\项目立项、变更、收尾总结、沟通管理。</li>
                                    <li>2. 负责新媒体及互联网部包括产品、设计、前后端开发、测试资源(主要是人力及环境)的协调及管理.</li>
                                </ul>
                            </div>
                        </Timeline.Item>
                    </Timeline>
                </div>
            </div>
            <div className="resume-list">
                <h2>
                    <img src={Train} alt="" />培训经验
                </h2>
                <div className="time-expe-con">
                    <Timeline pending=" ">
                        <Timeline.Item>
                            <ul className="time-ul">
                                <li>
                                    2016-02-08  ~  2017-02-08
                                    </li>
                                <li>
                                    凯信壹立
                                    </li>
                                <li>
                                    研发部
                                    </li>
                                <li>
                                    项目经理(代项目总监)
                                    </li>
                                <li>
                                    4年
                                    </li>
                            </ul>
                            <div className="time-con clearfix">
                                <span className="description">工作描述：</span>
                                <ul className="des-con">
                                    <li>1. 负责制定公司新媒体及互联网整个产品\项目流程规范,包括需求调研、产品\项目立项、变更、收尾总结、沟通管理。</li>
                                    <li>2. 负责新媒体及互联网部包括产品、设计、前后端开发、测试资源(主要是人力及环境)的协调及管理.</li>
                                </ul>
                            </div>
                        </Timeline.Item>
                    </Timeline>
                </div>
            </div>
            <div className="resume-list">
                <h2>
                    <img src={Lang} alt="" />语言能力
                </h2>
                <ul className="content-ul clearfix">
                    <li>
                        <span className="tit">语种：</span>
                        <span className="con">
                            英语
                        </span>
                    </li>
                    <li>
                        <span className="tit">听说读写：</span>
                        <span className="con">
                            熟练
                        </span>
                    </li>
                </ul>
            </div>
            <div className="resume-list">
                <h2>
                    <img src={ Addi } alt="" />附加
                </h2>
                <div className="addition-box">
                    <h3>附加信息（1）</h3>
                    <ul className="add-con">
                        <li>
                            <span className="add-tit">语种：</span>
                            <span className="add-sub">技能特长</span>
                        </li>
                        <li>
                            <span className="add-tit">信息内容：</span>
                            <span className="add-sub">包括IT技能、语言能力、证书、成绩、培训经历</span>
                        </li>
                    </ul>
                    <h3>附加信息（2）</h3>
                    <ul className="add-con">
                        <li>
                            <span className="add-tit">语种：</span>
                            <span className="add-sub">技能特长</span>
                        </li>
                    </ul>
                </div>
            </div>
            <HrReplyCp 
                messageNum={ messageNum }
                showReplyBox={ showReplyBox }
                handleReplyBox={ handleReplyBox }
                showCon={ showCon }
                handleCon={ handleCon }
            />
        </div>
    )
}

export default Resumedetail;