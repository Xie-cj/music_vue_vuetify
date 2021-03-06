/** 
 * NeteaseCloudMusicApi版本: "3.47.4"
 * https://mo.own-cloud.cn/#/s/k3JzS1
 * */

module.exports = {
  title: '菜鸡音乐',
  baseURL: 'https://music-api.xcj.im/', // 接口地址
  devBaseURL: 'https://music-api-dev.xcj.im/', // 本地调试接口地址
  timeout: 10000, // 接口超时时间
  retry: 3, // 接口请求失败重新请求次数
  retryDelay: 3000, // 重新请求间隔时间
}