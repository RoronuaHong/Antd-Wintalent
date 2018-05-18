/* 保留固定字数字符串 */
export const getSubStringSum = (str = "", num = 1) => {
    let newStr;
    
    if(typeof str !== "string") {
        str = str.toString().trim();
    }

    if (str.trim().length > num) {
        newStr = str.trim().substring(0, num) + "...";
    } else {
        newStr = str.trim().substring(0, num);
    }

    return newStr;
}

/* 空格转义 */
export const setNewHtml = (str) => {
    str = str ? str.replace(/\n/g, "<br>") : "暂无";
    return { __html: "<p>" + str + "</p>" };
}

/* 设置cookie */
export const setCookie = (name, value, iDay) => {
    const oDate = new Date();

    oDate.setDate(oDate.getDate() + iDay);
    document.cookie = name + '=' + value + ';expires=' + oDate;
}

/* 获取cookie */
export const getCookie = name => {
    const arr = document.cookie.split('; ');
    
    for(let i = 0; i < arr.length; i++) {
        const arr2 = arr[i].split('=');

        if (arr2[0] == name) {
            return arr2[1];
        }
    }

    return '';
}

/* 删除Cookie */
export const deleteCookie = name => {
    setCookie(name, '', -1);
}

/* 获取url参数 */
export const getQueryString = (str) => {
    //取得查询字符串并去掉开头的问号
    var qs = (location.search.length > 0 ? location.search.substring(1) : ""),
        args = {},
        items = qs.length ? qs.split("&") : [],
        item = null,
        name = null,
        value = null,
        i = 0,
        len = items.length;

    for (i = 0; i < len; i++) {
        item = items[i].split("=");
        name = decodeURIComponent(item[0]);
        value = decodeURIComponent((item[1]));

        if (name.length) {
            args[name] = value;
        }
    }
    
    return args;
}