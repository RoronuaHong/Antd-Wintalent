import React from "react";
import { Pagination } from 'antd';

import "./styles";

const IndexFooter = () => {
    const onChanges = (pageNumber) => {
        console.log('Page: ', pageNumber);
    }

    return(
        <div className="index-footer-box">
            <div className="inner-box">

                <Pagination 
                    showQuickJumper
                    hideOnSinglePage={ true }
                    total={ 500 } 
                    onChange={ onChanges }
                />
            </div>
        </div>
    )
}

export default IndexFooter;
