import { get } from "../get";
import { post } from "../post";

/* 首页登陆接口 */
export const getLogin = data => {
    const result = post("/wt/runner/hunter/index/login", data);

    return result;
}

/* 退出登录接口 */
export const getLogout = () => {
    const result = get("/wt/runner/hunter/auth/index/logout");

    return result;
}

/* 职位搜索组件接口 */
export const getSearchComponent = data => {
    const result = post("/wt/runner/hunter/auth/position/searchShow", data);

    return result;
}

/* 职位搜索组件显示数据接口 */
export const getPostList = data => {
    const result = post("/wt/runner/hunter/auth/position/searchData", data);

    return result;
}

/* 职位列表接口 */
export const getPositionList = data => {
    const result = post("/wt/runner/hunter/auth/position/list", data);

    return result;
}

/* 获取用户名信息 */
export const getName = data => {
    const result = post("/wt/runner/hunter/auth/user/getName", data);

    return result;
}