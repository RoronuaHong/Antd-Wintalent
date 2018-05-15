import React from "react";
import { Pagination } from 'antd';

import "./styles";

const IndexFooter = ({ states, positionResultAjax }) => {
    const onChanges = pageNumber => {
        positionResultAjax(
            states.postionTabIndex,
            states.keyWord,
            states.positionName,
            states.workPlace,
            states.positionType,
            states.workType,
            states.releaseTimeCode,
            states.salaryType,
            states.orgCode,
            states.rowSize,
            pageNumber
        );
    },
    totals = typeof states.totalData == "number" ? states.totalData : 100;

    return(
        <div className="index-footer-box">
            <div className="inner-box">
                <Pagination 
                    showQuickJumper
                    hideOnSinglePage={ true }
                    total={ totals } 
                    onChange={ onChanges }
                />
                <span
                    className="certainJump"
                    onClick={ () => onChanges(2) }
                >
                    确认
                </span>
            </div>
        </div>
    )
}

export default IndexFooter;
