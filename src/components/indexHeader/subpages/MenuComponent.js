import React from "react";
import { Menu } from "antd";

const MenuComponent = () => (
    <Menu
        className="header-menu"
        theme="light"
        mode="horizontal"
        defaultSelectedKeys={["1"]}
        style={{
            lineHeight: '69px'
        }}
    >
        <Menu.Item key="1">首页</Menu.Item>
        <Menu.Item key="2">候选人</Menu.Item>
        <Menu.Item key="3">推荐记录</Menu.Item>
    </Menu>
);

export default MenuComponent;