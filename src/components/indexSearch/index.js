import React, { Component } from "react";
import SelectComponent from "./subpages/selectComponent";
import SearchSelect from "./subpages/SearchSelect";
import ScreeningEntries from "./subpages/ScreeningEntries";

import "./styles";
import deleteIcon from "../../images/icons/delete_icon.png";

class IndexSearch extends Component {
    state = {
        selItem: [
            {
                name: "上海市"
            },
            {
                name: "人力资源管理人员"
            },
            {
                name: "高级市场专员"
            },
            {
                name: "10k～15k"
            },
            {
                name: "15k～20k"
            },
            {
                name: "20k～25k"
            }
        ]
    }

    handleChange = value => {
        console.log(`selected ${value}`);
    }

    handleBlur = () => {
        console.log('blur');
    }

    handleFocus = () => {
        console.log('focus');
    }

    deleteSingleItem = index => {
        this.setState({
            selItem: [
                ...this.state.selItem.slice(0, index),
                ...this.state.selItem.slice(index + 1)
            ]
        });
    }

    deleteAllItem = () => {
        this.setState({
            selItem: []
        });
    }

    render() {
        const { searchArr, allArr } = this.props;

        return (
            <div className="index-search-box clearfix">
                <div className="clearfix">
                    {
                        searchArr.map((item, index) => {
                            this.props.postListResult(index, allArr);
                            
                            return(
                                <React.Fragment key={index}>
                                    {
                                        Object.keys(item) == 9 || Object.keys(item) == 10 ?
                                            <SearchSelect
                                                handleChange={ this.handleChange }
                                                handleBlur={ this.handleBlur }
                                                handleFocus={ this.handleFocus }
                                            />
                                            :
                                            <SelectComponent
                                                defaultValue={ Object.values(item) }
                                            />
                                    }
                                </React.Fragment>
                            )
                        })
                    }
                    <button
                        className="search-btn"
                        onClick={ () => console.log(1) }
                    >
                        搜&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;索
                    </button>
                </div>
                
                <ScreeningEntries 
                    deleteIcon={ deleteIcon }
                    selItem={ this.state.selItem }
                    deleteSingleItem={ this.deleteSingleItem }
                    deleteAllItem={ this.deleteAllItem }
                />
            </div>
        )
    }
}

export default IndexSearch;
