import "whatwg-fetch";
import "es6-promise";

const obj2params = (obj) => {
    let result = "",
        item,
        resultObj;

    for(item in obj) {
        if(Array.isArray(obj[item]) || typeof obj[item] == "object") {
            resultObj = obj[item].toString();
        } else {
            resultObj = encodeURIComponent(obj[item]);
        }

        result += "&" + item + "=" + resultObj;
    }
    
    if(result) {
        result = result.slice(1);
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