import React, { Component } from "react";

class SearchSelect extends Component {
    //设置关键字
    handles = e => {
        this.props.addSearchData("keyWord", e.target.value, true);
    }

    render() {
        return(
            <input
                ref="myInput"
                className="searchSelect"
                placeholder="输入职位名称及关键字"
                onChange={ this.handles }
            />
        );
    }
}

export default SearchSelect;
