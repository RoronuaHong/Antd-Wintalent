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