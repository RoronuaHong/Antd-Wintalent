import React, { Component } from "react";
import SelectComponent from "./subpages/selectComponent";
import SearchSelect from "./subpages/SearchSelect";
import ScreeningEntries from "./subpages/ScreeningEntries";

import "./styles";
import deleteIcon from "../../images/icons/delete_icon.png";

class IndexSearch extends Component {
    state = {
        selItem: []
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

    addSetItem = (defaultKey, key, itemCollection) => {
        let oldItem = this.state.selItem,
            boolItem = true,
            showItem = this.props.searchArray[defaultKey];

        boolItem = oldItem.some(item => item.name === itemCollection.name);

        if(!boolItem) {
            this.props.addSearchData(showItem, itemCollection.code, false);

            if(defaultKey == 8) {
                if(!this.props.states.releaseTimeCode) {
                    this.setState({
                        selItem: [
                            ...oldItem,
                            itemCollection
                        ]
                    });
                }
            } else {
                this.setState({
                    selItem: [
                        ...oldItem,
                        itemCollection
                    ]
                });
            }
        }
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

        this.props.addSearchData("postionTabIndex", this.props.states.postionTabIndex, false);

        this.props.searchArray.map((item, index) => {
            item && this.props.addSearchData(item, "", true);
        });
    }

    render() {
        const { searchArr, allArr } = this.props;

        return (
            <div className="index-search-box clearfix">
                <div className="clearfix">
                    {
                        searchArr.map((item, index) => {            
                            return(
                                <React.Fragment key={ index }>
                                    {
                                        Object.keys(item) == 9 || Object.keys(item) == 10 ?
                                            <SearchSelect
                                                defaultKey={ Object.keys(item) }
                                                addSearchData={ this.props.addSearchData }
                                                postListArr={ this.props.postListArr }
                                                addSetItem={ this.addSetItem }
                                                handleBlur={ this.handleBlur }
                                                handleFocus={ this.handleFocus }
                                            />
                                            :
                                            <SelectComponent
                                                states={ this.props.states }
                                                defaultKey={ Object.keys(item) }
                                                defaultValue={ Object.values(item) }
                                                postListArr={ this.props.postListArr }
                                                addSetItem={ this.addSetItem }
                                            />
                                    }
                                </React.Fragment>
                            )
                        })
                    }
                    <button
                        className="search-btn"
                        onClick={() => 
                            this.props.positionResultAjax(
                                this.props.states.postionTabIndex,
                                this.props.states.keyWord,
                                this.props.states.positionName,
                                this.props.states.workPlace,
                                this.props.states.positionType,
                                this.props.states.workType,
                                this.props.states.releaseTimeCode,
                                this.props.states.salaryType,
                                this.props.states.orgCode
                            )
                        }
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
