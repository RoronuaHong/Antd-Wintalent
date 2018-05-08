import { post } from "../post";

/* 首页登陆判断 */
export const getLogin = (data) => {
    const result = post("/wt/runner/hunter/index/login", data);

    return result;
}

/* 职位搜索组件接口 */
export const getSearchComponent = (data) => {
    const result = post("/wt/runner/hunter/auth/position/searchShow", data);

    return result;
}

/* 职位搜索组件显示数据接口 */
export const getPostList = (data) => {
    const result = post("/wt/runner/hunter/auth/position/searchData", data);

    return result;
}
