import React, { useState, useEffect } from 'react'

import { AskListWrap } from './askList.js'

import { httpGet } from 'utils/http.js'
import {withRouter} from 'react-router-dom'

function AskList (props){
    const [dataList, setDataList] = useState([])
    const [url] = useState(props.url)
    const [page, setPage] = useState(1)
    const [page_length] = useState(20)
    const [lock,setLock]=useState(true)
    const [prev,setPrev]=useState('')
    
    useEffect( () => {
        (async function(){
            if(lock){
                setLock(false)
                let result =await getData()
                if(result!=='中断'){
                    setDataList(result.data.data)
                    if(props.type==='select'){
                        window.addEventListener('scroll',scroll)
                    }
                }
            }
            if(props.keyword!==prev&&props.type!=='select'){
                setPrev(props.keyword)
                let result =await getData()
                if(result!=='中断'){
                    setDataList(result.data.data)
                }
            }
            
        })()
    })

    useEffect(()=>{
        return ()=>{
            React.cancleHttp.forEach(value=>{
                value('中断')
            })
        }
    },[])

    const getData=async ()=>{
        let params={}
            if(props.type==='select'){
                params={
                    page,
                    page_length,
                }
            }else{
                params={
                    place_id:props.place_id,
                    type:1,
                    keyword:props.keyword,
                    page
                }
            }
            let result = await httpGet({
                url,
                params
            })
            return result
    }

    const getMore = () => {
        return async () => {
            setPage(page => page + 1)
            let result =await getData()
            setDataList(data=>[...data,...result.data.data])
        }
    }

    const scroll=()=>{
        let ele=props.ele.current
        if(ele){
            let scroll=document.documentElement.scrollTop;
            let scrollTop=ele.offsetTop
            if(scroll>scrollTop){
                ele.className="scrollActive"
            }else{
                ele.className=""
            }
        }
        
    }

    return (
        <AskListWrap>
            {
                props.type==='select'?(
                    dataList.map((value,index) => {
                        return (
                            <div key={value.question_url+index}>
                                <div className="space"></div>
                                <div className="item">
                                    <h2>{value.question_title}</h2>
                                    {
                                        value.answer_image  ? <div style={{ height: '113px', width: '100%', background: 'url(' + value.answer_image + ')', backgroundSize: 'cover', backgroundPosition: 'center center' }} /> : ''
                                    }
                                    <p>{value.answer_content?value.answer_content:value.question_content}</p>
                                    <div>
                                        <span>{value.answer_username?value.answer_username:value.question_username+' | '+value.question_date}</span>
                                        <div>
                                            <i className="iconfont icon-kan"></i>
                                            <span>{value.question_views}</span>
                                            <i className="iconfont icon-good"></i>
                                            <span>{value.answer_usenum?value.answer_usenum:value.question_renum}</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )
                    })
                ):(
                    dataList.map((value,index) => {
                        return (
                            <div key={value.url+value.uid+index}>
                                <div className="space"></div>
                                <div className="item">
                                    <h2>{value.title}</h2>
                                    <p>{value.content}</p>
                                    <div>
                                        <span>{value.username}</span>
                                        <div>
                                            <i className="iconfont icon-ios-shijian"></i>
                                            <span>{value.addtime}</span>
                                            <i className="iconfont icon-rili"></i>
                                            <span>{value.renum}</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )
                    })
                )
            }
            {
                dataList.length !== 0 ?
                    <div
                        className="load"
                        onClick={getMore()}
                    >点击加载更多...</div> : ''
            }
        </AskListWrap>
    )
}

export default withRouter(AskList)