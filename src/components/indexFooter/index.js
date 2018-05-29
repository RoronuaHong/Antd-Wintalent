import React from "react";
import { Pagination } from 'antd';

import "./styles";

const IndexFooter = ({ states, positionResultAjax, isLoading, positionListArr }) => {
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
        <div 
            className="index-footer-box"
            style={{
                display: !isLoading && positionListArr.length > 0 ? "block" : "none"
            }}
        >
            <div className="inner-box">
                <Pagination 
                    showQuickJumper
                    defaultCurrent={ 1 }
                    total={ totals } 
                    onChange={ onChanges }
                />
                {/* <span
                    className="certainJump"
                    onClick={ () => onChanges(2) }
                >
                    确认
                </span> */}
            </div>
        </div>
    )
}

export default IndexFooter;
