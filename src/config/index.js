function isPc() { 
    var userAgentInfo = navigator.userAgent; 
    var Agents = ["Android", "iPhone", 
                "SymbianOS", "Windows Phone", 
                "iPad", "iPod"]; 
    var flag = true; 
    for (var v = 0; v < Agents.length; v++) { 
        if (userAgentInfo.indexOf(Agents[v]) > 0) { 
            flag = false; 
            break; 
        } 
    } 
    return flag; 
}

module.exports = {
    title: '菜鸡音乐',
    mainColor: 'blue darken-1', // 主题色
    isPc: isPc(),
    baseURL: 'https://music-api.xcj.im/', // 接口地址
    devBaseURL: 'https://music-api.xcj.im/', // 本地调试接口地址
    timeout: 6000, // 接口超时时间
}