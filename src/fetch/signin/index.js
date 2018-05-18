import { get } from "../get";
import { post } from "../post";

/* 首页登陆接口 */
export const getLogin = data => {
    const result = post("/wt/runner/hunter/index/login", data);

    return result;
}