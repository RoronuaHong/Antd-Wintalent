import React from "react";
import { setNewHtml } from "../../utils/common";
import "./styles";

const PositionDetail = ({ positionListArr }) => {
    return(
        <React.Fragment>
            <div className="position-detail-box">
                <div className="meta">
                    工作职责
                </div>
                <div 
                    className="meta-tail"
                    dangerouslySetInnerHTML={ setNewHtml(positionListArr.workContent) }
                >
                    {/* <li>
                        { positionListArr.workContent }
                    </li> */}
                    {/* <li>1、负责游戏官方网站建设的各类应用的开发、运营；</li>
                    <li>2、负责在线活动、营销系统的开发、运营；</li>
                    <li>3、负责营销相关平台的开发。</li> */}
                </div>
                <div className="meta">
                    工作要求
                </div>
                <div 
                    className="meta-tail"
                    dangerouslySetInnerHTML={ setNewHtml(positionListArr.serviceCondition) }
                >
                    {/* <li>1、本科以上学历，计算机软件或相关专业；</li>
                    <li>2、3年及以上开发工作经验；</li>
                    <li>3、软件知识结构全面，基础扎实，精通常用数据结构与算法；</li>
                    <li>4、熟悉linux、UNIX等操作系统，了解Shell，能熟练使用Unix类系统下的PHP或C、C++进行编程；</li>
                    <li>5、熟悉MYSQL或其他大型数据库，能够快速根据需求完成高性能数据库设计，熟悉面向对象的开发方法，有网络系统的开发经验；</li>
                    <li>
                        6、熟悉HTML/JS等技术，具有互联网Web业务开发经验，有游戏、电商类开发经验优先；高度的责任心、良好的沟通技巧和团队合作精神，正直进取，有上进心，热爱开发事业。
                        良好的沟通技巧和团队合作精神熟悉HTML/JS等技术，具有互联网Web业务开发经验，有游戏、电商类开发经验优先；高度的责任心、良好的沟通技巧和团队合作精神，正直进取，有上进心，热爱开发事业。
                        良好的沟通技巧和团队合作精神熟悉HTML/JS等技术，具有互联网Web业务开发经验，有游戏、电商类开发经验优先；高度的责任心、良好的沟通技巧和团队合作精神，正直进取，有上进心，热爱开发事业。
                    </li> */}
                </div>
            </div>
            <div className="recommend-resume">推荐简历</div>
        </React.Fragment>
    )
}

export default PositionDetail;
