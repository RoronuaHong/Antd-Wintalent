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

    addSetItem = (defaultKey, key, itemCollection) => {
        let oldItem = this.state.selItem,
            boolItem = true,
            showItem = this.props.searchArray[defaultKey];
            
        boolItem = oldItem.some(item => item.name === itemCollection.name);
        
        itemCollection["field"] = showItem;
        
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

    deleteSingleItem = (item, index) => {
        this.setState({
            selItem: [
                ...this.state.selItem.slice(0, index),
                ...this.state.selItem.slice(index + 1)
            ]
        });

        //删除相应的搜索条件
        this.props.delSearchData(item);
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

        const SearchSelectComponent = (
            searchArr.map((item, index) => (
                <React.Fragment key={ index }>
                    {  
                        //TODO: 修改Object.keys(item) == 11
                        Object.keys(item) == 10 || Object.keys(item) == 11 &&
                            <SearchSelect
                                defaultKey={Object.keys(item)}
                                addSearchData={this.props.addSearchData}
                                postListArr={this.props.postListArr}
                                addSetItem={this.addSetItem}
                            />
                        }
                    </React.Fragment>
                ))
        )

        return (
            <div className="index-search-box clearfix">
                <div className="pulldown-box clearfix">
                    {
                        searchArr.map((item, index) => {
                            return(
                                <React.Fragment key={ index }>
                                    {
                                        //TODO: 修改Object.keys(item) == 11
                                        Object.keys(item) == 10 || Object.keys(item) == 9 ?
                                            ""
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
                </div>
                { SearchSelectComponent }
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
                            this.props.states.orgCode,
                            this.props.states.rowSize,
                            this.props.states.currentPage
                        )
                    }
                >
                    搜&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;索
                </button>
                
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
