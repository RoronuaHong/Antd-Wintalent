import { get } from "../get";
import { post } from "../post";

//职位列表接口
export const getResumeList = data => {
    const result = post("/wt/runner/hunter/auth/resume/list", data);

    return result;
}
//修改推荐理由接口
export const editApplyLetter = data => {
    const result = post("/wt/runner/hunter/auth/applyLetter/edit", data);

    return result;
}
//职位详情接口
export const positionDetail = data => {
    const result = post("/wt/runner/hunter/auth/position/detail", data);

    return result;
}