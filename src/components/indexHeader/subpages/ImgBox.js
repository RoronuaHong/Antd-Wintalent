import React from "react";
import { Link } from "react-router-dom";

const ImgBox = ({ headerLogo }) => (
    <div className="img-box">
        <Link to="/home" replace>
            <img className="headImg" src={ headerLogo } alt="暂无图片" />
        </Link>
    </div>
);

export default ImgBox;
