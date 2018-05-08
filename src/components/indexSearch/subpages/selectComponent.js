import React from "react";
import { Select, Menu, Dropdown, Icon } from "antd";

const { Option } = Select;

const SelectComponent = ({ defaultValue }) => {
    const menu = (
        <Menu>
            <Menu.Item 
                key="0"
            >
                北京
            </Menu.Item>
            <Menu.Item key="1">
                上海
                </Menu.Item>
            <Menu.Item key="2">
                天津
                </Menu.Item>
            <Menu.Item key="3">
                北京
                </Menu.Item>
            <Menu.Item key="4">
                上海
                </Menu.Item>
            <Menu.Item key="5">
                天津
                </Menu.Item>
            <Menu.Item key="6">
                北京
                </Menu.Item>
            <Menu.Item key="7">
                上海
                </Menu.Item>
            <Menu.Item key="8">
                天津
                </Menu.Item>
            <Menu.Item key="9">
                北京
                </Menu.Item>
            <Menu.Item key="10">
                上海
                </Menu.Item>
            <Menu.Item key="11">
                天津
            </Menu.Item>
            <Menu.Item key="01">
                北京
                </Menu.Item>
            <Menu.Item key="211">
                上海
                </Menu.Item>
            <Menu.Item key="21">
                天津
                </Menu.Item>
            <Menu.Item key="31">
                北京
                </Menu.Item>
            <Menu.Item key="41">
                上海
                </Menu.Item>
            <Menu.Item key="51">
                天津
                </Menu.Item>
            <Menu.Item key="61">
                北京
                </Menu.Item>
            <Menu.Item key="71">
                上海
                </Menu.Item>
            <Menu.Item key="81">
                天津
                </Menu.Item>
            <Menu.Item key="91">
                北京
                </Menu.Item>
            <Menu.Item key="101">
                上海
                </Menu.Item>
            <Menu.Item key="111">
                天津
            </Menu.Item>
        </Menu>
    );

    return (
        <Dropdown
            overlay={ menu } 
            trigger={['click']}
        >
            <span className="select-box">
                { defaultValue }
            </span>
        </Dropdown>
    );
}

export default SelectComponent;
