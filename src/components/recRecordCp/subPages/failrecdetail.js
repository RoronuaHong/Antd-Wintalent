import React from "react";
import { Input, Timeline, Steps } from "antd";

const Step = Steps.Step;

const Recdetail = ({ timestamp, showMonth, stepsArr, process }) => {
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
                        timestamp.map((item, index) => (
                            <dl className="year-dl" key={index}>
                                <dt
                                    className={item.isChoose ? "yearsel" : ""}
                                    onClick={() => showMonth(item, index)}
                                >
                                    {item.year}
                                </dt>
                                <dd
                                    style={{
                                        display: item.isChoose ? "block" : "none"
                                    }}
                                >
                                    {
                                        item.month.map((items, index) => (
                                            <span key={index}>
                                                {items}
                                            </span>
                                        ))
                                    }
                                </dd>
                            </dl>
                        ))
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
                    <Timeline>
                        <Timeline.Item>
                            <span className="nowtime">2016-03-21</span>
                            <div className="detail-box clearfix">
                                <div className="process-box">
                                    <p className="title">
                                        <span className="name">王富贵</span>
                                        <span className="source">人才库</span>
                                        <span className="region">
                                            大中华区销售总监-华南
                                        </span>
                                        <span className="changed-time">
                                            环节变更时间：2016-12-30
                                        </span>
                                        <span className="odd-time">
                                            剩余保护期：300天
                                        </span>
                                    </p>
                                    <div className="step-box">
                                        <Steps
                                            progressDot
                                            current={process}
                                            size="small"
                                        >
                                            {steps}
                                        </Steps>
                                    </div>
                                </div>
                                <span className="showMessage">
                                    <strong>
                                        <i></i>
                                    </strong>
                                    <span className="text">
                                        13条反馈信息
                                    </span>
                                </span>
                            </div>
                            <div className="detail-box clearfix">
                                <div className="process-box">
                                    <p className="title">
                                        <span className="name">王富贵</span>
                                        <span className="source">人才库</span>
                                        <span className="region">
                                            大中华区销售总监-华南
                                        </span>
                                        <span className="changed-time">
                                            环节变更时间：2016-12-30
                                        </span>
                                        <span className="odd-time">
                                            剩余保护期：300天
                                        </span>
                                    </p>
                                    <div className="step-box">
                                        <Steps
                                            progressDot
                                            current={process}
                                            size="small"
                                        >
                                            {steps}
                                        </Steps>
                                    </div>
                                </div>
                                <span className="showMessage">
                                    <strong>
                                        <i></i>
                                    </strong>
                                    <span className="text">
                                        13条反馈信息
                                    </span>
                                </span>
                            </div>
                            <div className="detail-box clearfix">
                                <div className="process-box">
                                    <p className="title">
                                        <span className="name">王富贵</span>
                                        <span className="source">人才库</span>
                                        <span className="region">
                                            大中华区销售总监-华南
                                        </span>
                                        <span className="changed-time">
                                            环节变更时间：2016-12-30
                                        </span>
                                        <span className="odd-time">
                                            剩余保护期：300天
                                        </span>
                                    </p>
                                    <div className="step-box">
                                        <Steps
                                            progressDot
                                            current={process}
                                            size="small"
                                        >
                                            {steps}
                                        </Steps>
                                    </div>
                                </div>
                                <span className="showMessage">
                                    <strong>
                                        <i></i>
                                    </strong>
                                    <span className="text">
                                        13条反馈信息
                                    </span>
                                </span>
                            </div>
                            <div className="detail-box clearfix">
                                <div className="process-box">
                                    <p className="title">
                                        <span className="name">王富贵</span>
                                        <span className="source">人才库</span>
                                        <span className="region">
                                            大中华区销售总监-华南
                                        </span>
                                        <span className="changed-time">
                                            环节变更时间：2016-12-30
                                        </span>
                                        <span className="odd-time">
                                            剩余保护期：300天
                                        </span>
                                    </p>
                                    <div className="step-box">
                                        <Steps
                                            progressDot
                                            current={process}
                                            size="small"
                                        >
                                            {steps}
                                        </Steps>
                                    </div>
                                </div>
                                <span className="showMessage">
                                    <strong>
                                        <i></i>
                                    </strong>
                                    <span className="text">
                                        13条反馈信息
                                    </span>
                                </span>
                            </div>
                            <div className="detail-box clearfix">
                                <div className="process-box">
                                    <p className="title">
                                        <span className="name">王富贵</span>
                                        <span className="source">人才库</span>
                                        <span className="region">
                                            大中华区销售总监-华南
                                        </span>
                                        <span className="changed-time">
                                            环节变更时间：2016-12-30
                                        </span>
                                        <span className="odd-time">
                                            剩余保护期：300天
                                        </span>
                                    </p>
                                    <div className="step-box">
                                        <Steps
                                            progressDot
                                            current={process}
                                            size="small"
                                        >
                                            {steps}
                                        </Steps>
                                    </div>
                                </div>
                                <span className="showMessage">
                                    <strong>
                                        <i></i>
                                    </strong>
                                    <span className="text">
                                        13条反馈信息
                                    </span>
                                </span>
                            </div>
                        </Timeline.Item>
                        <Timeline.Item>
                            <span className="nowtime">2016-03-23</span>
                            <div className="detail-box clearfix">
                                <div className="process-box">
                                    <p className="title">
                                        <span className="name">王富贵</span>
                                        <span className="source">人才库</span>
                                        <span className="region">
                                            大中华区销售总监-华南
                                        </span>
                                        <span className="changed-time">
                                            环节变更时间：2016-12-30
                                        </span>
                                        <span className="odd-time">
                                            剩余保护期：300天
                                        </span>
                                    </p>
                                    <div className="step-box">
                                        <Steps
                                            progressDot
                                            current={process}
                                            size="small"
                                        >
                                            {steps}
                                        </Steps>
                                    </div>
                                </div>
                                <span className="showMessage">
                                    <strong>
                                        <i></i>
                                    </strong>
                                    <span className="text">
                                        13条反馈信息
                                    </span>
                                </span>
                            </div>
                        </Timeline.Item>
                        <Timeline.Item>
                            <span className="nowtime">2016-03-24</span>
                            <div className="detail-box clearfix">
                                <div className="process-box">
                                    <p className="title">
                                        <span className="name">王富贵</span>
                                        <span className="source">人才库</span>
                                        <span className="region">
                                            大中华区销售总监-华南
                                        </span>
                                        <span className="changed-time">
                                            环节变更时间：2016-12-30
                                        </span>
                                        <span className="odd-time">
                                            剩余保护期：300天
                                        </span>
                                    </p>
                                    <div className="step-box">
                                        <Steps
                                            progressDot
                                            current={process}
                                            size="small"
                                        >
                                            {steps}
                                        </Steps>
                                    </div>
                                </div>
                                <span className="showMessage">
                                    <strong>
                                        <i></i>
                                    </strong>
                                    <span className="text">
                                        13条反馈信息
                                    </span>
                                </span>
                            </div>
                        </Timeline.Item>
                        <Timeline.Item>
                            <span className="nowtime">2016-03-25</span>
                            <div className="detail-box clearfix">
                                <div className="process-box">
                                    <p className="title">
                                        <span className="name">王富贵</span>
                                        <span className="source">人才库</span>
                                        <span className="region">
                                            大中华区销售总监-华南
                                        </span>
                                        <span className="changed-time">
                                            环节变更时间：2016-12-30
                                        </span>
                                        <span className="odd-time">
                                            剩余保护期：300天
                                        </span>
                                    </p>
                                    <div className="step-box">
                                        <Steps
                                            progressDot
                                            current={process}
                                            size="small"
                                        >
                                            {steps}
                                        </Steps>
                                    </div>
                                </div>
                                <span className="showMessage">
                                    <strong>
                                        <i></i>
                                    </strong>
                                    <span className="text">
                                        13条反馈信息
                                    </span>
                                </span>
                            </div>
                        </Timeline.Item>
                    </Timeline>
                </div>
            </div>
        </React.Fragment>
    )
}

export default Recdetail;