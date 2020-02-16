import React from 'react'

import {HeaderWrap} from './header.js'

export default (props)=>{
    return (
        <HeaderWrap>
            {props.title}
        </HeaderWrap>
    )
}