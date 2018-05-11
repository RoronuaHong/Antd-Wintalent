import React, { Component } from "react";
import IndexSearch from "../../../components/indexSearch";
import PositionList from "../../../components/positionList";
import IndexFooter from "../../../components/indexFooter";
import {
    getPostList,
    getPositionList,
    getSearchComponent
} from "../../../fetch/home";

class Index extends Component {
    state = {
        searchArray: [],
        positionListArr: [],
        searchArr: [],
        postListArr: [],
        postionTabIndex: 0,
        keyWord: "",
        positionName: [],
        workPlace: [],
        positionType: [],
        workType: [],
        releaseTimeCode: "",
        salaryType: [],
        orgCode: [],
        currentPage: 1,
        isLoading: true
    }

    //修改判断状态
    judgeLoading = (booleans) => {
        this.setState({
            isLoading: booleans
        });
    }

    /* 搜索栏添加数据 */
    addSearchData = (showItem, itemCollection, booleans) => {
        if(!booleans) {
            this.setState({
                [showItem]: [
                    ...this.state[showItem],
                    itemCollection
                ]
            });
        } else {
            this.setState({
                [showItem]: itemCollection
            });
        }
    }

    /* 职位列表接口 */
    positionResultAjax = (
        postionTabIndex = 0,
        keyWord = "",
        positionName = "",
        workPlace = "",
        positionType = "",
        workType = "",
        releaseTimeCode = "",
        salaryType = "",
        orgCode = ""
    ) => {
        this.judgeLoading(true);
        const positionResult = getPositionList({
            "positionCondition.openStatus": postionTabIndex,
            "positionCondition.keyWord": keyWord,
            "positionCondition.positionName": positionName,
            "positionCondition.workPlace": workPlace,
            "positionCondition.positionType": positionType,
            "positionCondition.workType": workType,
            "positionCondition.releaseTimeCode": releaseTimeCode,
            "positionCondition.salaryType": salaryType,
            "positionCondition.orgCode": orgCode
        });

        positionResult
            .then(response => response.json())
            .then(data => {
                this.setState({
                    positionListArr: data.data,
                    isLoading: false
                });
            });
    }

    componentDidMount() {
        /* 职位搜索组件接口 */
        const searchArrs = ["", "工作地点", "机构", "职位类型", "工作类型", "", "子公司", "", "职位发布时间", "关键字搜索", "职位名称", "薪资范围"];
        const searchTypeArrs = [
            "", 
            "workPlace", 
            "orgCode", 
            "positionType", 
            "workType", 
            "", 
            "orgCode", 
            "", 
            "releaseTimeCode", 
            "keyWord", 
            "positionName", 
            "salaryType"
        ];

        const searchResult = getSearchComponent({
            "searchCondition.code": "temp300search"
        });

        searchResult
            .then(response => response.json())
            .then(data => {
                const searchArr = [];

                //处理成JSON数据
                data.data.showSearch.map(item => {
                    searchArr.push({
                        [item]: searchArrs[item]
                    });
                });
                
                /* 职位搜索组件显示数据接口 */
                const postListResults = getPostList({
                    "searchCondition.id": data.data.searchId,
                    "searchCondition.showSearch": JSON.parse(JSON.stringify(data.data.showSearch))
                });

                postListResults
                    .then(response => response.json())
                    .then(data => {
                        this.setState({
                            postListArr: data.data,
                            searchArray: searchTypeArrs,
                            searchArr
                        });
                    });
            });
        
        //职位列表接口
        this.positionResultAjax(
            this.state.postionTabIndex,
            this.state.keyWord,
            this.state.positionName,
            this.state.workPlace,
            this.state.positionType,
            this.state.workType,
            this.state.releaseTimeCode,
            this.state.salaryType,
            this.state.orgCode
        );
    }

    render() {
        return (
            <div className="hunter-index-box">
                <IndexSearch 
                    addSearchData={ this.addSearchData }
                    searchArray={ this.state.searchArray }
                    searchArr={ this.state.searchArr }
                    postListArr={ this.state.postListArr }
                    positionResultAjax={ this.positionResultAjax }
                    states={ this.state }
                />
                <PositionList 
                    addSearchData={ this.addSearchData }
                    judgeLoading={ this.judgeLoading } 
                    positionListArr={ this.state.positionListArr }
                    isLoading={ this.state.isLoading }
                    positionResultAjax={ this.positionResultAjax }
                    states={ this.state }
                />
                <IndexFooter />
            </div>
        );
    }
}

export default Index;
