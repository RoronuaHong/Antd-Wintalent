import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Layout, Menu, Badge, Dropdown, Icon } from "antd";
import { getSubStringSum } from "../../utils/common";
import ImgBox from "./subpages/ImgBox";
import MenuComponent from "./subpages/MenuComponent";
import RightBox from "./subpages/RightBox";

const { Header } = Layout;

import "./styles";
import headerLogo from "../../images/imgs/header_logo.png";
import headerNotify from "../../images/icons/notify_icon.png";
import headerChangePwd from "../../images/icons/changepwd_icon.png";
import headerSignout from "../../images/icons/signout_icon.png";

const IndexHeader = ({ getNames }) => {   
    /* 下拉内容框 */
    const menu = (
        <Menu>
            <Menu.Item>
                <a target="_blank" rel="noopener noreferrer" href="http://www.alipay.com/">
                    <img className="munu-item-img" src={ headerChangePwd } alt="暂无icon"/>
                    <span className="munu-item">修改密码</span>
                </a>
            </Menu.Item>
            <Menu.Item>
                <a target="_blank" rel="noopener noreferrer" href="http://www.taobao.com/">
                    <img className="munu-item-img" src={ headerSignout } alt="暂无icon"/>
                    <span className="munu-item">退出</span>
                </a>
            </Menu.Item>
        </Menu>
    )

    /* Header框架 */
    const HeaderComponent = (
        <Header className="header">
            <ImgBox 
                headerLogo={ headerLogo }
            />
            <MenuComponent />
            <RightBox 
                getNames={ getNames }
                headerNotify={ headerNotify }
                menu={ menu }
                getSubStringSum={ getSubStringSum }
            />
        </Header>
    );

    return (
        <div className="index-header-box">
            { HeaderComponent }
        </div>
    )
}

export default IndexHeader;
