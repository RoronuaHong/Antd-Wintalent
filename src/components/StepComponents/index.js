import React from "react";
import { Steps } from "antd";

import "./styles";

const Step = Steps.Step;

const StepComponent = ({ stepsArr, process }) => {
    const steps = stepsArr.map((s, i) => {
        return (
            <Step
                key={i}
                title={s.title}
                description={s.description}
            />
        )
    });

    return(
        <React.Fragment>
            <Steps
                progressDot
                current={ process }
                size="small"
            >
                { steps }
            </Steps>
        </React.Fragment>
    )
}

export default StepComponent;