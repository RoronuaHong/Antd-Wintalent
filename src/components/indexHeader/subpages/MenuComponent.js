import React from "react";
import { Menu } from "antd";

const MenuComponent = ({ titleIndex = -1, openOuterLink }) => {
    return(
        <Menu
            className="header-menu"
            theme="light"
            mode="horizontal"
            defaultSelectedKeys={[...titleIndex]}
            style={{
                lineHeight: '69px'
            }}
        >
            <Menu.Item 
                key="1"
                onClick={ () => openOuterLink("/home.html") }
            >
                首页
            </Menu.Item>
            <Menu.Item 
                key="2"
                onClick={() => openOuterLink("/candidate.html") }
            >
                候选人
            </Menu.Item>
            <Menu.Item 
                key="3"
                onClick={ () => openOuterLink("/recrecord.html") }
            >
                推荐记录
            </Menu.Item>
        </Menu>
    )
}

export default MenuComponent;