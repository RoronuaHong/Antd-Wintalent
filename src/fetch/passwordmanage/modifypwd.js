import { get } from "../get";
import { post } from "../post";
import { verifyIsLogin } from "../verifyislogin";

/* 验证老密码接口 */
export const verifyOldPwd = (data, fn, error) => {
    verifyIsLogin(post, "/wt/runner/hunter/auth/user/validPass", data, fn, error);
}

/* 修改新密码接口 */
export const changeNewPwd = (data, fn, error) => {
    verifyIsLogin(post, "/wt/runner/hunter/auth/user/changePass", data, fn, error);
}