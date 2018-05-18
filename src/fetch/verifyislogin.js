import { message } from "antd";

/* 封装所有需要登录的接口 */
let isMessage = true;

const onClose = () => {
    window.location.href = "/signin.html" + "?redirect=" + encodeURIComponent(window.location.href);
}

export const verifyIsLogin = (method, url, data, fn, error) => {
    const result = method(url, data);

    result
        .then(res => res.json())
        .then(data => {
            if (data.state == 403) {
                if(isMessage) {
                    message.error(data.data, 1, onClose);
                    isMessage = false;
                }
            }
            
            fn && fn(data);
        }).catch(err => {
            error && error(err);
        });
}