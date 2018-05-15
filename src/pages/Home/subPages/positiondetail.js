import React, { Component } from "react";
import PositionContentCp from "../../../components/positionContentCp";
import PositionDetail from "../../../components/positionDetail";
import {
    getList
} from "../../../fetch/home/positiondetail";

class Positiondetail extends Component {
    state = {
        positionListArr: []
    }

    componentDidMount() {
        //获取简历详情数据
        const posId = this.props.match.params.id;
        
        const listResult = getList({
            "positionCondition.postId": posId
        });

        listResult
            .then(res => res.json())
            .then(data => {
                this.setState({
                    positionListArr: data.data
                })
            });
    }

    render() {
        return (
            <div className="position-detail-wrap">
                <PositionContentCp 
                    positionListArr={ this.state.positionListArr }
                />
                <PositionDetail 
                    positionListArr={ this.state.positionListArr }
                />
            </div>
        )
    }
}

export default Positiondetail;
