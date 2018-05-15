import { post } from "../post";

export const getList = data => {
    const result = post("/wt/runner/hunter/auth/position/detail", data);

    return result;
}
