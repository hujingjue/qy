import React from 'react'

import {SortListWrap} from './sortList.js'
import {withRouter} from 'react-router-dom'

function SortList (props){
    const goDetail=(id,name)=>{
        return ()=>{
            props.history.push(`/youji/detail/${id}/${name}`)
        }
    }

    return (
        <SortListWrap>
            <ul>
                {
                    props.group?props.group.map(value=>{
                        return (
                            <li key={value.id+value.img} onClick={goDetail(value.id,value.content)}>
                                <img src={value.img} alt=""/>
                                <span>{value.content}</span>
                            </li>
                        )
                    }):''
                }
            </ul>
        </SortListWrap>
    )
}

export default withRouter(SortList)