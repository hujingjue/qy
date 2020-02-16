import React,{useState} from 'react'

import { NavWrap } from './nav.js'
import {withRouter} from 'react-router-dom'

function Nav (props){
    const [activeIndex,setActiveIndex]=useState('')

    const goDetail=(id,keyword,index)=>{
        return ()=>{
            if(props.type==='select'){
                props.history.push(`/question/select/detail/${id}/${index}`)
            }else{
                props.sendId(keyword)
                setActiveIndex(index)
            }
        }
    }
    return (
        <NavWrap>
            <ul>
                {
                    props.countries.map((value,index)=>{
                        return (
                            <li 
                            key={index} 
                            onClick={goDetail(value.id,value.country,index)}
                            className={index===activeIndex?'active':''}
                            >{value.country}</li>
                        )
                    })
                }
            </ul>
        </NavWrap>
    )
}

export default withRouter(Nav)