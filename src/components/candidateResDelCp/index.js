import React, { Component } from "react";
import StepComponents from "../StepComponents";

import "./styles";

const candidateResDelCp = ({ stepsArr, process }) => {
    return(
        <div className="candidate-res-del-box">
            <div className="personal-information">
                <div className="left-box">
                    <div className="person-imgbox">
                        <img src="" alt=""/>
                    </div>
                    <div className="person-info">
                        <p className="name">夏银玲</p>
                        <ul className="basic">
                            <li>男</li>
                            <li>28</li>
                            <li>3年工作经验</li>
                        </ul>
                        <ul className="basics">
                            <li>15000678868</li>
                            <li>378990000@qq.com</li>
                        </ul>
                    </div>
                </div>
                <div className="right-box">
                    <h1>大中华区销售总监-华南</h1>
                    <div className="step-box">
                        <StepComponents 
                            stepsArr={ stepsArr }
                            process={ process }
                        />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default candidateResDelCp;