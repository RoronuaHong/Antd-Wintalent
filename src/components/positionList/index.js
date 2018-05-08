import React from "react";
import PositionTitle from "./subpages/positionTitle";
import PositionContent from "./subpages/positionContent";

import "./styles";

const PositionList = () => (
    <div className="position-list-box">
        <div className="list-line"></div>
        <PositionTitle>
            <PositionContent 
                name="一一一"
                content="11111"
            />
            <PositionContent 
                name="二二二二"
                content="22222"
            />
            <PositionContent 
                name="三三三三三"
                content="33333"
            />
        </PositionTitle>
    </div>
);

export default PositionList;
