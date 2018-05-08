import React, { Component } from "react";
import IndexSearch from "../../../components/indexSearch";
import PositionList from "../../../components/positionList";
import IndexFooter from "../../../components/indexFooter";
import {
    getPostList,
    getSearchComponent
} from "../../../fetch/home";

class Index extends Component {
    state = {
        searchArr: [],
        postListArr: []
    }

    componentDidMount() {
        /* 职位搜索组件接口 */
        const searchArrs = ["", "工作地点", "机构", "职位类型", "工作类型", "", "子公司", "", "职位发布时间", "关键字搜索", "职位名称", "薪资范围"];

        // const searchResult = getSearchComponent({
        //     "searchCondition.code": "temp300search"
        // });

        // searchResult
        //     .then(response => response.json())
        //     .then(data => {
        //         const searchArr = [];

        //         //处理成JSON数据
        //         data.data.showSearch.map(item => {
        //             searchArr.push({
        //                 [item]: searchArrs[item]
        //             });
        //         });

        //         this.setState({
        //             searchArr
        //         });

        //         /* 职位搜索组件显示数据接口 */
        //         const postListResults = getPostList({
        //             "searchCondition.id": searchId,
        //             "searchCondition.showSearch": data.data.showSearch
        //         });

        //         postListResults
        //             .then(response => response.json())
        //             .then(data => {
        //                 console.log(data);
        //             });
        //     });
    }

    render() {
        return (
            <div className="hunter-index-box">
                <IndexSearch 
                    searchArr={ this.state.searchArr }
                    postListResult={ this.postListResult }
                />
                <PositionList />
                <IndexFooter />
            </div>
        );
    }
}

export default Index;
