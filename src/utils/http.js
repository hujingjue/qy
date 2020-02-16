import axios from 'axios'
import qs from 'qs'
import React from 'react'

const CancelToken = axios.CancelToken;
React.cancleHttp=[];

export const httpPost=({url,method='post',data={}})=>{
    return axios({
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8' 
          },
        url,
        transformRequest: [function(data) {      //在请求之前对data传参进行格式转换
            data = qs.stringify(data)
            return data
          }],
        method,
        data
    })
}

export const httpGet=({url,method='get',params={}})=>{
    return axios({
        url,
        method,
        params,
        cancelToken:new CancelToken(c=>{
            React.cancleHttp.push(c)
        })
    }).then(res=>{
        return res
    },res=>{
        return res.message
    })
}