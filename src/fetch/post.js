import "whatwg-fetch";
import "es6-promise";

const obj2params = (obj) => {
    let result = "",
        item;

    for(item in obj) {
        result += "&" + item + "=" + encodeURIComponent(obj[item]);
    }

    if(result) {
        return result.slice(1);
    }

    return result;
}

export const post = (url, paramObj) => {
    const result = fetch(url, {
        method: "POST",
        credentials: "include",
        headers: {
            "Accept": "application/json, text/plain, */*",
            "Content-Type": "application/x-www-form-urlencoded"
        },
        body: obj2params(paramObj)
    });

    return result;
}