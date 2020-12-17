import Vue from 'vue'
import QS from 'qs'

export default {
    banner: p => get('/banner')
}

function get (url, params) {
    return new Promise((resolve, reject) => {
        Vue.axios.get(url, {
            params: params
        }).then(res => {
            resolve(res.data)
        }).catch(err => {
            reject(err)
        })
    })
}
function post (url, params = {}) {
    return new Promise((resolve, reject) => {
        Vue.axios.post(url, QS.stringify(params))
        .then(res => {
            resolve(res.data)
        })
        .catch((err) => {
            reject(err)
        })
    })
}