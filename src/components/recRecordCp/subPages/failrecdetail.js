import React from "react";
import { Input, Timeline, Steps } from "antd";

const Step = Steps.Step;

const Failrecdetail = ({ timestamp, showMonth, stepsArr, process }) => {
    const steps = stepsArr.map((s, i) => {
        return (
            <Step
                key={i}
                title={s.title}
                description={s.description}
            />
        )
    });

    return (
        <React.Fragment>
            <div className="meta-box clearfix">
                <div className="left-box">
                    {
                        timestamp.map((item, index) => {
                            const monthLen = item.month.length * 40 + "px";

                            return(
                                <dl className="year-dl" key={index}>
                                    <dt
                                        className={item.isChoose ? "yearsel" : ""}
                                        onClick={() => showMonth(item, index, "failtimestamp")}
                                    >
                                        {item.year}
                                    </dt>
                                    <dd
                                        style={{
                                            maxHeight: item.isChoose ? monthLen : ""
                                        }}
                                    >
                                        {
                                            item.month.map((items, index) => (
                                                <span 
                                                    key={index}
                                                >
                                                    {items}
                                                </span>
                                            ))
                                        }
                                    </dd>
                                </dl>
                            )
                        })
                    }
                </div>
                <div className="right-box clearfix">
                    <div className="title-box clearfix">
                        <span className="total-record">共234条记录</span>
                        <Input.Search
                            placeholder="输入姓名"
                            onSearch={value => console.log(value)}
                            style={{
                                float: "right",
                                width: 275,
                                border: "1px solid #d9d9d9"
                            }}
                        />
                    </div>
                    <div className="failmessage-box">
                        <Timeline pending=" ">
                            <Timeline.Item>
                                <span className="nowtime">2016-03-21</span>
                                <div className="fail-li clearfix">
                                    <div className="leftfail-box">
                                        <div className="fail-name">王富贵</div>
                                        <div className="portrait-detail">
                                            2006/09--2010/06
                                        </div>
                                        <div className="portrait-detail">
                                            利洁时集团  |  财务总监
                                        </div>
                                    </div>
                                    <div className="rightfail-box">
                                        <div className="big-title clearfix">
                                            大中华区销售总监-华南
                                            <span>疑似重复等待确认</span>
                                        </div>
                                        <div className="big-detail">
                                            <div className="evaluate">评</div>
                                            <div className="mes">
                                                工作认真刻苦，服务态度非常好，使经理在XXXXX得时候没有后顾之忧;工作踊跃，热心周到，有肯定得领导能力，专业技能业务程度优秀，业务程度也在不断提高，关心每一位合鑫人，是我们大家学习得榜样;能胜任本职
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="fail-li clearfix">
                                    <div className="leftfail-box">
                                        <div className="fail-name">王富贵</div>
                                        <div className="portrait-detail">
                                            2006/09--2010/06
                                        </div>
                                        <div className="portrait-detail">
                                            利洁时集团  |  财务总监
                                        </div>
                                    </div>
                                    <div className="rightfail-box">
                                        <div className="big-title clearfix">
                                            大中华区销售总监-华南
                                            <span>疑似重复等待确认</span>
                                        </div>
                                        <div className="big-detail">
                                            <div className="evaluate">评</div>
                                            <div className="mes">
                                                工作认真刻苦，服务态度非常好，使经理在XXXXX得时候没有后顾之忧;工作踊跃，热心周到，有肯定得领导能力，专业技能业务程度优秀，业务程度也在不断提高，关心每一位合鑫人，是我们大家学习得榜样;能胜任本职
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="fail-li clearfix">
                                    <div className="leftfail-box">
                                        <div className="fail-name">王富贵</div>
                                        <div className="portrait-detail">
                                            2006/09--2010/06
                                        </div>
                                        <div className="portrait-detail">
                                            利洁时集团  |  财务总监
                                        </div>
                                    </div>
                                    <div className="rightfail-box">
                                        <div className="big-title clearfix">
                                            大中华区销售总监-华南
                                            <span>疑似重复等待确认</span>
                                        </div>
                                        <div className="big-detail">
                                            <div className="evaluate">评</div>
                                            <div className="mes">
                                                工作认真刻苦，服务态度非常好，使经理在XXXXX得时候没有后顾之忧;工作踊跃，热心周到，有肯定得领导能力，专业技能业务程度优秀，业务程度也在不断提高，关心每一位合鑫人，是我们大家学习得榜样;能胜任本职
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </Timeline.Item>
                            <Timeline.Item>
                                <span className="nowtime">2016-03-21</span>
                                <div className="fail-li clearfix">
                                    <div className="leftfail-box">
                                        <div className="fail-name">王富贵</div>
                                        <div className="portrait-detail">
                                            2006/09--2010/06
                                        </div>
                                        <div className="portrait-detail">
                                            利洁时集团  |  财务总监
                                        </div>
                                    </div>
                                    <div className="rightfail-box">
                                        <div className="big-title clearfix">
                                            大中华区销售总监-华南
                                            <span>疑似重复等待确认</span>
                                        </div>
                                        <div className="big-detail">
                                            <div className="evaluate">评</div>
                                            <div className="mes">
                                                工作认真刻苦，服务态度非常好，使经理在XXXXX得时候没有后顾之忧;工作踊跃，热心周到，有肯定得领导能力，专业技能业务程度优秀，业务程度也在不断提高，关心每一位合鑫人，是我们大家学习得榜样;能胜任本职
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="fail-li clearfix">
                                    <div className="leftfail-box">
                                        <div className="fail-name">王富贵</div>
                                        <div className="portrait-detail">
                                            2006/09--2010/06
                                        </div>
                                        <div className="portrait-detail">
                                            利洁时集团  |  财务总监
                                        </div>
                                    </div>
                                    <div className="rightfail-box">
                                        <div className="big-title clearfix">
                                            大中华区销售总监-华南
                                            <span>疑似重复等待确认</span>
                                        </div>
                                        <div className="big-detail">
                                            <div className="evaluate">评</div>
                                            <div className="mes">
                                                工作认真刻苦，服务态度非常好，使经理在XXXXX得时候没有后顾之忧;工作踊跃，热心周到，有肯定得领导能力，专业技能业务程度优秀，业务程度也在不断提高，关心每一位合鑫人，是我们大家学习得榜样;能胜任本职
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="fail-li clearfix">
                                    <div className="leftfail-box">
                                        <div className="fail-name">王富贵</div>
                                        <div className="portrait-detail">
                                            2006/09--2010/06
                                        </div>
                                        <div className="portrait-detail">
                                            利洁时集团  |  财务总监
                                        </div>
                                    </div>
                                    <div className="rightfail-box">
                                        <div className="big-title clearfix">
                                            大中华区销售总监-华南
                                            <span>疑似重复等待确认</span>
                                        </div>
                                        <div className="big-detail">
                                            <div className="evaluate">评</div>
                                            <div className="mes">
                                                工作认真刻苦，服务态度非常好，使经理在XXXXX得时候没有后顾之忧;工作踊跃，热心周到，有肯定得领导能力，专业技能业务程度优秀，业务程度也在不断提高，关心每一位合鑫人，是我们大家学习得榜样;能胜任本职
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </Timeline.Item>
                        </Timeline>
                    </div>
                </div>
            </div>
        </React.Fragment>
    )
}

export default Failrecdetail;