import React,{useState,useEffect} from 'react'
import {DetailListWrap} from './detailList.js'

import {httpGet} from 'utils/http.js'
import {withRouter} from 'react-router-dom'

function DetailList (props){
    const [data,setData]=useState([])
    const [page,setPage]=useState(1)
    useEffect(()=>{
        (async function(){
            let result = await getData(`/bbs/forum/${props.match.params.id}/threads.json`,{
                page,
                limit:10
            })
            setData([...data,...result.data.data.list])
        })()

    },[page])

    const getData=async (url,{limit,page})=>{
        let result =await httpGet({
            url,
            params:{
                limit,
                page
            }
        })
        return result
    }

    const getMore=()=>{
        setPage(page+1)
    }

    return (
        <DetailListWrap>
            <ul>
                {
                    data.map((value,index)=>{
                        return (
                            <li key={value.id+index}>
                                <img src={value.cover?value.cover:'https://fes.qyerstatic.com/Fk4pE-0DaNWxalWlYNRMTahuXh9x'} alt=""/>
                                <p>{value.subject}</p>
                                <div>
                                    <img src={value.user.avatar} alt=""/>
                                    <div>
                                        <img src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjUiIGhlaWdodD0iMjUiIHZpZXdCb3g9IjAgMCAyNSAyNSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48dGl0bGU+aWNfY29tbWVudF9ub3JtYWw8L3RpdGxlPjxnIGZpbGw9Im5vbmUiIGZpbGwtcnVsZT0iZXZlbm9kZCI+PHBhdGggZmlsbD0iI0ZGRiIgZD0iTS02NjMtMTA2N0g4N3YyMzM1aC03NTB6Ii8+PHBhdGggZD0iTTguMTM1IDEzLjMwOGMuOTg1IDAgMS43ODQtLjc5OSAxLjc4NC0xLjc4NHMtMy41NjgtLjk4NS0zLjU2OCAwIC43OTkgMS43ODQgMS43ODQgMS43ODR6IiBmaWxsPSIjQkJCIi8+PHBhdGggc3Ryb2tlPSIjQkJCIiBzdHJva2Utd2lkdGg9IjEuNSIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIiBkPSJNMTcuNzM2IDEwLjE1bC0zLjA2IDEuNzcyIDMuMTkgMS42OTYiLz48cGF0aCBkPSJNOS43ODkgMjEuNDE3Yy0uODk2LjU4OC0yLjI5IDEuMzUtNC4xODIgMi4yODVhLjI1LjI1IDAgMCAxLS4zNTEtLjI5MmwuOTI5LTMuMzAyYy0yLjk2OC0xLjY3LTQuOTk3LTQuNTYxLTUuMTczLTcuOTQyLS4yODgtNS41NSA0LjUzLTEwLjMxOCAxMC43Ni0xMC42NDggNi4yMy0uMzMgMTEuNTE1IDMuOTAzIDExLjgwMyA5LjQ1My4yODggNS41NS00LjUzIDEwLjMxOC0xMC43NiAxMC42NDhhMTIuNjA4IDEyLjYwOCAwIDAgMS0zLjAyNi0uMjAyeiIgc3Ryb2tlPSIjQkJCIiBzdHJva2Utd2lkdGg9IjIiLz48L2c+PC9zdmc+" alt=""/>
                                        <span className="space">{(value.views/1000)>1?(value.views/1000).toFixed(1)+'k':value.views}</span>
                                        <img src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjUiIGhlaWdodD0iMjUiIHZpZXdCb3g9IjAgMCAyNSAyNSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48dGl0bGU+aWNfY29tbWVudF9ub3JtYWw8L3RpdGxlPjxnIGZpbGw9Im5vbmUiIGZpbGwtcnVsZT0iZXZlbm9kZCI+PHBhdGggZmlsbD0iI0ZGRiIgZD0iTS02NjMtMTA2N0g4N3YyMzM1aC03NTB6Ii8+PHBhdGggZD0iTTguMTM1IDEzLjMwOGMuOTg1IDAgMS43ODQtLjc5OSAxLjc4NC0xLjc4NHMtMy41NjgtLjk4NS0zLjU2OCAwIC43OTkgMS43ODQgMS43ODQgMS43ODR6IiBmaWxsPSIjQkJCIi8+PHBhdGggc3Ryb2tlPSIjQkJCIiBzdHJva2Utd2lkdGg9IjEuNSIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIiBkPSJNMTcuNzM2IDEwLjE1bC0zLjA2IDEuNzcyIDMuMTkgMS42OTYiLz48cGF0aCBkPSJNOS43ODkgMjEuNDE3Yy0uODk2LjU4OC0yLjI5IDEuMzUtNC4xODIgMi4yODVhLjI1LjI1IDAgMCAxLS4zNTEtLjI5MmwuOTI5LTMuMzAyYy0yLjk2OC0xLjY3LTQuOTk3LTQuNTYxLTUuMTczLTcuOTQyLS4yODgtNS41NSA0LjUzLTEwLjMxOCAxMC43Ni0xMC42NDggNi4yMy0uMzMgMTEuNTE1IDMuOTAzIDExLjgwMyA5LjQ1My4yODggNS41NS00LjUzIDEwLjMxOC0xMC43NiAxMC42NDhhMTIuNjA4IDEyLjYwOCAwIDAgMS0zLjAyNi0uMjAyeiIgc3Ryb2tlPSIjQkJCIiBzdHJva2Utd2lkdGg9IjIiLz48L2c+PC9zdmc+" alt=""/>
                                        <span>{value.replies}</span>
                                    </div>
                                </div>
                            </li>
                        )
                    })
                    
                }
                {
                    data.length>0?(<div className='more' onClick={getMore}>查看更多<i className="iconfont icon-down2"></i></div>):''
                }
            </ul>
        </DetailListWrap>
    )
}

export default withRouter(DetailList)