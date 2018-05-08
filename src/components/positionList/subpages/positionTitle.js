import React, { Component } from "react";
import { Tabs } from 'antd';

const { TabPane } = Tabs;

class positionTitle extends Component {
    render() {
        const children = this.props.children;

        return (
            <div className="position-title-box">
                <Tabs 
                    className="tabs-box"
                >
                    {
                        children.map((item, index) => (
                            <TabPane tab={ item.props.name } key={ index }>
                                { item }
                            </TabPane>
                        ))
                    }
                </Tabs>
                <div className="pagenum-show-box">
                    共<span>50</span>页，每页<span>100</span>条数据
                </div>
            </div>
        );
    }
}

export default positionTitle;
