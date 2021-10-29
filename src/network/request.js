import axios from 'axios'


 export function request(config){
    const instance = axios.create({
        baseURL:'http://123.207.32.32:8000',
        timeout:5000
    })
    //axios拦截器
        //请求拦截
		instance.interceptors.request.use(config => {
			console.log(config)
			// 1.比如config中的信息不符合服务器要求，需要改
			// 2.比如每次发送网络请求时都希望在界面中显示一些请求图标
			// 3.某些网络请求必须携带一些特殊信息，比如（token）
			return config
		},err => {
			console.log(err)
		})
        //响应拦截
        instance.interceptors.response.use(res => {
            //console.log(res)
            return res.data
        },err => {
            console.log(err)
        })
    //发送真正的网络请求
    return instance(config)
 }
 export function request_dhgoods(config){
    const instance = axios.create({
        //唯品会联盟商品列表信息接口
        baseURL:'http://api.tbk.dingdanxia.com',
        timeout:5000
    })
    //响应拦截
    // instance.interceptors.response.use(res => {
    //     //console.log(res)
    //     return res.data
    // },err => {
    //     console.log(err)
    // })
    //发送真正的网络请求
    return instance(config)
 }