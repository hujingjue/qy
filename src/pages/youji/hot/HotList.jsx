import React from 'react'

import {HotListWrap} from './hotList.js'

export default (props)=>{
    return (
        <HotListWrap>
            <ul>
                {
                    props.list.map((value)=>{
                        return (
                            <li key={value.id}>{value.content}</li>
                        )
                    })
                }
            </ul>
        </HotListWrap>
    )
}