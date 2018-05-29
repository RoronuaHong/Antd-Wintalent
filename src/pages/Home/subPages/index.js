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
        rowSize: 10,
        totalPage: "",
        totalData: "",
        currentPage: 1,
        isLoading: true
    }

    //打开其他页面
    openLink = (url, data) => {
        const path = {
            pathname: url + "/" + data
        }
        this.props.history.push(path);
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

    /* 搜索栏删除数据 */
    delSearchData = item => {
        const showItem = item.field;
        let currentItem = this.state[showItem];
        
        //过滤
        currentItem = currentItem.filter(t => t !== item.code);

        this.setState({
            [showItem]: currentItem
        });
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
        orgCode = "",
        rowSize = 10,
        currentPage = 1
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
            "positionCondition.orgCode": orgCode,
            "positionCondition.rowSize": rowSize,
            "positionCondition.currentPage": currentPage
        }, data => {
            this.setState({
                positionListArr: data.data.rowList,
                totalPage: data.data.pageCount,
                totalData: data.data.rowCount,
                rowSize: data.data.rowSize,
                isLoading: false
            });
        });
    }

    componentDidMount() {
        /* 职位搜索组件接口 */
        const searchArrs = ["", "工作地点", "机构", "职位类型", "工作类型", "", "子公司", "", "职位发布时间", "薪资范围", "关键字搜索", "职位名称"];
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
            "salaryType", 
            "keyWord", 
            "positionName"
        ];

        const searchResult = getSearchComponent({
            "searchCondition.code": "temp300search"
        }, data => {
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
            }, data => {
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
            this.state.orgCode,
            this.state.rowSize,
            this.state.currentPage
        );
    }

    render() {
        return (
            <div className="hunter-index-box">
                <IndexSearch 
                    addSearchData={ this.addSearchData }
                    delSearchData={ this.delSearchData }
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
                    openLink={ this.openLink }
                    states={ this.state }
                />
                <IndexFooter 
                    positionListArr={ this.state.positionListArr }
                    positionResultAjax={ this.positionResultAjax }
                    isLoading={ this.state.isLoading }
                    states={ this.state }
                />
            </div>
        );
    }
}

export default Index;
