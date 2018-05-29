import React from "react";
import { setNewHtml } from "../../utils/common";
import "./styles";

const PositionDetail = ({ positionListArr, openLink, id, showBtn="block" }) => {
    const handleLink = () => {
        openLink("/resolve", id);
    }

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
                </div>
                <div className="meta">
                    工作要求
                </div>
                <div 
                    className="meta-tail"
                    dangerouslySetInnerHTML={ setNewHtml(positionListArr.serviceCondition) }
                >
                </div>
                <div
                    className="positiondetail-rec-box"
                    style={{
                        'display': showBtn
                    }}
                >
                </div>
                <div
                    className="positiondetail-recommend-resume"
                    onClick={ handleLink }
                    style={{
                        'display': showBtn
                    }}
                >
                    推荐简历
                </div>
            </div>
        </React.Fragment>
    )
}

export default PositionDetail;
